
import { Image, Overlay, Text, TextBig, TextSmall, ArrowDown, Arrow, Container } from "./styled";
import {Link} from "react-scroll";



const HeroImage = () => {

    return (
        <Container>
            
            <Image />
            <Overlay />
            <Text>
                <TextBig>Smart Design Joinery</TextBig>
                <TextSmall>Vision, Passion, Purpose</TextSmall>
            </Text>
            <ArrowDown class="arrow bounce">
                <Arrow><Link to="motto" spy={true} smooth={true}><i class="fas fa-chevron-down"></i></Link></Arrow>
            </ArrowDown>
        </Container>
    )
}
export default HeroImage;