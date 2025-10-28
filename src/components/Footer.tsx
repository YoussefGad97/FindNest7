import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <p className={styles.footerText}>
            © 2024 FindNest. All rights reserved.
          </p>
        </div>
        <div className={styles.footerCenter}>
          <nav className={styles.quickLinks}>
            <Link to="/#products" className={styles.quickLink}>
              Products
            </Link>
            <Link to="/categories" className={styles.quickLink}>
              Categories
            </Link>
            <Link to="/deals" className={styles.quickLink}>
              Deals
            </Link>
            <Link to="/contact" className={styles.quickLink}>
              Contact
            </Link>
          </nav>
        </div>
        <div className={styles.footerRight}>
          <nav className={styles.footerNav}>
            <Link to="/privacy" className={styles.footerLink}>
              Privacy
            </Link>
            <Link to="/terms" className={styles.footerLink}>
              Terms
            </Link>
            <Link to="/contact" className={styles.footerLink}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;