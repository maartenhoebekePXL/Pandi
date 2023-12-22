import axios from 'axios';

export const useProductService = {
    async getProducts() {
        try {
            const response = await axios.get('/assets/products.json');
            return response.data.products;
        } catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    },
};
