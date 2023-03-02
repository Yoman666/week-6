<template >這是產品列表頁面
<table class="container">
    <thead>
        <th>
            產品名稱
        </th>
        <th>
            產品圖片
        </th>
        <th>
            詳細資訊
        </th>
    </thead>
    <tbody>
        <tr v-for="item in products" :key="item.id">
            <td>{{item.title}}</td>
            <td><img :src="item.imageUrl" alt="" width="100"></td>
            <!-- <td><RouterLink :to="`/product/${item.id}`">詳細資訊</RouterLink></td> -->
            <RouterLink :to="`/product/${item.id}`" class="btn btn-primary m-2">單一產品</RouterLink>
            <button class="btn btn-info m-2" @click="addToCart(item.id)">加入車車</button>
        </tr>

    </tbody>
</table>

</template>
<style>
.container{
    margin: 0 auto;
}
td{
    padding: 20px;
}
</style>

<script>
import { RouterLink } from 'vue-router'
const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      cart: {}
    }
  },
  methods: {
    getProducts () {
      this.$http.get(`${VITE_API}/api/${VITE_PATH}/products`)
        .then((res) => {
          console.log(res)
          this.products = res.data.products
        })
    },
    addToCart (id) {
      const data = {
        product_id: id,
        qty: 1
      }
      this.$http.post(`${VITE_API}/api/${VITE_PATH}/cart`, { data })
        .then((res) => {
          console.log('購物車', res)
          this.cart = res.data
        })
    }
  },
  components: {
    RouterLink
  },
  mounted () {
    this.getProducts()
  }

}
</script>
