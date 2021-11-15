import { AnimatePresence,motion } from "framer-motion";
import React from "react";

const Home = () => {
  return (
    <>
      <AnimatePresence>
              <motion.h1
              
                  initial={{y:500}}
                  animate={{
                      y: 0,
                      transition:{duration:0.5, type:"spring"}
                  }}
                  exit={{
                      y: -500,
                      transition:{duration:0.5, type:"spring", ease:"easeInOUt"}
                  }}
              >Home</motion.h1>
      </AnimatePresence>
    </>
  );
};

export default Home;
