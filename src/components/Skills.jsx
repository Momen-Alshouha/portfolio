import { default as blob } from "../assets/blob.svg";
import SkillCard from "./ui/SkillCard";
import data from "../data";

const Skills = () => {
  return (
    <div>
      <div
        id="skills"
        className="mx-auto flex flex-col justify-center gap-8 p-4 text-center md:items-center md:justify-between lg:max-w-7xl"
      >
        <h1 className="py-6 text-3xl font-bold text-primary md:text-4xl ">
          Technical Skills
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1">
          <SkillCard tools={data.techSkills}></SkillCard>
        </div>
        <img className="w-40 m-auto" src={blob} alt="blob" />
      </div>

      <div
        id="skills"
        className="mx-auto flex flex-col justify-center gap-8 p-4 text-center md:items-center md:justify-between lg:max-w-7xl"
      >
        <h1 className="py-6 text-3xl font-bold text-primary ">
          Soft Skills
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1">
          <SkillCard softSkills={data.softSkills}></SkillCard>
        </div>
        <img className="w-40 m-auto" src={blob} alt="blob" />
      </div>
    </div>
  );
};

export default Skills;
