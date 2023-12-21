<template>
  <HeaderComponent />
  <div class="header">
    <div class="header__banner">
      <h1 class="header__banner__brand">{{ title }}</h1>
      <div class="header__banner__buttons">
        <button class="home__button" onclick="window.location.href = '/product';">{{ products }}</button>
        <button class="home__button" onclick="window.location.href = '/productDetail';">{{ activity }}</button>
        <router-link class="home__button" to="/product">{{ products }}</router-link>
        <router-link class="home__button" to="/productDetail">{{ activity }}</router-link>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: { FooterComponent, HeaderComponent },
  data() {
    return {
      products: 'PRODUCTS',
      activity: 'PLAN YOUR ACTIVITY',
      title: 'Pandi'
    }
  }
}
</script>

<style scoped>

</style>