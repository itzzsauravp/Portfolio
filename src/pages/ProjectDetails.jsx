import ImageCarousel from "../components/ImageCarousel";
import useProjectDetails from "../hooks/useProjectDetails";
import ToolTip from "../components/ToolTip";
import { motion } from "motion/react";
import { useState } from "react";
const ProjectDetails = () => {
  const { projectDetails } = useProjectDetails();
  const { name, desc, link, images, uses, tags, learned, features, status } =
    projectDetails;
  const [enlargeImage, setEnlargeImage] = useState(false);
  return (
    <div className="w-full md:w-[85%] lg:w-[65%] xl:w-[50%] 2xl:w-[35%] m-auto dark:text-black">
      <motion.div
        className="relative"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <ImageCarousel
          images={images}
          enlargeImage={enlargeImage}
          setEnlargeImage={setEnlargeImage}
        />
      </motion.div>
      <motion.div
        initial={{
          y: 70,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <h1
          href={link}
          target="_blank"
          className="inline-block text-2xl font-semibold mt-5 cursor-pointer"
        >
          {name}
        </h1>{" "}
        <span>({status}) </span>
        <a className="text-sm text-iOrange" href={link} target="_blank">
          @Github
        </a>
        <div className="flex gap-2 mt-2 text-sm">
          {tags.map((tag, i) => (
            <span key={i} className="bg-iOrange px-3 rounded-xl">
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-3 items-center">
          {uses.map((use, i) => (
            <ToolTip
              key={i}
              name={use.name}
              toolTipBoxTW="bottom-[-35px]"
              toolTipPointerTW="top-[-7px] border-t border-l"
            >
              <span className="inline-block p-3 rounded-md text-4xl bg-transparent border border-iOrange dark:border-black">
                {use.icon}
              </span>
            </ToolTip>
          ))}
        </div>
        <div className="mt-3">
          <p>{desc}</p>
        </div>
        <div className="mt-4">
          <h1>Features:</h1>
          {features.map((items, i) => (
            <li key={i} className="ml-6">
              {items}
            </li>
          ))}
        </div>
        <div className="mt-4">
          <h1>Takeaways:</h1>
          {learned.map((items, i) => (
            <li key={i} className="ml-6">
              {items}
            </li>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
