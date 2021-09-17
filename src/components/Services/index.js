import { Container, Flexbox, Image } from "./styled";
import Stairs from "../../assets/stairs.jpg";
import Wardrobe from "../../assets/wardrobe.jpg";
import Doors from "../../assets/doors.jpg";

const Services = () => {
    return (
        <Container>
            <Flexbox>
                <Image src={Stairs}></Image>
            </Flexbox>
            <Flexbox>
                <Image src={Wardrobe}></Image>
            </Flexbox>
            <Flexbox>
                <Image src={Doors}></Image>
            </Flexbox>
        </Container>
    )
};

export default Services;