import { useState, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import swadLogo from '../assests/swad-logo.png';
import { cn } from '../lib/utils';

// Navigation links - single source of truth
const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/products', label: 'Shop' },
  { path: '/knowledge', label: 'Knowledge' },
  { path: '/join-us', label: 'Partner With Us' },
] as const;

// Popular search suggestions
const POPULAR_SEARCHES = ['Besan Ladoo', 'Goda Masala', 'Ragi Pith', 'Protein Ladoo'];

export function Navbar() {
  const { items } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const handleSearch = useCallback((query: string) => {
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  }, [navigate]);

  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchQuery);
  }, [handleSearch, searchQuery]);

  return (
    <>
      <nav className="bg-white fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              aria-label="Swad Food Products - Home"
            >
              <img
                src={swadLogo}
                alt=""
                className="h-9 w-9 lg:h-10 lg:w-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold font-serif text-secondary-900 group-hover:text-primary-500 transition-colors">
                  Swad
                </span>
                <span className="text-[10px] lg:text-xs text-gray-500 font-medium tracking-wide hidden sm:block">
                  Homemade Goodness
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Clean, minimal */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-1">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={cn(
                  'h-10 w-10 lg:h-11 lg:w-11 flex items-center justify-center rounded-full transition-colors',
                  isSearchOpen ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-100'
                )}
                aria-label="Search products"
                aria-expanded={isSearchOpen}
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative h-10 w-10 lg:h-11 lg:w-11 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label={`Shopping cart with ${totalItems} items`}
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-primary-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={cn(
                  'lg:hidden h-10 w-10 flex items-center justify-center rounded-full transition-colors',
                  isMenuOpen ? 'bg-gray-100' : 'text-gray-600 hover:bg-gray-100'
                )}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Search Bar - Functional */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-lg"
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                  <form onSubmit={handleSearchSubmit} className="relative max-w-2xl mx-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="What are you looking for today?"
                      className="w-full pl-12 pr-12 py-4 bg-surface-50 border-2 border-gray-200 rounded-2xl text-base focus:outline-none focus:border-primary-400 focus:bg-white transition-all"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setIsSearchOpen(false)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                      aria-label="Close search"
                    >
                      <X className="w-4 h-4 text-gray-600" />
                    </button>
                  </form>
                  <div className="max-w-2xl mx-auto mt-3 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-gray-500">Popular:</span>
                    {POPULAR_SEARCHES.map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => handleSearch(term)}
                        className="text-xs text-primary-600 hover:text-primary-700 hover:underline font-medium"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Mobile Navigation - Full screen overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <span className="font-semibold text-gray-900">Menu</span>
                  <button
                    onClick={closeMenu}
                    className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-4">
                  <ul className="space-y-1">
                    {NAV_LINKS.map((link) => {
                      const isActive = location.pathname === link.path;
                      return (
                        <li key={link.path}>
                          <Link
                            to={link.path}
                            onClick={closeMenu}
                            className={cn(
                              'flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors',
                              isActive
                                ? 'bg-primary-50 text-primary-600'
                                : 'text-gray-700 hover:bg-gray-50'
                            )}
                          >
                            {link.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-gray-100">
                  <Link
                    to="/cart"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    View Cart {totalItems > 0 && `(${totalItems})`}
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}