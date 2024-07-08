import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 80%;
  height: 100vh;
  overflow: visible;
  align-items: center;
  transition: opacity 0.5s ease-in-out;
  z-index: 0;
  opacity: ${({ $visible }) => ($visible ? "1" : "0")};
  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
    width: 90%;
    /* border: 2px solid #242424; */
    /* background-color: black; */
    /* border-radius: 20px; */
  }
`;

export const ItemContainer = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-around;
  border-radius: 20px;
  box-shadow: 0px 10px 30px -10px rgba(128, 128, 128, 0.63);
  -webkit-box-shadow: 0px 10px 30px -10px rgba(128, 128, 128, 0.63);
  -moz-box-shadow: 0px 10px 30px -10px rgba(128, 128, 128, 0.63);
  @media (max-width: 900px) {
    margin: 5px;
    border: 2px solid #242424;
    background-color: black;
  }
`;

export const Title = styled.h1`
  font-size: 50px; /* padding: 10px; */
  position: absolute;
  position: absolute;
  transform: translateY(-100px);
  background: rgb(15, 208, 196);
  background: linear-gradient(
    107deg,
    rgba(15, 208, 196, 1) 0%,
    rgba(175, 0, 255, 1) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

// -------------------------

export const CardProject = styled.div`
  border-radius: 20px;
  background-color: black;
  border: 2px solid #262626;
  padding: 15px; /*
   
  background-image: linear-gradient(
    225deg,
    #ff3cac 0%,
    #784ba0 50%,
    #2b86c5 100%
  ); */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: 400;
    border-radius: 5px;
  }
  @media (max-width: 900px) {
    border: none;
    background-color: transparent;
    padding: 20px;
    /* padding: 0; */
    button {
      display: none;
    }
  }
`;

export const ProfileContainer = styled.div`
  height: 60px;
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0;

  div {
  }

  > div:nth-child(1) {
    grid-area: 1 / 1 / 3 / 2;
    width: 60px;
    img {
      border-radius: 30px;
      display: flex;
    }
  }

  > div:nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
  }

  > div:nth-child(3) {
    grid-area: 2 / 2 / 3 / 3;
    color: grey;
  }
`;
export const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;

  div {
  }
  > div:nth-child(1) {
    position: absolute;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > div:nth-child(2) {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    img {
      width: 100%;
      height: 300px;
      border-radius: 10px;
    }
  }
`;

export const ProjectInfo = styled.div`
  position: fixed;
`;
