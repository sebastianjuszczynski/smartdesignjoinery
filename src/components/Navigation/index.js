import { NavList, StyledNavLink } from './styled';
import { toHome, toGallery, toPricing, toInformation } from "../../routes";

const Navigation = ({ open }) => {
    return (
        <NavList open={open}>
            <StyledNavLink to={toHome()}>Home</StyledNavLink>
            <StyledNavLink to={toGallery()}>Gallery</StyledNavLink>
            <StyledNavLink to={toInformation()}>Information</StyledNavLink>
            <StyledNavLink to={toPricing()}>Pricing</StyledNavLink>
        </NavList>
    )
}

export default Navigation;