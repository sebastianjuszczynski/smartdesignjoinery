import Navigation from "../Navigation";
import { NavigationContainer, Logo } from "./styled";

const NavBar = () => {
    return (
        <NavigationContainer>
            <Logo>Smart Design Joinery</Logo>
            <Navigation />
        </NavigationContainer>
    )
}

export default NavBar;