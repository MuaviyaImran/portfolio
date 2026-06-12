import { projectsData } from "../dataStore.js";
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {
  return (
    <div id="projects" className="relative my-12 lg:my-24">
      <div className="sticky top-10 z-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div
          className="flex items-center justify-start relative"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
        >
          <h2 className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </h2>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-20">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="w-full"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={String((index % 2) * 120)}
              data-aos-offset="80"
              data-aos-anchor-placement="top-bottom"
              data-aos-easing="ease-out-cubic"
            >
              <div className="box-border flex h-full items-stretch justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_0_rgba(130,40,236,0.2)]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
