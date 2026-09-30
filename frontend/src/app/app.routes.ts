import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { GuidanceLoginComponent } from './guidance/login/guidance-login.component';
import { GuidanceRegisterComponent } from './guidance/register/guidance-register.component';
import { PeerCounselorLoginComponent } from './peer-counselor/login/peer-counselor-login.component';
import { PeerCounselorRegisterComponent } from './peer-counselor/register/peer-counselor-register.component';
import { StudentLoginComponent } from './student/auth/student-login.component';
import { StudentRegisterComponent } from './student/auth/student-register.component';

function campusSlugRoutes(): Routes {
  const children: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./campus-home/campus-home.component').then((c) => c.CampusHomeComponent) },
    { path: 'contact', loadComponent: () => import('./campus-contact/campus-contact.component').then((c) => c.CampusContactComponent) },
    { path: 'login', loadComponent: () => import('./auth/login/login.component').then((c) => c.LoginComponent) },
    { path: 'register', loadComponent: () => import('./auth/register/register.component').then((c) => c.RegisterComponent) },
    { path: 'dashboard', loadComponent: () => import('./campus-dashboard/campus-dashboard.component').then((c) => c.CampusDashboardComponent) },
    { path: 'events', loadComponent: () => import('./campus-events/campus-events.component').then((c) => c.CampusEventsComponent) }
  ];
  return ['ruaraka-main', 'town', 'kitengela'].map((slug) => ({
    path: slug,
    loadComponent: () => import('./layouts/campus-layout/campus-layout.component').then((c) => c.CampusLayoutComponent),
    data: { campusSlug: slug },
    children
  }));
}

export const routes: Routes = [
  ...campusSlugRoutes(),
  {
    path: '',
    loadComponent: () => import('./layouts/public-layout/public-layout.component').then((c) => c.PublicLayoutComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'landing' },
      { path: 'landing', loadComponent: () => import('./landing/landing.component').then((c) => c.LandingComponent) },
      { path: 'campus-selection', loadComponent: () => import('./campus-selection/campus-selection.component').then((c) => c.CampusSelectionComponent) },
      { path: 'reports', loadComponent: () => import('./reports/reports.component').then((c) => c.ReportsComponent) },
      { path: 'login', loadComponent: () => import('./auth/login/login.component').then((c) => c.LoginComponent) },
      { path: 'register', loadComponent: () => import('./auth/register/register.component').then((c) => c.RegisterComponent) },
      { path: 'verify-code', loadComponent: () => import('./auth/verify/verify-code.component').then((c) => c.VerifyCodeComponent) },
      { path: 'guidance/login', loadComponent: () => import('./guidance/login/guidance-login.component').then((c) => c.GuidanceLoginComponent) },
      { path: 'guidance/register', loadComponent: () => import('./guidance/register/guidance-register.component').then((c) => c.GuidanceRegisterComponent) },
      { path: 'peer-counselor/login', loadComponent: () => import('./peer-counselor/login/peer-counselor-login.component').then((c) => c.PeerCounselorLoginComponent) },
      { path: 'peer-counselor/register', loadComponent: () => import('./peer-counselor/register/peer-counselor-register.component').then((c) => c.PeerCounselorRegisterComponent) },
      { path: 'student/login', loadComponent: () => import('./student/auth/student-login.component').then((c) => c.StudentLoginComponent) },
      { path: 'student/register', loadComponent: () => import('./student/auth/student-register.component').then((c) => c.StudentRegisterComponent) },
      { path: 'events', loadComponent: () => import('./events/events.component').then((c) => c.EventsComponent) },
      { path: 'contact', loadComponent: () => import('./contact/contact.component').then((c) => c.ContactComponent) },
      { path: 'campuses/:campusId', loadComponent: () => import('./campus-detail/campus-detail.component').then((c) => c.CampusDetailComponent) },
      { path: 'campuses/:campusId/dashboard', canActivate: [AuthGuard, RoleGuard], data: { roles: ['guidance_staff', 'hod', 'admin'] }, loadComponent: () => import('./campus-dashboard/campus-dashboard.component').then((c) => c.CampusDashboardComponent) },
      { path: 'campuses/:campusId/events', loadComponent: () => import('./campus-events/campus-events.component').then((c) => c.CampusEventsComponent) },
      { path: 'campuses/:campusId/announcements', loadComponent: () => import('./campus-announcements/campus-announcements.component').then((c) => c.CampusAnnouncementsComponent) },
      { path: 'campuses/:campusId/gallery', loadComponent: () => import('./campus-gallery/campus-gallery.component').then((c) => c.CampusGalleryComponent) },
      { path: 'virtual-support', canActivate: [AuthGuard], loadComponent: () => import('./virtual-support/virtual-support.component').then((c) => c.VirtualSupportComponent) },
      { path: 'wellness-videos', loadComponent: () => import('./wellness-videos/wellness-videos.component').then((c) => c.WellnessVideosComponent) },
      { path: 'notifications', canActivate: [AuthGuard], loadComponent: () => import('./notifications/notifications.component').then((c) => c.NotificationsComponent) },
      { path: 'profile', canActivate: [AuthGuard], loadComponent: () => import('./student/profile/profile.component').then((c) => c.ProfileComponent) }
    ]
  },
  {
    path: 'student',
    canActivate: [AuthGuard],
    loadComponent: () => import('./layouts/student-layout/student-layout.component').then((c) => c.StudentLayoutComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', loadComponent: () => import('./student/dashboard/student-dashboard.component').then((c) => c.StudentDashboardComponent) },
      { path: 'goals', loadComponent: () => import('./student/goals/goals.component').then((c) => c.GoalsComponent) },
      { path: 'appointments', loadComponent: () => import('./student/appointments/appointments.component').then((c) => c.AppointmentsComponent) },
      { path: 'peer-counselors', loadComponent: () => import('./student/peer-counselors/peer-counselors.component').then((c) => c.PeerCounselorsComponent) },
      { path: 'connections', loadComponent: () => import('./student/connections/connections.component').then((c) => c.ConnectionsComponent) },
      { path: 'profile', loadComponent: () => import('./student/profile/profile.component').then((c) => c.ProfileComponent) },
      { path: 'urgent-help', loadComponent: () => import('./student/urgent-help/urgent-help.component').then((c) => c.UrgentHelpComponent) },
      { path: 'notifications', loadComponent: () => import('./notifications/notifications.component').then((c) => c.NotificationsComponent) },
      { path: 'chat', loadComponent: () => import('./chat/chat.component').then((c) => c.ChatComponent) },
      { path: 'academy', loadComponent: () => import('./academy/academy.component').then((c) => c.AcademyComponent) },
      { path: 'support-requests', loadComponent: () => import('./student/support-requests/support-requests.component').then((c) => c.SupportRequestsComponent) },
      { path: 'reports', redirectTo: 'dashboard' },
    ]
  },
  {
    path: 'peer-counselor',
    canActivate: [RoleGuard],
    data: { roles: ['peer_counselor'] },
    loadComponent: () => import('./layouts/role-layout/role-layout.component').then((c) => c.RoleLayoutComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', loadComponent: () => import('./peer-counselor/dashboard/peer-counselor-dashboard.component').then((c) => c.PeerCounselorDashboardComponent) },
      { path: 'training', loadComponent: () => import('./academy/academy.component').then((c) => c.AcademyComponent) },
      { path: 'requests', loadComponent: () => import('./peer-counselor/dashboard/peer-counselor-dashboard.component').then((c) => c.PeerCounselorDashboardComponent) },
      { path: 'conversations', loadComponent: () => import('./chat/chat.component').then((c) => c.ChatComponent) },
      { path: 'reports', redirectTo: 'dashboard' },
    ]
  },
  {
    path: 'guidance',
    canActivate: [RoleGuard],
    data: { roles: ['guidance_staff', 'hod'] },
    loadComponent: () => import('./layouts/role-layout/role-layout.component').then((c) => c.RoleLayoutComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', loadComponent: () => import('./guidance/dashboard/guidance-dashboard.component').then((c) => c.GuidanceDashboardComponent) },
      { path: 'escalations', loadComponent: () => import('./guidance/dashboard/guidance-dashboard.component').then((c) => c.GuidanceDashboardComponent) },
      { path: 'appointments', loadComponent: () => import('./appointments/appointments.component').then((c) => c.AppointmentsComponent) },
      { path: 'reports', canActivate: [RoleGuard], data: { roles: ['guidance_staff', 'hod', 'admin'] }, loadComponent: () => import('./campus-dashboard/campus-dashboard.component').then((c) => c.CampusDashboardComponent) }
    ]
  },
  {
    path: 'admin',
    canActivate: [RoleGuard],
    data: { roles: ['admin'] },
    loadComponent: () => import('./layouts/role-layout/role-layout.component').then((c) => c.RoleLayoutComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', loadComponent: () => import('./admin/dashboard/admin-dashboard.component').then((c) => c.AdminDashboardComponent) },
      { path: 'users', loadComponent: () => import('./admin/users/admin-users.component').then((c) => c.AdminUsersComponent) },
      { path: 'campuses', loadComponent: () => import('./admin/campuses/admin-campuses.component').then((c) => c.AdminCampusesComponent) },
      { path: 'social-links', loadComponent: () => import('./admin/social-links/admin-social-links.component').then((c) => c.AdminSocialLinksComponent) },
      { path: 'reports', loadComponent: () => import('./admin/reports/admin-reports.component').then((c) => c.AdminReportsComponent) }
    ]
  },
  { path: '**', redirectTo: 'landing' }
];
