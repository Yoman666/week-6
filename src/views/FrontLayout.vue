<template>
   <h1>這是前台主板頁面</h1>
    <hr>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">前台產品列表</router-link> |
    <!-- <router-link to="/product">Product</router-link> | -->
    <router-link to="/cart">前台購物車 </router-link>|
    <router-link to="/admin">後台</router-link>|
    <router-link to="/login">登入</router-link>|
    <hr>
    <RouterView></RouterView>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView
  }
}
</script>
