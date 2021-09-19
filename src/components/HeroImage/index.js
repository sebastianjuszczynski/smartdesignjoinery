
import { Image, Overlay, Text, TextBig, TextSmall, ArrowDown, Arrow, Container } from "./styled";
import {useState, useEffect} from "react";

const HeroImage = () => {

    const gotoCommentSection = () => {
        window.scrollTo({
            top: 800,
            behavior: "smooth"
        });
    }
    return (
        <Container>
            
            <Image />
            <Overlay />
            <Text>
                <TextBig>Smart Design Joinery</TextBig>
                <TextSmall>Vision, Passion, Purpose</TextSmall>
            </Text>
            <ArrowDown class="arrow bounce">
                <Arrow href="#"><i class="fas fa-chevron-down" onClick={gotoCommentSection}></i></Arrow>
            </ArrowDown>
        </Container>
    )
}
export default HeroImage;