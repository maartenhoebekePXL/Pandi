<template>
  <HeaderComponent/>
  <section class="shop">
    <div class="shop__heading">
      <h1 class="shop__heading__title">{{ title }}</h1>
      <p class="shop__heading__paragraph">{{ paragraph }}</p>
    </div>
    <div class="shop__filters">
      <!--      <button type="button" class="selection__button">{{ allTypes }}</button>-->
      <!--      <button type="button" class="selection__button">{{ cartoons }}</button>-->
      <!--      <button type="button" class="selection__button">{{ cuddlyToys }}</button>-->
      <!--      <button type="button" class="selection__button">{{ accessories }}</button>-->
      <button type="button" class="selection__button" v-for="filterButton in allFilters"
              @click="filter(filterButton)"
              :class="{ 'selected': filterButton === selectedFilter }">{{
          filterButton[0].toUpperCase() + filterButton.slice(1)
        }}
      </button>
      <!--      <button type="button" class="selection__button" v-for="filterButton in allFilters"
                    @click="filter(filterButton)"
                    :class="{ 'selected': filterButton === selectedFilter }">{{
                filterButton[0].toUpperCase() + filterButton.slice(1)
              }}
            </button>-->
    </div>
    <div>
      <ProductCardComponent/>
      <!--      <ProductCardComponent v-for="product in paginatedProducts"
                                  @click="goToDetailPage(product.id)"
                                  v-bind:key="product.id"
                                  v-bind:product="product"/>-->
    </div>
    <!--    <div class="shop__pagination">
          <ul>
            <li v-for="page in this.totalPages" :key="page">
              <button @click="goToPage(page)" :class="{'selected':page===standardPage}">{{ page }}</button>
            </li>
          </ul>
        </div>-->
    <div class="shop__pagination">
      <router-link v-if="page > 0" :to="{name: 'shop', query: { page: parseInt(page) - 1 },}">&laquo;</router-link>
      <router-link v-for="product in Math.ceil(product.length / 8)" :class="{ active: page == product - 1 }" :to="{ name: 'shop',query: { page: product - 1 }, }">{{ product }}</router-link>
      <router-link v-if="page < product.length / 8 - 1" :to="{ name: 'shop',query: { page: parseInt(page) + 1 },}">&raquo;</router-link>
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
      products: [],
      title: 'Shop',
      paragraph: 'Get the feeling of a real panda!',
      allFilters: [
        'All types', 'Cartoons', 'Cuddly toys', 'Accessories',
      ],
      // allTypes: 'All types',
      // cartoons: 'Cartoons',
      // cuddlyToys: 'Cuddly toys',
      // accessories: 'Accessories',
      store: useProductStore(),
      selectedFilter: 'All types',
      standardPage: 1,
      pageProducts: 8,
    }
  },
  computed: {
    filteredProducts() {
      if (this.selectedFilter === "All types") {
        return this.store.products;
      } else {
        return this.store.products.filter(product => {
          return product.tags.includes(this.selectedFilter);
        });
      }
    },
    paginatedProducts() {
      const startIndex = (this.standardPage - 1) * this.pageProducts;
      const endIndex = startIndex + this.pageProducts;
      return this.filteredProducts.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.pageProducts);
    },
    type() {
      return this.$route.query.type;
    },
    page() {
      return this.$route.query.page || 0;
    },
    product() {
      return useProductsStore().products;
    },
  },
  methods: {
    /*nextPage() {
      if (this.standardPage < this.totalPages) {
        this.standardPage++;
      }
    },
    previousPage() {
      if (this.standardPage > 1) {
        this.standardPage--;
      }
    },*/
    goToPage(page) {
      this.$router.push({path: this.$route.path, query: {page}});
    },
    filter(tag) {
      this.selectedFilter = tag;
      this.standardPage = 1;
    },
    goToDetailPage(id) {
      this.$router.push({name: 'productDetail', params: {id}});
    },
  },
  created() {
    const page = this.$route.query.page || 1;
    this.goToPage(page);
  },
}
</script>

<style scoped>

</style>