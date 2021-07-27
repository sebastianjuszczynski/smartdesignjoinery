import { NavList, NavItem, NavLink } from './styled';

const Navigation = () => {
    return (
        <NavList>
            <NavItem><NavLink href="#">Home</NavLink></NavItem>
            <NavItem><NavLink href="#">Gallery</NavLink></NavItem>
            <NavItem><NavLink href="#">Information</NavLink></NavItem>
            <NavItem><NavLink href="#">Contact</NavLink></NavItem>
        </NavList>
    )
}

export default Navigation;