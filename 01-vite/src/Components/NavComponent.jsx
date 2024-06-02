import { NavLink } from 'react-router-dom';
import './NavComponent.css';

export const NavComponent = () => {
    return (
        <nav className="navBar">
            <NavLink className="navLink" activeClassName="activeLink" exact to="/"> Home </NavLink>
            <NavLink className="navLink" activeClassName="activeLink" to="/about"> About </NavLink>
            <NavLink className="navLink" activeClassName="activeLink" to="/login"> Login </NavLink>
        </nav>
    )
}