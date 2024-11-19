import { useState } from "react";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import DownloadAndMail from "../components/DownloadAndMail";
const LandingPage = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <section>
      <div className="w-full md:w-[85%] lg:w-[65%] xl:w-[50%] 2xl:w-[35%] m-auto dark:text-black">
        <p className="text-xl relative mt-12">
          Hey there! I’m
          <span className="text-iOrange"> Saurav Parajulee</span>, an
          undergraduate Computer Science student passionate about exploring the
          world of web development.
        </p>
        <p
          className={`${
            showDetails ? "max-h-[500px]" : "max-h-0"
          } text-xl duration-500 overflow-hidden`}
        >
          I&apos;m a Computer Science studnet with a solid foundation in
          JavaScript, specializing in React. Over the past year and a half,
          I&apos;ve gained experience building functional UIs and integrating
          APIs for dynamic applications. While my projects are simple, I&apos;m
          committed to continuous learning and expanding my skills, which also
          include basic experience with backend technologies like Node.js,
          Express, and SQL databases.
        </p>
        <button
          className="font-semibold bg-iOrange px-5 py-1 rounded-md mt-2"
          onClick={() => setShowDetails(!showDetails)}
        >
          {!showDetails ? "Detail" : "Hide"}
        </button>
        <Skills />
        <Projects />
        <Education />
        <DownloadAndMail />
      </div>
    </section>
  );
};

export default LandingPage;
