import React, { useEffect } from 'react'
import { Text, Span, ExclamationMark } from './styled';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from "framer-motion";


const Motto = () => {
    const animation = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.3
    });


    useEffect(() => {
        if (inView) {
            animation.start('visible');
        }
    }, [inView, animation]);

    return (
        <Text as={motion.h2} id="motto"
            ref={ref}
            animate={animation}
            initial='hidden'
            variants={{
                visible: {
                    x: 0,
                    opacity: 1,
                    transition: { type: "spring", stiffness: 300, delay: 0.3, duration: 2 }
                },
                hidden: {
                    x: -100,
                    opacity: 0
                }
            }}
        >
            We are not just <Span>
                building</Span>...<br></br>...we <Span>create <ExclamationMark>!</ExclamationMark></Span>
        </Text>
    )
}

export default Motto;