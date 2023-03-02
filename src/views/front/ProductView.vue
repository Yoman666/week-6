<template>
這是單一產品頁面
<h2>{{ product.title }}</h2>
<img :src="product.imageUrl" style="max-width:100%" alt="">

</template>

<script>
const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      console.log('id位置', this.$route.params)
      const { id } = this.$route.params
      this.$http.get(`${VITE_API}/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          console.log('單一產品資料', res)
          this.product = res.data.product
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
