import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import styles from './ThemeToggle.module.scss';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className={`${styles.toggleTrack} ${theme === 'dark' ? styles.dark : ''}`}>
        <div className={`${styles.toggleThumb} ${theme === 'dark' ? styles.dark : ''}`}>
          {theme === 'light' ? (
            <span className={styles.icon}>☀️</span>
          ) : (
            <span className={styles.icon}>🌙</span>
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;