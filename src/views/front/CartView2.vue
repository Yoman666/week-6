<template>
  <!-- 購物車流程 -->
  <section class="cart-section01">
            <div class="container">
                <ul class="row" style="display: flex; justify-content: space-around;">
                    <li class="col-2 cart-lable  lable-text">購物車清單</li>
                    <li class="col-2 cart-lable cart-lable-active lable-text">填寫資料</li>
                    <li class="col-2 cart-lable lable-text">確認訂單</li>
                    <li class="col-2 cart-lable lable-text">完成訂單</li>
                </ul>
            </div>

        </section>

        <!--購物車清單 -->
        <section>
            <div class="container d-flex flex-column align-items-center ">
                <img src="https://cdn-icons-png.flaticon.com/128/2083/2083677.png" alt="" width="70" class="my-2">

                <h3 class="my-2 text-title">購物車清單</h3>

                <div class="row cartliststyle my-3" v-for="item in cart.carts" :key="item.id" style="width: 100%;">
                    <div class="col-2">
                        <a href=""><img :src="item.product.imageUrl" alt=""></a>
                    </div>
                    <div class="col-10 cartlist-center-out ">
                        <div class="row cartlist-center">
                            <div class="col-12">
                                <h2 class="text-title">{{item.product.title}}</h2>
                            </div>

                            <div class="col-12">
                                <h2 class="text-container">NT$ {{item.product.price}}</h2>
                            </div>

                            <div class="col-6">
                                <h2 class="text-container">X {{item.qty}}</h2>
                            </div>
                            <div class="col-6">
                                <h2 class="text-title float-end">NT$ {{item.total}}</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div style="border: 10px solid #F8CA6D; width: 100%;" class="my-4 container"></div>
            <div class="container d-flex flex-column align-items-end">

                <div class="float-end my-4 d-flex">
                    <p class="text-title mx-4">小計</p>
                    <p class="product-price ">NT${{cart.final_total}}</p>
                </div>

                <div class="float-end my-4 d-flex">
                    <p class="text-title mx-4">運費</p>
                    <p class="product-price ">NT$ 60</p>
                </div>
            </div>
            <div style="border: 10px solid #F8CA6D; width: 100%;" class="my-4 container"></div>
            <div class="container d-flex flex-column align-items-end">

                <div class="float-end my-3 d-flex">
                    <p class="text-title mx-4">總計</p>
                    <p class="product-price ">NT${{cart.final_total+60}}</p>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <a href="./cart02.html" class="btn-style1 btn-color1 text-center  d-inline-block" style="float: right;">GO TO 確認訂單</a>
            </div>
        </section>

        <!-- 表單 -->
        <!-- <div class="my-5 row justify-content-center">
        <Form
          ref="form"
          class="col-md-6"
          v-slot="{ errors }"
          @submit="createOrder"
        >
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            ></Field>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <Field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            ></Field>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <Field
              id="tel"
              name="電話"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              rules="required"
              v-model="form.user.tel"
            ></Field>
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <Field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
            ></Field>
            <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              name=""
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-danger">送出訂單</button>
          </div>
        </Form>
      </div> -->
  <!-- <div class="about">
    <h1>This is 購物車頁面</h1>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 110px">數量</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="cart.carts">
                <tr v-for="item in cart.carts" :key="item.id">
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      @click="removeCartItem(item.id)"
                      :disabled="loadingStatus.loadingItem === item.id"
                    >
                      <i
                        class="fas fa-spinner fa-pulse"
                        v-if="loadingStatus.loadingItem === item.id"
                      ></i>
                      移除購物車
                    </button>
                  </td>
                  <td>
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">
                      已套用優惠券
                    </div>
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      {{ item.qty }} / {{ item.product.unit }}
                    </div>
                  </td>
                  <td class="text-end">
                    <small
                      v-if="cart.final_total !== cart.total"
                      class="text-success"
                      >折扣價：</small
                    >
                    {{ item.final_total }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{ cart.total }}</td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ cart.final_total }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div class="my-5 row justify-content-center">
        <Form
          ref="form"
          class="col-md-6"
          v-slot="{ errors }"
          @submit="createOrder"
        >
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            ></Field>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <Field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            ></Field>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <Field
              id="tel"
              name="電話"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              rules="required"
              v-model="form.user.tel"
            ></Field>
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <Field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
            ></Field>
            <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              name=""
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-danger">送出訂單</button>
          </div>
        </Form>
      </div>
    </div>
  </div> -->

</template>

<script>
export default {
  name: 'CartView2',
  data () {
    return {
      loadingStatus: {
        loadingItem: ''
      },
      isLoading: false,
      cart: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      coupon_code: ''
    }
  },
  mounted () {
    this.getCart()
  },
  methods: {
    getCart () {
      this.isLoading = true
      const url = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart`
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          this.cart = response.data.data
          this.isLoading = false
        } else {
          alert(response.data.message)
        }
      })
    },
    removeCartItem (id) {
      this.isLoading = true
      const url = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart/${id}`
      this.loadingStatus.loadingItem = id
      this.$http
        .delete(url)
        .then((response) => {
          alert(response.data.message)
          this.getCart()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
      this.loadingStatus.loadingItem = ''
      this.isLoading = false
    },
    createOrder () {
      this.isLoading = true
      const url = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/order`
      const order = this.form
      this.$http
        .post(url, { data: order })
        .then((response) => {
          alert(response.data.message)
          this.$refs.form.resetForm()
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>
