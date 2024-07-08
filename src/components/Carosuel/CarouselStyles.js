import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const CarouselContainer = styled.div`
  overflow: hidden;
  width: 400px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    width: 100%;
    overflow: inherit;
    scale: 0.9;
  }
`;

export const SlideContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

export const Slide = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  h2 {
    display: none;
  }
  @media (max-width: 900px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    background-color: black;
    border: 2px solid #242424;
    border-radius: 10px;
    h2 {
      display: flex;
      font-size: 18px;
      text-align: center;
    }
  }
`;

export const CarouselButton = styled.button`
  width: 60px;
  height: 60px;
  background: transparent;
  transition: scale 2s ease;
  padding: 0;
  font-size: 24px;
  cursor: pointer;
  z-index: 1;
  img {
    width: 100%;
    &:hover {
      scale: 1.3;
    }
  }
  @media (max-width: 900px) {
    padding: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CarouselInfo = styled.div`
  margin: 10px;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  border-radius: 20px;
  padding: 30px;
  flex: 1;
  border: 2px solid #242424;
  background-color: black;
  box-shadow: 0px 10px 30px -10px rgba(128, 128, 128, 0.63);
  -webkit-box-shadow: 0px 10px 30px -10px rgba(128, 128, 128, 0.63);
  -moz-box-shadow: 0px 10px 30px -10px rgba(128, 128, 128, 0.63);
  h2 {
    margin: 0;
    width: 100%;
    text-align: center;
  }
  p {
    text-align: center;
  }
  @media (max-width: 900px) {
    margin: 0;
    border: none;
    box-shadow: none;
    padding: 0;
    border-radius: 0;
    background-color: transparent;
    h2 {
      font-size: 20px;
      margin: 0;
      display: none;
    }
    p {
      text-align: justify;
    }

    :nth-child(3) {
      overflow: hidden;
      flex-wrap: wrap;
      /* position: absolute; */
      img {
        width: 40px;
      }
      /* position: absolute; */
    }
    /* background-color: transparent;
    border: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    text-align: justify; */
  }
`;

export const InfoButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  button {
    background-color: white;
    color: black;
    border-radius: 5px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition: all 0.2s ease;
    /* padding: 10px; */
    &:hover {
      scale: 1.1;
    }
    @media (max-width: 900px) {
      padding: 5px;
    }
  }
`;
