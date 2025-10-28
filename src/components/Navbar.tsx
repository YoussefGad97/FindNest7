import React, { useState, useEffect } from 'react';
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

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            const navbar = target.closest(`.${styles.navbar}`);
            const hamburger = target.closest(`.${styles.hamburger}`);
            if (isMenuOpen && !navbar && !hamburger) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen, styles.navbar, styles.hamburger]);

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    const handleLinkClick = () => {
        closeMenu();
    };

    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.logo} onClick={closeMenu}>FindNest7</Link>
            <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
                <li><Link to="/" className={isActive('/') ? styles.active : ''} onClick={handleLinkClick}>Home</Link></li>
                <li><Link to="/categories" className={isActive('/categories') ? styles.active : ''} onClick={handleLinkClick}>Categories</Link></li>
                <li><Link to="/deals" className={isActive('/deals') ? styles.active : ''} onClick={handleLinkClick}>Deals</Link></li>
                <li><Link to="/contact" className={isActive('/contact') ? styles.active : ''} onClick={handleLinkClick}>Contact</Link></li>
            </ul>
            <div className={styles.navbarActions}>
                <ThemeToggle />
                <div className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
