<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\AuditLogController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookingProviderController;
use App\Http\Controllers\CampusController;
use App\Http\Controllers\ConnectController;
use App\Http\Controllers\ContactMessageController;
use App\Http\Controllers\ConversationController;
use App\Http\Controllers\EscalationController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReferralController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SocialLinkController;
use App\Http\Controllers\StaffRegistrationController;
use App\Http\Controllers\SupportRequestController;
use App\Http\Controllers\TwoFactorAuthController;
use App\Http\Controllers\TrainingModuleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WellnessResourceController;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReportController;

/*
 * API boundaries:
 * - Public content endpoints expose only published, non-confidential records.
 * - Sanctum bearer tokens are issued for API clients; first-party Angular clients
 *   may instead use stateful cookie authentication from configured origins.
 * - Counselling content is encrypted at rest and only returned through authorized routes.
 */
Route::post('/register', [AuthController::class, 'register']);
Route::post('/guidance/register', [AuthController::class, 'guidanceRegister'])->name('guidance.register');
Route::post('/peer-counselor/register', [AuthController::class, 'peerCounselorRegister'])->name('peer-counselor.register');
Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:login');
Route::post('/verify-code', [AuthController::class, 'verifyCode']);
Route::post('/resend-verification-code', [AuthController::class, 'resendVerificationCode']);
Route::post('/two-factor/verify', [TwoFactorAuthController::class, 'verifyChallenge'])->middleware('throttle:two-factor');
Route::get('/campuses', [CampusController::class, 'index']);
Route::get('/campuses/{campus}', [CampusController::class, 'show']);
Route::get('/wellness-resources', [WellnessResourceController::class, 'index']);
Route::get('/wellness-resources/{wellnessResource}', [WellnessResourceController::class, 'show']);
Route::get('/events', [EventController::class, 'index']);
Route::get('/events/{event}', [EventController::class, 'show']);
Route::get('/training-modules', [TrainingModuleController::class, 'index']);
Route::get('/training-modules/{trainingModule}', [TrainingModuleController::class, 'show']);
Route::get('/social-links', [SocialLinkController::class, 'index']);
Route::get('/booking-providers', [BookingProviderController::class, 'index']);
Route::post('/contact', [ContactMessageController::class, 'store'])->middleware('throttle:contact');

Route::middleware(['auth:sanctum', 'active'])->group(function (): void {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);

    Route::prefix('two-factor')->group(function (): void {
        Route::get('/status', [TwoFactorAuthController::class, 'status']);
        Route::post('/enable', [TwoFactorAuthController::class, 'enable']);
        Route::post('/confirm', [TwoFactorAuthController::class, 'confirm']);
        Route::post('/disable', [TwoFactorAuthController::class, 'disable']);
        Route::post('/recovery-codes', [TwoFactorAuthController::class, 'regenerateRecoveryCodes']);
    });

    Route::prefix('connects')->group(function (): void {
        Route::post('/', [ConnectController::class, 'store']);
        Route::post('/{connect}/accept', [ConnectController::class, 'accept']);
        Route::post('/{connect}/reject', [ConnectController::class, 'reject']);
        Route::get('/incoming', [ConnectController::class, 'incoming']);
        Route::delete('/{connect}', [ConnectController::class, 'destroy']);
        Route::get('/status/{user}', [ConnectController::class, 'status']);
        Route::get('/{user}/followers', [ConnectController::class, 'followers']);
        Route::get('/{user}/following', [ConnectController::class, 'following']);
    });

    Route::get('/profile', [ProfileController::class, 'show']);
    Route::put('/profile', [ProfileController::class, 'update']);
    Route::patch('/profile', [ProfileController::class, 'update']);

    Route::get('/peer-counselors', [UserController::class, 'peerCounselors']);

    Route::apiResource('support-requests', SupportRequestController::class);
    Route::post('/support-requests/{supportRequest}/refer-to-guidance', [SupportRequestController::class, 'referToGuidance'])->name('support-requests.refer-to-guidance');
    Route::apiResource('conversations', ConversationController::class);
    Route::get('/conversations/{conversation}/messages', [MessageController::class, 'index']);
    Route::post('/conversations/{conversation}/messages', [MessageController::class, 'store']);
    Route::get('/conversations/{conversation}/messages/{message}', [MessageController::class, 'show']);
    Route::put('/conversations/{conversation}/messages/{message}', [MessageController::class, 'update']);
    Route::patch('/conversations/{conversation}/messages/{message}', [MessageController::class, 'update']);
    Route::delete('/conversations/{conversation}/messages/{message}', [MessageController::class, 'destroy']);
    Route::apiResource('appointments', AppointmentController::class);
    Route::get('/notifications', [NotificationController::class, 'index']);
    Route::get('/notifications/{notification}', [NotificationController::class, 'show']);
    Route::patch('/notifications/{notification}/read', [NotificationController::class, 'markRead']);
    Route::patch('/notifications/read-all', [NotificationController::class, 'markAllRead']);

    Route::prefix('reports')->group(function (): void {
        Route::get('/dashboard', [ReportController::class, 'dashboard']);
        Route::get('/support-requests', [ReportController::class, 'supportRequestBreakdown']);
        Route::get('/appointments', [ReportController::class, 'appointmentTrends']);
        Route::get('/campuses', [ReportController::class, 'campusBreakdown']);
        Route::get('/escalations', [ReportController::class, 'escalationReport']);
    });

    Route::middleware('role:peer_counselor,guidance_staff,hod,admin')->group(function (): void {
        Route::apiResource('referrals', ReferralController::class);
        Route::apiResource('escalations', EscalationController::class);
    });
});

Route::middleware(['auth:sanctum', 'role:admin'])->group(function (): void {
    Route::apiResource('roles', RoleController::class);
    Route::apiResource('users', UserController::class);
    Route::get('/staff-registrations', [StaffRegistrationController::class, 'index']);
    Route::post('/staff-registrations', [StaffRegistrationController::class, 'store']);
    Route::put('/staff-registrations/{staffRegistration}', [StaffRegistrationController::class, 'update']);
    Route::patch('/staff-registrations/{staffRegistration}', [StaffRegistrationController::class, 'update']);
    Route::post('/staff-registrations/{staffRegistration}/release', [StaffRegistrationController::class, 'release']);
    Route::delete('/staff-registrations/{staffRegistration}', [StaffRegistrationController::class, 'destroy']);
    Route::post('/campuses', [CampusController::class, 'store']);
    Route::put('/campuses/{campus}', [CampusController::class, 'update']);
    Route::patch('/campuses/{campus}', [CampusController::class, 'update']);
    Route::delete('/campuses/{campus}', [CampusController::class, 'destroy']);
    Route::apiResource('booking-providers', BookingProviderController::class)->except(['index']);
    Route::apiResource('wellness-resources', WellnessResourceController::class)->except(['index', 'show']);
    Route::apiResource('events', EventController::class)->except(['index', 'show']);
    Route::apiResource('training-modules', TrainingModuleController::class)->except(['index', 'show']);
    Route::apiResource('social-links', SocialLinkController::class)->except(['index']);
    Route::get('/audit-logs', [AuditLogController::class, 'index']);
    Route::get('/audit-logs/{auditLog}', [AuditLogController::class, 'show']);
});

RateLimiter::for('login', static function ($request): ?int {
    if (RateLimiter::tooManyAttempts($request->ip(), 10)) {
        return 15;
    }
    RateLimiter::hit($request->ip(), 60);

    return null;
});

// Tries against a live challenge are held to a tighter budget than the
// password step so a stolen challenge cannot be brute-forced.
RateLimiter::for('two-factor', static function ($request): ?int {
    if (RateLimiter::tooManyAttempts('two-factor:'.$request->ip(), 6)) {
        return 15;
    }
    RateLimiter::hit('two-factor:'.$request->ip(), 60);

    return null;
});
