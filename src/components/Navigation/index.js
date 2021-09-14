import { NavList, NavItem, StyledNavLink } from './styled';
import { toHome, toGallery, toPricing, toInformation } from "../../routes";

const Navigation = ({ open }) => {
    return (
        <NavList open={open}>
            <NavItem><StyledNavLink to={toHome()}>Home</StyledNavLink></NavItem>
            <NavItem><StyledNavLink to={toGallery()}>Gallery</StyledNavLink></NavItem>
            <NavItem><StyledNavLink to={toInformation()}>Information</StyledNavLink></NavItem>
            <NavItem><StyledNavLink to={toPricing()}>Pricing</StyledNavLink></NavItem>
        </NavList>
    )
}

export default Navigation;