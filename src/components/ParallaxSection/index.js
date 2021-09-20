import React from 'react';
import { Parallax } from 'react-parallax';
import carpenter from "../../assets/carpenter.jpg"
import { Container, TextContainer, TextH3, TextParagraph } from './styled';


const ParallaxSection = () => {
    return (
        <Container>
            <Parallax bgImage={carpenter} bgImageAlt="carpenter" strength={150}
            style={{position: "relative"}}
            bgImageStyle={{zIndex: "-1"}}
            >
                <TextContainer style={{ height: 400 }}>
                    <TextH3>Who we are? What we are doing?</TextH3>
                    <TextParagraph>We’re your Furniture Company. With over 30 years experience in <br></br>the industry, we know how to produce quality handmade furniture.<br></br> We are making the latest traditional and modern furniture designs<br></br> for your home.  </TextParagraph>
                </TextContainer>
            </Parallax>
        </Container>
    )
}

export default ParallaxSection;