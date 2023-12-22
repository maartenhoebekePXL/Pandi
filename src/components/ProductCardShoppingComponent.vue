<template>
  <div class="product-card-shopping">
    <div class="cart-item">
      <img src="@/assets/Panda1.jpeg" alt="Item 1">
      <div class="cart-item-info">
        <div class="item-details">
          <p class="item-details-title">{{ products.title }}</p>
          <p class="item-details-price">Price: {{ products.price }}</p>
        </div>
        <button class="card-item-info-button" @click="removeItem(1)">{{ remove }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import {useProductStore} from '@/stores/products.js'
export default {
  data() {
    return {
      products: useProductStore(),
      remove: 'Remove'
      /*productTitle: 'products.title',
      productPrice: 'products.title',
      productCheck: 'Check it out'*/
    }
  },
  methods: {
    removeItem(itemId) {
      // Implement logic to remove item from the cart
    },
    checkout() {
      // Implement logic for the checkout process
    }
  }
}
</script>

<style scoped>

</style>