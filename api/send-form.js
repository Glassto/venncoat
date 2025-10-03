import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Doar metoda POST este permisă" });
  }

  try {
    const { nume, prenume, telefon, email, subiect, mesaj } = req.body;

    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY,
    });

    const sentFrom = new Sender(
      "noreply@test-zxk54v8wn11ljy6v.mlsender.net",
      "Venncoat - Cerere Ofertă",
    );

    const recipients = [new Recipient("alin.hreeniuc@gmail.com", "Alin")];

    const emailText = `
        Nume: ${nume} ${prenume}
        Telefon: ${telefon}
        Email: ${email}

        Subiect: ${subiect}
        Mesaj: ${mesaj}
    `;

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject(subiect || "Mesaj nou din formular")
      .setText(emailText);

    await mailerSend.email.send(emailParams);

    return res.status(200).json({ succes: true, message: "✅ Email trimis!" });
  } catch (error) {
    console.error("❌ MailerSend error detected:");

    // StatusCode si body existente
    if (error.statusCode) console.error("Status Code:", error.statusCode);
    if (error.body) console.error("Body:", error.body);

    return res.status(500).json({
      error: "error",
      details: error.message || JSON.stringify(error),
    });
  }
}
