import React, { useState } from "react";
import {
  CarouselContainer,
  SlideContainer,
  CarouselButton,
  Slide,
  CarouselInfo,
  Container,
  ButtonContainer,
} from "./CarouselStyles";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";

import dataProject from "../../../projects.json";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  return (
    <Container>
      <CarouselContainer>
        <SlideContainer
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <Slide key={index}>{child}</Slide>
          ))}
        </SlideContainer>
        <ButtonContainer>
          <CarouselButton onClick={prevSlide}>
            <IoMdArrowRoundBack size={30} />
          </CarouselButton>
          <CarouselButton onClick={nextSlide}>
            <IoMdArrowRoundForward size={30} />
          </CarouselButton>
        </ButtonContainer>
      </CarouselContainer>
      <CarouselInfo>
        <h2>{dataProject[currentIndex].name}</h2>
        <p>{dataProject[currentIndex].desc}</p>
      </CarouselInfo>
    </Container>
  );
};

export default Carousel;
