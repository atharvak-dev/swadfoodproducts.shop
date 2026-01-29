import { JsonLd } from '../../components/SEO';
import { SEOHead } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Award, BookOpen, ChefHat, Utensils, Wheat } from 'lucide-react';

export function ThalipeethGuide() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Thalipeeth Bhajani: Complete Guide to Maharashtra's Traditional Multigrain Flour",
        "description": "Discover the authentic story of Thalipeeth Bhajani - from ancient Maratha warrior kitchens to modern nutrition. Ingredients, roasting science, and regional variations explained.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Thalipeeth.jpg/800px-Thalipeeth.jpg",
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
            "@id": "https://swadfoodproducts.shop/knowledge/thalipeeth-bhajani-complete-guide"
        },
        "articleSection": "Traditional Indian Cuisine",
        "keywords": "Thalipeeth, Bhajani, Multigrain Flour, Maharashtrian Breakfast",
        "wordCount": "2100",
        "inLanguage": "en-IN"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What's the difference between Thalipeeth Bhajani and regular multigrain flour?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Thalipeeth Bhajani is pre-roasted, which denatures enzymes causing rancidity and extends shelf life. Regular multigrain flour is raw."
                }
            },
            {
                "@type": "Question",
                "name": "Can I make Thalipeeth with regular wheat flour?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Technically yes, but it won't be authentic. It lacks the nutritional synergy and textural interplay of the traditional 8-12 grain blend."
                }
            },
            {
                "@type": "Question",
                "name": "Is Thalipeeth Bhajani gluten-free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Traditional formulations contain wheat (12-15%), so no. Swad can prepare custom gluten-free variants upon request."
                }
            },
            {
                "@type": "Question",
                "name": "Can diabetics eat Thalipeeth?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it has a low-to-medium GI (~55-60) compared to white bread (~75), but portion control is key."
                }
            }
        ]
    };

    const recipeSchema = {
        "@context": "https://schema.org",
        "@type": "Recipe",
        "name": "Traditional Maharashtrian Thalipeeth",
        "author": { "@type": "Organization", "name": "Swad Food Products" },
        "description": "A savory, spiced multigrain flatbread made from roasted Thalipeeth Bhajani.",
        "prepTime": "PT10M",
        "cookTime": "PT15M",
        "totalTime": "PT25M",
        "recipeYield": "4 servings",
        "recipeCategory": "Breakfast",
        "recipeCuisine": "Maharashtrian",
        "keywords": "Thalipeeth, Bhajani, Multigrain Flatbread",
        "recipeIngredient": [
            "2 cups Swad Thalipeeth Bhajani",
            "1/2 cup finely chopped onions",
            "2-3 green chilies, minced",
            "1/4 cup fresh coriander leaves",
            "1/4 cup yogurt",
            "1/2 tsp turmeric powder"
        ],
        "recipeInstructions": [
            { "@type": "HowToStep", "text": "Mix Bhajani with ingredients and water to form a soft dough." },
            { "@type": "HowToStep", "text": "Rest for 10 minutes." },
            { "@type": "HowToStep", "text": "Flatten dough on a greased tava with wet fingers." },
            { "@type": "HowToStep", "text": "Make a hole in the center, drizzle ghee, and cook till golden brown." }
        ]
    };

    return (
        <>
            <SEOHead
                title="Thalipeeth Bhajani: Complete Guide | Swad Heritage"
                description="Discover the authentic story of Thalipeeth Bhajani - from ancient Maratha warrior kitchens to modern nutrition."
                type="article"
            />
            <JsonLd schema={articleSchema} />
            <JsonLd schema={faqSchema} />
            <JsonLd schema={recipeSchema} />

            <main className="min-h-screen bg-stone-50 font-sans text-gray-800">
                {/* Breadcrumb */}
                <nav className="bg-white border-b border-stone-200 py-4 px-4 sticky top-16 z-10 md:top-20">
                    <div className="max-w-4xl mx-auto flex items-center text-sm text-gray-500">
                        <Link to="/" className="hover:text-amber-700">Home</Link>
                        <span className="mx-2">/</span>
                        <Link to="/knowledge" className="hover:text-amber-700">Knowledge Base</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-medium">Thalipeeth Bhajani Guide</span>
                    </div>
                </nav>

                <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">Heritage Series</span>
                            <span className="bg-stone-200 text-stone-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">Read Time: 12 min</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6 leading-tight">
                            Thalipeeth Bhajani: Complete Guide to Maharashtra's Traditional Multigrain Flour
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 italic font-serif mb-8 border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/50">
                            "From Maratha warrior rations to modern superfood—how this 400-year-old multigrain roast remains the ultimate comfort food."
                        </p>
                        <figure className="mb-8 relative rounded-2xl overflow-hidden shadow-xl aspect-[2/1] border border-stone-100">
                            <img
                                src="/images/heritage/thalipeeth-hero.png"
                                alt="Rustic wooden bowl filled with amber Bhajani flour, traditional chakki in background"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </figure>
                        <div className="flex items-center text-sm text-gray-500 border-t border-b border-stone-200 py-4">
                            <div className="flex items-center mr-6">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>Updated: Jan 30, 2026</span>
                            </div>
                            <div className="flex items-center mr-6">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span>Origin: Rural Maharashtra</span>
                            </div>
                            <div className="flex items-center">
                                <Award className="w-4 h-4 mr-2" />
                                <span>FSSAI Certified Analysis</span>
                            </div>
                        </div>
                    </header>

                    {/* Section 1: Definition */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <BookOpen className="w-6 h-8 mr-3 text-amber-600" />
                            What is Thalipeeth Bhajani?
                        </h2>
                        <div className="prose prose-lg prose-stone max-w-none text-gray-700">
                            <p className="font-medium text-lg mb-4">
                                Thalipeeth Bhajani is a pre-roasted multigrain flour blend originating from rural Maharashtra, traditionally used to prepare Thalipeeth—a savory, spiced flatbread that served as sustenance for Maratha warriors during the 17th century Deccan campaigns.
                            </p>
                            <p className="mb-4">
                                The term "Bhajani" derives from the Marathi word "bhajane" (भजणे), meaning "to roast," referring to the critical dry-roasting process that gives this flour its distinctive nutty aroma and extended shelf life. Unlike single-grain flours, Thalipeeth Bhajani combines 8-12 different grains, lentils, and spices, each contributing specific nutritional and flavor profiles.
                            </p>
                            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 my-6">
                                <h3 className="font-bold text-lg text-amber-900 mb-2">Key Characteristic</h3>
                                <p className="text-amber-800">
                                    The flour is characterized by its coarse texture, dark amber color, and complex flavor profile. Traditional preparation involves individually roasting each component before stone-grinding them together—a labor-intensive process that modern commercial mills often shortcut.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Historical Context */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Historical & Cultural Significance</h2>
                        <div className="prose prose-lg prose-stone max-w-none text-gray-700">
                            <h3 className="text-xl font-bold mt-4 mb-2">Origins in Maratha Military Cuisine</h3>
                            <p>
                                Thalipeeth Bhajani's creation is intrinsically linked to the Maratha Empire's military logistics under Chhatrapati Shivaji Maharaj (1630-1680). Historical accounts reference "sattvic paratha prepared from mixed grains" as standard provisions for foot soldiers (mavle). Its genius lies in shelf stability—roasted grains resist moisture and insect infestation.
                            </p>
                            <h3 className="text-xl font-bold mt-6 mb-2">Regional Variations</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Brahmin Community (Konkan & Desh):</strong> Emphasizes digestibility. Includes rice, wheat, sorghum, pearl millet, finger millet, chickpea, and minimal spices.</li>
                                <li><strong>Maratha/Kunbi (Marathwada & Vidarbha):</strong> Heartier blend with higher millet ratios (barley, black gram) and robust spices.</li>
                                <li><strong>Coastal/Malvani:</strong> Incorporates coconut and rice in higher proportions.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3: Ingredient Science */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <Wheat className="w-8 h-8 mr-3 text-amber-600" />
                            The Science of Grain Blending
                        </h2>
                        <img
                            src="https://placehold.co/800x500/fcd34d/78350f?text=Ingredient+Closeup+(Bajra,+Jowar...)"
                            alt="Individual grains laid out (bajra, jowar, nachni, etc.) with labels"
                            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md mb-8"
                        />
                        <div className="overflow-x-auto mb-8 shadow-sm rounded-lg border border-stone-200">
                            <table className="w-full text-left bg-white text-sm md:text-base">
                                <thead className="bg-stone-100 text-stone-900 font-bold">
                                    <tr>
                                        <th className="p-4 border-b">Ingredient</th>
                                        <th className="p-4 border-b">% Blend</th>
                                        <th className="p-4 border-b">Nutritional Role</th>
                                        <th className="p-4 border-b hidden md:table-cell">Flavor Contribution</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-100">
                                    <tr>
                                        <td className="p-4 font-medium">Pearl Millet (Bajra)</td>
                                        <td className="p-4">20-25%</td>
                                        <td className="p-4">Iron, magnesium, fiber</td>
                                        <td className="p-4 hidden md:table-cell">Nutty, slightly sweet</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Sorghum (Jowar)</td>
                                        <td className="p-4">18-20%</td>
                                        <td className="p-4">Protein, B-vitamins</td>
                                        <td className="p-4 hidden md:table-cell">Mild, earthy</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Finger Millet (Nachni)</td>
                                        <td className="p-4">15-18%</td>
                                        <td className="p-4">Calcium, amino acids</td>
                                        <td className="p-4 hidden md:table-cell">Deep, malty</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Wheat (Gahu)</td>
                                        <td className="p-4">12-15%</td>
                                        <td className="p-4">Gluten structure</td>
                                        <td className="p-4 hidden md:table-cell">Mild sweetness</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Rice (Tandul)</td>
                                        <td className="p-4">10-12%</td>
                                        <td className="p-4">Binding, texture</td>
                                        <td className="p-4 hidden md:table-cell">Neutral, crisp</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium">Chickpea (Chana)</td>
                                        <td className="p-4">8-10%</td>
                                        <td className="p-4">Protein, folate</td>
                                        <td className="p-4 hidden md:table-cell">Rich, beany</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100 mb-8">
                            <h3 className="font-bold text-lg text-green-900 mb-2">Nutritional Synergy</h3>
                            <p className="text-green-800 text-sm">
                                <strong>Complete Protein:</strong> By combining chickpea (high lysine) with millets (high methionine), Thalipeeth creates a complete protein profile comparable to animal sources.
                                <br /><br />
                                <strong>Glycemic Control:</strong> High fiber from millets + protein from chickpea slows glucose absorption (GI ~55), preventing sugar spikes.
                            </p>
                        </div>
                    </section>

                    {/* Section 4: Process */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <ChefHat className="w-8 h-8 mr-3 text-amber-600" />
                            Roasting & Grinding: The "Bhajani" Secret
                        </h2>
                        <div className="mb-8">
                            <img
                                src="https://placehold.co/800x500/78350f/fbbf24?text=Chakki+Grinding+Process"
                                alt="Chakki grinding stones in action, showing coarse texture"
                                className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg border border-stone-200"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="prose prose-stone">
                                <h3 className="font-bold text-lg">Traditional 3-Step Roasting</h3>
                                <ol className="list-decimal pl-5 space-y-2">
                                    <li><strong>Grains (160°C):</strong> Roasted until golden. Creates nutty Maillard flavors.</li>
                                    <li><strong>Ledumes (180°C):</strong> Roasted until they 'crack'. Denatures anti-nutrients.</li>
                                    <li><strong>Spices (Low Heat):</strong> Lightly tossed to awaken volatile oils without burning.</li>
                                </ol>
                                <p className="mt-4">
                                    <strong>The Chakki Advantage:</strong> Swad uses granite stone mills at low RPM (32°C output). Machine pulverizers hit 80°C, destroying the omega-3s in sesame and flax.
                                </p>
                            </div>
                            <div className="bg-stone-100 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                                <div className="text-5xl mb-4">🌡️</div>
                                <p className="font-bold text-stone-700">Swad Stone Mill: 35°C</p>
                                <p className="text-xs text-stone-500 mb-4">(Preserves Nutrients)</p>
                                <div className="w-full h-px bg-stone-300 my-2"></div>
                                <p className="font-bold text-red-700 mt-4">Industrial Hammer Mill: 80°C</p>
                                <p className="text-xs text-red-500">(Burns Essential Oils)</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Recipe */}
                    <section className="mb-12 bg-white shadow-lg rounded-2xl overflow-hidden border border-amber-100">
                        <div className="bg-amber-600 p-6 text-white">
                            <h2 className="text-2xl font-bold flex items-center">
                                <Utensils className="w-6 h-6 mr-3" />
                                Classic Thalipeeth Recipe
                            </h2>
                        </div>
                        <img
                            src="https://placehold.co/800x600/f59e0b/ffffff?text=Finished+Thalipeeth+on+Tava"
                            alt="Thalipeeth on cast-iron tava, dollop of butter, steam rising"
                            className="w-full h-64 md:h-96 object-cover"
                        />
                        <div className="p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-bold text-stone-900 mb-4 border-b border-amber-200 pb-2">Ingredients</h3>
                                    <ul className="space-y-2 text-stone-700">
                                        <li>• 2 cups Swad Thalipeeth Bhajani</li>
                                        <li>• 1/2 cup finely chopped onion</li>
                                        <li>• 2-3 green chilies, minced</li>
                                        <li>• 1/4 cup fresh coriander</li>
                                        <li>• 1/4 cup yogurt (binding agent)</li>
                                        <li>• 1/2 tsp turmeric & salt to taste</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-900 mb-4 border-b border-amber-200 pb-2">Method</h3>
                                    <ol className="list-decimal pl-5 space-y-2 text-stone-700">
                                        <li>Mix all ingredients with water to form a soft, sticky dough.</li>
                                        <li>Rest for 10 mins to hydrate grains.</li>
                                        <li>Flatten dough on a greased tava (or parchment paper) using wet fingers.</li>
                                        <li><strong>Key Step:</strong> Make a hole in the center for even cooking and steam release.</li>
                                        <li>Cook 3-4 mins per side with ghee until crispy.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 6: Serving & Pairing */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <Utensils className="w-8 h-8 mr-3 text-amber-600" />
                            Perfect Pairings
                        </h2>
                        <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
                            <p className="mb-4 text-lg">
                                Thalipeeth is traditionally served with a dollop of white butter (Loni) and spicy accompaniments to offset the nuttiness.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h4 className="font-bold text-red-700 mb-2">For Heat Lovers</h4>
                                    <p className="text-sm text-gray-600 mb-2">Pair with fiery <Link to="/products?search=thecha" className="text-amber-600 hover:underline font-semibold">Green Chili Thecha</Link> or dry <Link to="/products?search=lasun" className="text-amber-600 hover:underline font-semibold">Lasun (Garlic) Chutney</Link>.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <h4 className="font-bold text-orange-700 mb-2">Mild Option</h4>
                                    <p className="text-sm text-gray-600">Fresh homemade yogurt or white butter enhances the grain flavors.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 7: FAQ */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                                <h3 className="font-bold text-lg mb-2 text-amber-900">Difference from regular multigrain flour?</h3>
                                <p className="text-stone-600">Thalipeeth Bhajani is <strong>pre-roasted</strong>. This creates a nutty flavor and extends shelf life. Regular flour is raw.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                                <h3 className="font-bold text-lg mb-2 text-amber-900">Can I use Bhajani for other dishes?</h3>
                                <p className="text-stone-600">While Bhajani is specific to roasted flatbreads, if you're looking for fermented pancakes, check out our <Link to="/knowledge/amboli-pith-fermented-rice-flour-guide" className="text-amber-600 hover:underline">Complete Guide to Amboli</Link>.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                                <h3 className="font-bold text-lg mb-2 text-amber-900">Why the hole in the center?</h3>
                                <p className="text-stone-600">It prevents the Thalipeeth from puffing up like a puri (keeping it dense and chewy) and ensures even cooking in the thick center.</p>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="bg-amber-900 text-amber-50 rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-serif font-bold mb-4">Taste the Heritage</h2>
                        <p className="text-lg md:text-xl text-amber-200 mb-8 max-w-2xl mx-auto">
                            Be amazed by the nutty aroma of 12 roasted grains. Freshly stone-ground in Pune.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            <Link to="/products?product=thalipeeth-bhajani" className="bg-white text-amber-900 px-8 py-3 rounded-full font-bold hover:bg-amber-50 transition-colors shadow-lg">
                                Shop Thalipeeth Bhajani
                            </Link>
                            <img
                                src="https://placehold.co/400x400/transparent/png?text=Product+Pack"
                                alt="Swad Thalipeeth Bhajani packet"
                                className="w-32 h-32 md:w-48 md:h-48 object-contain bg-white rounded-lg p-2 shadow-2xl transform rotate-3"
                            />
                        </div>
                        <p className="text-sm text-amber-400 mt-6 tracking-wider uppercase">FSSAI Lic No. XXXXXXXXXX | 100% Preservative Free</p>
                    </div>

                </article>
            </main>
        </>
    );
}
