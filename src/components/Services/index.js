import { Container, Flexbox, Image, Image2, Image3, Title, Description, InfoContainer, StyledLink } from "./styled";



const Services = () => {
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
                <InfoContainer>
                    <Title>Wardrobe</Title>
                    <Description>Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a.</Description>
                    <StyledLink to="/information">See gallery</StyledLink>
                </InfoContainer>
                <Image2></Image2>
            </Flexbox>
            <Flexbox>
                <Image3></Image3>
                <InfoContainer>
                    <Title>Doors</Title>
                    <Description>Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a.</Description>
                    <StyledLink to="/pricing">See gallery</StyledLink>
                </InfoContainer>
            </Flexbox>
        </Container>
    )
};

export default Services;