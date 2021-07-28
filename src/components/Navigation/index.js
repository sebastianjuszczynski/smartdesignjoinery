import { NavList, NavItem } from './styled';

const Navigation = ({ open }) => {
    return (
        <NavList open={open}>
            <NavItem>Home</NavItem>
            <NavItem>Gallery</NavItem>
            <NavItem>Information</NavItem>
            <NavItem>Contact</NavItem>
        </NavList>
    )
}

export default Navigation;