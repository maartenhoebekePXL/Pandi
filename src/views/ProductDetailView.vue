<template>
  <div>
    <HeaderComponent />
    <section class="product-view">
      <div class="product-view__details">
        <img :src="product.image" :alt="product.title" class="product-view__image" />
        <div class="product-view__info">
          <h1 class="product-view__title">{{ product.title }}</h1>
          <p class="product-view__description">{{ product.description }}</p>
          <p class="product-view__price">Price: ${{ product.price.toFixed(2) }}</p>
          <p class="product-view__vat">VAT: {{ product.vat * 100 }}%</p>
          <p class="product-view__stock">Stock: {{ product.stock }}</p>
          <button @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { useProductStore } from '@/stores/products.js'

export default {
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
      productId: null,
      product: null
    }
  },
  methods: {
    addToCart() {
      const store = useProductStore()
      store.addToCart(this.product)
      // Optionally, you can show a notification or perform other actions after adding to the cart
    }
  },
  async mounted() {
    const store = useProductStore();
    await store.loadProducts();

    // You need to get the productId from the route
    this.productId = this.$route.params.id; // Access the dynamic parameter ':id' from the route

    // Find the product by id from the store
    this.product = store.getProductById(this.productId);
  },
}
</script>

<style scoped>
/* Add your styling for the ProductView component here */
</style>