import { GoMarkGithub } from "react-icons/go";

const MiniProjectCard = ({
  tools,
  github,
  title,
  subtitle,
  description,
  children,
}) => {
  return (
    <div
      data-aos-easing="ease-in-out"
      data-aos="zoom-in"
      className="flex flex-col justify-between rounded-2xl bg-darkPrimary p-4 "
    >
      {github && (
        <a target="_blank" href={github} rel="noreferrer">
          <GoMarkGithub
            className="text-secondary hover:text-darkGray"
            size={35}
          />
        </a>
      )}
      <a
        className="text-blue-600 dark:text-blue-500 m-2 text-xl font-medium underline hover:no-underline"
        target="_blank"
        rel="noreferrer"
        href={github}
      >
        {title}
      </a>
      <h1 className="m-2">{subtitle}</h1>
      <p>{description}</p>
      <div className="flex justify-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-4 py-4 md:py-6">
          {tools.map((tool) => (
            <img
              className="tool-icon"
              title={tool.alt}
              key={tool.id}
              alt={tool.alt}
              src={tool.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniProjectCard;
