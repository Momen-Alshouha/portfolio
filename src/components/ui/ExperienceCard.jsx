const ExperienceCard = ({ Link, name, title, duration, skills }) => {
  return (
    <div className="flex w-full flex-col items-center gap-3 rounded-lg p-5 md:flex-row md:gap-12 md:text-left">
      <div
        data-aos-easing="ease-in-out"
        data-aos="fade-up"
        className="w-full px-9 md:flex md:flex-col"
      >
        <h2 className="text-xl font-bold">{title}</h2>
        <a className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" target="_blank" href={Link}>{name}</a>
        <h2 className="text-l">{duration}</h2>
        <hr className="my-3 bg-primary text-primary" />
        <ul className="list-disc text-left text-xl">
          {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
