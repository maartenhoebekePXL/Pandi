<template>
  <div class="shop__items">
<!--    <div v-for="product in products" :key="product.id" class="shop__item">-->
    <div v-for="product in products" :key="product.id" class="shop__item">
      <img class="shop__item__img" :src="product.image" :alt="product.description">
      <div class="shop__item__info">
        <div class="shop__name-price">
          <p>{{ product.title }}</p>
          <p>{{ product.price }}</p>
        </div>
        <!-- Update router-link to pass the product ID as a prop -->
        <router-link :to="{ name:'product', params: { id: product.id }}" class="shop__item__info__button">
          {{ productCheck }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import json from '@/assets/data/products.json'

export default {
  data() {
    return {
      products: json.products,
      productCheck: 'Check it out'
    }
  }
}
</script>

<style scoped>
/* Add your styles for ProductCardComponent here */
</style>
