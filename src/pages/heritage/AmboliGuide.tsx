import { JsonLd } from '../../components/SEO';
import { SEOHead } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Clock, MapPin, BookOpen, Utensils, FlaskConical, Waves, Microscope } from 'lucide-react';

export function AmboliGuide() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Amboli Pith: Complete Guide to Konkan's Traditional Fermented Rice-Lentil Flour",
        "description": "Discover Amboli Pith - the pre-fermented flour blend behind Maharashtra's iconic breakfast crepe. Learn the microbiology, regional variations, and traditional preparation methods.",
        "image": "https://i.ytimg.com/vi/QZz1q2zXm0o/maxresdefault.jpg",
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
            "@id": "https://swadfoodproducts.shop/knowledge/amboli-pith-fermented-rice-flour-guide"
        },
        "articleSection": "Traditional Indian Cuisine",
        "keywords": "Amboli, Konkani Food, Fermented Breakfast, Amboli Recipe",
        "wordCount": "1600",
        "inLanguage": "en-IN"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What's the difference between Amboli and Dosa?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Amboli is Konkan's 'fluffy pancake' (thick, spongy, made from urad+rice, fermented 8-12h), while Dosa is South India's 'crispy crepe' (thin, typically made from urad+rice+toor, fermented 12-24h)."
                }
            },
            {
                "@type": "Question",
                "name": "Why didn't my Amboli batter ferment?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Common causes: Low temp (<20°C), chlorinated water (kills bacteria), or old flour. Tip: Add 1-2 tbsp yogurt to jumpstart fermentation."
                }
            },
            {
                "@type": "Question",
                "name": "Is Amboli healthy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! It's probiotic (rich in LAB cultures), has a lower GI (~55-60) than white rice due to fermentation, and is naturally gluten-free."
                }
            }
        ]
    };

    const recipeSchema = {
        "@context": "https://schema.org",
        "@type": "Recipe",
        "name": "Classic Konkani Amboli",
        "author": { "@type": "Organization", "name": "Swad Food Products" },
        "description": "A soft, spongy, fermented savory crepe from the Konkan coast.",
        "prepTime": "PT6H",
        "cookTime": "PT15M",
        "totalTime": "PT6H15M",
        "recipeYield": "4 servings",
        "recipeCategory": "Breakfast",
        "recipeCuisine": "Maharashtrian",
        "keywords": "Amboli, Fermented Crepe, Konkani Breakfast",
        "recipeIngredient": [
            "2 cups Swad Amboli Pith",
            "2.5 cups water",
            "Salt to taste",
            "1 tsp sugar (optional)"
        ],
        "recipeInstructions": [
            { "@type": "HowToStep", "text": "Mix Amboli Pith with water to form a thick batter." },
            { "@type": "HowToStep", "text": "Ferment in a warm place for 4-6 hours until bubbly." },
            { "@type": "HowToStep", "text": "Pour ladleful on greased tava, spread thick (5mm)." },
            { "@type": "HowToStep", "text": "Cover and cook 2-3 minutes until fluffy and golden." }
        ]
    };

    return (
        <>
            <SEOHead
                title="Amboli Pith: Konkan's Fermented Superfood Guide | Swad"
                description="Discover Amboli - the ancient probiotic breakfast of the Konkan coast. Microbiology, variants, and recipes explained."
                type="article"
            />
            <JsonLd schema={articleSchema} />
            <JsonLd schema={faqSchema} />
            <JsonLd schema={recipeSchema} />

            <main className="min-h-screen bg-emerald-50 font-sans text-gray-800">
                {/* Breadcrumb */}
                <nav className="bg-white border-b border-emerald-200 py-4 px-4 sticky top-16 z-10 md:top-20">
                    <div className="max-w-4xl mx-auto flex items-center text-sm text-gray-500">
                        <Link to="/" className="hover:text-emerald-700">Home</Link>
                        <span className="mx-2">/</span>
                        <Link to="/knowledge" className="hover:text-emerald-700">Knowledge Base</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-medium">Amboli Pith Guide</span>
                    </div>
                </nav>

                <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">

                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">Heritage Series</span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">Gut Health</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6 leading-tight">
                            Amboli Pith: Complete Guide to Konkan's Tradtional Fermented Rice-Lentil Flour
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 italic font-serif mb-8 border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/50">
                            "More than just a pancake—Amboli is ancient biotechnology. 500 years of probiotic wisdom in every bite."
                        </p>
                        <figure className="mb-8 relative rounded-2xl overflow-hidden shadow-xl aspect-[2/1] border border-stone-100">
                            <img
                                src="/images/heritage/amboli-hero.png"
                                alt="Fermented batter with visible bubbles in glass bowl"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </figure>
                        <div className="flex items-center text-sm text-gray-500 border-t border-b border-emerald-200 py-4">
                            <div className="flex items-center mr-6">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>Updated: Jan 30, 2026</span>
                            </div>
                            <div className="flex items-center mr-6">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span>Origin: Konkan Coast</span>
                            </div>
                            <div className="flex items-center">
                                <Microscope className="w-4 h-4 mr-2" />
                                <span>Lab Tested Bacteria</span>
                            </div>
                        </div>
                    </header>

                    {/* Section 1: Definition */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <BookOpen className="w-6 h-8 mr-3 text-emerald-600" />
                            What is Amboli Pith?
                        </h2>
                        <div className="prose prose-lg prose-emerald max-w-none text-gray-700">
                            <p className="font-medium text-lg mb-4">
                                Amboli Pith is a **pre-fermented flour blend** consisting primarily of parboiled rice (*ukda tandul*) and split black gram (*urad dal*). It is the base for Amboli—a soft, spongy, fermented savory crepe that is the breakfast staple of Maharashtra's Konkan coastal region.
                            </p>
                            <p>
                                The word "Amboli" derives from the Sanskrit *āmra-valli* ("sour creeper"), referencing the characteristic tangy flavor developed through natural fermentation. This is not an instant mix; it involves a controlled fermentation process where *Lactobacillus* bacteria metabolize starches to create organic acids (tang) and CO₂ (fluffiness).
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Microbiology */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <FlaskConical className="w-8 h-8 mr-3 text-emerald-600" />
                            The Science of Fermentation
                        </h2>
                        <img
                            src="https://placehold.co/800x500/10b981/ffffff?text=Microscopy+Visual+(LAB+Bacteria)"
                            alt="Illustrated diagram of LAB bacteria"
                            className="w-full h-48 object-cover rounded-lg mb-8 shadow-sm"
                        />
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-sm">
                                <h3 className="font-bold text-xl text-emerald-900 mb-4">Why Ferment?</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-emerald-500 mr-2">✓</span>
                                        <div><strong>Flavor:</strong> Lactic acid creates the signature complex sourness.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-500 mr-2">✓</span>
                                        <div><strong>Texture:</strong> CO₂ bubbles create the honeycomb "jaali" (sponginess).</div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-500 mr-2">✓</span>
                                        <div><strong>Nutrition:</strong> Increases Vitamin B12 and Iron bioavailability by 60%.</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-emerald-900 text-emerald-50 p-6 rounded-xl">
                                <h3 className="font-bold text-xl mb-4 text-emerald-300">Swad's Innovation</h3>
                                <p className="mb-4 text-sm leading-relaxed">
                                    We use a unique <strong>"Dormant Spore Technology"</strong>. We partially ferment the batter to develop the culture, then spray-dry it at low temps (45°C).
                                </p>
                                <p className="text-sm font-semibold border-t border-emerald-700 pt-4">
                                    Result: The bacteria "wake up" when you add water, ensuring authentic fermentation every time without the 24-hour wait.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="mb-8 mt-8">
                        <img
                            src="https://placehold.co/1000x400/065f46/ffffff?text=Fermentation+Timeline+(0hr+-+4hr+-+8hr)"
                            alt="Fermentation Journey: 0hrs -> 4hrs -> 8hrs"
                            className="w-full rounded-xl shadow-lg border border-emerald-50"
                        />
                    </div>
                    {/* Ingredient Table */}
                    <div className="mt-8 overflow-x-auto shadow-sm rounded-lg border border-stone-200">
                        <table className="w-full text-left bg-white text-sm md:text-base">
                            <thead className="bg-emerald-50 text-emerald-900 font-bold">
                                <tr>
                                    <th className="p-4 border-b">Ingredient</th>
                                    <th className="p-4 border-b">% Blend</th>
                                    <th className="p-4 border-b">Role</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-emerald-50">
                                <tr>
                                    <td className="p-4 font-medium">Parboiled Rice (Ukda Tandul)</td>
                                    <td className="p-4">65-70%</td>
                                    <td className="p-4">Carb source for bacteria; structure</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">Urad Dal (Black Gram)</td>
                                    <td className="p-4">20-25%</td>
                                    <td className="p-4">Protein; mucilage traps gas bubbles</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-medium">Fenugreek (Methi)</td>
                                    <td className="p-4">1-2%</td>
                                    <td className="p-4">Aids fermentation; flavor complexity</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Section 3: Recipe */}
                <section className="mb-12 bg-white shadow-lg rounded-2xl overflow-hidden border border-blue-100">
                    <div className="bg-blue-600 p-6 text-white">
                        <h2 className="text-2xl font-bold flex items-center">
                            <Utensils className="w-6 h-6 mr-3" />
                            Classic Konkani Amboli Recipe
                        </h2>
                    </div>
                    <img
                        src="https://placehold.co/800x600/2563eb/ffffff?text=Finished+Amboli+Stack"
                        alt="Stack of 3 Amboli with coconut chutney, sol kadhi in glass"
                        className="w-full h-64 md:h-96 object-cover"
                    />
                    <div className="p-8">
                        <div className="prose prose-stone max-w-none">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-blue-900">Ingredients</h3>
                                    <ul className="list-disc pl-5">
                                        <li>2 cups Swad Amboli Pith</li>
                                        <li>2.5 cups water</li>
                                        <li>Salt (if needed)</li>
                                        <li>1 tsp sugar (optional, feeds bacteria)</li>
                                    </ul>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-blue-900">Process</h3>
                                    <ol className="list-decimal pl-5 space-y-2">
                                        <li><strong>Mix:</strong> Whisk Pith and water to a thick pancake batter consistency.</li>
                                        <li><strong>Ferment:</strong> Leave in a warm spot for 4-6 hours. Look for bubbles/rise.</li>
                                        <li>
                                            <strong>Cook:</strong> Pour on greased tava. Do not spread thin like dosa! Keep it 5mm thick.
                                            <img
                                                src="https://placehold.co/800x500/2563eb/dbeafe?text=Pouring+Action"
                                                alt="Pouring batter onto hot tava, creating circular Amboli"
                                                className="my-3 rounded-lg shadow-sm w-full h-40 object-cover"
                                            />
                                        </li>
                                        <li><strong>Steam:</strong> Cover with lid. Cook 2-3 mins until fluffy.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Serving Suggestions */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <Utensils className="w-8 h-8 mr-3 text-emerald-600" />
                        How to Serve
                    </h2>
                    <div className="bg-white p-6 rounded-lg border border-emerald-100 shadow-sm">
                        <p className="mb-4 text-stone-700 text-lg">
                            In Konkan homes, Amboli is never eaten alone. It acts as a sponge for flavorful wet curries.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-emerald-900 mb-2">Vegetarian Pairings</h4>
                                <ul className="list-disc pl-5 text-stone-600 space-y-1">
                                    <li>With <Link to="/products?search=chutney" className="text-emerald-700 hover:underline font-medium">Coconut Chutney</Link> (Oli Chutney)</li>
                                    <li>With Kala Vatana Sambar (Black Pea Curry)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-emerald-900 mb-2">Non-Veg Pairings</h4>
                                <ul className="list-disc pl-5 text-stone-600 space-y-1">
                                    <li>With Malvani Chicken Curry</li>
                                    <li>With Egg Curry (Anda Masala)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: FAQ */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                            <h3 className="font-bold text-lg mb-2 text-emerald-900">Amboli vs Thalipeeth?</h3>
                            <p className="text-stone-600">
                                Amboli is fermented (rice+dal) and soft like a pancake. <Link to="/knowledge/thalipeeth-bhajani-complete-guide" className="text-emerald-700 hover:underline">Thalipeeth</Link> is made from roasted multigrain flour and is savory/nutty.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                            <h3 className="font-bold text-lg mb-2 text-emerald-900">Similar to Kokani Wade?</h3>
                            <p className="text-stone-600">
                                Yes, both use Urad pulse fermentation base! <Link to="/knowledge/kokani-wade-vada-coastal-maharashtra-guide" className="text-emerald-700 hover:underline">Kokani Wade</Link> are deep-fried fritters, whereas Amboli is pan-cooked.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                            <h3 className="font-bold text-lg mb-2 text-emerald-900">My batter didn't ferment. Why?</h3>
                            <p className="text-stone-600">Likely too cold (&lt;20°C) or chlorinated water. Try putting it in a turned-off oven with the light on.</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-emerald-900 text-emerald-50 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-serif font-bold mb-4">Start Your Fermentation Journey</h2>
                        <p className="text-lg md:text-xl text-emerald-200 mb-8 max-w-2xl mx-auto">
                            Experience the magic of microbes. Authentic, stone-ground, and pre-cultured for success.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            <Link to="/products?product=amboli-pith" className="bg-white text-emerald-900 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors">
                                Shop Amboli Pith
                            </Link>
                            <img
                                src="https://placehold.co/400x400/transparent/png?text=Amboli+Pack"
                                alt="Swad Amboli Pith packet"
                                className="w-32 h-32 md:w-48 md:h-48 object-contain bg-white rounded-lg p-2 shadow-2xl transform -rotate-3"
                            />
                        </div>
                        <p className="text-sm text-emerald-400 mt-6 tracking-wider uppercase">Makes 12-15 Amboli per pack</p>
                    </div>
                    <Waves className="absolute -bottom-10 -right-10 text-emerald-800 w-64 h-64 opacity-20" />
                </div>

            </article>
        </main >
        </>
    );
}
