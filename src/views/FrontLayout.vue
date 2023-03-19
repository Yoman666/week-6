<template class="banner-color">
  <div class="d-flex align-items-center justify-content-between container my-2">
    <h1>香蕉笨nana</h1>
    <div>
      <router-link to="/" class="mx-2">Home</router-link>
      <router-link to="/about" class="mx-2">About</router-link>
      <router-link to="/products" class="mx-2">前台產品列表</router-link>
      <!-- <router-link to="/product">Product</router-link> | -->
      <router-link to="/cart" class="mx-2">前台購物車 </router-link>
      <router-link to="/admin" class="mx-2">後台</router-link>
      <router-link to="/login" class="mx-2">登入</router-link>
    </div>
  </div>
    <RouterView></RouterView>

</template>

<style>
  .banner-color{
    background-color: red;
  }
</style>

<script>
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView
  }
}
</script>
