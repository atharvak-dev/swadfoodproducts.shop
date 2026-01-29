import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingCart, Info, Leaf, Award, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useToast } from './Toast';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
  index?: number;
  onViewDetails?: (product: Product) => void;
}

const ProductCard = React.memo(({ product, index = 0, onViewDetails }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const [isLiked, setIsLiked] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();

    // Trigger animation
    setIsAdding(true);

    // Add to cart
    addToCart(product, product.variants[0]);

    // Show toast
    addToast(`${product.name} added to cart!`, 'cart', 2500);

    // Reset animation after delay
    setTimeout(() => setIsAdding(false), 600);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    addToast(isLiked ? 'Removed from favorites' : 'Added to favorites', 'success', 2000);
  };

  const handleViewDetails = () => {
    onViewDetails?.(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 border border-gray-100 group cursor-pointer hover:shadow-warm"
      onClick={handleViewDetails}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-square rounded-t-3xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badges */}
        <div className="absolute top-4 left-4 space-y-2">
          {product.tags?.includes('best-seller') && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-r from-primary-400 to-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center w-fit shadow-warm"
            >
              <Star className="w-3 h-3 mr-1 fill-current" />
              Best Seller
            </motion.span>
          )}

          {product.benefits?.includes('Rich in protein') && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center w-fit shadow-warm"
            >
              <Leaf className="w-3 h-3 mr-1" />
              Protein Rich
            </motion.span>
          )}

          {product.category === 'ladoos' && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-800 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center w-fit shadow-warm"
            >
              🍯 Traditional
            </motion.span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
            className={cn(
              'p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300',
              isLiked
                ? 'bg-red-500 text-white'
                : 'bg-white/90 text-gray-700 hover:bg-white'
            )}
          >
            <Heart className={cn('w-4 h-4', isLiked && 'fill-current')} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              handleViewDetails();
            }}
            className="bg-white/90 text-gray-700 p-2 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <Info className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Quick Add Button */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-primary-400 to-primary-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ShoppingCart className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Price Tag - Floating */}
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
            <span className="text-lg font-bold text-secondary-800">
              ₹{product.variants[0].price}
            </span>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-secondary-900 font-serif line-clamp-1 group-hover:text-primary-500 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mt-1">
            {product.description}
          </p>
        </div>

        {/* Ingredients Preview */}
        {product.ingredients && product.ingredients.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-2 font-medium">Key Ingredients:</p>
            <div className="flex flex-wrap gap-1">
              {product.ingredients.slice(0, 3).map((ingredient, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-primary-100 text-primary-500 px-2 py-1 rounded-full border border-primary-200"
                >
                  {ingredient}
                </span>
              ))}
              {product.ingredients.length > 3 && (
                <span className="text-xs text-gray-500 px-2 py-1">
                  +{product.ingredients.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Benefits Preview */}
        {product.benefits && product.benefits.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-1 mb-2">
              <Award className="w-3 h-3 text-primary-500" />
              <p className="text-xs text-gray-500 font-medium">Benefits:</p>
            </div>
            <div className="flex flex-wrap gap-1">
              {product.benefits.slice(0, 2).map((benefit, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Price and Action */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-secondary-800">
                ₹{product.variants[0].price}
              </span>
              <span className="text-sm text-gray-500 ml-2">
                {product.variants[0].quantity}
              </span>
            </div>
            {product.variants.length > 1 && (
              <span className="text-xs text-primary-500 font-medium bg-primary-50 px-2 py-1 rounded-full">
                {product.variants.length} sizes
              </span>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            disabled={isAdding}
            className={cn(
              'w-full font-semibold px-6 py-3 rounded-2xl shadow-warm transition-all duration-300 inline-flex items-center justify-center min-h-[48px]',
              isAdding
                ? 'bg-green-500 text-white'
                : 'bg-gradient-to-r from-primary-400 to-primary-500 text-white hover:shadow-float'
            )}
          >
            {isAdding ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Added!
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
});

export { ProductCard };