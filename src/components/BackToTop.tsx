import React from 'react';
import './BackToTop.module.scss';

const BackToTop: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            ↑
        </button>
    );
};

export default BackToTop;