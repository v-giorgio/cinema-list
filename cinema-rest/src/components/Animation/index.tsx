import { Container, chakra } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.div, {

    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

export default function Animation() {

    return (
        <Container h="100vh" d="flex" alignItems="center" justifyContent="center">
            <ChakraBox
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}

                transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                padding="2"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100px"
                height="100px"
            >
                Cinerest!
            </ChakraBox>
        </Container>
    )
}