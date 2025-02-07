import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Estado para indicar si está enviando el mensaje

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) return; // Evita múltiples envíos

    setLoading(true);

    emailjs
      .send(
        "service_lg5tw1z", // Tu Service ID
        "template_jj49egl", // Tu Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "IKxGwR5JVR8fnQFUk" // Tu Public Key
      )
      .then(() => {
        alert("✅ Mensaje enviado con éxito");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("❌ Error al enviar el mensaje:", error);
        alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
      })
      .finally(() => {
        setLoading(false); // Restablece el estado de carga
      });
  };

  return (
    <section
      id="contact"
      className="min-vh-100 d-flex align-items-center bg-light"
      style={{
        background:
          "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(https://www.transparenttextures.com/patterns/hexellence.png)",
        backgroundSize: "cover",
        backgroundImage: "url('/fondo.jpg')",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container py-5">
        <div className="row justify-content-center">
          <h2 className="text-center mb-2 fw-bold text-dark">CONTACT</h2>
          <div className="d-flex justify-content-center mb-3">
            <div
              style={{
                width: "50px",
                height: "4px",
                backgroundColor: "#6f42c1",
                borderRadius: "2px",
              }}
            ></div>
          </div>
          <p className="text-center text-muted mb-4">
            Siéntete libre de contactarme enviando el formulario a continuación
            y te responderé lo antes posible.{" "}
          </p>

          <div className="col-lg-8 col-md-10">
            <div className="card border-0 shadow rounded-4">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold text-muted">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-control bg-light border-0 shadow-sm rounded-3"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold text-muted">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-control bg-light border-0 shadow-sm rounded-3"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold text-muted">
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-control bg-light border-0 shadow-sm rounded-3"
                      placeholder="Enter Your Message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark w-100 py-3 shadow-sm border-0 rounded-3"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
