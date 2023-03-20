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
                  <div class="row ">
                      <div class="col-6 center my-4">
                          <div class="input-group my-3 bg-light rounded">
                              <div class="input-group-prepend">
                                  <button class="btn btn-outline-dark border-0 py-2" type="button"
                                      id="button-addon1">
                                      <i class="fas fa-minus">-</i>
                                  </button>
                              </div>
                              <input type="text"
                                  class="form-control border-0 text-center my-auto shadow-none bg-light"
                                  placeholder="" aria-label="Example text with button addon"
                                  aria-describedby="button-addon1" value="1">
                              <div class="input-group-append">
                                  <button class="btn btn-outline-dark border-0 py-2" type="button"
                                      id="button-addon2">
                                      <i class="fas fa-plus">+</i>
                                  </button>
                              </div>
                          </div>
                      </div>
                      <div class="col-6 center">
                          <a href="./checkout.html" class="text-nowrap btn btn-dark w-100 py-2 lable-text">加入購物車</a>
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
