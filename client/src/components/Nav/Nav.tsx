import { Navbar, NavItem, NavLink } from "react-bootstrap"

const Nav = () => {
    return (
        <Navbar>
            <NavItem>
                <NavLink href="/">Home</NavLink>
            </NavItem> 
            <NavItem>
                <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/contact">Contact</NavLink>
            </NavItem>
        </Navbar>
    )
}
export default Nav