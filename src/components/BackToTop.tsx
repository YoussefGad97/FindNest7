import React from 'react';
import styles from './BackToTop.module.scss';

const BackToTop: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={styles.backToTop}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            ↑
        </button>
    );
};

export default BackToTop;