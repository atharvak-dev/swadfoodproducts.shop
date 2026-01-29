import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Shield, Truck, Clock, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { SEOHead, PAGE_SEO } from '../components/SEO';

export function Cart() {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  const subtotal = items.reduce((sum, item) => sum + (item.variant.price * item.quantity), 0);
  const deliveryFee = subtotal > 500 ? 0 : 50;
  const total = subtotal + deliveryFee;

  const handleQuantityChange = (item: any, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(item.product.id, item.variant.quantity);
    } else {
      updateQuantity(item.product.id, item.variant.quantity, newQuantity);
    }
  };

  const handleCheckout = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      alert('Please fill in all required fields');
      return;
    }

    const orderDetails = items.map(item =>
      `${item.product.name} (${item.variant.quantity}) x${item.quantity} - ₹${item.variant.price * item.quantity}`
    ).join('\n');

    const message = `🛒 *New Order from Swad*\n\n` +
      `👤 *Customer Details:*\n` +
      `Name: ${customerInfo.name}\n` +
      `Phone: ${customerInfo.phone}\n` +
      `Address: ${customerInfo.address}\n\n` +
      `📦 *Order Items:*\n${orderDetails}\n\n` +
      `💰 *Order Summary:*\n` +
      `Subtotal: ₹${subtotal}\n` +
      `Delivery: ₹${deliveryFee}\n` +
      `*Total: ₹${total}*\n\n` +
      `📝 *Special Notes:* ${customerInfo.notes || 'None'}\n\n` +
      `Thank you for choosing Swad! 🙏`;

    const whatsappUrl = `https://wa.me/919021061883?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    clearCart();
    setCustomerInfo({ name: '', phone: '', address: '', notes: '' });
  };

  if (items.length === 0) {
    return (
      <>
        {/* SEO Meta Tags */}
        <SEOHead {...PAGE_SEO.cart} />

        <div className="min-h-screen bg-white pt-16 pb-24 lg:pb-8">
          <div className="max-w-md mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-saffron-100 to-turmeric-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-saffron-600" />
              </div>
              <h2 className="text-2xl font-bold font-playfair text-gray-900 mb-3">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-8">
                Discover our authentic collection
              </p>
              <motion.a
                href="/products"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary inline-flex items-center"
              >
                Start Shopping
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <SEOHead {...PAGE_SEO.cart} />

      <div className="min-h-screen bg-white pt-16 pb-24 lg:pb-8">
        <div className="max-w-lg lg:max-w-4xl mx-auto px-4 py-6 lg:py-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold font-playfair text-gray-900 mb-2">
              Your Cart
            </h1>
            <p className="text-gray-600">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4 mb-6 lg:mb-0">
              <AnimatePresence>
                {items.map((item, index) => (
                  <motion.div
                    key={`${item.product.id}-${item.variant.quantity}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-gray-50 rounded-2xl p-4 border border-gray-100"
                  >
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-white">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1 pr-2">
                            <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
                              {item.product.name}
                            </h3>
                            <p className="text-xs text-gray-500">{item.variant.quantity}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id, item.variant.quantity)}
                            className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Quantity Controls */}
                          <div className="flex items-center bg-white border border-gray-200 rounded-lg">
                            <button
                              onClick={() => handleQuantityChange(item, item.quantity - 1)}
                              className="p-2 hover:bg-gray-50 rounded-l-lg transition-colors"
                            >
                              <Minus className="w-3.5 h-3.5 text-gray-600" />
                            </button>
                            <span className="px-3 text-sm font-semibold text-gray-900 min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item, item.quantity + 1)}
                              className="p-2 hover:bg-gray-50 rounded-r-lg transition-colors"
                            >
                              <Plus className="w-3.5 h-3.5 text-gray-600" />
                            </button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="text-lg font-bold text-gray-900">
                              ₹{item.variant.price * item.quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Right Column - Summary & Form */}
            <div className="lg:col-span-1 space-y-6">
              {/* Order Summary */}
              <div className="bg-gradient-to-br from-saffron-50 to-turmeric-50 rounded-2xl p-5 mb-6 border border-saffron-100">
                <h3 className="text-base font-semibold text-gray-900 mb-4">
                  Order Summary
                </h3>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-gray-900">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery</span>
                    <span className={`font-semibold ${deliveryFee === 0 ? 'text-green-600' : 'text-gray-900'}`}>
                      {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                    </span>
                  </div>
                  {subtotal < 500 && (
                    <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-saffron-200">
                      <p className="text-xs text-saffron-700 font-medium">
                        Add ₹{500 - subtotal} more for free delivery
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-saffron-200">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-semibold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-gray-900">₹{total}</span>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { icon: Shield, text: 'FSSAI Certified', color: 'text-green-600' },
                  { icon: Truck, text: '2-4 Days', color: 'text-blue-600' },
                  { icon: Clock, text: 'Fresh Made', color: 'text-orange-600' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
                    <item.icon className={`w-5 h-5 ${item.color} mx-auto mb-1`} />
                    <p className="text-xs text-gray-600 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Customer Form */}
              <div className="bg-gray-50 rounded-2xl p-5 mb-6 border border-gray-100">
                <h3 className="text-base font-semibold text-gray-900 mb-4">
                  Delivery Details
                </h3>

                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                  />

                  <textarea
                    placeholder="Delivery Address *"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent resize-none"
                  />

                  <textarea
                    placeholder="Special instructions (optional)"
                    value={customerInfo.notes}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent resize-none"
                  />
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={!customerInfo.name || !customerInfo.phone || !customerInfo.address}
                className="w-full btn-primary py-4 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Order via WhatsApp
              </button>

              <p className="text-xs text-gray-500 text-center mt-3">
                Order confirmed via WhatsApp • Payment on delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}