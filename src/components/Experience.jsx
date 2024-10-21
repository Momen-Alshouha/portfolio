import ExperienceCard from "./ui/ExperienceCard";
import { default as blob } from "../assets/blob.svg";

const Experience = () => {
  var orangeDescription = [
    "Develop and implement technical training programs to boost programming skills through interactive projects.",
    "Guide and mentor 25+ trainees to ensure practical understanding and application of web development concepts",
  ];

  var motoryDescription = [
    "User interface development using Angular framework.",
    "Creating and managing reusable components.",
    "Integrate HTTP services to communicate with APIs and fetch or send data asynchronously, handling requests, responses, and errors effectively.",
  ];

  var blueRayDescription = [
    "Design and develop user-friendly, responsive front-end interfaces that provide an intuitive user experience across various devices and browsers.",
    "Develop and maintain robust back-end functionalities, ensuring efficient data management and dynamic website interactions.",
  ];

  var education = [`Bachelor in Software Engineering`];

  return (
    <div
      id="experience"
      className="align-center mx-auto flex flex-col justify-center gap-8 p-0 text-center sm:p-4 md:items-center  md:justify-between lg:max-w-7xl"
    >
      <img className="m-auto w-40" src={blob} alt="blob" />
      <h1 className="py-6 text-3xl font-bold text-primary md:text-4xl ">
        Experience
      </h1>

      {/* Experience Cards */}
      <ExperienceCard
        name="Orange Jordan"
        Link={"https://orange.jo/en"}
        title="Web Development Trainer"
        duration="May. 2024 - Aug. 2024"
        skills={orangeDescription}
      />

      <ExperienceCard
        name="MOTORY"
        Link={"https://jo.motory.com/en/"}
        title="Font-End Developer"
        duration="Nov. 2023 - April. 2024"
        skills={motoryDescription}
      />

      <ExperienceCard
        name="Blue Ray For Web Solution"
        Link={"https://bluerayws.com/"}
        title="Web Developer"
        duration="Oct. 2022 - Oct. 2023"
        skills={blueRayDescription}
      />

      <ExperienceCard
        name="Coding Academy By Orange"
        Link={"https://yo.orange.jo/orange-coding-academy"}
        title="Full Stack Web Development Trainee"
        duration="Feb. 2022 - Aug. 2022"
        skills={[
          "A fully interactive and intensive training focusing on the client and server-side web development field technologies , encompassing HTML , CSS , JavaScript , SQL , ReactJS , PHP, and Laravel.",
        ]}
      />

      <ExperienceCard
        name="Tahaluf Elemarat IT Solutions"
        Link={"https://www.tahaluf.ai/"}
        title="Full Stack Web Development Trainee"
        duration="Mar. 2021 - Aug. 2021"
        skills={[
          "Full stack web development training focused on web development technologies encompassing HTML , CSS , JavaScript , Angular , C# , .Net Framework and MS Sql Server.",
        ]}
      />
      <img className="m-auto w-40" src={blob} alt="blob" />
      <h1 className="py-6 text-3xl font-bold text-primary md:text-4xl ">
        Education
      </h1>
      <ExperienceCard
        title="Jadara University"
        duration="Oct. 2016 - Mar. 2020"
        skills={education}
      />
    </div>
  );
};

export default Experience;
