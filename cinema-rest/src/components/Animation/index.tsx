import { chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

import { colors } from "../../assets/styles/theme";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

export default function Animation() {
  return (
    <div
      style={{
        backgroundColor: colors.darkestPurple,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ChakraBox
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["10%", "10%", "50%", "50%", "10%"],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{ padding: 80 }}
        bgGradient="linear(to-l, #A63EC5, #4C0070)"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="20%"
        height="10%"
      >
        <Logo />
      </ChakraBox>
    </div>
  );
}
