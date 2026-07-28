"use client";

/**
 * Form delivery.
 *
 * The site is a static export (`output: "export"` in next.config.ts), so there
 * is no server and API routes are unavailable — submissions have to go straight
 * from the browser to a third party.
 *
 * Set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local to the access key from
 * https://web3forms.com (free, no account needed — it emails you the key).
 * Because this is a static build the value is inlined at build time and is
 * visible in the bundle; Web3Forms access keys are designed to be public and
 * only ever deliver to the address the key is registered to.
 *
 * To move to Formspree/Formspark/Basin instead, change ENDPOINT and the body
 * shape below. Nothing else in the app touches the provider.
 */

const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export const formConfigured = Boolean(ACCESS_KEY);

export type SubmitResult = { ok: true } | { ok: false; error: string };

export async function submitForm(
  fields: Record<string, string>
): Promise<SubmitResult> {
  if (!ACCESS_KEY) {
    return {
      ok: false,
      error:
        "This form isn’t connected yet. Please email contact@centangleglobal.com directly.",
    };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ access_key: ACCESS_KEY, ...fields }),
    });

    const data = await res.json().catch(() => null);

    if (res.ok && data?.success) return { ok: true };

    return {
      ok: false,
      error:
        data?.message ?? "Something went wrong sending that. Please try again.",
    };
  } catch {
    return {
      ok: false,
      error:
        "Couldn’t reach the server. Check your connection and try again, or email us directly.",
    };
  }
}
