import { NavigationContainer, Logo } from "./styled";
import { withRouter } from "react-router-dom";
import LogoImg from "../../assets/logo.jpg";
import Burger from "../Burger";

const NavBar = (props) => {
    return (
        <NavigationContainer location={props.location.pathname}>
            {/* {console.log(props)} */}
            <Logo src={LogoImg}></Logo>
            <Burger /> 
        </NavigationContainer>
    )
}

export default withRouter(NavBar);