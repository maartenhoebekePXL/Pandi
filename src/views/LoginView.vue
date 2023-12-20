<template>
  <HeaderComponent />
  <section class="login">
    <div class="login__heading">
      <h1 class="login__heading__title">{{ loginTitle }}</h1>
      <p class="login__heading__paragraph">{{ pandiArmy}}</p>
    </div>
    <div class="login__create-account">
      <button type="button" class="newAcc__button">{{ newUser }}</button>
    </div>
    <div :id="formId">
      <form action="#" method="post" enctype="text/plain">
        <label class="loginLabels" :for="username"><b>{{ username }}</b></label>
        <input type="text" :id="username" :placeholder="username" :name="username" required>

        <label class="loginLabels" :for="password"><b>{{ password }}</b></label>
        <input type="password" :id="password" :placeholder="password" :name="Password" required>

        <button :id="submitBtn" type="submit" value="Login">{{ login }}</button>
        <br>
        <input type="checkbox" checked="checked" :name="remember">{{ rememberMe }}
      </form>
    </div>
    <div class="login__forgot">
      <button type="button" class="forgotAcc__button">{{ forgotPswd }}</button>
    </div>
  </section>
  <!--  <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />-->
  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: { FooterComponent, HeaderComponent },
  data() {
    return {
      loginTitle: 'Login',
      pandiArmy: 'Join the Pandi army!',
      newUser: 'New user? Create an account here!',
      formId: 'loginForm',
      username: 'username',
      password: 'password',
      submitBtn: 'submit__button',
      login: 'login',
      remember: 'remember',
      rememberMe: ' Remember me',
      forgotPswd: 'Forgot password?'
    }
  },
  computed: {},
  methods: {},
  mounted() {

  },
  props: {}
}
</script>

<style scoped>

</style>