import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { SEOHead } from '../components/SEO';

const GUIDES = [
    {
        id: 'goda-masala',
        title: 'The Art of Goda Masala',
        description: 'Discover the rich history and traditional preparation methods of Maharashtra\'s signature spice blend.',
        link: '/knowledge/goda-masala',
        image: '/goda-masala.jpg',
        readTime: '5 min read',
        category: 'Spice Blends'
    },
    {
        id: 'thalipeeth',
        title: 'Thalipeeth Bhajani Guide',
        description: 'A complete guide to the multigrain roasted flour that powers the ultimate Maharashtrian breakfast.',
        link: '/knowledge/thalipeeth-bhajani-complete-guide',
        image: '/Thalipeeth.jpg',
        readTime: '6 min read',
        category: 'Traditional Flours'
    },
    {
        id: 'kolhapuri-malvani',
        title: 'Kolhapuri vs Malvani Masala',
        description: 'Understand the nuanced differences between these two legendary coastal spice blends.',
        link: '/knowledge/kolhapuri-vs-malvani',
        image: '/Kolhapuri_Masala.jpg',
        readTime: '4 min read',
        category: 'Regional Comparison'
    },
    {
        id: 'amboli',
        title: 'Amboli Pith: Fermented Goodness',
        description: 'Complete guide to fermented rice-lentil flour and its probiotic benefits.',
        link: '/knowledge/amboli-pith-fermented-rice-flour-guide',
        image: '/amboli-bhaji.jpg',
        readTime: '5 min read',
        category: 'Fermented Foods'
    },
    {
        id: 'kokani-wade',
        title: 'Secrets of Kokani Wade',
        description: 'Master the art of making fluffy, crispy multigrain fritters for a traditional Sunday feast.',
        link: '/knowledge/kokani-wade-vada-coastal-maharashtra-guide',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Komdi_vade.jpg',
        readTime: '4 min read',
        category: 'Traditional Recipes'
    }
];

export function Knowledge() {
    return (
        <>
            <SEOHead
                title="Culinary Knowledge Hub | Swad Food Products"
                description="Explore our complete guide to traditional Maharashtrian cuisine, ingredients, and preparation methods."
                url="/knowledge"
            />

            <div className="min-h-screen bg-surface-50 pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-900 mb-6">
                                Culinary Knowledge Hub
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Dive deep into the heritage of Maharashtrian cuisine. Learn about the ingredients,
                                techniques, and stories behind our traditional products.
                            </p>
                        </motion.div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {GUIDES.map((guide, index) => (
                            <motion.article
                                key={guide.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-warm transition-all duration-300 border border-gray-100 flex flex-col h-full group"
                            >
                                {/* Image */}
                                <Link to={guide.link} className="block relative aspect-video overflow-hidden">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                                    <img
                                        src={guide.image}
                                        alt={guide.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-700 uppercase tracking-wide">
                                            {guide.category}
                                        </span>
                                    </div>
                                </Link>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                                        <BookOpen className="w-4 h-4" />
                                        <span>Guide</span>
                                        <span>•</span>
                                        <Clock className="w-4 h-4" />
                                        <span>{guide.readTime}</span>
                                    </div>

                                    <Link to={guide.link} className="block mb-3">
                                        <h2 className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                                            {guide.title}
                                        </h2>
                                    </Link>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                        {guide.description}
                                    </p>

                                    <Link
                                        to={guide.link}
                                        className="inline-flex items-center text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors group/link"
                                    >
                                        Read Full Guide
                                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* New to traditional cooking section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 bg-secondary-900 rounded-3xl p-8 md:p-12 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                                    New to Traditional Cooking?
                                </h3>
                                <p className="text-gray-300 max-w-xl">
                                    Start with our curated "Join Us" section to explore recipes, community stories, and more ways to incorporate heritage foods into your modern lifestyle.
                                </p>
                            </div>
                            <Link
                                to="/join-us"
                                className="px-8 py-4 bg-white text-secondary-900 rounded-xl font-bold hover:bg-primary-50 transition-colors flex items-center"
                            >
                                Join Our Community
                                <ChevronRight className="w-5 h-5 ml-2" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
