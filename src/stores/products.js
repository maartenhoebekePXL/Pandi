import { defineStore } from 'pinia';
import productsJson from '@/data/products.json';

export const useProductStore = defineStore('products', {
     state: ()=>({
        products: productsJson,
        cart: [],
        /*title: "",
        description: "",
        image: "",
        price: "",
        vat: "",
        amount: "",*/
    }),
    actions: {
        /*addTask() {
            //ingevulde data in object steken
            const newTask = {
                id: this.shoppingCart.length + 1,
                title: this.title,
                description: this.description,
                image: this.image,
                price: this.price,
                vat: this.vat,
                amount: this.amount,
            }

            //object in lijst steken
            this.shoppingCart.push(newTask);

            //velden opnieuw leegmaken
            this.description = "";
            this.label = "";
            this.priority = "";
        },
        changeTaskPriority(object) {
            let task = this.shoppingCart.find(cart => cart.id = object.id);
            if (task) {
                task.priority = object.newPriority
            }
        },*/
        async loadProducts() {
            try {
                this.setProducts(productsJson.products);
            } catch (error) {
                console.error('Error loading products:', error);
            }
        },
        addToCart(product, quantity) {
            this.cart.push({ ...product, quantity });
        },
        setProducts(state, products) {
            state.products = products;
        },
        getHighStockProducts: (state) => (count) => {
            const productsWithStock = state.products.filter((product) => typeof product.stock === '50');
            return productsWithStock.sort((a, b) => b.stock - a.stock).slice(0, count);
        },
        getProductById () {
            return this.products.find((product) => product.id === productId);
        },
        emptyCart(){
            this.cart = [];
        }
    },
    getters: {
        /*getHighStockProducts() {
            return this.products.sort((a, b) => b.stock - a.stock).slice(0);
        },*/
    },
    /*state: () => ({
        products: productsJson,
        items: [],
        selectedProduct: 0,
    }),

    actions: {
        /!*async loadProducts() {
            try {
                this.setProducts(productsJson);
            } catch (error) {
                console.error('Error loading products:', error);
            }
        },*!/
        findProduct(id){
            return this.products.find(product => product.id === id);
        },
        addToCart(item) {
            this.items.push(item);
        },
    },

    getters: {
        getProductById: (state) => (productId) => {
            return state.products.find((product) => product.id === productId);
        },
        popularProducts(){
            const sortedProducts = this.products.sort((a, b) => b.stock - a.stock)
            return sortedProducts.slice(0, 3)
        }
    },

    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        setSelectedProduct(state, productId) {
            state.selectedProduct = productId;
        },
    },*/
});
