<template>
  <div class="product-card-shopping">
    <div class="cart-item">
      <!--          <img src="item1.jpg" alt="Item 1">-->
      <img src="@/assets/images/Panda1.jpeg" alt="Item 1">
      <div class="cart-item-info">
        <div class="item-details">
          <p class="item-details-title">Item 1</p>
          <p class="item-details-price">Price: $20.00</p>
        </div>
        <button class="card-item-info-button" @click="removeItem(1)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import json from '@/assets/data/products.json'

export default {
  data() {
    return {
      products: json.products
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