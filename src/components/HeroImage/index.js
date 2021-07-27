import background from "../../assets/background.jpg";
import NavBar from "../NavBar";
import { Image, Overlay, ArrowDown, Arrow } from "./styled";

const HeroImage = () => {
    return (
        <>
            <NavBar />
            <Image />
            <Overlay />
            <ArrowDown class="arrow bounce">
                <Arrow href="#"><i class="fas fa-chevron-down"></i></Arrow>
            </ArrowDown>
        </>
    )
}
export default HeroImage;