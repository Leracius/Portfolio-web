import React from "react";
import { ProjectContainer, Title } from "./ProjectsStyles";
import Carousel from "../Carosuel/Carousel";
import ProjectItem from "./ProjectItem";
import useScrollHandler from "../../hooks/useScrollHandler";
import dataProject from "../../../projects.json";

function Projects({ id }) {
  const { scroll, visible } = useScrollHandler(10);
  // console.log(scroll);

  return (
    <ProjectContainer
      id={id}
      // style={{ transform: visible ? "translateX(0)" : "translateX(100%)" }}
      style={{ opacity: visible ? "1" : "0" }}
    >
      <Carousel>
        {dataProject.map((el) => {
          return <ProjectItem key={el.id} text={el} data={el}></ProjectItem>;
        })}
      </Carousel>
      {/* {dataProject.map((el) => {
        return <ProjectItem key={el.id} text={el} data={el}></ProjectItem>;
      })} */}
    </ProjectContainer>
  );
}

export default Projects;
