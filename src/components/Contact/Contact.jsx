import React, { useState } from "react";
import {
  CardContent,
  CardForm,
  CardLogos,
  CardSection,
  ContactContainer,
  EscapeBtn,
  FormContainer,
} from "./ContactStyle";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "emailjs-com";
import { contactLogos } from "../../assets/contactLogos";

const Contact = ({ id }) => {
  const [active, setActive] = useState(true);
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "lucasaxelqg15@gmail.com",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.correo || !formData.mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    emailjs.init("sYgLn93vqa3VXoVjK");
    emailjs
      .send("service_wy9r8ix", "template_vi1liwg", formData)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email enviado con éxito!");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Error al enviar el email. Inténtalo de nuevo.");
      });

    setFormData({
      from_name: "",
      to_name: "",
      message: "",
      reply_to: "lucasaxelqg15@gmail.com",
    });
  };

  const handleCLick = () => {
    console.log("funco");
    setActive(!active);
  };

  return (
    <ContactContainer id={id}>
      <CardContent $active={active}>
        <CardSection $active={active}>
          <h2>
            <FaUser />
            Axel Quintana
          </h2>
          <h2>
            <FaPhone />
            +54 3517897659
          </h2>
          <h2>
            <IoMdMail />
            lucasaxelqg15@gmail.com
          </h2>
          <h2>
            <FaLocationDot />
            Córdoba, Argentina
          </h2>
        </CardSection>
        <CardLogos>
          <img src={contactLogos[0]} width={40}></img>
          <img src={contactLogos[1]} width={40}></img>
          <img src={contactLogos[4]} width={50}></img>
          <img src={contactLogos[2]} width={40}></img>
          <img src={contactLogos[3]} width={40}></img>
        </CardLogos>
      </CardContent>
      <FormContainer $active={active}>
        <h2 onClick={handleCLick}>Nuevo mensaje 📧 </h2>

        <CardForm $active={active} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="nombre"
            value={formData.from_name}
            name="from_name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="correo de contacto"
            value={formData.to_name}
            name="to_name"
            onChange={handleChange}
          />
          <textarea
            type="text"
            placeholder="mensaje"
            value={formData.message}
            name="message"
            onChange={handleChange}
          />
          <button>enviar</button>
        </CardForm>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
