import { motion } from "motion/react";
import { TechStackDetails } from "../data/staticDataReactIcons";
const TechStack = () => {
  return (
    <div className="w-full md:w-[85%] lg:w-[65%] xl:w-[50%] 2xl:w-[35%] m-auto dark:text-black">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <h1 className="text-xl uppercase mt-4 md:text-2xl lg:text-2xl">
          Tech Stack
        </h1>
        <p className="italic text-slate-500 mt-2 text-sm lg:text-[1rem]">
          Technologies I&apos;ve worked with across various projects
        </p>
      </motion.div>
      {TechStackDetails.map((obj, i) => (
        <motion.div
          key={i}
          className="mt-6"
          initial={{
            x: 999,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            type: "spring",
          }}
        >
          <h1 className="text-xl text-iOrange sm:text-2xl">{obj.category}</h1>
          <div className="grid grid-cols-2 gap-2 mt-2 flex-wrap">
            {obj.items.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-4 w-auto rounded-md p-2 border dark:border-black cursor-pointer can-hover:hover:bg-iOrange duration-100 ease-out"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl">
                  {tech.icon}
                </div>
                <p className="text-sm sm:text-lg lg:text-2xl">{tech.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;
