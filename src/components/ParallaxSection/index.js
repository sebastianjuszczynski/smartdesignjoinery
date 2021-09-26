import React, {useEffect} from 'react';
import { Parallax } from 'react-parallax';
import carpenter from "../../assets/carpenter.jpg"
import { Container, TextContainer, TextH3, TextParagraph } from './styled';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from "framer-motion";


const ParallaxSection = () => {

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
            <Parallax bgImage={carpenter} bgImageAlt="carpenter" strength={150}
            style={{position: "relative"}}
            bgImageStyle={{zIndex: "-1"}}
            >
                <TextContainer as={motion.div}
                ref={ref}
                variants={{
                    hidden: {
                        opacity: 0      
                      },
                      visible: {
                        opacity: 1,      
                        transition: { 
                          duration: 2
                        }
                      }
                }} 
                initial="hidden" 
                animate={animation} 
                style={{ height: 400 }}>
                    <TextH3>Who we are? What we are doing?</TextH3>
                    <TextParagraph>We’re your Furniture Company. With over 30 years experience in <br></br>the industry, we know how to produce quality handmade furniture.<br></br> We are making the latest traditional and modern furniture designs<br></br> for your home.  </TextParagraph>
                </TextContainer>
            </Parallax>
        </Container>
    )
}

export default ParallaxSection;