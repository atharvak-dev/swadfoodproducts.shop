import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title?: string;
    description?: string;
    keywords?: readonly string[];
    image?: string;
    url?: string;
    type?: 'website' | 'product' | 'article';
    noIndex?: boolean;
    // Product-specific
    product?: {
        price: number;
        currency?: string;
        availability?: 'in stock' | 'out of stock';
        category?: string;
    };
}

const BASE_URL = 'https://swadfoodproducts.shop';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;
const SITE_NAME = 'Swad Food Products';

// Target keywords for the business
const BRAND_KEYWORDS = [
    'Swad Food Products',
    'Maharashtrian spices',
    'authentic Pune masala',
    'stone ground spices',
    'Chakki ground masala',
    'traditional ladoos',
    'Besan ladoo Pune',
    'Goda masala',
    'Kanda lasun masala',
    'homemade ladoo online',
    'FSSAI certified spices',
    'women empowerment food',
];

/**
 * SEOHead Component
 * Manages all meta tags, Open Graph, Twitter Cards, and keywords
 * 
 * Usage:
 * <SEOHead 
 *   title="Product Name"
 *   description="Product description..."
 *   keywords={['keyword1', 'keyword2']}
 * />
 */
export function SEOHead({
    title,
    description,
    keywords = [],
    image = DEFAULT_IMAGE,
    url,
    type = 'website',
    noIndex = false,
    product,
}: SEOHeadProps) {
    // Construct full title with brand suffix
    const fullTitle = title
        ? `${title} | ${SITE_NAME}`
        : `${SITE_NAME} - Authentic Maharashtrian Spices & Traditional Ladoos`;

    // Default description if not provided
    const metaDescription = description ||
        'Discover authentic Maharashtrian spices and traditional ladoos from Pune. Stone-ground (Chakki) masalas, hand-rolled sweets, FSSAI certified. Empowering rural women since 2020. Free delivery on orders above ₹500.';

    // Merge page keywords with brand keywords (dedupe)
    const allKeywords = [...new Set([...keywords, ...BRAND_KEYWORDS])];

    // Construct canonical URL
    const canonicalUrl = url ? `${BASE_URL}${url}` : BASE_URL;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={allKeywords.join(', ')} />

            {/* Robots */}
            {noIndex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            )}

            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Language & Region */}
            <meta name="language" content="English" />
            <meta name="geo.region" content="IN-MH" />
            <meta name="geo.placename" content="Pune" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type === 'product' ? 'product' : 'website'} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={image} />

            {/* Product-specific meta (for product pages) */}
            {product && (
                <>
                    <meta property="product:price:amount" content={product.price.toString()} />
                    <meta property="product:price:currency" content={product.currency || 'INR'} />
                    <meta property="product:availability" content={product.availability || 'in stock'} />
                    {product.category && (
                        <meta property="product:category" content={product.category} />
                    )}
                </>
            )}

            {/* Additional SEO signals */}
            <meta name="author" content="Swad Food Products" />
            <meta name="publisher" content="Swad Food Products" />
            <meta name="copyright" content="© 2024 Swad Food Products" />

            {/* Mobile & App */}
            <meta name="format-detection" content="telephone=yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="Swad" />

            {/* Theme colors */}
            <meta name="theme-color" content="#F97316" />
            <meta name="msapplication-TileColor" content="#F97316" />
        </Helmet>
    );
}

/**
 * Pre-configured SEO configs for each page
 */
export const PAGE_SEO = {
    home: {
        title: 'Authentic Maharashtrian Spices & Traditional Ladoos',
        description: 'Order authentic Maharashtrian spices and traditional ladoos from Pune. Stone-ground (Chakki) Goda Masala, Besan Ladoo, Ragi Pith & more. FSSAI certified, free delivery above ₹500.',
        keywords: [
            'buy Maharashtrian spices online',
            'authentic ladoo Pune',
            'Goda masala online',
            'stone ground spices India',
            'traditional Indian sweets online',
            'Pune food delivery',
        ],
        url: '/',
    },
    products: {
        title: 'Shop All Products - Spices, Ladoos & Health Foods',
        description: 'Browse our complete collection of stone-ground masalas, hand-rolled ladoos, nutritious piths, and seasonal specialties. Filter by category, sort by price. Fast delivery across India.',
        keywords: [
            'buy masala online',
            'order ladoo online Pune',
            'healthy Indian snacks',
            'Ragi pith online',
            'Nachni ladoo',
            'protein ladoo India',
            'gift box sweets Pune',
        ],
        url: '/products',
    },
    cart: {
        title: 'Your Cart',
        description: 'Review your order of authentic Maharashtrian spices and sweets. Secure checkout, multiple payment options, fast delivery.',
        keywords: [],
        url: '/cart',
        noIndex: true, // Don't index cart page
    },
    joinUs: {
        title: 'Partner With Us - Franchise & Business Opportunities',
        description: 'Join Swad Food Products as a franchise partner. Empower rural women, earn sustainable income. 500+ outlets, 2000+ women employed. Apply now for franchise opportunities in Maharashtra.',
        keywords: [
            'food franchise India',
            'spice business opportunity',
            'women empowerment franchise',
            'Pune food franchise',
            'low investment food business',
            'homemade food franchise',
        ],
        url: '/join-us',
    },
} as const;
