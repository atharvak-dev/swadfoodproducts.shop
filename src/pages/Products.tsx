import { useState, useMemo, useCallback, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Leaf, Award } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { LazyImage } from '../components/LazyImage';
import { cn } from '../lib/utils';
import { SEOHead, PAGE_SEO, JsonLd, generateProductSchema } from '../components/SEO';

type SortOption = 'name' | 'price-asc' | 'price-desc' | 'popular';

const CATEGORIES = [
  { id: 'all', name: 'All Products', emoji: '🍽️' },
  { id: 'ladoos', name: 'Ladoos', emoji: '🍯' },
  { id: 'piths', name: 'Traditional Piths', emoji: '🥞' },
  { id: 'masalas', name: 'Masalas', emoji: '🌶️' },
  { id: 'seasonal', name: 'Seasonal', emoji: '🌿' },
] as const;

export function Products() {
  const { addToCart } = useCart();
  const [searchParams] = useSearchParams();

  // Initialize search from URL parameter
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<number>(0);
  const [sortBy, setSortBy] = useState<SortOption>('popular');

  // Update search when URL changes
  useEffect(() => {
    const urlSearch = searchParams.get('search') || '';
    if (urlSearch !== searchQuery) {
      setSearchQuery(urlSearch);
    }
  }, [searchParams]);

  // Use custom hook for product filtering
  const { products: filteredProducts } = useProducts({
    category: selectedCategory as Product['category'] | 'all',
    searchQuery,
    sort: sortBy === 'popular' ? 'name' : sortBy === 'price-asc' ? 'price-asc' : sortBy === 'price-desc' ? 'price-desc' : 'name',
  });

  // Sort by popular (best-sellers first)
  const sortedProducts = useMemo(() => {
    if (sortBy === 'popular') {
      return [...filteredProducts].sort((a, b) =>
        (b.tags?.includes('best-seller') ? 1 : 0) - (a.tags?.includes('best-seller') ? 1 : 0)
      );
    }
    return filteredProducts;
  }, [filteredProducts, sortBy]);

  const handleAddToCart = useCallback((product: Product, variantIndex: number = 0) => {
    addToCart(product, product.variants[variantIndex]);
  }, [addToCart]);

  const handleViewDetails = useCallback((product: Product) => {
    setSelectedProduct(product);
    setSelectedVariant(0);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <SEOHead {...PAGE_SEO.products} />

      <div className="min-h-screen bg-surface-50 pt-16 pb-24 lg:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl sm:text-5xl font-bold font-serif text-secondary-900 mb-4">
              Our Products
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our authentic collection of traditional Indian foods, spices, and healthy alternatives
            </p>
          </motion.div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-primary-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent shadow-warm text-lg"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              {/* Category Filters - Horizontal Scrollable */}
              <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar w-full sm:w-auto">
                {CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={cn(
                      'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap min-h-[44px] flex items-center gap-2',
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-primary-400 to-primary-500 text-white shadow-warm'
                        : 'bg-white text-secondary-800 border border-secondary-200 hover:border-primary-300'
                    )}
                  >
                    <span>{category.emoji}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-4 py-2 bg-white border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 min-h-[44px]"
              >
                <option value="popular">Most Popular</option>
                <option value="name">Name A-Z</option>
                <option value="price-asc">Price Low to High</option>
                <option value="price-desc">Price High to Low</option>
              </select>
            </div>

            {/* Results Count */}
            <p className="text-sm text-gray-500">
              Showing {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {sortedProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {sortedProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-secondary-800 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>

        {/* Product Detail Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-end lg:items-center justify-center p-4 pb-20 md:pb-4"
              onClick={handleCloseModal}
            >
              <motion.div
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '100%', opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] md:max-h-[90vh] overflow-y-auto hide-scrollbar"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  {/* Product Schema for Rich Snippets */}
                  <JsonLd schema={generateProductSchema(selectedProduct)} />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold font-serif text-secondary-900 mb-2">
                        {selectedProduct.name}
                      </h2>
                      {selectedProduct.fullDescription ? (
                        <div className="space-y-4 text-gray-600 mt-4 h-64 overflow-y-auto pr-2 hide-scrollbar">
                          {selectedProduct.fullDescription.split('## ').map((section, idx) => {
                            if (!section.trim()) return null;
                            const [title, ...content] = section.split('\n');
                            const cleanTitle = title.replace(/\*\*/g, '').trim();
                            const cleanContent = content.join('\n').trim();

                            // Simple markdown link parser
                            const renderRichText = (text: string) => {
                              const parts = text.split(/(\[.*?\]\(.*?\))/g);
                              return parts.map((part, i) => {
                                const match = part.match(/\[(.*?)\]\((.*?)\)/);
                                if (match) {
                                  return <Link key={i} to={match[2]} className="text-saffron-700 font-bold hover:underline">{match[1]}</Link>;
                                }
                                return part;
                              });
                            };

                            return (
                              <div key={idx}>
                                {cleanTitle && <h3 className="font-semibold text-saffron-700 mb-1 text-sm uppercase tracking-wide">{cleanTitle}</h3>}
                                <p className="text-sm leading-relaxed whitespace-pre-line">{renderRichText(cleanContent)}</p>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <p className="text-gray-600">{selectedProduct.description}</p>
                      )}
                    </div>
                    <button
                      onClick={handleCloseModal}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Product Image */}
                  <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                    <LazyImage
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full"
                      aspectRatio="16/9"
                    />
                  </div>

                  {/* Variant Selection */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-secondary-800">Choose Size</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {selectedProduct.variants.map((variant, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedVariant(index)}
                          className={cn(
                            'p-4 rounded-2xl border-2 transition-all duration-300 min-h-[80px]',
                            selectedVariant === index
                              ? 'border-primary-400 bg-primary-50'
                              : 'border-secondary-200 hover:border-primary-300'
                          )}
                        >
                          <div className="text-sm font-medium text-secondary-800">{variant.quantity}</div>
                          <div className="text-lg font-bold text-secondary-900">₹{variant.price}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-6 mb-6">
                    {/* Ingredients */}
                    {selectedProduct.ingredients && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-secondary-800 flex items-center">
                          <Leaf className="w-5 h-5 mr-2 text-green-600" />
                          Ingredients
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.ingredients.map((ingredient, idx) => (
                            <span key={idx} className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm">
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Benefits */}
                    {selectedProduct.benefits && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-secondary-800 flex items-center">
                          <Award className="w-5 h-5 mr-2 text-primary-500" />
                          Health Benefits
                        </h3>
                        <ul className="space-y-2">
                          {selectedProduct.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-secondary-800">
                              <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Sticky Add to Cart */}
                  <div className="sticky bottom-0 bg-white border-t border-gray-100 pt-4 -mx-6 px-6 -mb-6 pb-6 rounded-b-3xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-secondary-900">
                          ₹{selectedProduct.variants[selectedVariant].price}
                        </div>
                        <div className="text-sm text-gray-500">
                          {selectedProduct.variants[selectedVariant].quantity}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        Freshly prepared • Delivered in 2-4 days
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        handleAddToCart(selectedProduct, selectedVariant);
                        handleCloseModal();
                      }}
                      className="w-full bg-gradient-to-r from-primary-400 to-primary-500 text-white font-semibold text-lg py-4 rounded-2xl shadow-warm hover:shadow-float transition-all duration-300 min-h-[56px]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}