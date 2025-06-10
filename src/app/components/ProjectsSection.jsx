"use client";
import React, { useRef, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { getGitHubProjects } from "../services/api";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projectsPerPage = 10;

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getGitHubProjects();
      setProjects(projectsData);
      setTotalPages(Math.ceil(projectsData.length / projectsPerPage));
    };
    fetchProjects();
  }, []);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: ref.current.offsetTop - 100, behavior: 'smooth' });
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {currentProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-2 rounded-full ${
            currentPage === 1
              ? "text-gray-500 cursor-not-allowed"
              : "text-white hover:bg-[#252525]"
          }`}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === index + 1
                  ? "bg-primary-500 text-white"
                  : "text-[#ADB7BE] hover:bg-[#252525]"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full ${
            currentPage === totalPages
              ? "text-gray-500 cursor-not-allowed"
              : "text-white hover:bg-[#252525]"
          }`}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
