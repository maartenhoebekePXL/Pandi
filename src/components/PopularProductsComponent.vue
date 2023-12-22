<template>
  <div class="shop__items">
    <div v-for="product in products" :key="product.id" class="shop__item">
      <img class="shop__item__img" :src="product.image" :alt="product.description">
      <div class="shop__item__info">
        <div class="shop__name-price">
          <p>product.title</p>
          <p>product.price</p>
        </div>
        <router-link :to="{ name:'productDetail', params: { id: product.id }}" class="shop__item__info__button">
          {{ productCheck }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {useProductStore} from "@/stores/products.js";

export default {
  data() {
    return {
      products: useProductStore(),
      productCheck: "Check it out",
    }
  },
  created() {
    const store = useProductStore();
    store.loadProducts();
    this.stockProducts = store.getHighStockProducts(3);
    this.products.loadProducts();
  },
  props: {
    amount: {
      type: Number,
      required: true,
    }
  },
  computed: {
    filteredProducts() {
      let products = [...this.products.products];

      products.sort((a, b) => b.stock - a.stock);

      return products.slice(0, this.amount);
    },
  },
};
</script>

<style scoped>
/* Component styles go here */
</style>