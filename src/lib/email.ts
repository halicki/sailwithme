import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAIL =
  process.env.ADMIN_EMAIL || "halicki.arkadiusz@gmail.com";

interface ApplicationData {
  name: string;
  email: string;
  occupation: string;
  motivation: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeSubject(value: string) {
  return value.replace(/[\r\n]/g, " ").trim();
}

export async function sendApplicationNotification(data: ApplicationData) {
  const { name, email, occupation, motivation } = data;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeOccupation = escapeHtml(occupation);
  const safeMotivation = escapeHtml(motivation).replace(/\n/g, "<br />");

  await resend.emails.send({
    from: "Oddech i Wiatr <onboarding@resend.dev>",
    to: ADMIN_EMAIL,
    subject: `Nowe zgłoszenie: ${sanitizeSubject(name)}`,
    html: `
      <h2>Nowe zgłoszenie na rejs Oddech i Wiatr</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr>
          <td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Imię</td>
          <td style="padding:8px;border-bottom:1px solid #eee;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td>
          <td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
        </tr>
        <tr>
          <td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Kim jest / czym się zajmuje</td>
          <td style="padding:8px;border-bottom:1px solid #eee;">${safeOccupation}</td>
        </tr>
        <tr>
          <td style="padding:8px;font-weight:bold;">Motywacja</td>
          <td style="padding:8px;">${safeMotivation}</td>
        </tr>
      </table>
    `,
  });
}
