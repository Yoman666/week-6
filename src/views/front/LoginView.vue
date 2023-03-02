<template>
    登入頁面
    <form class="form-signin" @submit.prevent="login">
        <div class="form-floating mb-3">
            <input type="email" class="form-control" v-model="user.username" id="floatingInput"
            placeholder="name@example.com" required autofocus>
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" v-model="user.password" id="floatingPassword"
            placeholder="Password" required>
            <label for="floatingPassword">Password</label>
        </div>
        <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
            登入
        </button>
    </form>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const api = 'https://vue3-course-api.hexschool.io/v2/admin/signin'
      this.$http.post(api, this.user).then((response) => {
        const { token, expired } = response.data
        // 寫入 cookie token
        // expires 設置有效時間
        console.log(token, expired)
        document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`
        // window.location = 'products.html'
        this.$router.push('/admin/products')
      }).catch((err) => {
        alert(err.response.data.message)
      })
    }
  }
}
</script>
