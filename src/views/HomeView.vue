<template>
  <HeaderComponent/>
  <div class="header">
    <div class="header__banner">
      <h1 class="header__banner__brand">{{ title }}</h1>
      <div class="header__banner__buttons">
        <!--        <button class="home__button" onclick="window.location.href = '/product';">{{ products }}</button>-->
        <!--        <button class="home__button" onclick="window.location.href = '/productDetail';">{{ activity }}</button>-->
        <router-link class="home__button" to="/product">{{ productsTitle }}</router-link>
        <router-link class="home__button" to="/productDetail">{{ activity }}</router-link>
      </div>
    </div>
  </div>
  <div class="stock">
    <!--    <PopularProductsComponent v-for="product in productStore.popularProducts()" :key="product.id" :product="product"/>-->
    <section class="stock__items">
      <h1 class="stock__items__title">{{ stockTitle }}</h1>
      <div class="high-stock-products">
<!--        <PopularProductsComponent
            v-for="product in stockProducts"
            :key="product.id"
            :product="product"
            @click="goToDetailPage(product.id)"
        />-->
        <PopularProductsComponent :amount="3"/>
      </div>
    </section>
  </div>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import {useProductStore} from "@/stores/products.js";
import PopularProductsComponent from "@/components/PopularProductsComponent.vue";

export default {
  components: {PopularProductsComponent, FooterComponent, HeaderComponent},
  data() {
    return {
      productsTitle: 'PRODUCTS',
      activity: 'PLAN YOUR ACTIVITY',
      title: 'Pandi',
      products: [],
      stockTitle: "Check our special products!"
    }
  },
  created() {
    const store = useProductStore();
    store.loadProducts();
    /*this.stockProducts = store.getHighStockProducts(3);*/
    this.products = store.products;
  },
  /*computed: {
    topProducts: computed(() => {
      const store = useProductStore();
      return store.topProducts; // Implement a method in the store to get the top products
    }),
  },*/
  methods: {
    goToDetailPage(id) {
      this.$router.push({name: 'productDetail', params: {id}});
    },
  },
  computed: {

  }
}
</script>

<style scoped>

</style>