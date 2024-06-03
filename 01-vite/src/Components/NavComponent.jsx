
import { NavLink } from 'react-router-dom';
import './navComponent.css';

export const NavComponent = () => {
    return (
        <nav className="nav">
            <NavLink to="/" exact activeClassName="active" className="nav-link">
                Home
            </NavLink>
            <NavLink to="/about" activeClassName="active" className="nav-link">
                About
            </NavLink>
            <NavLink to="/contact" activeClassName="active" className="nav-link">
                Contact
            </NavLink>
        </nav>
    );
};