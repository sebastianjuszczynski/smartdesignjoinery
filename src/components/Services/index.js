import { Container, Flexbox, Image, Image2, Image3, Title, Description, InfoContainer } from "./styled";
import { Link } from "react-router-dom";


const Services = () => {
    return (
        <Container>
            <Flexbox>
                <Image></Image>
                <InfoContainer>
                    <Title>Stair</Title>
                    <Description>Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a.</Description>
                    <Link to="/gallery">See gallery</Link>
                </InfoContainer>
            </Flexbox>
            <Flexbox>
                <InfoContainer>
                    <Title>Wardrobe</Title>
                    <Description>Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a.</Description>
                    <Link to="/information">See gallery</Link>
                </InfoContainer>
                <Image2></Image2>
            </Flexbox>
            <Flexbox>
                <Image3></Image3>
                <InfoContainer>
                    <Title>Doors</Title>
                    <Description>Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a.</Description>
                    <Link to="/pricing">See gallery</Link>
                </InfoContainer>
            </Flexbox>
        </Container>
    )
};

export default Services;