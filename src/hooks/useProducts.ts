import { useMemo, useCallback } from 'react';
import { products as allProducts } from '../data/products';
import { Product } from '../types';

type Category = Product['category'] | 'all';
type SortOption = 'name' | 'price-asc' | 'price-desc';

interface UseProductsOptions {
    category?: Category;
    sort?: SortOption;
    searchQuery?: string;
    limit?: number;
}

interface UseProductsReturn {
    products: Product[];
    categories: Category[];
    totalCount: number;
    isFiltered: boolean;
}

const CATEGORIES: Category[] = ['all', 'ladoos', 'piths', 'masalas', 'seasonal'];

export function useProducts(options: UseProductsOptions = {}): UseProductsReturn {
    const { category = 'all', sort = 'name', searchQuery = '', limit } = options;

    const filterProducts = useCallback(
        (products: Product[]): Product[] => {
            let result = [...products];

            // Filter by category
            if (category !== 'all') {
                result = result.filter((p) => p.category === category);
            }

            // Filter by search query
            if (searchQuery.trim()) {
                const query = searchQuery.toLowerCase();
                result = result.filter(
                    (p) =>
                        p.name.toLowerCase().includes(query) ||
                        p.description.toLowerCase().includes(query) ||
                        p.ingredients.some((i) => i.toLowerCase().includes(query))
                );
            }

            return result;
        },
        [category, searchQuery]
    );

    const sortProducts = useCallback(
        (products: Product[]): Product[] => {
            const sorted = [...products];
            switch (sort) {
                case 'price-asc':
                    return sorted.sort((a, b) => a.variants[0].price - b.variants[0].price);
                case 'price-desc':
                    return sorted.sort((a, b) => b.variants[0].price - a.variants[0].price);
                case 'name':
                default:
                    return sorted.sort((a, b) => a.name.localeCompare(b.name));
            }
        },
        [sort]
    );

    const products = useMemo(() => {
        let result = filterProducts(allProducts);
        result = sortProducts(result);
        if (limit && limit > 0) {
            result = result.slice(0, limit);
        }
        return result;
    }, [filterProducts, sortProducts, limit]);

    const isFiltered = category !== 'all' || searchQuery.trim() !== '';

    return {
        products,
        categories: CATEGORIES,
        totalCount: products.length,
        isFiltered,
    };
}

export function useBestSellers(limit = 6): Product[] {
    return useMemo(() => {
        return allProducts
            .filter((p) => p.tags?.includes('best-seller'))
            .slice(0, limit);
    }, [limit]);
}

export function useProductById(id: string): Product | undefined {
    return useMemo(() => {
        return allProducts.find((p) => p.id === id);
    }, [id]);
}
