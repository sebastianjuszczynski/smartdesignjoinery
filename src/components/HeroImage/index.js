import NavBar from "../NavBar";
import { Image, Overlay, Text, TextBig, TextSmall, ArrowDown, Arrow } from "./styled";

const HeroImage = () => {
    return (
        <>
            <NavBar />
            <Image />
            <Overlay />
            <Text>
                <TextBig>Smart Design Joinery</TextBig>
                <TextSmall>Vision, Passion, Purpose</TextSmall>
            </Text>
            <ArrowDown class="arrow bounce">
                <Arrow href="#"><i class="fas fa-chevron-down"></i></Arrow>
            </ArrowDown>
        </>
    )
}
export default HeroImage;