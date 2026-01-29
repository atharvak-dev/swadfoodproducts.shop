export interface ProductVariant {
  quantity: string;
  price: number;
}

export interface ProductReview {
  authorName: string;
  date: string;
  text: string;
  rating: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  // Enhanced SEO description (longer, keyword-rich)
  fullDescription?: string;
  variants: ProductVariant[];
  category: 'seasonal' | 'piths' | 'masalas' | 'ladoos';
  tags?: string[];
  ingredients: string[];
  benefits: string[];
  image: string;
  // SEO-oriented fields
  processingMethod?: string;
  shelfLife?: string;
  origin?: string;
  avgRating?: number;
  reviewCount?: number;
  reviews?: ProductReview[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  variant: ProductVariant;
}

export interface DeliveryInfo {
  name: string;
  phone: string;
  address: string;
  pinCode: string;
}