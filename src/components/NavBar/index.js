import { NavigationContainer, Logo } from "./styled";
import LogoImg from "../../assets/logo.jpg";
import Burger from "../Burger";

const NavBar = () => {
    return (
        <NavigationContainer>
            <Logo src={LogoImg}></Logo>
            <Burger /> 
        </NavigationContainer>
    )
}

export default NavBar;