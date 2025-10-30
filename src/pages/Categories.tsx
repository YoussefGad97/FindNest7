import React, { useState } from 'react';
import { featuredProducts } from './products';

const categories = [
    { id: 1, name: 'Electronics', icon: '📱', count: 150, description: 'Latest gadgets and tech accessories' },
    { id: 2, name: 'Home & Garden', icon: '🏠', count: 89, description: 'Everything for your home and garden' },
    { id: 3, name: 'Fashion', icon: '👕', count: 120, description: 'Trendy clothing and accessories' },
    { id: 4, name: 'Sports', icon: '⚽', count: 75, description: 'Sports equipment and activewear' },
    { id: 5, name: 'Books', icon: '📚', count: 200, description: 'Books for all interests and ages' },
    { id: 6, name: 'Beauty', icon: '💄', count: 95, description: 'Beauty and personal care products' },
    { id: 7, name: 'Automotive', icon: '🚗', count: 65, description: 'Car parts and automotive accessories' },
    { id: 8, name: 'Health', icon: '🏥', count: 110, description: 'Health and wellness products' },
];

const Categories: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryClick = (categoryName: string) => {
        setSelectedCategory(categoryName);
    };

    const filteredProducts = selectedCategory
        ? featuredProducts.filter(product => product.category === selectedCategory)
        : featuredProducts;

    return (
        <div className="categories-page-container">
            <aside className="filters-sidebar">
                <h2 className="filters-title">Categories</h2>
                <ul className="filters-list">
                    <li
                        className={`filter-item ${selectedCategory === null ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(null)}
                    >
                        All
                    </li>
                    {categories.map(category => (
                        <li
                            key={category.id}
                            className={`filter-item ${selectedCategory === category.name ? 'active' : ''}`}
                            onClick={() => handleCategoryClick(category.name)}
                        >
                            {category.name}
                        </li>
                    ))}
                </ul>
            </aside>
            <main className="products-gallery">
                <h1 className="section-title">
                    {selectedCategory ? `${selectedCategory} Products` : 'All Products'}
                </h1>
                <div className="products-grid categories-product-grid">
                    {filteredProducts.map((product, index) => (
                        <div key={product.id} className={`product-card animate-scale`} style={{ animationDelay: `${index * 0.1}s` }}>
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
            </main>
        </div>
    );
};

export default Categories;
