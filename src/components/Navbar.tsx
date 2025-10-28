import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.logo} onClick={closeMenu}>FindNest7</Link>
            <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
                <li><Link to="/" className={isActive('/') ? styles.active : ''} onClick={closeMenu}>Home</Link></li>
                <li><Link to="/categories" className={isActive('/categories') ? styles.active : ''} onClick={closeMenu}>Categories</Link></li>
                <li><Link to="/deals" className={isActive('/deals') ? styles.active : ''} onClick={closeMenu}>Deals</Link></li>
                <li><Link to="/contact" className={isActive('/contact') ? styles.active : ''} onClick={closeMenu}>Contact</Link></li>
            </ul>
            <div className={styles.navbarActions}>
                <ThemeToggle />
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
