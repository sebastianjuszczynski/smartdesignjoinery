import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { NavList, StyledNavLink, StyledNavLink2, SubList, Box } from './styled';
import { toHome, toWardrobes, toDoors, toStairs, toContact, toPrivacyPolicy } from "../../routes";

const Navigation = ({ open, location }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <NavList open={open}>
            <StyledNavLink to={toHome()} onClick={() => setSubnav(false)}>Home</StyledNavLink>
            {width < breakpoint &&
            <>
                <StyledNavLink2 to={toWardrobes()}>Wardrobes</StyledNavLink2>
                <StyledNavLink2 to={toDoors()}>Doors</StyledNavLink2>
                <StyledNavLink2 to={toStairs()}>Stairs</StyledNavLink2>
                </>
            }
            {width > breakpoint &&
            <SubList onClick={showSubnav}>Gallery
            {subnav &&
            <Box location={location.pathname}>
                <StyledNavLink2 to={toWardrobes()}>Wardrobes</StyledNavLink2>
                <StyledNavLink2 to={toDoors()}>Doors</StyledNavLink2>
                <StyledNavLink2 to={toStairs()}>Stairs</StyledNavLink2>
            </Box>
            }
            </SubList>
            }
            <StyledNavLink to={toPrivacyPolicy()} onClick={() => setSubnav(false)}>Policy</StyledNavLink>
            <StyledNavLink to={toContact()} onClick={() => setSubnav(false)}>Contact</StyledNavLink>
        </NavList>
    )
}

export default withRouter(Navigation);