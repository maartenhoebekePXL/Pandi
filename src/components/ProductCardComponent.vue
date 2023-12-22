<template>
  <div class="shop__items">
<!--    <div v-if="products.length" v-for="product in products" :key="product.id" class="shop__item">-->
    <div class="shop__item" v-for="product in products" :key="product.id">
      <img class="shop__item__img" :src="product.image" alt="product.description">
      <div class="shop__item__info">
        <div class="shop__name-price">
          <p>{{ product.title }}</p>
          <p>{{ product.price  }}</p>
        </div>
        <router-link :to="{ name:'product', params: { id: product.id }}" class="shop__item__info__button">
          {{ productCheck }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {useProductStore} from '@/stores/products.js';

export default {
  data() {
    return {
      products: useProductStore(),
      productCheck: 'Check it out',
    };
  },
  /*created() {
    const store = useProductStore();
    console.log('ProductCardComponent created');
    store.loadProducts();
  },
  computed: {
    products() {
      return useProductStore().products;
    },
  },*/
  props: [
      'product'
  ]
};
</script>

<style scoped>

</style>