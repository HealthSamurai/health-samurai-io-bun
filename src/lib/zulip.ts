/**
 * Zulip Bot - Send messages to Zulip streams
 *
 * Environment variables:
 * - ZULIP_BOT_EMAIL: Bot email (e.g., my-bot@chat.fhir.org)
 * - ZULIP_API_KEY: Bot API key
 * - ZULIP_SERVER: Zulip server URL (default: https://chat.fhir.org)
 * - ZULIP_STREAM: Default stream to post to (e.g., "health-samurai")
 */

const ZULIP_SERVER = process.env.ZULIP_SERVER || "https://chat.fhir.org";
const ZULIP_BOT_EMAIL = process.env.ZULIP_BOT_EMAIL || "";
const ZULIP_API_KEY = process.env.ZULIP_API_KEY || "";
const ZULIP_STREAM = process.env.ZULIP_STREAM || "health-samurai.io";

export function isZulipConfigured(): boolean {
  return !!(ZULIP_BOT_EMAIL && ZULIP_API_KEY);
}

type SendMessageParams = {
  stream?: string;
  topic: string;
  content: string;
};

/**
 * Send a message to a Zulip stream
 */
export async function sendMessage({
  stream = ZULIP_STREAM,
  topic,
  content,
}: SendMessageParams): Promise<{ success: boolean; error?: string }> {
  if (!isZulipConfigured()) {
    console.log("[Zulip] Not configured, skipping message");
    return { success: false, error: "Zulip not configured" };
  }

  const auth = Buffer.from(`${ZULIP_BOT_EMAIL}:${ZULIP_API_KEY}`).toString("base64");

  try {
    const response = await fetch(`${ZULIP_SERVER}/api/v1/messages`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        type: "stream",
        to: stream,
        topic,
        content,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Zulip] Failed to send message:", response.status, errorText);
      return { success: false, error: `HTTP ${response.status}: ${errorText}` };
    }

    const result = await response.json() as { result: string; msg?: string };
    if (result.result === "success") {
      console.log(`[Zulip] Message sent to #${stream} > ${topic}`);
      return { success: true };
    } else {
      console.error("[Zulip] API error:", result);
      return { success: false, error: result.msg || "Unknown error" };
    }
  } catch (error) {
    console.error("[Zulip] Network error:", error);
    return { success: false, error: String(error) };
  }
}

/**
 * Notify about a new contact form submission
 */
export async function notifyContactForm(data: {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  page?: string;
}): Promise<void> {
  const content = `**New contact form submission**

| Field | Value |
|-------|-------|
| Name | ${data.name || "—"} |
| Email | ${data.email} |
| Phone | ${data.phone || "—"} |
| Page | ${data.page || "—"} |

${data.message ? `**Message:**\n> ${data.message.replace(/\n/g, "\n> ")}` : ""}`;

  await sendMessage({
    topic: "form-submissions",
    content,
  });
}

/**
 * Notify about a new newsletter subscription
 */
export async function notifySubscription(email: string): Promise<void> {
  await sendMessage({
    topic: "form-submissions",
    content: `**New newsletter subscription:** ${email}`,
  });
}
