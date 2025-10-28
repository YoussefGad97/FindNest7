import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Deals from './pages/Deals';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './App.css';

// Component to handle animations that needs location context
function AppContent() {
    const location = useLocation();

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let hasScrolled = false;

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            const currentScrollY = window.scrollY;
            const scrollingUp = currentScrollY < lastScrollY;

            // Track if user has scrolled at least once
            if (Math.abs(currentScrollY - lastScrollY) > 5) {
                hasScrolled = true;
            }

            entries.forEach(entry => {
                const isLandingSection = entry.target.classList.contains('landing-section');

                if (entry.isIntersecting) {
                    // Landing section: animate on initial load, and re-animate only when scrolling up after having scrolled down
                    if (isLandingSection) {
                        if (!hasScrolled || scrollingUp) {
                            entry.target.classList.add('animate');
                        }
                    } else {
                        // Other sections: animate when they come into view
                        entry.target.classList.add('animate');
                    }
                } else {
                    // Remove animation class when scrolling away, but keep landing section visible if it was the initial state
                    if (!isLandingSection || hasScrolled) {
                        entry.target.classList.remove('animate');
                    }
                }
            });

            lastScrollY = currentScrollY;
        }, observerOptions);

        // Function to initialize animations for current page
        const initializeAnimations = () => {
            // Reset scroll tracking when navigating to new page
            hasScrolled = false;
            lastScrollY = window.scrollY;

            // Disconnect previous observers
            observer.disconnect();

            // Small delay to ensure DOM is updated after navigation
            setTimeout(() => {
                // Observe all elements with animation classes
                const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale');
                animatedElements.forEach(el => observer.observe(el));

                // Make landing section visible by default when on home page
                const landingSection = document.querySelector('.landing-section');
                if (landingSection) {
                    landingSection.classList.add('animate');
                }
            }, 50);
        };

        // Initialize animations when location changes
        initializeAnimations();

        return () => observer.disconnect();
    }, [location.pathname]);

    return (
        <div className="app-container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/deals" element={<Deals />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <Router>
                <AppContent />
            </Router>
            <BackToTop />
        </ThemeProvider>
    );
}

export default App;