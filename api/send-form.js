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
      "Venncoat - Ofertă",
    );

    const recipients = [new Recipient("alin.hreeniuc@gmail.com", "Alin")];

    const emailText = `
        Nume: ${nume} ${prenume}
        Telefon: ${telefon}
        Email: ${email}

        Subiect: ${subiect}
        Mesaj: ${mesaj}
    `;

    const emailHTML = `
      <!DOCTYPE html>
      <html lang="ro">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cerere Ofertă - Venncoat</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            background: #0f0f0f;
            color: #ffffff;
            line-height: 1.6;
            padding: 20px;
          }

          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: #1a1a1a;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            overflow: hidden;
          }

          .header {
            background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
            padding: 30px;
            text-align: center;
            border-bottom: 1px solid #2d3748;
          }

          .header h1 {
            font-size: 24px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 8px;
          }

          .header p {
            color: #a0aec0;
            font-size: 14px;
          }

          .form-container {
            padding: 30px;
            background: #1a1a1a;
          }

          .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 25px;
          }

          .form-group {
            margin-bottom: 20px;
          }

          .form-group.full-width {
            grid-column: 1 / -1;
          }

          .form-label {
            display: block;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 8px;
            font-size: 14px;
          }

          .form-input {
            width: 100%;
            padding: 12px 16px;
            background: rgba(9, 9, 11, 0.5);
            border: 1px solid rgba(63, 63, 70, 0.7);
            border-radius: 8px;
            color: #ffffff !important;
            font-size: 14px;
          }

          .form-textarea {
            width: 100%;
            padding: 12px 16px;
            background: rgba(9, 9, 11, 0.5);
            border: 1px solid rgba(63, 63, 70, 0.7);
            border-radius: 8px;
            color: #ffffff;
            font-size: 14px;
            min-height: 120px;
            resize: vertical;
            font-family: inherit;
          }

          .action-button,
          .action-button:link,
          .action-button:visited {
            display: block;
            background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
            width: 100%;
            padding: 16px;
            text-decoration: none;
            margin-top: 16px;
            text-align: center;
            border: 1px solid rgba(63, 63, 70, 0.7);
            border-radius: 8px;
            color: #ffffff !important;
            font-size: 16px;
            font-weight: 700;
          }

          .footer {
            background: #0f0f0f;
            padding: 20px 30px;
            border-top: 1px solid #2d3748;
            text-align: center;
          }

          .footer-text {
            color: #a0aec0;
            font-size: 12px;
            margin-bottom: 8px;
          }

          .timestamp {
            color: #718096;
            font-size: 11px;
          }

          .time-info {
            background: rgba(9, 9, 11, 0.5);
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            border: 2px solid rgba(63, 63, 70, 0.7);
          }

          .time-info h3 {
            color: #ffffff;
            font-size: 14px;
            margin-bottom: 5px;
          }

          .time-info p {
            color: #a0aec0;
            font-size: 12px;
          }

          @media (max-width: 600px) {
            .form-grid {
              grid-template-columns: 1fr;
            }
            
            .form-container {
              padding: 20px;
            }
            
            .header {
              padding: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>🏗️ Cerere Ofertă - Venncoat</h1>
            <p>Ai primit o nouă cerere de ofertă de la un client</p>
          </div>

          <div class="form-container">
            <div class="time-info">
              <h3>⏰ Informații despre cerere</h3>
              <p>Cererea a fost trimisă la: ${new Date().toLocaleString(
                "ro-RO",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                },
              )}</p>
            </div>

            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">Nume:</label>
                <div class="form-input">${nume}</div>
              </div>
              
              <div class="form-group">
                <label class="form-label">Prenume:</label>
                <div class="form-input">${prenume}</div>
              </div>
              
              <div class="form-group">
                <label class="form-label">Telefon:</label>
                <div class="form-input">${telefon}</div>
              </div>
              
              <div class="form-group">
                <label class="form-label">Email:</label>
                <div class="form-input">${email}</div>
              </div>
            </div>

            <div class="form-group full-width">
              <label class="form-label">Serviciile Dorite:</label>
              <div class="form-input">${subiect || "Nu a fost specificat"}</div>
            </div>

            <div class="form-group full-width">
              <label class="form-label">Detalii despre proiect:</label>
              <div class="form-textarea">${mesaj.replace(/\n/g, "<br>")}</div>
            </div>

            <div class="actions">
              <a class="action-button" href="tel:${telefon}" aria-label="Apelează clientul">
                Sună clientul
              </a>
              <a class="action-button" href="mailto:${email}?subject=${encodeURIComponent("Răspuns la cererea de ofertă")}&body=${encodeURIComponent("Bună " + nume + " " + prenume + ",\n\nVă răspundem în legătură cu cererea de ofertă.")}" aria-label="Trimite email către client">
                Răspunde clientului
              </a>
            </div>
          </div>

          <div class="footer">
            <p class="footer-text">Acest email a fost generat automat din formularul de cerere ofertă</p>
            <p class="timestamp">ID cerere: #${Date.now().toString().slice(-6)}</p>
          </div>
        </div>
      </body>
      </html>
      `;

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject(subiect || "Cerere Ofertă Nouă - Venncoat")
      .setHtml(emailHTML);

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
