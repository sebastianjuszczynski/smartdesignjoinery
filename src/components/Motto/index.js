import React from 'react'
import { Text, Span, ExclamationMark } from './styled';
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: '100vw'
    },
    animate: {
        x: 0,
        transition: { type: "spring" }
    },
};

const Motto = () => {
    return (
        <Text as={motion.h2} id="motto"
            variants={textVariants}
            initial="initial"
            animate="animate"
            >
            We are not just <Span>
                building</Span>...<br></br>...we <Span>create <ExclamationMark>!</ExclamationMark></Span>
        </Text>
    )
}

export default Motto;