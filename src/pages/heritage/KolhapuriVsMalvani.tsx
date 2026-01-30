import { JsonLd } from '../../components/SEO';
import { SEOHead } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Scale, Flame, Waves, Swords } from 'lucide-react';

export function KolhapuriVsMalvaniGuide() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Kolhapuri vs. Malvani Masala: The Ultimate Spicy Showdown",
        "description": "The definitive comparison between Kolhapuri (Ghats) and Malvani (Coastal) masalas. Heat levels, ingredient differences (Triphal vs Sesame), and culinary uses explained.",
        "image": "https://m.media-amazon.com/images/I/71wE5T+u+nL._SL1500_.jpg",
        "datePublished": "2026-01-30T00:00:00+05:30",
        "dateModified": "2026-01-30T00:00:00+05:30",
        "author": {
            "@type": "Organization",
            "name": "Swad Food Products",
            "url": "https://swadfoodproducts.shop"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Swad Food Products",
            "logo": {
                "@type": "ImageObject",
                "url": "https://swadfoodproducts.shop/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://swadfoodproducts.shop/knowledge/kolhapuri-vs-malvani"
        },
        "articleSection": "Indiam Spices",
        "keywords": "Kolhapuri Masala, Malvani Masala, Spicy Food, Indian Curries",
        "wordCount": "1200",
        "inLanguage": "en-IN"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Which is spicier: Kolhapuri or Malvani?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kolhapuri is scientifically hotter due to the use of Lavangi and Byadgi chilies and higher sesame content which conducts heat. Malvani is spicy but balanced by coconut and the numbing sensation of Triphal."
                }
            },
            {
                "@type": "Question",
                "name": "What is the key ingredient difference?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The differentiator is Triphal (Sichuan Pepper) in Malvani masala, which provides a citrusy, numbing aroma. Kolhapuri relies on Lavangi chilies and poppy seeds/sesame for thick, spicy gravies."
                }
            }
        ]
    };

    return (
        <>
            <SEOHead
                title="Kolhapuri vs Malvani Masala: The Battle of Spicy | Swad Heritage"
                description="Ghats vs Coast. Sesame vs Coconut. Lavangi vs Triphal. Understand the real difference between Maharashtra's legendary spice blends."
                keywords={['Kolhapuri Masala', 'Malvani Masala', 'Triphal', 'Spicy Indian Food', 'Maharashtrian Cuisine']}
                type="article"
            />
            <JsonLd schema={articleSchema} />
            <JsonLd schema={faqSchema} />

            <main className="min-h-screen bg-orange-50 font-sans text-gray-800 pt-24">
                {/* Breadcrumb */}
                <nav className="bg-white border-b border-orange-200 py-4 px-4 sticky top-[64px] lg:top-[80px] z-10">
                    <div className="max-w-4xl mx-auto flex items-center text-sm text-gray-500">
                        <Link to="/" className="hover:text-orange-700">Home</Link>
                        <span className="mx-2">/</span>
                        <Link to="/knowledge" className="hover:text-orange-700">Knowledge Base</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-medium">Kolhapuri vs Malvani</span>
                    </div>
                </nav>

                <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">

                    {/* Header Section */}
                    <header className="mb-12 text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-6">
                            <Swords className="w-8 h-8 text-red-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6 leading-tight">
                            The Great Debate: Kolhapuri vs. Malvani
                        </h1>
                        <p className="text-xl text-gray-700 max-w-2xl mx-auto italic font-serif mb-8">
                            Two legendary regions. Two distinct philosophies of heat. One state united by spice.
                        </p>
                        <div className="flex justify-center gap-4 text-sm font-bold tracking-wide uppercase">
                            <span className="bg-red-600 text-white px-4 py-1.5 rounded-full">Heat</span>
                            <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full">Aroma</span>
                            <span className="bg-amber-500 text-white px-4 py-1.5 rounded-full">Culture</span>
                        </div>
                    </header>

                    {/* The Tale of Two Terroirs */}
                    <section className="mb-12 grid md:grid-cols-2 gap-8">
                        {/* Kolhapuri Card */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-red-700 transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="p-8">
                                <div className="flex items-center mb-4">
                                    <Flame className="w-8 h-8 text-red-600 mr-2" />
                                    <h2 className="text-2xl font-bold text-gray-900">Kolhapuri Masala</h2>
                                </div>
                                <p className="font-bold text-red-800 mb-2 uppercase text-sm tracking-wider">The Warrior of the Ghats</p>
                                <p className="text-gray-600 mb-6">
                                    Born in the rugged Sahyadri ranges. Kolhapuri cuisine was designed for Maratha warriors—meat-heavy, bold, and unapologetically spicy. It aims to make you sweat.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-700 bg-red-50 p-4 rounded-lg">
                                    <li><strong>Key Spice:</strong> Lavangi Chili (High Scoville)</li>
                                    <li><strong>Base:</strong> Dried Coconut & Sesame</li>
                                    <li><strong>Flavor Profile:</strong> Sharp, Dry Heat, Garlicky</li>
                                    <li><strong>Best For:</strong> Mutton Rassa, Veg Kolhapuri</li>
                                </ul>
                            </div>
                        </div>

                        {/* Malvani Card */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-8 border-orange-500 transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="p-8">
                                <div className="flex items-center mb-4">
                                    <Waves className="w-8 h-8 text-orange-500 mr-2" />
                                    <h2 className="text-2xl font-bold text-gray-900">Malvani Masala</h2>
                                </div>
                                <p className="font-bold text-orange-800 mb-2 uppercase text-sm tracking-wider">The Soul of the Coast</p>
                                <p className="text-gray-600 mb-6">
                                    From the Konkan coast (Sindhudurg). Malvani cuisine reflects the sea—incorporating fresh coconut and tangy kokum. It's spicy but complex, often used with seafood.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-700 bg-orange-50 p-4 rounded-lg">
                                    <li><strong>Key Spice:</strong> Triphal (Sichuan Pepper cousin)</li>
                                    <li><strong>Base:</strong> Fresh/Dry Coconut & Stone Flower</li>
                                    <li><strong>Flavor Profile:</strong> Citrusy, Numbing, Sweet-Hot</li>
                                    <li><strong>Best For:</strong> Fish Curry, Chicken Malvani</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* The Comparison Table */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <Scale className="w-8 h-8 mr-3 text-orange-600" />
                            Head-to-Head Comparison
                        </h2>
                        <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-orange-100">
                            <table className="w-full text-left">
                                <thead className="bg-orange-100 text-orange-900 uppercase text-xs tracking-wider">
                                    <tr>
                                        <th className="p-4 border-b">Feature</th>
                                        <th className="p-4 border-b text-red-700">Kolhapuri</th>
                                        <th className="p-4 border-b text-orange-600">Malvani</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                                    <tr>
                                        <td className="p-4">Color</td>
                                        <td className="p-4 text-red-600">Deep Rusty Red</td>
                                        <td className="p-4 text-orange-600">Darkish Red-Brown</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">Signature Ingredient</td>
                                        <td className="p-4">Lavangi Chili (Heat)</td>
                                        <td className="p-4">Triphal (Aroma/Numbing)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">Coconut Use</td>
                                        <td className="p-4">Dried (Sukhya Kobara)</td>
                                        <td className="p-4">Both Dry & Fresh (often added wet)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">Texture</td>
                                        <td className="p-4">Powdered</td>
                                        <td className="p-4">Slightly coarse / fibrous</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">Heat Level (1-10)</td>
                                        <td className="p-4">9/10</td>
                                        <td className="p-4">7/10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* The Triphal Factor */}
                    <section className="mb-12 bg-gray-900 text-gray-100 rounded-3xl p-8 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold mb-4 text-orange-400">The Secret Weapon: Triphal (Tirphal)</h2>
                            <p className="text-lg leading-relaxed mb-6 text-gray-300">
                                What makes Malvani Masala impossible to replicate? <strong>Triphal</strong> (Zanthoxylum rhetsa). A cousin of the Sichuan Peppercorn, it doesn't add heat. It adds a <em>numbing, citrusy sensation</em> that cuts through the fat of coconut milk and richness of fish.
                            </p>
                            <p className="text-sm text-gray-400 border-l-2 border-orange-500 pl-4">
                                *Triphal is rarely used in Kolhapuri cuisine, which prefers the pungent direct heat of chilies and garlic.*
                            </p>
                        </div>
                        <div className="absolute right-0 top-0 opacity-10 transform translate-x-10 -translate-y-10">
                            <Waves className="w-64 h-64" />
                        </div>
                    </section>

                    {/* Swad Difference CTA */}
                    <div className="bg-white border-2 border-dashed border-red-200 rounded-2xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't Decide? Try Both.</h3>
                        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                            Experience the diversity of Maharashtra. We pound our spices in small batches to preserve the distinct 'lavangi' heat and 'triphal' aroma.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/products?product=kolhapuri-masala" className="px-6 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-200">
                                Shop Kolhapuri Masala
                            </Link>
                            <Link to="/products?product=malvani-masala" className="px-6 py-3 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200">
                                Shop Malvani Masala
                            </Link>
                        </div>
                    </div>

                </article>
            </main>
        </>
    );
}
