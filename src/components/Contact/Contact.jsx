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

import { contactLogos } from "../../assets/contactLogos";

const Contact = ({ id }) => {
  const [active, setActive] = useState(false);

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
        <h2 onClick={handleCLick}>Deja tu mensaje 📧 </h2>

        <CardForm $active={active}>
          <input type="text" placeholder="nombre" />
          <input type="text" placeholder="correo" />
          <textarea type="text" placeholder="mensaje" />
          <button>enviar</button>
        </CardForm>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
