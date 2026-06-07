/**
 * Minimal Google reCAPTCHA v3 client helper.
 * Lazy-loads the script (only when a site key is configured) and runs
 * grecaptcha.execute to mint an action-scoped token on demand.
 */

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

let scriptPromise: Promise<void> | null = null;

function loadScript(siteKey: string): Promise<void> {
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("reCAPTCHA can only load in the browser"));
      return;
    }
    if (window.grecaptcha) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load reCAPTCHA"));
    document.head.appendChild(script);
  });

  return scriptPromise;
}

/**
 * Returns a reCAPTCHA v3 token for the given action, or `null` when reCAPTCHA
 * isn't configured (so the contact form still works in dev / unkeyed setups).
 */
export async function getRecaptchaToken(action: string): Promise<string | null> {
  if (!SITE_KEY) return null;

  await loadScript(SITE_KEY);
  const grecaptcha = window.grecaptcha;
  if (!grecaptcha) return null;

  return new Promise<string>((resolve, reject) => {
    grecaptcha.ready(() => {
      grecaptcha
        .execute(SITE_KEY, { action })
        .then(resolve)
        .catch(reject);
    });
  });
}

export const recaptchaConfigured = Boolean(SITE_KEY);
