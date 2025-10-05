import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { MailCheck, MailX, LoaderCircle } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    // nume: "Popescu",
    // prenume: "Mihai",
    // telefon: "071 122 3344",
    // email: "mihai.pop@gmail.com",
    // subiect: "Gletuire, Vopsire...",
    // mesaj: "Bună ziua, aș dori urmatoarele servicii: ....",
    nume: "",
    prenume: "",
    telefon: "",
    email: "",
    subiect: "",
    mesaj: "",
  });

  const [status, setStatus] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");

    try {
      const res = await fetch("/api/send-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("succes");
        setForm({
          nume: "",
          prenume: "",
          telefon: "",
          email: "",
          subiect: "",
          mesaj: "",
        });
      } else {
        setStatus("❌ Eroare: " + data.error);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-top">
        <div className="flex-1/2">
          <label htmlFor="nume">Nume:</label>
          <input
            id="nume"
            name="nume"
            type="text"
            placeholder="Popescu"
            value={form.nume}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex-1/2">
          <label htmlFor="prenume">Prenume:</label>
          <input
            id="prenume"
            name="prenume"
            type="text"
            placeholder="Mihai"
            value={form.prenume}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-middle">
        <div className="flex-1/2">
          <label htmlFor="telefon">Telefon:</label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            placeholder="071 122 3344"
            value={form.telefon}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex-1/2">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="mihai.pop@gmail.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-bottom">
        <div>
          <label htmlFor="subiect">Serviciile Dorite:</label>
          <input
            id="subiect"
            name="subiect"
            type="text"
            placeholder="Gletuire, Vopsire..."
            value={form.subiect}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="textarea">Detalii despre proiect:</label>
          <textarea
            id="mesaj"
            name="mesaj"
            placeholder="Scrie-ne aici..."
            value={form.mesaj}
            onChange={handleChange}
            required
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = e.target.scrollHeight + "px";
            }}
          ></textarea>
        </div>
      </div>
      <div className="form-actions">
        {status && (
          <div className={`form-status`}>
            <div className="flex items-center gap-2">
              {status.includes("succes") ? (
                <>
                  <MailCheck className="mr-2 size-6" />
                  <span>Solicitarea dvs. s-a trimis!</span>
                </>
              ) : status.includes("error") ? (
                <>
                  <MailX className="mr-2 size-6" />
                  <span>Solicitarea dvs. a întâmpinat o eroare!</span>
                </>
              ) : (
                <>
                  <LoaderCircle className="size-6 animate-spin" />
                </>
              )}
            </div>
          </div>
        )}
        <button
          type="submit"
          className="submit-btn"
          disabled={status === "loading.."}
          aria-busy={status === "loading.."}
        >
          Solicită Ofertă
          <ArrowLongRightIcon className="size-6" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
