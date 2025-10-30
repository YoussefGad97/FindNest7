import React from 'react';

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
    return (
        <div className="home-container">
            <section className="categories-section animate-on-scroll">
                <div className="container">
                    <h1 className="section-title">Shop by Category</h1>
                    <p className="section-subtitle">Explore our wide range of product categories</p>
                    <div className="categories-grid categories-page-grid">
                        {categories.map((category, index) => (
                            <div key={category.id} className={`category-card animate-scale`} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="category-icon">{category.icon}</div>
                                <h3 className="category-name">{category.name}</h3>
                                <p className="category-description">{category.description}</p>
                                <p className="category-count">{category.count} products</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Categories;
