const SkillCard = ({ softSkills, tools, children }) => {
  return (
    <div
      data-aos-easing="ease-in-out"
      data-aos="zoom-in"
      className="flex flex-col items-center rounded-2xl bg-darkPrimary py-6 px-4"
    >
      {children}
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 py-4 md:py-6">
        {tools &&
          tools.map((tool) => (
            <img
              className="w-12 sm:w-20"
              key={tool.id}
              title={tool.alt}
              alt={tool.alt}
              src={tool.img}
            />
          ))}

        {softSkills &&
          softSkills.map((softSkill) => (
            <p className="text-3xl">{softSkill.skill}</p>
          ))}
      </div>
    </div>
  );
};

export default SkillCard;
