import React from "react";
import {
  CardProject,
  ImgContainer,
  ItemContainer,
  ProfileContainer,
} from "./ProjectsStyles";
import { VscGithub } from "react-icons/vsc";
import useScrollHandler from "../../hooks/useScrollHandler";

const ProjectItem = ({ data }) => {
  const { visible } = useScrollHandler(20);
  return (
    <ItemContainer>
      <CardProject>
        <ImgContainer>
          <div>
            <a href={data.link} target="blank">
              <VscGithub size={40} />
            </a>
          </div>
          <div>
            <img src={data.img} alt="" />
          </div>
        </ImgContainer>
        <button>{data.name}</button>
        {/* <p></p> */}
      </CardProject>
      {/* <Project /> */}
    </ItemContainer>
  );
};

export default ProjectItem;
