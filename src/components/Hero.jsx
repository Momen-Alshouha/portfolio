import ReactTypingEffect from "react-typing-effect";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";

const Hero = () => {
  var code = `let button_menu = document.querySelector(".header_button");
let float_menu  = document.querySelector(".header_menu--float");
let line_top   = document.querySelector(".header_button_line--top");
let line_under = document.querySelector(".header_button_line--bottom");

button_menu.isSelected = false;

function addEffectWriting(element, time) {
  let element_array = element.innerText.split("");

  element.count     = 0;
  element.innerText = "";

  function writeSymbols() {
    element.innerText += element_array[element.count];
    element.count++;

    if (element.count <= element_array.length) {
      setTimeout(() => {
        writeSymbols();
      }, time);
    } else if (element.count >= element_array.length) {
      element.count     = 0;
      element.innerText = "";

      writeSymbols();
    }
  }
  writeSymbols();
} 
`;
  return (
    <div
      id="about"
      className=" mx-auto	flex h-[100vh] flex-col justify-center overflow-hidden px-4 py-1 text-center md:flex-row md:items-center md:justify-between md:text-left lg:max-w-7xl"
    >
      <div className="py-4 md:w-1/2 md:flex-col">
        <p className="py-1 text-5xl font-black text-primary md:text-7xl md:text-7xl hidden md:inline">
          M
        </p>
        <ReactTypingEffect
          speed="300"
          typingDelay="150"
          eraseDelay="1000"
          className="py-1 text-5xl font-black text-primary md:text-7xl hidden md:inline"
          text="omen Alshouha"
        />
        <h2 className="mt-40 py-1 text-2xl font-bold md:m-0 md:text-3xl">
          Software Engineer | Full Stack Developer
        </h2>
        <p className="text-l py-1 md:w-3/4">
          Full-Stack Web Developer with a background in developing and
          maintaining web applications using a wide range of technologies.
        </p>
        <p className="text-l py-1 md:w-3/4">
          Completion of two Full-Stack Web Development boot-camps. gained strong
          skills in both front-end and back-end technologies.
        </p>
        <div className="flex items-center justify-center gap-4 py-4 md:justify-start md:py-6">
          <a
            className="inline-flex items-center gap-2"
            href="https://github.com/Momen-Alshouha"
            rel="noreferrer"
            target="_blank"
          >
            <GoMarkGithub className="text-4xl" />
          </a>
          <a
            className="inline-flex items-center gap-2"
            href="https://www.linkedin.com/in/momenalshouha/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="text-4xl" />
          </a>
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="relative whitespace-pre text-[.50rem] text-primary text-opacity-30 md:text-base">
          {code}
        </div>
      </div>
    </div>
  );
};

export default Hero;
