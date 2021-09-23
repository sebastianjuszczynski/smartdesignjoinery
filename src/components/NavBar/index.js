import { NavigationContainer, Logo, StyledNavLink } from "./styled";
import { withRouter } from "react-router-dom";
import LogoImg from "../../assets/logo.jpg";
import Burger from "../Burger";
import { toHome } from "../../routes";

const NavBar = (props) => {
    return (
        <NavigationContainer location={props.location.pathname}>
            {/* {console.log(props)} */}
            <StyledNavLink to={toHome()}><Logo src={LogoImg}></Logo></StyledNavLink>
            <Burger /> 
        </NavigationContainer>
    )
}

export default withRouter(NavBar);