import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: space-around;
`;

// export const CardRight = styled.div`
//   width: 45%;
//   margin: 20px;
//   height: 500px;
// `;

export const CardStyled = styled.div`
  margin: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  max-width: 650px;
  border-radius: 10px;
  background-color: black;
  border: 2px solid grey;
  box-shadow: 0px 23px 48px -18px rgba(17, 167, 195, 0.63);
  -webkit-box-shadow: 0px 23px 48px -18px rgba(17, 167, 195, 0.63);
  -moz-box-shadow: 0px 23px 48px -18px rgba(17, 167, 195, 0.63);
  transition: transform 0.5s ease-in-out;
  z-index: 1;
  h1 {
    font-size: 40px;
    margin: 0;
    padding: 30px 0 10px 0;
  }
  h3 {
    margin: 0;
  }
  @media (max-width: 900px) {
    /* width: 90%; */
    /* min-height: 600px; */
    justify-content: center;
    margin: 20px;
    transform: none;
  }
`;

export const Carrousell = styled.div`
  overflow: hidden;
  min-width: 100%;
  white-space: nowrap;
  position: relative;
`;

const scrollAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const CarrousellItem = styled.div`
  display: inline-block;
  animation: ${scrollAnimation} 10s linear infinite;
  img {
    width: 60px;
    padding: 10px 30px;
  }
  h1 {
    margin: 0;
  }
`;

export const CardSection = styled.div`
  display: flex;
  width: 100%;
  min-height: 300px;
  @media (max-width: 900px) {
    /* margin: 20px; */
    flex-direction: column;
  }
`;

export const CardImg = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 5px solid white;
    @media (max-width: 900px) {
      width: 150px;
      height: 150px;
    }
  }
  div {
    height: 250px;
    width: 250px;
    min-width: 90%;
    border-radius: 50%;
    background-color: white;
  }
  @media (max-width: 900px) {
    /* display: none; */
    width: 100%;
  }
`;
export const CardTxt = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  text-align: center;
  background: rgb(15, 208, 196);
  background: linear-gradient(
    107deg,
    rgba(15, 208, 196, 1) 0%,
    rgba(175, 0, 255, 1) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  div {
    justify-self: end;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      padding: 10px;
      cursor: pointer;
    }
  }
  @media (max-width: 900px) {
    /* scale: 0.7; */
    width: 100%;
    font-size: 10px;
    height: 160px;
  }
`;
