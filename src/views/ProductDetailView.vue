<!--<template>
    <HeaderComponent/>
    <section class="product-view">
      <div class="product-view__heading">
        <h1 class="product-view__heading__title">{{ product.title }}</h1>
        <p class="product-view__heading__paragraph">{{ product.description}}</p>
      </div>
      <div class="product-view__details">
        <img :src="product.image" :alt="product.title" class="product-view__image"/>
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
    <FooterComponent/>
</template>-->
<template>
  <HeaderComponent/>
  <section class="product-view">
    <div class="product-view__heading">
      <h1 class="product-view__heading__title">title</h1>
      <p class="product-view__heading__paragraph">paragraph</p>
    </div>
    <!--    v-on:submit.prevent="addTask()"-->
    <div class="product-view-box">
      <div class="product-view__details">
        <img src="@/assets/Panda1.jpeg" alt="product.title" class="product-view__image"/>
        <div class="product-view__details__info">
            <p class="product-view__details__price">Price: </p>
            <p class="product-view__details__vat">VAT: </p>
            <p class="product-view__details__stock">Stock: </p>
          <button class="addToCart__button" type="submit">Add to Cart</button>
        </div>
      </div>
    </div>
    <div>
      <!--      <ProductCardComponent v-for="product in paginatedProducts"
                                  @click="goToDetailPage(product.id)"
                                  v-bind:key="product.id"
                                  v-bind:product="product"/>
            <ProductCardComponent/>-->
    </div>
    <!--    <div class="shop__pagination">
          <ul>
            <li v-for="page in this.totalPages">
              <button @click="goToPage" :class="{'selected':page===standardPage}">{{ page }}</button>
            </li>
          </ul>
        </div>-->
  </section>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import {useProductStore} from '@/stores/products.js'
import {useUsersStore} from '@/stores/users.js'

export default {
  components: {HeaderComponent, FooterComponent},
  data() {
    return {
      productStore: useProductStore(),
      userStore: useUsersStore(),
    }
  },
  computed: {
    product() {
      return this.productStore.findProduct(this.productStore.selectedProduct)
    },
    amount() {
      return this.userStore
    }
  },
  methods: {
    addToCart(product) {
      this.userStore.addToCart(product)
    }
  },
  /*async mounted() {
    const store = useProductStore();
    await store.loadProducts();

    // You need to get the productId from the route
    this.productId = this.$route.params.id; // Access the dynamic parameter ':id' from the route

    // Find the product by id from the store
    this.product = store.getProductById(this.productId);
  },*/
}
</script>

<style scoped>
/* Add your styling for the ProductView component here */
</style>