"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "UniShare",
    description: "A new age cross platform for college students.",
    image: "/images/projects/unishare.png",
    tag: ["Mobile",],
    gitUrl: "https://github.com/c-o-d-e-y-o-d-a/uniShare",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Delv",
    description: "Delv is flutter based application which makes the process of ordering and delivering food easier for local food outlets.",
    image: "/images/projects/delv.png",
    tag: ["Mobile",],
    gitUrl: "https://github.com/c-o-d-e-y-o-d-a/flutter-delivery-app",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Triverse's Official Site",
    description: "Created the official website of IEEE BU's annual Tech fest",
    image: "/images/projects/tri2.png",
    tag: ["Web"],
    gitUrl: "https://github.com/c-o-d-e-y-o-d-a/triverse-ieee-bu",
    previewUrl: "https://triverse-ieee-bu-nischal-gautams-projects.vercel.app/",
  },
  {
    id: 4,
    title: "React Portfolio Website",
    description: "My old NextJs portfolio site",
    image: "/images/projects/portfolio-old.png",
    tag: ["Web"],
    gitUrl: "https://github.com/c-o-d-e-y-o-d-a/Portfolio-site",
    previewUrl: "https://portfolio-site-eight-beta.vercel.app/",
  },
  {  
    id: 5,
    title: "Vollit Wallet",
    description: "Vollit  interacts with the Ethereum blockchain using Web3dart and integrates with Alchemy and Moralis API keys to fetch wallet data.",
    image: "/images/projects/vollit.png",
    tag: ["Mobile"],
    gitUrl: "https://github.com/c-o-d-e-y-o-d-a/vollit",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Figma designs",
    description: "My design portfolio ",
    image: "/images/projects/figma.png",
    tag: ["Others"],
    gitUrl: "https://www.figma.com/@nischal7171",
    previewUrl: "https://www.figma.com/@nischal7171",
  },
  {
    id: 7,
    title: "Technical Writing",
    description: "My Tech Blog page",
    image: "/images/projects/hashnode.png",
    tag: ["Others"],
    gitUrl: "https://nischal-in-tech.hashnode.dev/",
    previewUrl: "https://nischal-in-tech.hashnode.dev/",
  },

  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Web");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-8 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Others"
          isSelected={tag === "Others"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
