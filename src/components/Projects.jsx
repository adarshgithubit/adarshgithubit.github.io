import React from "react";
import { Card } from "./Card";
import dna from "../assets/img/projects/dna.png";
import Tmetric from "../assets/img/projects/Tmetric.jpg";
import NordstromPic from "../assets/img/projects/NordstromPic.jpg";
import "./Project.css";
export const Projects = () => {
  const project = {
    data: [
      {
        name: "TMETRIC-Clone",
        desc: "TMetric is a simple and accurate work time tracker that sets you free from tedious time reporting.",
        img: Tmetric,
        demoLink: "https://sweet-zuccutto-c42164.netlify.app/",
        codeLink: "https://github.comadarshgithubitproject2treemainwooden-tongue-937-main",
        techstack: [
           "/icons/react.svg",
           "/icons/html-5.svg",
          "/icons/css-3.svg",
           "/icons/javascript.svg",
           "/icons/npm.svg",
        ],
      },
      
      {
        name: "NORDSTROM-Clone",
        desc: "It is a new kind of shopping comparison site that offers the most comprehensive shopping experience on the web. Our shopping experts have drawn on their industry experience and insider connections to bring you the best collection of the stores you can't live without, and the brands and products you love - all in one place.",
        img: NordstromPic,
        demoLink: "https://aquamarine-khapse-6c8aca.netlify.app",
        codeLink: "https://github.com/adarshgithubit/Nordsterm/tree/main/projectPart1",
        techstack: [
           "/icons/html-5.svg",
           "/icons/css-3.svg",
           "/icons/javascript.svg",
        ],
      },
      {
        name: "DNA_NEWS-Clone",
        desc: " DNA India Covers all latest and breaking news on Politics, Business, Sports, Bollywood, technology & health",
        img: dna,
        demoLink: "https://luxury-lollipop-1d0feb.netlify.app",
        codeLink: "https://github.com/adarshgithubit/DNA_clone/tree/main/Web18-2nd-construct-week-project-main",
        techstack: [
          "/icons/html-5.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
        ],
      },
    ],
  };
  return (
    <div className="project-container">
      <div id="projects" className="container width">
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
        <div className="row">
          {project.data.map((elem, index) => {
            return <Card key={index} data={elem} />;
          })}
        </div>
      </div>
    </div>
  );
};
