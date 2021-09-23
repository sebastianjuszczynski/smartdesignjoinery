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
                    <Description>Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a.</Description>
                    <StyledLink to="/gallery">See gallery</StyledLink>
                </InfoContainer>
            </Flexbox>
            <Flexbox>
                {width < breakpoint &&
                    <>
                        <Image2></Image2>
                        <InfoContainer>
                            <Title>Wardrobe</Title>
                            <Description>Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a.</Description>
                            <StyledLink to="/gallery">See gallery</StyledLink>
                        </InfoContainer>
                    </>
                }
                {width > breakpoint &&
                    <>
                        <InfoContainer>
                            <Title>Wardrobe</Title>
                            <Description>Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a.</Description>
                            <StyledLink to="/gallery">See gallery</StyledLink>
                        </InfoContainer>
                        <Image2></Image2>
                    </>
                }
            </Flexbox>
            <Flexbox>
                <Image3></Image3>
                <InfoContainer>
                    <Title>Doors</Title>
                    <Description>Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a.</Description>
                    <StyledLink to="/gallery">See gallery</StyledLink>
                </InfoContainer>
            </Flexbox>
        </Container>
    )
};

export default Services;