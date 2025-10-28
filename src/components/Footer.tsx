import React from 'react';
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
            <a href="#products" className={styles.quickLink}>
              Products
            </a>
            <a href="/categories" className={styles.quickLink}>
              Categories
            </a>
            <a href="/deals" className={styles.quickLink}>
              Deals
            </a>
            <a href="/about" className={styles.quickLink}>
              About
            </a>
          </nav>
        </div>
        <div className={styles.footerRight}>
          <nav className={styles.footerNav}>
            <a href="/privacy" className={styles.footerLink}>
              Privacy
            </a>
            <a href="/terms" className={styles.footerLink}>
              Terms
            </a>
            <a href="/contact" className={styles.footerLink}>
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;