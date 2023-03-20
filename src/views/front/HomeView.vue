<template>
        <!-- banner -->
        <section class="section1">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <h1>歡迎來到<br>萬物皆可織の織物世界</h1>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <!-- <button class="btn btn-outline-success text-nowrap" type="submit">找尋</button> -->
                        </form>
                    </div>
                    <div class="col-6">img</div>
                </div>
            </div>

        </section>

        <!--品牌理念 -->
        <section class="section2">
            <div class="container d-flex flex-column align-items-center ">
                <img src="" alt="" width="70" class="my-2">

                <h3 class="my-2 text-title">笨NaNa 品牌理念</h3>
                <p class="text-container my-4">
                    尊重和保留傳統的編織技藝，同時結合現代設計理念，通過手工編織，創造出獨特和高質量的產品。尊重和保留傳統的編織技藝，同時結合現代設計理念，通過手工編織，創造出獨特和高質量的產品。尊重和保留傳統的編織技藝，同時結合現代設計理念，通過手工編織，創造出獨特和高質量的產品。
                </p>
            </div>
        </section>

        <!--精選文章 -->
        <!-- <section class="section3">
            <div class="container d-flex flex-column align-items-center ">
                <img src="" alt="" width="70" class="my-2">

                <h3 class="my-2 text-title">精選文章</h3>
                <div class="swiper mySwiper my-4">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide d-flex flex-column" style="flex-direction: column;">
                            <img src="" alt="">
                            <div class="py-4">
                                <h4 style="text-align: left;" class="title-setting">
                                    想學編織卻不知如何準備嗎？新手懶人新手懶人新手懶人新手懶人新手懶人新手懶人新手懶人新手懶人新手懶人新手懶人新手懶人新手懶人</h4>
                                <p style="text-align: left;">2023.03.03</p>
                            </div>
                        </div>

                        <div class="swiper-slide d-flex flex-column" style="flex-direction: column;">
                            <img src="" alt="">
                            <div class="py-4">
                                <h4 style="text-align: left;" class="title-setting">想學編織卻不知如何準備嗎？新手懶人</h4>
                                <p style="text-align: left;">2023.03.03</p>
                            </div>
                        </div>

                        <div class="swiper-slide d-flex flex-column" style="flex-direction: column;">
                            <img src="" alt="">
                            <div class="py-4">
                                <h4 style="text-align: left;" class="title-setting">想學編織卻不知如何準備嗎？新手懶人</h4>
                                <p style="text-align: left;">2023.03.03</p>
                            </div>
                        </div>

                        <div class="swiper-slide d-flex flex-column" style="flex-direction: column;">
                            <img src="" alt="">
                            <div class="py-4">
                                <h4 style="text-align: left;" class="title-setting">想學編織卻不知如何準備嗎？新手懶人</h4>
                                <p style="text-align: left;">2023.03.03</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>

                </div>
                <a class="btn-style1 btn-color1 my-2 d-inline-block">了解更多</a>
            </div>

        </section> -->

        <!--熱門商品 -->
        <section class="section4">
            <div class="container d-flex flex-column align-items-center">
                <img src="" alt="" width="70" class="my-2">

                <h3 class="my-2 text-title">熱門商品</h3>

                <!-- Swiper -->
                <div class="my-4">
                    <div class="row">
                        <div class="swiper-slide d-flex flex-column col-4" style="flex-direction: column;" v-for="item in products" :key="item.id">
                            <div v-if="item.id=='-NMreZGQ3edXuWhdduY_'" style="width:100%">
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
                            <div v-if="item.id=='-NMrERSeaJkVD0FYF6op'" style="width:100%">
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
                            <div v-if="item.id=='-NMmBNejVDUkOD464N1y'" style="width:100%">
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
                <router-link to="/products" class="btn-style1 btn-color2 my-2">了解更多</router-link>
            </div>
        </section>
</template>

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

<style scoped>
</style>
