import React, { createContext, useContext, useState } from 'react';
import { CartItem, Product, ProductVariant, DeliveryInfo } from '../types';

interface CartContextType {
  items: CartItem[];
  deliveryInfo: DeliveryInfo;
  addToCart: (product: Product, variant: ProductVariant) => void;
  removeFromCart: (productId: string, variantQuantity: string) => void;
  updateQuantity: (productId: string, variantQuantity: string, quantity: number) => void;
  clearCart: () => void;
  setDeliveryInfo: (info: DeliveryInfo) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    name: '',
    phone: '',
    address: '',
    pinCode: '',
  });

  const addToCart = (product: Product, variant: ProductVariant) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(
        item => item.product.id === product.id && item.variant.quantity === variant.quantity
      );
      if (existingItem) {
        return currentItems.map(item =>
          item.product.id === product.id && item.variant.quantity === variant.quantity
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentItems, { product, variant, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string, variantQuantity: string) => {
    setItems(currentItems => 
      currentItems.filter(
        item => !(item.product.id === productId && item.variant.quantity === variantQuantity)
      )
    );
  };

  const updateQuantity = (productId: string, variantQuantity: string, quantity: number) => {
    setItems(currentItems =>
      currentItems.map(item =>
        item.product.id === productId && item.variant.quantity === variantQuantity
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ items, deliveryInfo, addToCart, removeFromCart, updateQuantity, clearCart, setDeliveryInfo }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}