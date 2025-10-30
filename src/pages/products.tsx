import product1 from '../assets/Product1.png';
import product2 from '../assets/Product2.png';
import product3 from '../assets/Product3.png';
import product4 from '../assets/Product4.png';
import product5 from '../assets/Product5.png';
import product6 from '../assets/Product6.png';

export const featuredProducts = [
    {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        imageUrl: product1,
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
        imageUrl: product2,
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
        imageUrl: product3,
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
        imageUrl: product4,
        price: '$149.99',
        originalPrice: '$199.99',
        rating: 4.6,
        reviews: 312,
        affiliateLink: 'https://www.amazon.com/dp/B08P2F3G4K',
        category: 'Home & Garden',
        badge: 'Popular',
    },
    {
        id: '5',
        name: 'Wireless Headphones',
        badge: 'Sale',
        imageUrl: product5,
        rating: 4.0,
        reviews: 15,
        price: '$59.99',
        originalPrice: '$79.99',
        category: 'Headphones',
        affiliateLink: 'https://example.com/headphones'
    },
    {
        id: '6',
        name: 'Mechanical Keyboard',
        imageUrl: product6,
        rating: 4.8,
        reviews: 60,
        price: '$129.99',
        originalPrice: '$149.99',
        category: 'Keyboards',
        affiliateLink: 'https://example.com/mechanical-keyboard'
    },
];
