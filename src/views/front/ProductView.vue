<template>
<!--產品 -->
  <section class="product-section01">
      <div class="container">
          <div class="d-flex flex-row row">
              <img :src="product.imageUrl" style="max-width:100%; object-fit: cover;" class="col-6" >
              <div class="col-6">
                  <h2 class="text-title">{{ product.title }}</h2>
                  <p class="product-table lable-text">{{ product.category }}</p>
                  <p class="text-container my-4">{{ product.description }}
                  </p>
                  <p class="product-price my-4">NT${{product.price}}</p>
                  <div class="row " >
                      <!-- <div class="col-6 center my-4" >
                          <div class="input-group my-3 bg-light rounded" >
                              <select name="" id="" class="form-control" v-model="cart.carts.qty" @change="updateCarts(product)">
                            <option :value="i" v-for="i in 20" :key="i + '123'">
                              {{i}}
                            </option>
                          </select>
                          </div>
                      </div> -->
                      <div class="col-6 center" >
                          <a class="text-nowrap btn btn-dark w-100 py-2 lable-text" @click="addToCart(product.id)">加入購物車</a>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  </section>
    <!-- 產品介紹 -->
    <section class="product-section02">
        <div class="container center">
            <h3 class="my-2 text-title text-center">產品介紹</h3>
            <p class="text-container my-4 text-center">
                {{ product.content }}
            </p>
        </div>
    </section>
    <!-- 推薦商品 -->
    <!-- <section class="product-section01">
        <div class="container">
            <h3 class="my-2 text-title text-center">推薦商品</h3>
            <div class="row">
                <div class="icondiv col-4 my-4">
                    <div style="position: relative;">
                        <a href="#"><img src="./img/pexels-surene-palvie-2070676.jpg" alt=""></a>
                        <a href="#" class="icon-cycle"><img src="./img/like.png" alt="like" class="icon-style"></a>
                        <a href="#" class="icon-cycle2"><img src="./img/shopping-cart.png" alt="cart"
                                class="icon-style2 "></a>
                    </div>
                    <div class="productsbackground p-4">
                        <a href="#">
                            <h4 style="text-align: left;" class="title-setting">
                                復古撞色拼貼手提包</h4>
                            <p style="text-align: left;">NT$ 400</p>
                        </a>
                    </div>
                </div>

                <div class="icondiv col-4 my-4">
                    <div style="position: relative;">
                        <a href=""><img src="./img/pexels-surene-palvie-2070676.jpg" alt=""></a>
                        <a href="" class="icon-cycle"><img src="./img/like.png" alt="like" class="icon-style"></a>
                        <a href="" class="icon-cycle2"><img src="./img/shopping-cart.png" alt="cart"
                                class="icon-style2 "></a>
                    </div>
                    <div class="productsbackground p-4">
                        <a href="#">
                            <h4 style="text-align: left;" class="title-setting">
                                復古撞色拼貼手提包</h4>
                            <p style="text-align: left;">NT$ 400</p>
                        </a>
                    </div>
                </div>

                <div class="icondiv col-4 my-4">
                    <div style="position: relative;">
                        <a href=""><img src="./img/pexels-surene-palvie-2070676.jpg" alt=""></a>
                        <a href="" class="icon-cycle"><img src="./img/like.png" alt="like" class="icon-style"></a>
                        <a href="" class="icon-cycle2"><img src="./img/shopping-cart.png" alt="cart"
                                class="icon-style2 "></a>
                    </div>
                    <div class="productsbackground p-4">
                        <a href="#">
                            <h4 style="text-align: left;" class="title-setting">
                                復古撞色拼貼手提包</h4>
                            <p style="text-align: left;">NT$ 400</p>
                        </a>
                    </div>
                </div>

              </div>
        </div>
    </section> -->
</template>

<script>
const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      product: {},
      cart: {}
    }
  },
  methods: {
    getCarts () {
      const url = `${VITE_API}/api/${VITE_PATH}/cart`
      this.$http.get(url).then((res) => {
        console.log('取得購物車表', res.data)
        // 注意資料取的來源要正確
        this.cart = res.data.data
      })
    },
    updateCarts (item) {
      const data = {
        // product_id: item.product.id,
        // qty: item.qty
        product_id: item.id,
        qty: item.qty
      }

      const url = `${VITE_API}/api/${VITE_PATH}/cart/${item.id}`
      this.$http.put(url, { data }).then((res) => {
        this.loadingStatus.loadingItem = ''
        console.log('更新購物車', res.data)
        this.getCarts()
      }).catch((err) => {
        alert(err.response.data.message)
        this.loadingStatus.loadingItem = ''
      })
    },
    getProduct () {
      console.log('id位置', this.$route.params)
      const { id } = this.$route.params
      this.$http.get(`${VITE_API}/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          console.log('單一產品資料', res)
          this.product = res.data.product
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
  mounted () {
    this.getProduct()
    this.getCarts()
  }
}
</script>
