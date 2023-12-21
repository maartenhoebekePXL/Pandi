<template>
  <div>
    <HeaderComponent />
    <section class="shopping-cart">
      <div class="shopping-cart__heading">
        <h1 class="shopping-cart__heading__title">{{ cartTitle }}</h1>
        <p class="shopping-cart__heading__paragraph">{{ cartP }}</p>
      </div>
      <div class="shopping-cart__items">
        <ProductCardShoppingComponent />
        <ProductCardShoppingComponent />
        <ProductCardShoppingComponent />
        <ProductCardShoppingComponent />
        <ProductCardShoppingComponent />
      </div>

      <div class="shopping-cart__total">
        <p>Total: $35.00</p>
        <button @click="checkout">Checkout</button>
      </div>
    </section>
  </div>
  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ProductCardShoppingComponent from '@/components/ProductCardShoppingComponent.vue'

export default {
  components: { HeaderComponent, FooterComponent, ProductCardShoppingComponent },
  data() {
    return {
      cartTitle: 'Shopping Cart',
      cartP: 'Last step before becoming part of the pandi army!'
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