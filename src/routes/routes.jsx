import React from "react";
import {
  BrowserRouter,
  Route,
  Routes as ReactDomRoutes,
} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import MyInfo from "../components/MyInfo/MyInfo";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import styled from "styled-components";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactDomRoutes>
        <Route
          path="/"
          element={
            <StyledContainer>
              <Navbar targetId={["my-info", "projects", "contact"]} />
              <MyInfo id="my-info" />
              <Projects id="projects" />
              <Contact id="contact"></Contact>
            </StyledContainer>
          }
        ></Route>
        <Route path="contact" element={<Contact />}></Route>
      </ReactDomRoutes>
    </BrowserRouter>
  );
};

const StyledContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Routes;
