<template>
  <HeaderComponent/>
  <section class="shop">
    <div class="shop__heading">
      <h1 class="shop__heading__title">{{ title }}</h1>
      <p class="shop__heading__paragraph">{{ paragraph }}</p>
    </div>
    <div class="shop__filters">
      <button type="button" class="selection__button">{{ allTypes }}</button>
      <button type="button" class="selection__button">{{ cartoons }}</button>
      <button type="button" class="selection__button">{{ cuddlyToys }}</button>
      <button type="button" class="selection__button">{{ accessories }}</button>
    </div>
    <div>
      <ProductCardComponent/>
    </div>
  </section>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ProductCardComponent from '@/components/ProductCardComponent.vue'
import {useProductStore} from '@/stores/products.js'

export default {
  components: {HeaderComponent, FooterComponent, ProductCardComponent},
  data() {
    return {
      title: 'Shop',
      paragraph: 'Get the feeling of a real panda!',
      allTypes: 'All types',
      cartoons: 'Cartoons',
      cuddlyToys: 'Cuddly toys',
      accessories: 'Accessories',
      store: useProductStore()
    }
  }
  /*setup() {
    const store = useStore()
    const products = ref([])

    onMounted(async () => {
      products.value = await store.loadProducts()
      console.log('Component products:', products.value)
    })

    return {
      products
    }
  }*/
}
</script>


<style scoped>

</style>