import { JsonLd } from '../../components/SEO';
import { SEOHead } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Clock, MapPin, BookOpen, Utensils, Sun, Flame, History } from 'lucide-react';

export function KokaniWadeGuide() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Kokani Wade (Vada): Complete Guide to Coastal Maharashtra's Traditional Spiced Lentil Fritters",
        "description": "Master the art of Kokani Wade - crispy lentil fritters from Maharashtra's Konkan coast. Explore the pre-mixed batter blend, regional techniques, and cultural significance.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Vade_sagoti.jpg/800px-Vade_sagoti.jpg",
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
            "@id": "https://swadfoodproducts.shop/knowledge/kokani-wade-vada-coastal-maharashtra-guide"
        },
        "articleSection": "Traditional Indian Snacks",
        "keywords": "Kokani Wade, Vade, Malvani Food, Lentil Fritters",
        "wordCount": "1500",
        "inLanguage": "en-IN"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why are my Wade dense and not fluffy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Common causes: Over-watery batter (prevents air retention), under-fermentation, or using old urad dal. Fix: Thicken with rice flour and ferment longer."
                }
            },
            {
                "@type": "Question",
                "name": "Can I make Wade without fermentation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, using the instant-rise method: Add yogurt + baking soda to the batter and rest for 15 minutes. Swad's Pith works for both methods."
                }
            },
            {
                "@type": "Question",
                "name": "What makes Kokani Wade different from Medu Vada?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kokani Wade has a softer interior, irregular crispy exterior, includes coconut in the batter, and is spiced with curry leaves/chilies. Medu Vada is ring-shaped, uniformly crisp, and uses pepper/ginger."
                }
            }
        ]
    };

    const recipeSchema = {
        "@context": "https://schema.org",
        "@type": "Recipe",
        "name": "Traditional Kokani Wade",
        "author": { "@type": "Organization", "name": "Swad Food Products" },
        "description": "Crispy, fluffy fermented lentil fritters from the Konkan coast.",
        "prepTime": "PT6H",
        "cookTime": "PT20M",
        "totalTime": "PT6H20M",
        "recipeYield": "20 Wade",
        "recipeCategory": "Snack",
        "recipeCuisine": "Maharashtrian",
        "keywords": "Kokani Wade, Vade, Vada, Lentil Fritter",
        "recipeIngredient": [
            "2 cups Urad Dal (or Swad Wade Pith)",
            "1/4 cup Rice",
            "3/4 cup Grated Coconut",
            "4-5 Green Chilies",
            "Curry Leaves",
            "Optional: Yogurt for instant version"
        ],
        "recipeInstructions": [
            { "@type": "HowToStep", "text": "Mix Wade Pith with water to form thick batter." },
            { "@type": "HowToStep", "text": "Fold in fresh coconut, chilies, and curry leaves." },
            { "@type": "HowToStep", "text": "Ferment 4 hours (or use instant method with yogurt)." },
            { "@type": "HowToStep", "text": "Drop golf-ball sized batter into hot oil." },
            { "@type": "HowToStep", "text": "Fry until deep golden brown." }
        ]
    };

    return (
        <>
            <SEOHead
                title="Kokani Wade Guide: The Art of Coastal Fritters | Swad Heritage"
                description="Crispy outside, fluffy inside. Learn the secret of authentic Kokani Wade - microbiology, frying science, and traditions."
                type="article"
            />
            <JsonLd schema={articleSchema} />
            <JsonLd schema={faqSchema} />
            <JsonLd schema={recipeSchema} />

            <main className="min-h-screen bg-orange-50 font-sans text-gray-800">
                {/* Breadcrumb */}
                <nav className="bg-white border-b border-orange-200 py-4 px-4 sticky top-16 z-10 md:top-20">
                    <div className="max-w-4xl mx-auto flex items-center text-sm text-gray-500">
                        <Link to="/" className="hover:text-orange-700">Home</Link>
                        <span className="mx-2">/</span>
                        <Link to="/knowledge" className="hover:text-orange-700">Knowledge Base</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-medium">Kokani Wade Guide</span>
                    </div>
                </nav>

                <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">

                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">Heritage Series</span>
                            <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">Snack Culture</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6 leading-tight">
                            Kokani Wade: Complete Guide to Coastal Maharashtra's Traditional Spiced Lentil Fritters
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 italic font-serif mb-8 border-l-4 border-orange-500 pl-4 py-2 bg-orange-50/50">
                            "From fisherman's breakfast to wedding feast—the story of the perfectly imperfect, craggy, fluffy fritter."
                        </p>
                        <figure className="mb-8 relative rounded-2xl overflow-hidden shadow-xl aspect-[2/1] border border-stone-100">
                            <img
                                src="/images/heritage/kokani-wade-hero.png"
                                alt="Golden Wade in woven basket, coastal beach background"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </figure>
                        <div className="flex items-center text-sm text-gray-500 border-t border-b border-orange-200 py-4">
                            <div className="flex items-center mr-6">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>Updated: Jan 30, 2026</span>
                            </div>
                            <div className="flex items-center mr-6">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span>Origin: Konkan Coast</span>
                            </div>
                            <div className="flex items-center">
                                <History className="w-4 h-4 mr-2" />
                                <span>300+ Year History</span>
                            </div>
                        </div>
                    </header>

                    {/* Section 1: Definition */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <BookOpen className="w-6 h-8 mr-3 text-orange-600" />
                            What are Kokani Wade?
                        </h2>
                        <div className="prose prose-lg prose-orange max-w-none text-gray-700">
                            <p className="font-medium text-lg mb-4">
                                Kokani Wade (also spelled Vada) are **crispy-exterior, fluffy-interior lentil fritters** originating from the Konkan coastal region. Made from a fermented batter of Urad Dal and spices, they are traditionally deep-fried to a golden craggy perfection.
                            </p>
                            <p>
                                Unlike the symmetric, ring-shaped South Indian Medu Vada, Kokani Wade are hand-dropped, resulting in irregular shapes that catch the chutney perfectly. They are defined by the generous use of <strong>fresh coconut</strong> and strong notes of green chili and curry leaves.
                            </p>
                            <img
                                src="https://placehold.co/1000x400/ea580c/ffffff?text=Kokani+Wade+vs+Medu+Vada+Comparison"
                                alt="Side-by-side visual differences: Wade (puffy, irregular) vs Medu Vada (ring, uniform)"
                                className="my-4 rounded-lg shadow-sm border border-stone-200 w-full"
                            />
                        </div>
                    </section>

                    {/* Section 2: Science & Ingredients */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <Sun className="w-8 h-8 mr-3 text-orange-600" />
                            The Science of Texture
                        </h2>
                        <img
                            src="https://placehold.co/800x500/ea580c/ffffff?text=Texture+Cross-Section+(Fluffy+Inside,+Crisp+Outside)"
                            alt="Wade cut in half showing fluffy interior vs. crisp exterior"
                            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md mb-8"
                        />
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm">
                                <h3 className="font-bold text-xl text-orange-900 mb-4">Protein Network</h3>
                                <p className="text-gray-700 mb-3">
                                    Urad Dal proteins act like gluten when whipped. They trap air bubbles and fermentation gases, creating a spongy "crumb" inside the fritter.
                                </p>
                                <p className="text-gray-500 text-sm italic">Key: Whip the batter to aerate it before frying.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm">
                                <h3 className="font-bold text-xl text-orange-900 mb-4">Crispness Chemistry</h3>
                                <p className="text-gray-700 mb-3">
                                    The addition of <strong>10-15% Rice Flour</strong> provides amylopectin starch. This gelatinizes at the surface during frying, creating a glass-like crunch that protects the soft interior.
                                </p>
                            </div>
                        </div>

                        <div className="overflow-x-auto shadow-sm rounded-lg border border-stone-200">
                            <table className="w-full text-left bg-white text-sm md:text-base">
                                <thead className="bg-orange-50 text-orange-900 font-bold">
                                    <tr>
                                        <th className="p-4 border-b">Ingredient</th>
                                        <th className="p-4 border-b">Role</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-orange-50">
                                    <tr>
                                        <td className="p-4 font-medium">Urad Dal</td>
                                        <td className="p-4">Structure, Protein, Fluffiness</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Parboiled Rice</td>
                                        <td className="p-4">Crispness (Amylopectin starch)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Fresh Coconut</td>
                                        <td className="p-4">Moisture, Sweetness, "Lace" texture</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Curry Leaves</td>
                                        <td className="p-4">Aroma (essential oils release in hot oil)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Section 3: Recipes */}
                    <section className="mb-12 bg-white shadow-lg rounded-2xl overflow-hidden border border-orange-100">
                        <div className="bg-orange-600 p-6 text-white flex justify-between items-center">
                            <h2 className="text-2xl font-bold flex items-center">
                                <Utensils className="w-6 h-6 mr-3" />
                                Two Ways to Make It
                            </h2>
                        </div>
                        <img
                            src="https://placehold.co/800x600/ea580c/ffffff?text=Finished+Wade+Feast"
                            alt="Wade on banana leaf with coconut chutney, curry leaves garnish"
                            className="w-full h-64 md:h-96 object-cover"
                        />
                        <div className="p-8">
                            <div className="grid md:grid-cols-2 gap-8 divide-x-0 md:divide-x divide-orange-100">
                                <div className="pr-0 md:pr-4">
                                    <h3 className="text-xl font-bold text-orange-900 mb-2">1. Traditional Fermented</h3>
                                    <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Time: 4-6 Hours</p>
                                    <ol className="list-decimal pl-5 space-y-2 text-stone-700">
                                        <li>Mix Pith with water to thick batter.</li>
                                        <li><strong>Ferment</strong> for 4 hours in warm spot.</li>
                                        <li>Fold in coconut/spices gently.</li>
                                        <li>Fry (batter will be airy/light).
                                            <img
                                                src="https://placehold.co/800x500/ea580c/fed7aa?text=Frying+Action"
                                                alt="Hand dropping batter into hot oil"
                                                className="my-3 rounded-lg shadow-sm w-full h-40 object-cover"
                                            />
                                        </li>
                                    </ol>
                                    <p className="mt-4 text-green-600 text-sm font-bold">✓ Best flavor depth</p>
                                </div>
                                <div className="pl-0 md:pl-4 mt-8 md:mt-0">
                                    <h3 className="text-xl font-bold text-orange-900 mb-2">2. Instant Quick-Rise</h3>
                                    <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Time: 20 Mins</p>
                                    <ol className="list-decimal pl-5 space-y-2 text-stone-700">
                                        <li>Mix Pith with water.</li>
                                        <li>Add <strong>2 tbsp Yogurt</strong> + <strong>Pinch Soda</strong>.</li>
                                        <li>Rest 15 mins (chemical rise).</li>
                                        <li>Fry immediately.</li>
                                    </ol>
                                    <p className="mt-4 text-blue-600 text-sm font-bold">✓ Best convenience</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-orange-50 p-4 text-center text-orange-800 text-sm">
                            <strong>Pro Tip:</strong> Oil temperature is key (170°C). If too cold, Wade absorb oil. If too hot, inside stays raw.
                        </div>
                    </section>

                    {/* Section 4: Serving Suggestions */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <Utensils className="w-8 h-8 mr-3 text-orange-600" />
                            How to Serve
                        </h2>
                        <div className="bg-white p-6 rounded-lg border border-orange-100 shadow-sm">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg text-orange-900 mb-2">The Classic Combo</h4>
                                    <p className="text-stone-700 mb-4">
                                        Wade are inseparable from <strong>Chicken Curry</strong> or <strong>Mutton Rassa</strong>. The fluffy interior soaks up the gravy while the crust stays crunchy.
                                    </p>
                                    <h4 className="font-bold text-lg text-orange-900 mb-2">Vegetarian Options</h4>
                                    <ul className="list-disc pl-5 text-stone-600 space-y-1">
                                        <li>With Kala Vatana Sambar (Black Pea Curry)</li>
                                        <li>With <Link to="/products?search=solkadhi" className="text-orange-700 hover:underline font-medium">Solkadhi</Link> (Kokum Curry)</li>
                                        <li>With <Link to="/products?search=chutney" className="text-orange-700 hover:underline font-medium">Coconut Chutney</Link></li>
                                    </ul>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-lg text-sm text-stone-600 max-w-xs">
                                    <strong>Did you know?</strong> The fermentation science in Wade is very similar to <Link to="/knowledge/amboli-pith-fermented-rice-flour-guide" className="text-orange-700 hover:underline">Amboli Pith</Link>, just cooked differently!
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: FAQ */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                                <h3 className="font-bold text-lg mb-2 text-orange-900">Difference from Thalipeeth?</h3>
                                <p className="text-stone-600">
                                    Kokani Wade are deep-fried and fermented (fluffy). <Link to="/knowledge/thalipeeth-bhajani-complete-guide" className="text-orange-700 hover:underline">Thalipeeth</Link> is a shallow-fried multigrain flatbread (dense/crispy) made from roasted flour.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                                <h3 className="font-bold text-lg mb-2 text-orange-900">Why are my Wade oily?</h3>
                                <p className="text-stone-600">Likely low oil temperature or thin batter. Ensure oil sizzles immediately when a drop of batter hits it. Thicken batter with rice flour if needed.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                                <h3 className="font-bold text-lg mb-2 text-orange-900">Can I make it Gluten-Free?</h3>
                                <p className="text-stone-600">Yes! Traditional Wade is Urad + Rice. It's naturally GF. Just ensure no cross-contamination in the frying oil.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                                <h3 className="font-bold text-lg mb-2 text-orange-900">Storage?</h3>
                                <p className="text-stone-600">Best eaten hot. Leftovers can be refrigerated for 2 days and reheated in an oven/air fryer (microwave makes them soggy).</p>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="bg-orange-900 text-orange-50 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-serif font-bold mb-4">Master the Coastal Crunch</h2>
                            <p className="text-lg md:text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
                                No grinding, no soaking. Swad's Pith gives you the perfect Urad-Rice ratio for authentic Kokani Wade.
                            </p>
                            <div className="flex flex-col md:flex-row justify-center gap-4">
                                <Link to="/products?product=kokani-wade-pith" className="bg-white text-orange-900 px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition-colors">
                                    Shop Kokani Wade Pith
                                </Link>
                                <img
                                    src="https://placehold.co/400x400/transparent/png?text=Wade+Pack"
                                    alt="Swad Kokani Wade Pith packet"
                                    className="w-32 h-32 md:w-48 md:h-48 object-contain bg-white rounded-lg p-2 shadow-2xl transform rotate-3"
                                />
                            </div>
                        </div>
                        <Flame className="absolute -bottom-10 -left-10 text-orange-800 w-64 h-64 opacity-20" />
                    </div>

                </article>
            </main>
        </>
    );
}
