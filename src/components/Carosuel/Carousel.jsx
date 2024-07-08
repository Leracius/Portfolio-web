import React, { useState } from "react";
import {
  CarouselContainer,
  SlideContainer,
  CarouselButton,
  Slide,
  CarouselInfo,
  Container,
  ButtonContainer,
  InfoButtonContainer,
} from "./CarouselStyles";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { VscGithub } from "react-icons/vsc";
import logosObj from "../../assets/logosObj";
import dataProject from "../../../projects.json";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const arrLogos = dataProject[currentIndex].tools;
  console.log(arrLogos);

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
          <h2>{dataProject[currentIndex].name}</h2>
          <CarouselButton onClick={nextSlide}>
            <IoMdArrowRoundForward size={30} />
          </CarouselButton>
        </ButtonContainer>
      </CarouselContainer>
      <CarouselInfo>
        <h2>{dataProject[currentIndex].name}</h2>
        <p>{dataProject[currentIndex].desc}</p>
        <InfoButtonContainer style={{ marginBottom: "20px" }}>
          {arrLogos.map((el) => {
            return <img key={el} src={logosObj[el]} width={50}></img>;
          })}
        </InfoButtonContainer>
        <InfoButtonContainer>
          <a href={dataProject[currentIndex].link[0]} target="blank">
            <button>
              repositorio
              <VscGithub color="black" size={30} />
            </button>
          </a>

          <a href={dataProject[currentIndex].link[1]} target="blank">
            <button>deploy de vercel</button>
          </a>
        </InfoButtonContainer>
      </CarouselInfo>
    </Container>
  );
};

export default Carousel;
