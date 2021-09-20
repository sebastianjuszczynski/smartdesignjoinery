import { NavList, StyledNavLink } from './styled';
import { toHome, toGallery, toContact, toInformation } from "../../routes";

const Navigation = ({ open }) => {
    return (
        <NavList open={open}>
            <StyledNavLink to={toHome()}>Home</StyledNavLink>
            <StyledNavLink to={toGallery()}>Gallery</StyledNavLink>
            <StyledNavLink to={toInformation()}>Information</StyledNavLink>
            <StyledNavLink to={toContact()}>Contact</StyledNavLink>
        </NavList>
    )
}

export default Navigation;