import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { FormH3, FormSpan } from './styled';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from "framer-motion";

const FormHeader = (props) => {

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
        <FormH3 as={motion.h3}
            ref={ref}
            variants={{
                hidden: {
                    x: -300,
                    opacity: 0
                },
                visible: {
                    x: 0,
                    opacity: 1,
                    transition: { type: "spring", stiffness: 150, delay: 0.3, duration: 2 }
                }
            }}
            initial="hidden"
            animate={animation}
            location={props.location.pathname}>Contact <FormSpan as={motion.span}
                ref={ref}
                variants={{
                    hidden: {
                        opacity: 0
                    },
                    visible: {
                        opacity: 1,
                        transition: {
                            duration: 3
                        }
                    }
                }}
                initial="hidden"
                animate={animation}
            >with us</FormSpan> and check<br />what we can do <FormSpan as={motion.span}
                ref={ref}
                variants={{
                    hidden: {
                        opacity: 0
                    },
                    visible: {
                        opacity: 1,
                        transition: {
                            duration: 3
                        }
                    }
                }}
                initial="hidden"
                animate={animation}
            >together!</FormSpan></FormH3>
    )
}

export default withRouter(FormHeader);