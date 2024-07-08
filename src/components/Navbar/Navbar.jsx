import React, { useState, useRef, useEffect } from "react";
import { ContainerStyled, Button, MenuButton } from "./NavStyles";
import useScrollHandler from "../../hooks/useScrollHandler";
import { IoHomeOutline } from "react-icons/io5";
import { LiaAddressCard } from "react-icons/lia";
import { DiCodeBadge } from "react-icons/di";
import { MdOutlineContacts } from "react-icons/md";

const Navbar = ({ targetId }) => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [open, setOpen] = useState(false);
  const { scroll, visible } = useScrollHandler(10000);

  const handler = () => {
    setOpen(!open);
  };

  const moveTo = (el) => {
    const element = document.getElementById(targetId[el]);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <ContainerStyled
      $active={open}
      // style={{ transform: visible ? "translateX(-400px)" : "none" }}
    >
      <Button
        selected={selectedButton === 1}
        onClick={() => {
          handleButtonClick(1);
          scrollToTop();
        }}
      >
        <LiaAddressCard size={50} />
        <p>Axel</p>
      </Button>
      <Button
        selected={selectedButton === 2}
        onClick={() => {
          handleButtonClick(2);
          moveTo(1);
        }}
      >
        <DiCodeBadge size={45} />
        <p>Proyectos</p>
      </Button>
      <Button
        selected={selectedButton === 3}
        onClick={() => {
          handleButtonClick(3);
          moveTo(2);
        }}
      >
        <MdOutlineContacts size={45} />
        <p>Contacto</p>
      </Button>
    </ContainerStyled>
  );
};

export default Navbar;
