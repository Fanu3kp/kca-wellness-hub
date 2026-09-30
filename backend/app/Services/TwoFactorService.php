<?php

namespace App\Services;

use BaconQrCode\Renderer\Image\SvgImageBackEnd;
use BaconQrCode\Renderer\ImageRenderer;
use BaconQrCode\Renderer\RendererStyle\RendererStyle;
use BaconQrCode\Writer;
use Illuminate\Support\Str;
use PragmaRX\Google2FA\Google2FA;

/**
 * Time-based one-time password (RFC 6238) support for account second factors.
 *
 * Secrets are generated here but stored encrypted on the user record, and
 * verification is always time-window tolerant so a slow phone clock does not
 * lock a person out of their own account.
 */
class TwoFactorService
{
    private const ISSUER = 'KCA University Wellness Hub';

    private const DIGITS = 6;

    /**
     * Must stay a power of two for Google Authenticator compatibility.
     */
    private const SECRET_KEY_LENGTH = 16;

    /**
     * Number of adjacent 30-second windows accepted either side of "now".
     */
    private const WINDOW = 1;

    private const RECOVERY_CODE_COUNT = 8;

    public function __construct(private readonly Google2FA $engine)
    {
        $this->engine->setOneTimePasswordLength(self::DIGITS);
    }

    /**
     * Base32 shared secret for a new enrolment.
     *
     * Google Authenticator only accepts key lengths that are a power of two,
     * so the default 16 characters is kept deliberately.
     */
    public function generateSecret(): string
    {
        $secret = $this->engine->generateSecretKey(self::SECRET_KEY_LENGTH);

        // Google Authenticator silently ignores secrets whose Base32 length is
        // not a power of two, which would produce a factor nobody can enrol.
        if (($length = strlen($secret)) === 0 || ($length & ($length - 1)) !== 0) {
            throw new \RuntimeException("Generated 2FA secret length {$length} is not a power of two.");
        }

        return $secret;
    }

    /**
     * otpauth:// URI understood by Google Authenticator, Authy and similar apps.
     */
    public function provisioningUri(string $secret, string $account, ?int $campusId = null): string
    {
        return $this->engine->getQRCodeUrl(
            self::ISSUER,
            $account,
            $secret,
            $this->windowLength()
        );
    }

    /**
     * Inline SVG so the enrolment screen needs no third-party image request.
     */
    public function qrCodeSvg(string $uri, int $size = 220): string
    {
        $writer = new Writer(new ImageRenderer(
            new RendererStyle($size, 1),
            new SvgImageBackEnd
        ));

        return $writer->writeString($uri);
    }

    public function verify(string $secret, ?string $code, ?int $timestamp = null): bool
    {
        $code = trim((string) $code);

        // Strip spaces so "123 456" from a phone keyboard still works.
        $code = str_replace(' ', '', $code);

        if ($code === '' || ! ctype_digit($code)) {
            return false;
        }

        if (strlen($code) !== self::DIGITS) {
            return false;
        }

        return (bool) $this->engine->verifyKey($secret, $code, self::WINDOW, $timestamp);
    }

    /**
     * Current code, used only by tests and by the console.
     */
    public function currentCode(string $secret, ?int $timestamp = null): string
    {
        if ($timestamp === null) {
            return $this->engine->getCurrentOtp($secret);
        }

        return $this->engine->oathTotp($secret, intdiv($timestamp, 30));
    }

    /**
     * Single-use recovery codes. Stored hashed, returned to the user once.
     *
     * @return array<int, string>
     */
    public function generateRecoveryCodes(): array
    {
        return collect(range(1, self::RECOVERY_CODE_COUNT))
            ->map(fn (int $index): string => $this->formatRecoveryCode(Str::random(10)))
            ->all();
    }

    /**
     * Recovery codes are normalised before hashing so users can type them
     * with or without the display separator.
     *
     * @param  array<int, string>  $codes
     * @return array<int, string>
     */
    public function hashRecoveryCodes(array $codes): array
    {
        return array_map(fn (string $code): string => hash('sha256', $this->normaliseRecoveryCode($code)), $codes);
    }

    public function normaliseRecoveryCode(string $code): string
    {
        return strtoupper(trim($code));
    }

    public function hashRecoveryCode(string $code): string
    {
        return hash('sha256', $this->normaliseRecoveryCode($code));
    }

    private function formatRecoveryCode(string $raw): string
    {
        $normalised = Str::upper(preg_replace('/[^A-Za-z0-9]/', '', $raw) ?: '');

        return substr($normalised, 0, 5).'-'.substr($normalised, 5, 5);
    }

    private function windowLength(): int
    {
        return 30;
    }
}
