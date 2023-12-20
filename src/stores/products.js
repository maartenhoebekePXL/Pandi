import { defineStore } from 'pinia';
import productsJson from '/src/data/products.json'

export const useProductStore = defineStore('main', {
    state: () => ({
        products: productsJson,
        cart: [],
    }),

    actions: {
        async loadProducts() {
            try {
                // Assuming your JSON file is in the public/data directory
                const response = await fetch('../assets/data/products.json');

                if (!response.ok) {
                    throw new Error('Failed to load products');
                }

                const products = await response.json();
                this.setProducts(products);
            } catch (error) {
                console.error('Error loading products:', error);
            }
        },
        addToCart(product) {
            // Check if the product is already in the cart
            const existingProduct = this.cart.find((item) => item.id === product.id);

            if (existingProduct) {
                // If the product is already in the cart, increase the quantity
                existingProduct.quantity += 1;
            } else {
                // If the product is not in the cart, add it with quantity 1
                this.cart.push({ ...product, quantity: 1 });
            }
        },
    },

    getters: {
        getProductById: (state) => (productId) => {
            // Find and return the product with the given ID
            return state.products.find((product) => product.id === productId);
        },
    },

    mutations: {
        setProducts(products) {
            this.products = products;
        },
    },
});
