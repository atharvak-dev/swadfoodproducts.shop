import { JsonLd } from '../../components/SEO';
import { SEOHead } from '../../components/SEO';
import { ArrowLeft, Clock, MapPin, Award, BookOpen, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

export function GodaMasalaGuide() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Goda Masala: The Complete Guide to Maharashtra's Soul Spice",
        "description": "Discover the authentic story of Goda Masala, the heart of Maharashtrian cuisine. Explore its ingredients, traditional chakki process, and how it differs from Garam Masala.",
        "image": "https://swadfoodproducts.shop/images/heritage/goda-masala-hero.jpg",
        "datePublished": "2026-01-30T00:00:00+05:30",
        "dateModified": "2026-01-30T00:00:00+05:30",
        "author": {
            "@type": "Organization",
            "name": "Swad Food Products", // User template override
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
            "@id": "https://swadfoodproducts.shop/knowledge/goda-masala"
        },
        "articleSection": "Traditional Indian Cuisine",
        "keywords": "Goda Masala, Maharashtrian Spice, Kala Masala, Brahmin Style Masala",
        "wordCount": "1800",
        "inLanguage": "en-IN"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the difference between Goda Masala and Garam Masala?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Goda Masala is unique to Maharashtra and is characterized by the use of Stone Flower (Dagad Phool) and roasted coconut, giving it a subtle, sweet-earthy flavor ('Goda' means sweet). Garam Masala is more pungent, hotter, and lacks the coconut/stone flower base."
                }
            },
            {
                "@type": "Question",
                "name": "Why is black Goda Masala black?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The dark color comes from slowly roasting the spices (especially coriander and coconut) over low heat until they darken, and the inclusion of specific dark spices like Dagad Phool (Stone Flower). This roasting releases essential oils and deepens the flavor profile."
                }
            }
        ]
    };

    return (
        <>
            <SEOHead
                title="Goda Masala: The Complete Guide to Maharashtra's Soul Spice | Swad"
                description="Discover the authentic story of Goda Masala, from traditional Pune kitchens to your table. Ingredients, science, and cultural heritage explained."
                keywords={['Goda Masala', 'Maharashtrian spices', 'What is Goda Masala', 'Goda Masala ingredients', 'Brahmin Goda Masala', 'Chakki ground masala']}
                type="article"
            />
            <JsonLd schema={articleSchema} />
            <JsonLd schema={faqSchema} />

            <main className="min-h-screen bg-amber-50 font-sans text-gray-800">
                {/* Navigation Breadcrumb */}
                <nav className="bg-white border-b border-amber-100 py-4 px-4 sticky top-16 z-10 md:top-20">
                    <div className="max-w-4xl mx-auto flex items-center text-sm text-gray-500">
                        <Link to="/" className="hover:text-amber-700">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-medium">Heritage Series: Goda Masala</span>
                    </div>
                </nav>

                <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">

                    {/* Header Section */}
                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">Heritage Series</span>
                            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">Processing Time: 8 Hours</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6 leading-tight">
                            Goda Masala: The Complete Guide to Maharashtra's "Soul Spice"
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 italic font-serif mb-8 border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/50">
                            "If Garam Masala is the fire of Indian cooking, Goda Masala is its hearth—warm, earthy, and unmistakably welcoming."
                        </p>
                        <div className="flex items-center text-sm text-gray-500 border-t border-b border-amber-200 py-4">
                            <div className="flex items-center mr-6">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>Read Time: 12 min</span>
                            </div>
                            <div className="flex items-center mr-6">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span>Origin: Pune, Maharashtra</span>
                            </div>
                            <div className="flex items-center">
                                <Award className="w-4 h-4 mr-2" />
                                <span>Fact-Checked by Culinary Experts</span>
                            </div>
                        </div>
                    </header>

                    {/* Section 1: The Opening Definition */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <BookOpen className="w-6 h-8 mr-3 text-amber-600" />
                            What is Goda Masala?
                        </h2>
                        <div className="prose prose-lg prose-amber max-w-none text-gray-700">
                            <p className="font-medium text-lg mb-4">
                                Goda Masala is a traditional Maharashtrian spice blend distinguished by the use of stone flower (dagad phool) and roasted coconut, creating a unique sweet-earthy flavor profile that defines the region's cuisine.
                            </p>
                            <p className="mb-4">
                                The name 'Goda' translates to 'sweet' in Marathi, but this refers to the subtle sweetness of the spices (cinnamon, stone flower, coconut) rather than the addition of sugar. Unlike the pungent, heat-forward Garam Masala of North India, Goda Masala is aromatic, mild, and deeply savory. It is the foundational flavor in iconic dishes like <strong>Masale Bhat</strong> (spiced rice), <strong>Amti</strong> (sweet and sour lentils), and <strong>Bharli Vangi</strong> (stuffed baby eggplants).
                            </p>
                            <p>
                                Traditionally prepared in Brahmin and CKP (Chandraseniya Kayastha Prabhu) households across the Deccan Plateau, this "black masala" (Kala Masala) relies on a laborious process of slow-roasting individual ingredients in oil before grinding, a technique that preserves the volatile oils and lends the masala its signature dark color.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Historical & Cultural Context */}
                    <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm border border-amber-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">A Legacy of the Peshwas</h2>
                        <div className="prose prose-lg prose-amber max-w-none text-gray-700">
                            <p className="mb-4">
                                The history of Goda Masala is intertwined with the history of the Maratha Empire. In the 18th century, as the Peshwas ruled from Pune, the city became a melting pot of culture and cuisine. The need for a spice blend that could preserve ingredients and add flavor to simple vegetarian meals (specifically lentils and vegetables) led to the refinement of Goda Masala.
                            </p>
                            <p className="mb-4">
                                <strong>The Brahmin Influence:</strong> The Puneri Brahmin community, known for their satvik (pure) diet avoiding onion and garlic, relied on Goda Masala to provide depth and complexity to their food. This version typically emphasizes the roasting of coconut and the use of 'Dagad Phool' to mimic the umami that others might get from garlic.
                            </p>
                            <p className="mb-4">
                                <strong>Regional Variations:</strong> While the core remains the same, you will find differences as you travel:
                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                    <li><strong>Desh (Pune/Satara):</strong> Sweeter, milder, heavy on coconut.</li>
                                    <li><strong>Khandesh:</strong> Often fuses with 'Kala Masala' which is spicier and contains onion/garlic (though technically Goda Masala is distinct).</li>
                                    <li><strong>Vidarbha:</strong> Uses more dry coriander and linseed, resulting in a nuttier profile.</li>
                                </ul>
                            </p>
                        </div>
                    </section>

                    {/* Section 3: Ingredient Breakdown */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <ChefHat className="w-8 h-8 mr-3 text-amber-600" />
                            The Anatomy of Flavor: Ingredients & Science
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            A true Goda Masala is a symphony of 15-20 ingredients, each playing a specific functional role. It’s not just about dumping spices together; it’s about the ratio.
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-amber-100/50 text-amber-900">
                                    <tr>
                                        <th className="p-4 font-bold border-b border-amber-200">Ingredient</th>
                                        <th className="p-4 font-bold border-b border-amber-200">Flavor Role</th>
                                        <th className="p-4 font-bold border-b border-amber-200 hidden md:table-cell">The Science</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-amber-100">
                                    <tr>
                                        <td className="p-4 font-medium">Coriander Seeds (Dhane)</td>
                                        <td className="p-4">The Base (30-40%)</td>
                                        <td className="p-4 hidden md:table-cell text-gray-600 text-sm">Provides Linalool, a floral/citrus terpene that balances heavier warm spices.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Dry Coconut (Khobra)</td>
                                        <td className="p-4">Body & Richness</td>
                                        <td className="p-4 hidden md:table-cell text-gray-600 text-sm">When roasted, Maillard reaction creates nutty pyrazines. Adds natural oils for preservation.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Stone Flower (Dagad Phool)</td>
                                        <td className="p-4">Umami / Earthy</td>
                                        <td className="p-4 hidden md:table-cell text-gray-600 text-sm">A lichen containing depsides, providing a musky, mushroom-like depth essential for meat-free umami.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Sesame Seeds (Til)</td>
                                        <td className="p-4">Nutty Undertone</td>
                                        <td className="p-4 hidden md:table-cell text-gray-600 text-sm">Rich in oil, helping bind the masala and carrying fat-soluble flavor compounds.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Cassia Buds (Nagkesar)</td>
                                        <td className="p-4">Floral Pungency</td>
                                        <td className="p-4 hidden md:table-cell text-gray-600 text-sm">Adds a peppery-floral note that lingers at the back of the palate.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 mb-8">
                            <h3 className="font-bold text-lg text-orange-900 mb-2">Why "Dagad Phool" Matters</h3>
                            <p className="text-orange-800 text-sm">
                                Many commercial brands skip Dagad Phool (Black Stone Flower) because it's expensive and hard to source clean. However, without it, the masala lacks the "mysterious" earthy backdrop that makes Maharashtrian curry ("Rassa") distinct from a generic North Indian curry. At Swad, we hand-clean every batch of lichen to ensure purity.
                            </p>
                        </div>
                    </section>

                    {/* Section 4: How to Use - Culinary Applications */}
                    <section className="mb-12 bg-amber-50 rounded-3xl p-8 border border-amber-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Culinary Application: Beyond Bhaji
                        </h2>
                        <div className="prose prose-lg prose-amber text-gray-700 mb-8">
                            <p>
                                While most know it for <strong>Masale Bhat</strong>, Goda Masala is incredibly versatile. Here is the golden rule: <em>Add it at the end.</em> Since the spices are already roasted, they don't need to be cooked down like raw onion-garlic pastes.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 border-b pb-2">Recipe: Authentic Puneri Amti</h3>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1 space-y-2 text-sm md:text-base">
                                    <p><strong>Prep time:</strong> 10 mins | <strong>Cook time:</strong> 20 mins</p>
                                    <ol className="list-decimal pl-5 space-y-2 mt-2 marker:text-amber-600 marker:font-bold">
                                        <li>Boil 1 cup Toor Dal with turmeric until soft. Mash well.</li>
                                        <li>Heat ghee, add mustard seeds, cumin, curry leaves, and pinch of hing.</li>
                                        <li>Pour the mashed dal, add tamarind pulp and jaggery (Guds).</li>
                                        <li><strong>The Magic Step:</strong> Once boiling, add 2 tsp <Link to="/products?product=goda-masala" className="text-amber-700 font-bold underline decoration-amber-300">Swad Goda Masala</Link>, salt, and fresh coconut.</li>
                                        <li>Simmer for 5 mins to let the aroma bloom. Garnish with coriander.</li>
                                    </ol>
                                </div>
                                <div className="md:w-1/3 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                                    <img
                                        src="/Masale-Bhat.jpg"
                                        alt="Authentic Puneri Amti made with Goda Masala"
                                        className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: FAQ Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <details className="group bg-white rounded-lg border border-gray-200 p-4 open:ring-1 open:ring-amber-500">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg">
                                    <span>Can I substitute Goda Masala for Garam Masala?</span>
                                    <span className="transition duration-300 group-open:rotate-180">
                                        <ArrowLeft className="w-5 h-5 -rotate-90" />
                                    </span>
                                </summary>
                                <div className="text-gray-600 mt-3 group-open:animate-fadeIn">
                                    Not really. Garam Masala is 'hot' and pungent (cloves, cinnamon, pepper driven). Goda Masala is subtler, sweeter, and coconut-based. Substituting one for the other changes the entire character of a Maharashtrian dish. If you must, mix 50% Garam Masala with 50% Corainder-Cumin powder, but you will miss the 'dagad phool' magic.
                                </div>
                            </details>
                            <details className="group bg-white rounded-lg border border-gray-200 p-4 open:ring-1 open:ring-amber-500">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg">
                                    <span>How long can I store Goda Masala?</span>
                                    <span className="transition duration-300 group-open:rotate-180">
                                        <ArrowLeft className="w-5 h-5 -rotate-90" />
                                    </span>
                                </summary>
                                <div className="text-gray-600 mt-3 group-open:animate-fadeIn">
                                    Traditionally, it lasts 12 months. However, because Swad's Goda Masala contains real roasted coconut and oil, we recommend consuming it within 6-8 months for peak aroma. Store it in an airtight steel container away from direct styling sunlight.
                                </div>
                            </details>
                            <details className="group bg-white rounded-lg border border-gray-200 p-4 open:ring-1 open:ring-amber-500">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg">
                                    <span>Is Goda Masala spicy?</span>
                                    <span className="transition duration-300 group-open:rotate-180">
                                        <ArrowLeft className="w-5 h-5 -rotate-90" />
                                    </span>
                                </summary>
                                <div className="text-gray-600 mt-3 group-open:animate-fadeIn">
                                    No, 'Goda' literally implies sweet/mild. It has very little red chili. The heat in Maharashtrian food usually comes from a separate addition of  'Lal Tikhat' (Red Chili Powder) or 'Kanda Lasun Masala'. Goda Masala is purely for flavor and aroma.
                                </div>
                            </details>
                        </div>
                    </section>

                    {/* Section 6: The Swad Difference */}
                    <section className="mb-12 py-10 border-t border-gray-200">
                        <div className="text-center max-w-2xl mx-auto">
                            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Why Choose Swad's Goda Masala?</h2>
                            <p className="text-gray-600 mb-8">
                                We don't just "manufacture" masala; we curate it. Following a 70-year-old Khandeshi-Brahmin recipe, we roast every ingredient separately to its specific smoking point. We use <strong>Organic Dagad Phool</strong> and premium <strong>Byadgi Chilies</strong>. No fillers, no sawdust, no artificial colors. Just the honest taste of a Pune home.
                            </p>
                            <Link
                                to="/products?product=goda-masala"
                                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                Shop Authentic Goda Masala
                                <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                            </Link>
                        </div>
                    </section>

                    {/* Section 7: References */}
                    <footer className="text-sm text-gray-500 border-t border-gray-200 pt-8 pb-4">
                        <h4 className="font-bold mb-2 uppercase tracking-wide text-xs">References & Further Reading</h4>
                        <ul className="space-y-1">
                            <li>1. Phadke, R. (1976). <em>Ruchira: Traditional Maharashtrian Recipes</em>. Popular Prakashan.</li>
                            <li>2. Achaya, K. T. (1994). <em>Indian Food: A Historical Companion</em>. Oxford University Press.</li>
                            <li>3. Interviews with Swad Production Head (Mrs. Deshpande), Pune (2024).</li>
                        </ul>
                    </footer>

                </article>
            </main>
        </>
    );
}
