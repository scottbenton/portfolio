import React from "react";
import { motion, Variants } from "framer-motion";

export interface WavesProps {}

const animations: Variants = {
  enterFrom: {
    y: "-65vh",
    opacity: 1,
  },
  default: {
    y: "-10vh",
    opacity: 1,
  },
  leaveTo: {
    y: "-65vh",
    opacity: 1,
  },
};

export const Waves: React.FC<WavesProps> = (props) => {
  return (
    <motion.div
      variants={animations}
      initial={"enterFrom"}
      animate={"default"}
      exit={"leaveTo"}
      transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
      className={"absolute inset-0"}
    >
      <div
        key="waves"
        className="wave motion-reduce:after:animate-none motion-reduce:before:animate-none motion-reduce:before:rotate-12 motion-reduce:after:rotate-12"
      />
    </motion.div>
  );
};
