<template>
這是coolcool的「後台」主板頁面
<hr>
    <router-link to="/">前台</router-link> |
    <router-link to="/admin/products">產品列表</router-link> |
    <router-link to="/admin/orders">訂單列表</router-link> |
    <!-- 要加prevent要不然會跳回首頁 -->
    <a href="#" @click.prevent="logout()">登出</a>
    <hr>
    <RouterView></RouterView>
</template>

<script>
import { RouterView } from 'vue-router'
const { VITE_API } = import.meta.env

export default {
  methods: {
    logout () {
      document.cookie = `hexToken=;expires=${new Date()}; path=/`
      this.$router.push('/login')
    },
    checkLogin () {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      if (token) {
        // Axios 預設值
        this.$http.defaults.headers.common.Authorization = `${token}`
        const api = `${VITE_API}api/user/check`
        this.$http
          .post(api, { api_token: this.token })
          .then(() => {
            this.checkSuccess = true
          })
          .catch((err) => {
            alert(err.response.data.message)
            this.$router.push('/login')
          })
      } else {
        alert('您尚未登入。')
        this.$router.push('/login')
      }
    }
  },
  components: {
    RouterView
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
