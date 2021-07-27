import Navigation from "../Navigation";
import { NavigationContainer, Logo } from "./styled";
import LogoImg from "../../assets/logo.jpg";

const NavBar = () => {
    return (
        <NavigationContainer>
            <Logo src={LogoImg}></Logo>
            <Navigation />
        </NavigationContainer>
    )
}

export default NavBar;