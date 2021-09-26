import React, { useEffect } from 'react';
import { Title, Container } from "./styled";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from "framer-motion";

const OurService = () => {

    const animation = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1
    });


    useEffect(() => {
        if (inView) {
            animation.start('visible');
        }
    }, [inView, animation]);
    return (
        <Container>
            <Title as={motion.h2}
                ref={ref}
                variants={{
                    hidden: {
                        scale: 0
                    },
                    visible: {
                        scale: 1,
                        transition: {
                            duration: 1
                        }
                    }
                }}
                initial="hidden"
                animate={animation}
            >Our Service</Title>
        </Container>
    )
}

export default OurService;