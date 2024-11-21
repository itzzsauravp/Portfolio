import { useState } from "react";
import Projects from "../components/Projects";
import Education from "../components/Education";
import DownloadAndMail from "../components/DownloadAndMail";
import Skills from "../components/Skills";
import { motion } from "motion/react";
const LandingPage = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <section>
      <div className="w-full md:w-[85%] lg:w-[65%] xl:w-[50%] 2xl:w-[35%] m-auto dark:text-black">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <p className="text-lg lg:text-xl relative mt-10">
            Hey there! I’m
            <span className="text-iOrange"> Saurav Parajulee</span>, an
            undergraduate Computer Science student passionate about exploring
            the world of web development.
          </p>

          <p
            className={`${
              showDetails ? "max-h-[500px]" : "max-h-0"
            } duration-500 overflow-hidden text-lg lg:text-xl `}
          >
            I&apos;m a Computer Science studnet with a solid foundation in
            JavaScript, specializing in React. Over the past year and a half,
            I&apos;ve gained experience building functional UIs and integrating
            APIs for dynamic applications. While my projects are simple,
            I&apos;m committed to continuous learning and expanding my skills,
            which also include basic experience with backend technologies like
            Node.js, Express, and SQL databases.
          </p>
          <button
            className="text-xs font-semibold  bg-iOrange md:py-1 px-5 py-2 rounded-md mt-2 shadow-xl"
            onClick={() => setShowDetails(!showDetails)}
          >
            {!showDetails ? "More.." : "Hide"}
          </button>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Skills />
          <Projects />
          <Education />
          <DownloadAndMail />
        </motion.div>
      </div>
    </section>
  );
};

export default LandingPage;
