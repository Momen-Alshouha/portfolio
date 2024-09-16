import MiniProjectCard from "./ui/MiniProjectCard";
import { default as blob } from "../assets/blob.svg";
import data from "../data";

const Projects = () => {
  return (
    <div
      id="projects"
      className="projects align-center mx-auto flex flex-col justify-center gap-4 sm:gap-12 p-4 text-center md:items-center md:justify-between lg:max-w-7xl"
    >
      <img className="w-40 m-auto" src={blob} alt="blob" />
      <h1 className="py-10 text-3xl font-bold text-primary md:text-4xl ">
        Projects
      </h1>
      {/* RECENT PROJECTS */}

      {/* OTHER PROJECTS */}
      <div className="grid align-center grid-cols-1 gap-8 py-2 md:grid-cols-2 lg:grid-cols-3">
        {/* PROJECT CARD */}
        <MiniProjectCard
          title="Technical Hub"
          subtitle="Laravel Web Application"
          description="Technical-HUB is a website targeting job seekers and provide them with most asked interview questions, and provide coding learners with a clear roadmap to help them on their learning journey."
          github="https://github.com/Momen-Alshouha/technical-hub"
          tools={data.project1}
        />
        <MiniProjectCard
          title="Drivers And Vehicles Licensing Department"
          subtitle="Desktop Application"
          description="The Driving & Vehicle License Management System (DVLD) is designed to streamline the process of issuing and managing driver licenses and related services."
          github="https://github.com/Momen-Alshouha/drivers-and-vehicles-license-department"
          tools={data.project2}
        />
        <MiniProjectCard
          title="Cryptous"
          subtitle="Landing Page"
          description="Landing page project featuring real-time updates for cryptocurrencies data, reusable components and more.."
          github="https://github.com/Momen-Alshouha/cryptous"
          tools={data.project3}
        />
        <MiniProjectCard
          title="Go Green"
          subtitle="Informative Website"
          description="This project is an informative website developed using Angular."
          github="https://github.com/Momen-Alshouha/go-green"
          tools={data.project4}
        />
        <MiniProjectCard
          title="Bank Console Application"
          subtitle="C++ Console Project"
          description="Bank console application implemented using c++ and object-oriented programming paradigm connected and deals with files as a database."
          github={"https://github.com/Momen-Alshouha/console-app-bank"}
          tools={data.project5}
        />

        <MiniProjectCard
          title="Explore more of my projects and code on my GitHub account."
          github={"https://github.com/Momen-Alshouha"}
          tools={data.techSkills}
        />
      </div>
      <img className="w-40 m-auto" src={blob} alt="blob" />
    </div>
  );
};

export default Projects;
