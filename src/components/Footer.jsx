import { HiMail } from "react-icons/hi";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      id="contact"
      className="mx-auto flex flex-col justify-center gap-8 p-4 pb-8 text-center md:items-center md:justify-between lg:max-w-7xl"
    >
      <h1 className="py-6 text-3xl font-bold text-primary md:text-4xl ">
        Contact Me
      </h1>
      <div className="w-full flex flex-row justify-between md:gap-5 md:px-4">
        <a href="#">
          <h2 className="font-impact text-3xl">
            <span className="text-primary">&lt;M</span>omen
            <span className="text-primary">/&gt; </span>
          </h2>
        </a>
        <div className="flex items-center gap-4 py-4 flex-row md:py-0">
          <a
            className="inline-flex items-center gap-2 text-3xl"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Momen-Alshouha"
          >
            <GoMarkGithub />
          </a>
          <a
            className="inline-flex items-center gap-2 text-3xl"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/momenalshouha/"
          >
            <BsLinkedin />
          </a>
          <a
            className="inline-flex items-center gap-2 text-3xl"
            target="_blank"
            rel="noreferrer"
            href="mailto:momenalshouha@outlook.com"
          >
            <HiMail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
