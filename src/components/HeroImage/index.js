
import { Image, Overlay, Text, TextBig, TextSmall, ArrowDown, Arrow, Container } from "./styled";


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
                <Arrow href="#"><i class="fas fa-chevron-down"></i></Arrow>
            </ArrowDown>
        </Container>
    )
}
export default HeroImage;