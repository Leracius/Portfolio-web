import styled, { css } from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid white; */
  width: 100%;
  height: 100vh;
  /* background-color: black; */
  /* box-shadow: 0px 23px 48px -18px rgba(17, 167, 195, 0.63);
  -webkit-box-shadow: 0px 23px 48px -18px rgba(17, 167, 195, 0.63);
  -moz-box-shadow: 0px 23px 48px -18px rgba(17, 167, 195, 0.63); */
  text-align: center;
  h1 {
    /* background-color: #24292e; */
    padding: 5px;
    margin: 0;
  }
`;

export const CardContent = styled.div`
  /* width: 400px;
  min-height: 400px; */
  padding: ${({ $active }) => ($active ? "40px" : "10px")};
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  margin: 10px;
  border: 2px solid #24292e;
  border-radius: 20px;
  background-color: black;
  box-shadow: 0px 10px 30px -10px rgba(128, 128, 128, 0.63);
  -webkit-box-shadow: 0px 10px 30px -10px rgba(128, 128, 128, 0.63);
  -moz-box-shadow: 0px 10px 30px -10px rgba(128, 128, 128, 0.63);
  @media (max-width: 900px) {
    flex-direction: column;
  }
  h2 {
    margin: 0;
    font-size: 16px;
    display: flex;
    gap: 10px;
    font-weight: 500;
    /* display: ${({ $active }) => ($active ? "flex" : "none")}; */
    align-items: center;
    /* background: rgb(15, 208, 196);
    background: linear-gradient(
      107deg,
      rgba(15, 208, 196, 1) 0%,
      rgba(175, 0, 255, 1) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent; */

    gap: 10px;
  }
`;

export const CardSection = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  opacity: ${({ $active }) => ($active ? "1" : "0")};
  display: ${({ $active }) => ($active ? "flex" : "none")};
  transition: all 0.2s ease-in-out;
`;

export const CardLogos = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 10px;
`;

export const FormContainer = styled.div`
  padding: 20px;
  overflow: hidden;
  border: 2px solid #24292e;
  border-radius: 20px;
  /* background-color: black; */
  box-shadow: 0px 10px 30px -10px rgba(128, 128, 128, 0.63);
  -webkit-box-shadow: 0px 10px 30px -10px rgba(128, 128, 128, 0.63);
  -moz-box-shadow: 0px 10px 30px -10px rgba(128, 128, 128, 0.63);
  background-color: ${({ $active }) => ($active ? "white" : "black")};
  color: ${({ $active }) => ($active ? "black" : "white")};
  padding: ${({ $active }) => ($active ? "10px" : "40px")};
  max-height: ${({ $active }) =>
    $active ? "40px" : "500px"}; /* Altura máxima ajustada */
  transition: all 0.5s ease-in-out; /* Transición para la altura máxima */
  h2 {
    cursor: pointer;
    margin: 0 10px 0 10px;
    justify-content: center;
    /* border: 1px solid red; */
    button {
      margin: 0;
      border: 1px solid red;
      padding: 0;
    }
    /* display: ${({ $active }) => ($active ? "flex" : "none")}; */
  }
`;

export const EscapeBtn = styled.button`
  border: 1px solid red;
  margin: 0;
`;

export const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  /* border: 1px solid white; */
  opacity: ${({ $active }) => ($active ? "0" : "1")};
  /* display: ${({ $active }) => ($active ? "none" : "flex")}; */
  /* display: ${({ $active }) => ($active ? "flex" : "none")}; */
  transition: all 1s, opacity 0.3s;
  textarea,
  input {
    border: none;
    padding: 10px;
    font-size: 18px;
    border-radius: 10px;
    /* border: 1px solid blue; */
  }
  button {
    background-color: white;
    color: black;
    border-radius: 10px;
    &:hover {
      background-color: aqua;
      box-shadow: 0px 10px 30px -10px rgba(128, 128, 128, 0.63);
      -webkit-box-shadow: 0px 10px 30px -10px rgba(128, 128, 128, 0.63);
      -moz-box-shadow: 0px 10px 30px -10px rgba(128, 128, 128, 0.63);
    }
  }
  textarea {
    min-height: 100px;
  }
`;

// export const SideElement = styled.div`
//   flex: 1;
// `;
