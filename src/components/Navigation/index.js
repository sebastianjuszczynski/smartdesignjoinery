import { NavList, StyledNavLink } from './styled';
import { toHome, toGallery, toContact, toPrivacyPolicy } from "../../routes";

const Navigation = ({ open }) => {
    return (
        <NavList open={open}>
            <StyledNavLink to={toHome()}>Home</StyledNavLink>
            <StyledNavLink to={toGallery()}>Gallery</StyledNavLink>
            <StyledNavLink to={toPrivacyPolicy()}>Privacy Policy</StyledNavLink>
            <StyledNavLink to={toContact()}>Contact</StyledNavLink>
        </NavList>
    )
}

export default Navigation;