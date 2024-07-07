import React, { useState } from "react";
import {
  Container,
  CardStyled,
  Carrousell,
  CardSection,
  CardImg,
  CardTxt,
} from "./MyInfoStyles";
import logos from "../../assets/logos";
import MyInfoItems from "./MyInfoItems";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import useScrollHandler from "../../hooks/useScrollHandler";

function MyInfo({ id }) {
  const array = logos;
  const { scroll, visible } = useScrollHandler(70);
  const [arr, setArr] = useState(array);

  return (
    <Container>
      <CardStyled
        id={id}
        // style={{ transform: visible ? "translateX(-200%)" : "none" }}
      >
        <CardSection>
          <CardImg>
            <img src="https://res.cloudinary.com/dbo7lbynt/image/upload/v1710303286/assets-integrador/portfolio-assets/cv-img_o2nng4.png"></img>
          </CardImg>
          <CardTxt>
            <h1>Axel Quintana</h1>
            <h3>Desarrollador fullstack</h3>
            <div>
              {" "}
              <a href="https://github.com/Leracius" target="blank">
                <FaGithub size={40} />
              </a>
              <a href="www.linkedin.com/in/axel-quintana" target="blank">
                <FaLinkedin size={40} />
              </a>
            </div>
          </CardTxt>
        </CardSection>
        <Carrousell>
          <MyInfoItems arr={arr}></MyInfoItems>
        </Carrousell>
      </CardStyled>
    </Container>
  );
}

export default MyInfo;
