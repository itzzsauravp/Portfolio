import { useState } from "react";
import { motion } from "motion/react";
const ToolTip = ({ children, name }) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {isVisible && (
        <motion.div
          className="absolute py-1 px-2 z-10 dark:border-iOrange bottom-[-40px] left-1/2 translate-x-[-50%] dark:bg-black dark:text-white bg-iOrange p-1 rounded-md text-sm shadow-lg border "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          {name}
          <div className="bg-iOrange dark:border-iOrange border-t border-l dark:bg-black h-3 w-3 absolute -z-10 top-[-7px] left-1/2 translate-x-[-50%] rotate-45"></div>
        </motion.div>
      )}
    </div>
  );
};

export default ToolTip;