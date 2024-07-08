import styled, { css } from "styled-components";

export const ContainerStyled = styled.nav`
  /* width: 100%; */
  /* height: 90vh; */
  /* border-radius: 20px; */
  /* background-color: black; */
  /* box-shadow: 0px 23px 48px -18px rgba(128, 128, 128, 0.63);
  -webkit-box-shadow: 0px 23px 48px -18px rgba(128, 128, 128, 0.63);
  -moz-box-shadow: 0px 23px 48px -18px rgba(128, 128, 128, 0.63); */
  /* border-radius: 10px; */
  /* border: 2px solid grey; */
  /* border-right: 2px solid #242424; */
  /* box-shadow: 0px 23px 48px -18px rgba(17, 167, 195, 0.63);
  -webkit-box-shadow: 0px 23px 48px -18px rgba(17, 167, 195, 0.63);
  -moz-box-shadow: 0px 23px 48px -18px rgba(17, 167, 195, 0.63); */
  /* background-color: #121212; */
  /* flex-direction: column; */
  inset: 0 auto auto 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  z-index: 3;

  transition: transform 0.5s ease-in-out;
  @media (max-width: 900px) {
    height: auto;
    display: none;
    /* position: fixed;
    background-color: black;
    border-top: 2px solid #242424;
    width: 100%; */
  }
`;

export const Button = styled.button`
  z-index: 10;
  font-size: 20px;
  text-shadow: ${(props) =>
    props.selected ? "0px 0px 30px rgb(0, 221, 255)" : "none"};
  color: ${(props) => (props.selected ? "#00ddff" : "inherit")};
  transition: all 0.2s ease-in-out;
  @media (max-width: 900px) {
    scale: 0.8;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  p {
    margin: 0;
    font-size: 12px;
    @media (max-width: 900px) {
      font-size: 20px;
    }
  }
  &:hover {
    transform: scale(1.3);
  }
`;

export const MenuButton = styled.button`
  position: absolute;
  border: 1px solid magenta;
  inset: 10px 10px auto auto;
  z-index: 48;
`;
