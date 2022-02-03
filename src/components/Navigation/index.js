import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { NavList, StyledNavLink, StyledNavLink2, SubList, Box, Dropdown, DropdownContainer } from './styled';
import { toHome, toWardrobes, toDoors, toStairs, toContact, toPrivacyPolicy } from "../../routes";

const Navigation = ({ open, location }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    const [dropdown, setDropdown] = useState(false);
    const hideDropdown = () => {
        setDropdown(false);
        setSubnav(false)
    }

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <NavList open={open}>
            <StyledNavLink to={toHome()} onClick={hideDropdown}>Home</StyledNavLink>
            {width < breakpoint &&
                <>
                    <StyledNavLink2 to={toWardrobes()}>Wardrobes</StyledNavLink2>
                    <StyledNavLink2 to={toDoors()}>Doors</StyledNavLink2>
                    <StyledNavLink2 to={toStairs()}>Stairs</StyledNavLink2>
                </>
            }
            {width > breakpoint &&

                <SubList onClick={showSubnav}>
                    <DropdownContainer onClick={() => setDropdown(!dropdown)}>Gallery
                        <Dropdown subnav={subnav}><i class="fas fa-caret-down"></i></Dropdown>
                    </DropdownContainer>

                    <Box location={location.pathname} dropdown={dropdown} onClick={hideDropdown}>
                        <StyledNavLink2 to={toWardrobes()}>Wardrobes</StyledNavLink2>
                        <StyledNavLink2 to={toDoors()}>Doors</StyledNavLink2>
                        <StyledNavLink2 to={toStairs()}>Stairs</StyledNavLink2>
                    </Box>

                </SubList>
            }
            <StyledNavLink to={toPrivacyPolicy()} onClick={hideDropdown}>Policy</StyledNavLink>
            <StyledNavLink to={toContact()} onClick={hideDropdown}>Contact</StyledNavLink>
        </NavList>
    )
}

export default withRouter(Navigation);