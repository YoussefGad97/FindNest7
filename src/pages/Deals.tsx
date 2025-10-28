import React from 'react';

const deals = [
    {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        imageUrl: 'https://via.placeholder.com/300x300',
        originalPrice: '$129.99',
        dealPrice: '$89.99',
        discount: '31%',
        rating: 4.5,
        reviews: 234,
        affiliateLink: 'https://www.amazon.com/dp/B08N1M9GDM',
        category: 'Electronics',
        timeLeft: '2 days',
    },
    {
        id: 2,
        name: 'Smart Fitness Watch',
        imageUrl: 'https://via.placeholder.com/300x300',
        originalPrice: '$249.99',
        dealPrice: '$199.99',
        discount: '20%',
        rating: 4.7,
        reviews: 189,
        affiliateLink: 'https://www.amazon.com/dp/B08J5F3G4H',
        category: 'Sports',
        timeLeft: '5 hours',
    },
    {
        id: 3,
        name: 'Organic Skincare Set',
        imageUrl: 'https://via.placeholder.com/300x300',
        originalPrice: '$99.99',
        dealPrice: '$79.99',
        discount: '20%',
        rating: 4.8,
        reviews: 156,
        affiliateLink: 'https://www.amazon.com/dp/B08K2F3M4N',
        category: 'Beauty',
        timeLeft: '1 day',
    },
    {
        id: 4,
        name: 'Coffee Maker Deluxe',
        imageUrl: 'https://via.placeholder.com/300x300',
        originalPrice: '$199.99',
        dealPrice: '$149.99',
        discount: '25%',
        rating: 4.6,
        reviews: 312,
        affiliateLink: 'https://www.amazon.com/dp/B08P2F3G4K',
        category: 'Home & Garden',
        timeLeft: '3 days',
    },
];

const Deals: React.FC = () => {
    return (
        <div className="home-container">
            <section className="products-section animate-on-scroll">
                <div className="container">
                    <h1 className="section-title">Hot Deals</h1>
                    <p className="section-subtitle">Limited time offers on top products</p>
                    <div className="products-grid">
                        {deals.map((deal, index) => (
                            <div key={deal.id} className={`product-card animate-scale`} style={{ animationDelay: `${index * 0.15}s` }}>
                                <div className="product-badge deal-badge">{deal.discount} OFF</div>
                                <div className="deal-timer">⏰ {deal.timeLeft} left</div>
                                <img src={deal.imageUrl} alt={deal.name} className="product-image" />
                                <div className="product-info">
                                    <h3 className="product-name">{deal.name}</h3>
                                    <div className="product-rating">
                                        <span className="stars">{'★'.repeat(Math.floor(deal.rating))}{'☆'.repeat(5 - Math.floor(deal.rating))}</span>
                                        <span className="rating-text">{deal.rating} ({deal.reviews})</span>
                                    </div>
                                    <div className="product-pricing">
                                        <span className="deal-price">{deal.dealPrice}</span>
                                        <span className="original-price">{deal.originalPrice}</span>
                                    </div>
                                    <p className="product-category">{deal.category}</p>
                                    <a href={deal.affiliateLink} target="_blank" rel="noopener noreferrer" className="product-link">
                                        Shop Deal
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

export default Deals;