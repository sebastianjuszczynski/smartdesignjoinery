import { Container, Flexbox, Image, Image2, Image3, Title, Description, InfoContainer, StyledLink } from "./styled";
import { useState, useEffect } from "react";



const Services = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 1140;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <Container>
            <Flexbox>
                <Image></Image>
                <InfoContainer>
                    <Title>Stairs</Title>
                    <Description>Stairs made with love.
                        Our stairs are designed with the most rigorous construction process possible to make sure it lasts for life. Our designs are timeless, and we use only the best materials - no shortcuts here!</Description>
                    <StyledLink to="/stairs">See gallery</StyledLink>
                </InfoContainer>
            </Flexbox>
            <Flexbox>
                {width < breakpoint &&
                    <>
                        <Image2></Image2>
                        <InfoContainer>
                            <Title>Wardrobe</Title>
                            <Description>Made to order
                                All units are custom made-to-order to assure that your design is both your own and unique. We won't stop until you're 100% satisfied!</Description>
                            <StyledLink to="/wardrobes">See gallery</StyledLink>
                        </InfoContainer>
                    </>
                }
                {width > breakpoint &&
                    <>
                        <InfoContainer>
                            <Title>Wardrobe</Title>
                            <Description>Made to order.
                                All units are custom made-to-order to assure that your design is both your own and unique. We won't stop until you're 100% satisfied!</Description>
                            <StyledLink to="/wardrobes">See gallery</StyledLink>
                        </InfoContainer>
                        <Image2></Image2>
                    </>
                }
            </Flexbox>
            <Flexbox>
                <Image3></Image3>
                <InfoContainer>
                    <Title>Doors</Title>
                    <Description>Choose from a variety of styles and designs to find the perfect door for your needs - no matter how minimalistic or luxurious you're looking for. With our selection, we're sure there's something for everyone.</Description>
                    <StyledLink to="/doors">See gallery</StyledLink>
                </InfoContainer>
            </Flexbox>
        </Container>
    )
};

export default Services;