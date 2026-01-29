/**
 * SEO Schema Markup for Swad Food Products
 * $150k-grade Entity-Based SEO & GEO Optimization
 * 
 * These schemas help:
 * 1. Google Rich Results (stars, price, availability)
 * 2. AI Search Engines (Gemini, Perplexity, ChatGPT)
 * 3. Local/Regional SEO authority
 */

import { Product } from '../../types';

// ============================================
// ORGANIZATION SCHEMA (Global Brand Entity)
// ============================================
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "Store"],
    "@id": "https://swadfoodproducts.shop/#organization",
    "name": "Swad Food Products",
    "alternateName": "Swad - Authentic Maharashtrian Spices",
    "url": "https://swadfoodproducts.shop",
    "logo": {
        "@type": "ImageObject",
        "url": "https://swadfoodproducts.shop/swad-logo.png",
        "width": 600,
        "height": 600
    },
    "image": "https://swadfoodproducts.shop/og-image.jpg",

    // GEO-optimized description - defines expertise for AI crawlers
    "description": "Traditional Maharashtrian spice blends and snacks crafted using heritage methods. Stone-ground (Chakki) masalas, hand-pounded chutneys, and slow-roasted spices preserving Pune's culinary legacy since generations. FSSAI certified.",

    // Geographic authority
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ambedkar Chowk, 52, Warje",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411052",
        "addressCountry": "IN"
    },

    // Contact info (builds trust)
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9021061883",
        "contactType": "Customer Service",
        "availableLanguage": ["en", "hi", "mr"],
        "areaServed": "IN"
    },

    // Category expertise (helps AI categorization)
    "makesOffer": [
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Product",
                "name": "Traditional Maharashtrian Spice Blends",
                "category": "Spices & Seasonings"
            }
        },
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Product",
                "name": "Authentic Pune-Style Ladoos & Snacks",
                "category": "Traditional Indian Snacks"
            }
        },
        {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Product",
                "name": "Heritage Piths & Health Foods",
                "category": "Traditional Health Foods"
            }
        }
    ],

    // Social proof signals
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "156",
        "bestRating": "5",
        "worstRating": "1"
    },

    // Entity Salience - tells AI your Subject Matter Expertise
    "knowsAbout": [
        "Maharashtrian Cuisine",
        "Traditional Spice Grinding Methods",
        "Chakki Stone Grinding",
        "Pune Culinary Heritage",
        "Authentic Goda Masala",
        "Hand-Pounded Masalas",
        "Kanda Lasun Masala",
        "Traditional Ladoos",
        "Besan Ladoo",
        "Ragi Pith",
        "Nachni Pith",
        "Desi Ghee Preparations",
        "FSSAI Food Safety",
        "Women Empowerment in Food Industry"
    ],

    // Geographic service area (500km radius = all of Maharashtra)
    "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "18.5204",
            "longitude": "73.8567"
        },
        "geoRadius": "500000"
    },

    // Brand differentiation slogan
    "slogan": "Chakki-to-Kadhai: Preserving Pune's Spice Heritage",

    "foundingDate": "2020",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, UPI, Net Banking",
    "priceRange": "₹₹",

    // Social profiles for brand entity building
    "sameAs": [
        "https://www.instagram.com/swad.home.made",
        "https://www.facebook.com/swadfoods",
        "https://wa.me/919021061883"
    ],

    // Business hours
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "21:00"
        }
    ]
};

// ============================================
// PRODUCT SCHEMA GENERATOR (For PDPs)
// ============================================
// ============================================
// PRODUCT SCHEMA GENERATOR (For PDPs)
// ============================================
export function generateProductSchema(product: Product, baseUrl = 'https://swadfoodproducts.shop') {
    const productUrl = `${baseUrl}/products/${product.id}`;
    const imageUrl = product.image.startsWith('http')
        ? product.image
        : `${baseUrl}${product.image}`;

    // Get price range from variants
    const prices = product.variants.map(v => v.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        // Use full description if available, otherwise fallback
        "description": product.fullDescription
            ? product.fullDescription.replace(/## \*\*.*?\*\*/g, '').replace(/\\n/g, ' ').trim()
            : product.description,
        "image": imageUrl,
        "sku": product.id,
        "productID": product.id,

        "brand": {
            "@type": "Brand",
            "@id": "https://swadfoodproducts.shop/#organization",
            "name": "Swad Food Products"
        },

        // Price range for products with variants
        "offers": product.variants.length > 1 ? {
            "@type": "AggregateOffer",
            "lowPrice": minPrice,
            "highPrice": maxPrice,
            "priceCurrency": "INR",
            "offerCount": product.variants.length,
            "availability": "https://schema.org/InStock",
            "seller": {
                "@id": "https://swadfoodproducts.shop/#organization"
            }
        } : {
            "@type": "Offer",
            "url": productUrl,
            "priceCurrency": "INR",
            "price": minPrice,
            "priceValidUntil": "2026-12-31",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition",
            "seller": {
                "@id": "https://swadfoodproducts.shop/#organization"
            }
        },

        // Review schema (CRITICAL for trust + CTR)
        "aggregateRating": (product.avgRating && product.reviewCount) ? {
            "@type": "AggregateRating",
            "ratingValue": product.avgRating.toString(),
            "reviewCount": product.reviewCount.toString(),
            "bestRating": "5",
            "worstRating": "1"
        } : undefined,

        ...(product.reviews && product.reviews.length > 0 ? {
            "review": product.reviews.slice(0, 5).map(review => ({
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": review.authorName
                },
                "datePublished": review.date,
                "reviewBody": review.text,
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": review.rating,
                    "bestRating": "5",
                    "worstRating": "1"
                }
            }))
        } : {}),

        // Product category mapping
        "category": getCategoryName(product.category),

        // Manufacturing details (builds E-E-A-T)
        "manufacturer": {
            "@type": "Organization",
            "name": "Swad Food Products",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
            }
        },

        // Additional properties for food products (GEO optimization)
        "additionalProperty": [
            {
                "@type": "PropertyValue",
                "name": "Processing Method",
                "value": product.processingMethod || getProcessingMethod(product.category)
            },
            {
                "@type": "PropertyValue",
                "name": "Origin",
                "value": product.origin || "Pune, Maharashtra, India"
            },
            ...(product.shelfLife ? [{
                "@type": "PropertyValue",
                "name": "Shelf Life",
                "value": product.shelfLife
            }] : []),
            {
                "@type": "PropertyValue",
                "name": "Dietary Info",
                "value": "100% Vegetarian"
            },
            {
                "@type": "PropertyValue",
                "name": "Certification",
                "value": "FSSAI Certified"
            }
        ],

        // Ingredients for food products
        "nutrition": {
            "@type": "NutritionInformation",
            "ingredients": product.ingredients.join(", ")
        }
    };
}

// Helper functions
function getCategoryName(category: Product['category']): string {
    const categoryMap: Record<Product['category'], string> = {
        'ladoos': 'Traditional Indian Sweets > Ladoos',
        'piths': 'Traditional Health Foods > Grain Piths',
        'masalas': 'Spices & Seasonings > Maharashtrian Masalas',
        'seasonal': 'Seasonal Specialties > Festival Foods'
    };
    return categoryMap[category];
}

function getProcessingMethod(category: Product['category']): string {
    const methodMap: Record<Product['category'], string> = {
        'ladoos': 'Hand-Rolled, Slow-Roasted',
        'piths': 'Stone Ground (Chakki), Cold-Processed',
        'masalas': 'Stone Ground (Chakki), Sun-Dried',
        'seasonal': 'Traditional Artisanal Methods'
    };
    return methodMap[category];
}

// ============================================
// BREADCRUMB SCHEMA (Navigation)
// ============================================
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };
}

// ============================================
// FAQ SCHEMA (For conversational SEO)
// ============================================
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
}

// ============================================
// WEBSITE SEARCH ACTION (Sitelinks Search Box)
// ============================================
export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Swad Food Products",
    "url": "https://swadfoodproducts.shop",
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://swadfoodproducts.shop/products?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    }
};
