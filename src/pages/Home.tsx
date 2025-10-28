import React from 'react';
import LandingImage from '../assets/Landing.jpg';

const categories = [
    { id: 1, name: 'Electronics', icon: '📱', count: 150 },
    { id: 2, name: 'Home & Garden', icon: '🏠', count: 89 },
    { id: 3, name: 'Fashion', icon: '👕', count: 120 },
    { id: 4, name: 'Sports', icon: '⚽', count: 75 },
    { id: 5, name: 'Books', icon: '📚', count: 200 },
    { id: 6, name: 'Beauty', icon: '💄', count: 95 },
];

const featuredProducts = [
    {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        imageUrl: 'https://via.placeholder.com/300x300',
        price: '$89.99',
        originalPrice: '$129.99',
        rating: 4.5,
        reviews: 234,
        affiliateLink: 'https://www.amazon.com/dp/B08N1M9GDM',
        category: 'Electronics',
        badge: 'Best Seller',
    },
    {
        id: 2,
        name: 'Smart Fitness Watch',
        imageUrl: 'https://via.placeholder.com/300x300',
        price: '$199.99',
        originalPrice: '$249.99',
        rating: 4.7,
        reviews: 189,
        affiliateLink: 'https://www.amazon.com/dp/B08J5F3G4H',
        category: 'Sports',
        badge: 'Trending',
    },
    {
        id: 3,
        name: 'Organic Skincare Set',
        imageUrl: 'https://via.placeholder.com/300x300',
        price: '$79.99',
        originalPrice: '$99.99',
        rating: 4.8,
        reviews: 156,
        affiliateLink: 'https://www.amazon.com/dp/B08K2F3M4N',
        category: 'Beauty',
        badge: 'Top Rated',
    },
    {
        id: 4,
        name: 'Coffee Maker Deluxe',
        imageUrl: 'https://via.placeholder.com/300x300',
        price: '$149.99',
        originalPrice: '$199.99',
        rating: 4.6,
        reviews: 312,
        affiliateLink: 'https://www.amazon.com/dp/B08P2F3G4K',
        category: 'Home & Garden',
        badge: 'Popular',
    },
];

const Home: React.FC = () => {
    return (
        <div className="home-container">
            {/* Landing Section */}
            <section className="landing-section animate-on-scroll">
                <div className="landing-content">
                    <h1 className="landing-title">Discover Amazing Products</h1>
                    <p className="landing-subtitle">Find the best deals and recommendations from top brands</p>
                    <button className="cta-button">Shop Now</button>
                </div>
                <div className="landing-image">
                    <img src={LandingImage} alt="Amazing products" />
                </div>
            </section>

            {/* Categories Section */}
            <section className="categories-section animate-slide-left">
                <div className="container">
                    <h2 className="section-title">Shop by Category</h2>
                    <div className="categories-grid">
                        {categories.map((category, index) => (
                            <div key={category.id} className={`category-card animate-scale`} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="category-icon">{category.icon}</div>
                                <h3 className="category-name">{category.name}</h3>
                                <p className="category-count">{category.count} products</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="products-section animate-slide-right" id="products">
                <div className="container">
                    <h2 className="section-title">Featured Products</h2>
                    <div className="products-grid">
                        {featuredProducts.map((product, index) => (
                            <div key={product.id} className={`product-card animate-scale`} style={{ animationDelay: `${index * 0.15}s` }}>
                                {product.badge && <div className="product-badge">{product.badge}</div>}
                                <img src={product.imageUrl} alt={product.name} className="product-image" />
                                <div className="product-info">
                                    <h3 className="product-name">{product.name}</h3>
                                    <div className="product-rating">
                                        <span className="stars">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</span>
                                        <span className="rating-text">{product.rating} ({product.reviews})</span>
                                    </div>
                                    <div className="product-pricing">
                                        <span className="current-price">{product.price}</span>
                                        <span className="original-price">{product.originalPrice}</span>
                                    </div>
                                    <p className="product-category">{product.category}</p>
                                    <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer" className="product-link">
                                        View on Amazon
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;