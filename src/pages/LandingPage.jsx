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
            } duration-200 overflow-hidden text-lg lg:text-xl `}
          >
            <ul className="list-disc pl-5 text-lg lg:text-xl">
              <li>A Computer Science student.</li>
              <li>
                Solid foundation in <strong>JavaScript</strong>.
              </li>
              <li>
                Specializes in <strong>React</strong>.
              </li>
              <li>
                Over a year and a half of experience building functional{" "}
                <strong>UIs</strong>.
              </li>
              <li>
                Experience integrating <strong>APIs</strong> for dynamic
                applications.
              </li>
              <li>Projects are simple but showcase room for growth.</li>
              <li>
                Strong dedication to continuous learning and skill expansion.
              </li>
              <li>
                Basic backend knowledge, including:
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Node.js</strong>
                  </li>
                  <li>
                    <strong>Express</strong>
                  </li>
                  <li>
                    <strong>SQL databases</strong>
                  </li>
                </ul>
              </li>
            </ul>
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
