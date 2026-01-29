import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChefHat, Star, Shield, Truck, Award, HandPlatter } from 'lucide-react';
import { useBestSellers } from '../hooks/useProducts';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/ProductCard';
import { SEOHead, PAGE_SEO } from '../components/SEO';

// Constants extracted to avoid magic strings
const CATEGORIES = [
  { name: 'Seasonal', icon: '🌿', bg: 'bg-green-600' },
  { name: 'Masalas', icon: '🌶️', bg: 'bg-orange-500' },
  { name: 'Ladoos', icon: '🍯', bg: 'bg-amber-500' },
  { name: 'Best Sellers', icon: '⭐', bg: 'bg-yellow-500' },
  { name: 'Traditional Piths', icon: '🥞', bg: 'bg-amber-700' },
] as const;

const TRUST_INDICATORS = [
  {
    icon: ChefHat,
    title: 'Traditional Recipes',
    description: '100+ year old family recipes',
  },
  {
    icon: Shield,
    title: 'FSSAI Certified',
    description: 'Quality & safety assured',
  },
  {
    icon: Truck,
    title: 'Fresh Delivery',
    description: 'Delivered in 2-4 days',
  },
  {
    icon: Award,
    title: '500+ Women',
    description: 'Empowered entrepreneurs',
  },
] as const;

const TESTIMONIALS = [
  {
    name: 'Menaka Rajput',
    role: 'Local Guide',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjVE1clur8tWxTIFId3HHi7pg5eVUyzNIs8eQXe7m-mxSlXX8RjU_Q=w75-h75-p-rp-mo-br100',
    text: 'All products are very good, specially Diwali faral',
    rating: 5,
  },
  {
    name: 'Aparna Godambe',
    role: 'Home Chef',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjVkFQJFJC5RwyNw6fpuw1XTohDIVfqORCkv5qityaXFWTkqSIva=w75-h75-p-rp-mo-br100',
    text: 'Good product and home made, clean, hygienenic product',
    rating: 5,
  },
  {
    name: 'Atharva Karval',
    role: 'Food Blogger',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocKkCpBYT-luPHKJlqDq4PBNAQ8w3AwF7i-wSC3jOAn3TAt7j8sy=w75-h75-p-rp-mo-br100',
    text: 'Their millet products have transformed my healthy cooking journey. Absolutely love it!',
    rating: 5,
  },
] as const;

export function Home() {
  const bestSellers = useBestSellers(8);

  const handleViewDetails = useCallback(() => {
    // Navigate to products page
    window.location.href = '/products';
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <SEOHead {...PAGE_SEO.home} />

      <div className="min-h-screen bg-surface-50">
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden pt-16">
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
              className="w-full h-full"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 h-full w-full px-4 sm:px-6 lg:px-8 flex items-center justify-start min-h-screen"
          >
            <div className="text-white max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-block bg-gradient-to-r from-primary-400 to-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  ✨ Authentic Since 2020
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-serif drop-shadow-2xl"
              >
                Welcome to the <br />
                <span
                  className="text-yellow-300 drop-shadow-2xl"
                  style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)' }}
                >
                  Home of Taste
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl mb-8 text-yellow-100 font-light leading-relaxed drop-shadow-lg"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
              >
                Preserving tradition through authentic spices &amp; ancient grains
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/products"
                  className="bg-gradient-to-r from-primary-400 to-primary-500 text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-warm hover:shadow-float transition-all duration-300 inline-flex items-center justify-center group min-h-[56px]"
                >
                  Explore Our Products
                  <ArrowRight className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform" />
                </Link>

                <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-white/30 transition-all duration-300 inline-flex items-center justify-center min-h-[56px]">
                  <ChefHat className="w-6 h-6 mr-3" />
                  Our Story
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Elements - Decorative */}
          <div className="absolute top-20 right-10 hidden lg:block">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full opacity-20"
            />
          </div>
          <div className="absolute bottom-32 left-10 hidden lg:block">
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-16 h-16 bg-gradient-to-br from-secondary-600 to-secondary-800 rounded-full opacity-20"
            />
          </div>
        </section>

        {/* Category Section - Professional Design */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary-900 mb-2">
                Shop by Category
              </h2>
              <p className="text-gray-500 text-sm">
                Explore our curated collection of traditional delicacies
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {CATEGORIES.map((category) => (
                <Link
                  key={category.name}
                  to={`/products?category=${category.name.toLowerCase().replace(' ', '-')}`}
                  className="group flex items-center gap-2 px-5 py-3 bg-surface-50 border border-gray-200 rounded-full font-medium text-secondary-800 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-600 transition-all duration-200 min-h-[48px]"
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="text-sm">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <HandPlatter className="w-8 h-8 text-primary-500" />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-secondary-900">
                  Customer Favorites
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Handpicked selections loved by thousands of families across India
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {bestSellers.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <Link
                to="/products"
                className="bg-white text-secondary-800 border-2 border-secondary-200 hover:bg-secondary-50 hover:border-secondary-300 font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 inline-flex items-center group min-h-[56px]"
              >
                View All Products
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-gradient-to-r from-primary-100 to-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {TRUST_INDICATORS.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <item.icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-secondary-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-center text-secondary-900 mb-12 font-serif"
            >
              What Our Customers Say
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-surface-50 to-surface-100 p-8 rounded-3xl shadow-warm hover:shadow-float transition-all duration-500 border border-primary-100"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-3 border-primary-200 mr-4"
                      loading="lazy"
                    />
                    <div>
                      <h3 className="font-semibold text-lg text-secondary-900">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary-500 fill-current" />
                    ))}
                  </div>

                  <p className="text-secondary-800 italic leading-relaxed">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}