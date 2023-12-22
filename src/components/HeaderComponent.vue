<template>
  <header>
    <nav class="nav">
      <img class="nav__logo" src="@/assets/Pandi_Logo.png" alt="Pandi logo">
      <div class="nav__list">
        <router-link class="nav__list-item" to="/">{{ home }}</router-link>
        <router-link class="nav__list-item" to="/product">{{ shop }}</router-link>
        <router-link class="nav__list-item" to="/login">{{ profile }}</router-link>
      </div>
      <div class="nav__symbols">
        <router-link class="nav__symbols-item" to="/shoppingCart"><i
          class="nav__symbols-item__icon fa-solid fa-basket-shopping"></i></router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: { RouterLink },
  data() {
    return {
      home: 'home',
      shop: 'shop',
      profile: 'profile'
    }
  },
  computed: {},
  methods: {},
}
</script>

<style scoped>

</style>