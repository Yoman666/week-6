<template>
    這是購物車頁面
    <table class="table align-middle">
              <thead >
                <tr>
                  <th></th>
                  <th>品名</th>
                  <th style="width: 150px">數量/單位</th>
                  <th>單價</th>
                </tr>
              </thead>
              <tbody>
                <!-- 確保cart 裡面是有購物車列表 -->
                <!-- v-for v-if 不要寫在同一層 -->
                <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteAllItem()" >
                  清空購物車
                </button>
                <template v-if="cart.carts" >
                  <!-- v-for 是要取cart 裡面的 carts 不是只有cart -->

                  <tr v-for="item in cart.carts" :key="item.id">
                    <td>
                      <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteitem(item)"
                      >
                        <i class="fas fa-spinner fa-pulse" v-if="loadingStatus.loadingItem === item.id"></i>
                        x
                      </button>
                    </td>
                    <td>
                      <!-- 名稱在carts > product > title -->
                      {{  item.product.title }}

                    </td>
                    <td>
                      <div class="input-group input-group-sm">
                        <div class="input-group mb-3">
                          <!-- <input
                               min="1" type="number" class="form-control">
                          <span class="input-group-text" id="basic-addon2">{{  }}</span> -->
                          <select name="" id="" class="form-control" v-model="item.qty" @change="updateCarts(item)">
                            <option :value="i" v-for="i in 20" :key="i + '123'">
                              {{i}}
                            </option>
                          </select>
                        </div>
                      </div>
                    </td>
                    <td class="text-end">
                      {{ item.total }}
                    </td>
                  </tr>
                </template>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3" class="text-end">總計</td>
                  <td class="text-end">{{ cart.total }}</td>
                </tr>
                <tr>
                  <td colspan="3" class="text-end text-success">折扣價</td>
                  <td class="text-end text-success">{{ cart.final_total }}</td>
                </tr>
              </tfoot>
    </table>
</template>

<script>
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      loadingStatus: {
        loadingItem: ''
      },
      cart: {}
    }
  },
  // 區域元件定義
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
      this.loadingStatus.loadingItem = item.id

      const data = {
        product_id: item.product.id,
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

    deleteitem (item) {
      this.loadingStatus.loadingItem = item.id
      const url = `${VITE_API}/api/${VITE_PATH}/cart/${item.id}`
      this.$http.delete(url).then((res) => {
        this.loadingStatus.loadingItem = ''
        console.log('刪除購物車', res.data)
        this.getCarts()
      })
    },
    deleteAllItem () {
      const url = `${VITE_API}/api/${VITE_PATH}/carts`
      this.$http.delete(url).then((res) => {
        console.log('刪除全部購物車', res.data)
        this.getCarts()
      })
    },
    createOrder () {
      const url = `${VITE_API}/api/${VITE_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order }).then((response) => {
        alert(response.data.message)
        // resetForm=>target 內的表單重置
        this.$refs.form.resetForm()
        this.getCarts()
        console.log('送出訂單', response)
        console.log('ref', this.$refs.form)
      })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
