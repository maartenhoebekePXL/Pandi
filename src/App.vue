<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default ({
  components: {HeaderComponent, FooterComponent},
  data() {
    return {}
  }
})
</script>

<template>
  <HeaderComponent/>
  <RouterView/>
  <FooterComponent/>
</template>

<style scoped>

</style>
