
import { Image, Overlay, Text, TextBig, TextSmall, ArrowDown, Arrow, Container } from "./styled";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: '-100vw'
    },
    animate: {
        x: 0,
        transition: { type: "spring", stiffness: 150  }
    },
};
const nextVariants = {
    initial: {
        x: '-100vw'
    },
    animate: {
        x: 0,
        transition: { type: "spring", delay: 0.5, stiffness: 150 }
    },
};


const HeroImage = () => {

    return (
        <Container>
            <Image />
            <Overlay />
            <Text>
                <TextBig as={motion.h2}
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    Smart Design Joinery</TextBig>
                <TextSmall as={motion.h3}
                    variants={nextVariants}
                    initial="initial"
                    animate="animate"
                >
                    Vision, Passion, Purpose</TextSmall>
            </Text>
            <ArrowDown class="arrow bounce">
                <Arrow><Link to="motto" spy={true} smooth={true}><i class="fas fa-chevron-down"></i></Link></Arrow>
            </ArrowDown>
     
        </Container>
    )
}
export default HeroImage;