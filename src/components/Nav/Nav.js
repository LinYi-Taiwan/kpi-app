import { Link, useLocation } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
    const location = useLocation();

    return (
        <nav className="nav-bar">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Overview
            </Link>
            <Link to="/project" className={location.pathname === '/project' ? 'active' : ''}>
                Project
            </Link>
            <Link to="/optimization" className={location.pathname === '/optimization' ? 'active' : ''}>
                Optimization
            </Link>
        </nav>
    );
};

export default Nav;
