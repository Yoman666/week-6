<template >
<!-- <table class="container">
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
            <td><RouterLink :to="`/product/${item.id}`">詳細資訊</RouterLink></td>
            <RouterLink :to="`/product/${item.id}`" class="btn btn-primary m-2">單一產品</RouterLink>
            <button class="btn btn-info m-2" @click="addToCart(item.id)">加入車車</button>
        </tr>

    </tbody>
</table> -->

 <!--品牌理念 -->
 <section class="products-section01">
            <div class="container d-flex flex-column align-items-center ">
                <img src="" alt="" width="70" class="my-2">
                <h3 class="my-2 text-title">商品</h3>
                <!-- <ul class="center-row m-4 p-0">
                    <li class="center mx-2">
                        <div class="label-cyc">
                            <img src="./img/banana.png" alt="" width="70" class="my-2">
                        </div>
                        <p class="lable-text">所有產品</p>
                    </li>
                    <li class="center mx-2">
                        <div class="label-cyc">
                            <img src="./img/banana.png" alt="" width="70" class="my-2">
                        </div>
                        <p class="lable-text">編織材料包</p>
                    </li>
                    <li class="center mx-2">
                        <div class="label-cyc">
                            <img src="./img/banana.png" alt="" width="70" class="my-2">
                        </div>
                        <p class="lable-text">編織成品</p>
                    </li>
                    <li class="center mx-2">
                        <div class="label-cyc">
                            <img src="./img/banana.png" alt="" width="70" class="my-2">
                        </div>
                        <p class="lable-text">寵物編織用品</p>
                    </li>
                    <li class="center mx-2">
                        <div class="label-cyc">
                            <img src="./img/banana.png" alt="" width="70" class="my-2">
                        </div>
                        <p class="lable-text">毛線材料</p>
                    </li>
                </ul> -->

                <!-- Swiper -->
                <div class="my-4">
                    <div class="row">
                        <div class="swiper-slide d-flex flex-column col-4" style="flex-direction: column;" v-for="item in products" :key="item.id">
                            <img :src="item.imageUrl" alt="">
                            <!-- <a href="" class="icon-cycle"><img src="" alt="like" class="icon-style"></a> -->
                            <a class="icon-cycle2" @click="addToCart(item.id)"><img src="" alt="cart"
                                    class="icon-style2 " ></a>
                            <div class="py-4">
                                <h4 style="text-align: left;" class="title-setting">
                                    {{item.title}}</h4>
                                <p style="text-align: left;">NT${{item.price}}</p>
                                <RouterLink :to="`/product/${item.id}`" class="btn btn-primary m-2">詳細資訊</RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
