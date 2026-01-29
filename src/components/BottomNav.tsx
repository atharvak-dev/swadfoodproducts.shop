import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ShoppingBag, ShoppingCart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

interface NavItem {
    path: string;
    label: string;
    icon: React.ElementType;
}

const NAV_ITEMS: NavItem[] = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/products', label: 'Shop', icon: ShoppingBag },
    { path: '/cart', label: 'Cart', icon: ShoppingCart },
    { path: '/join-us', label: 'Join', icon: User },
];

export function BottomNav() {
    const location = useLocation();
    const { items } = useCart();
    const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-panel border-t border-white/20">
            <div className="flex items-center justify-around h-16 px-2 pb-safe">
                {NAV_ITEMS.map((item) => {
                    const isActive = location.pathname === item.path;
                    const Icon = item.icon;
                    const isCart = item.path === '/cart';

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className="relative flex flex-col items-center justify-center flex-1 h-full"
                        >
                            <motion.div
                                className={cn(
                                    'flex flex-col items-center justify-center p-2 rounded-xl transition-colors duration-200',
                                    isActive ? 'text-primary-500' : 'text-secondary-800'
                                )}
                                whileTap={{ scale: 0.9 }}
                            >
                                <div className="relative">
                                    <Icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
                                    {isCart && cartItemCount > 0 && (
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute -top-2 -right-2 bg-primary-400 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
                                        >
                                            {cartItemCount > 9 ? '9+' : cartItemCount}
                                        </motion.span>
                                    )}
                                </div>
                                <span className={cn(
                                    'text-[10px] mt-1 font-medium',
                                    isActive ? 'text-primary-500' : 'text-secondary-800'
                                )}>
                                    {item.label}
                                </span>
                                {isActive && (
                                    <motion.div
                                        layoutId="bottomNavIndicator"
                                        className="absolute -bottom-1 w-1 h-1 bg-primary-500 rounded-full"
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </motion.div>
                        </NavLink>
                    );
                })}
            </div>
        </nav>
    );
}
