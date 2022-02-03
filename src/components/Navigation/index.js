import { NavList, StyledNavLink } from './styled';
import { toHome, toWardrobes, toDoors, toStairs, toContact, toPrivacyPolicy } from "../../routes";

const Navigation = ({ open }) => {
    return (
        <NavList open={open}>
            <StyledNavLink to={toHome()}>Home</StyledNavLink>
            <StyledNavLink to={toWardrobes()}>Wardrobes</StyledNavLink>
            <StyledNavLink to={toDoors()}>Doors</StyledNavLink>
            <StyledNavLink to={toStairs()}>Stairs</StyledNavLink>
            <StyledNavLink to={toPrivacyPolicy()}>Policy</StyledNavLink>
            <StyledNavLink to={toContact()}>Contact</StyledNavLink>
        </NavList>
    )
}

export default Navigation;