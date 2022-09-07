<template>
  <div class="container">
    <p>Carts</p>
    <div class="text-end">
      <button class="btn btn-sm btn-secondary" @click="clearCarts()" :disabled="carts.length <= 0">清除購物車</button>
    </div>
    <div>
      <p class="text-secondary" v-if="carts.length <= 0">購物車尚無內容</p>
      <table class="table mb-5" v-else>
        <thead>
          <tr>
            <td>Category</td>
            <td>Title</td>
            <td>單/雙面</td>
            <td>尺寸</td>
            <td>材質</td>
            <td>張數</td>
            <td>單價</td>
            <td>總數</td>
            <td>特價</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in carts" :key="item.id">
            <td>
              <span class="badge text-bg-secondary">{{ item.product.category }}</span>
            </td>
            <!-- <td><img :src="item.imageUrl" width="100" /></td> -->
            <td>
              {{ item.product.title }} <br />
              <span class="small text-secondary">{{ item.product.id }}</span>
            </td>
            <td>{{ item.product.content.side }}</td>
            <td>{{ item.product.content.width }} mm X {{item.product.content.height }} mm</td>
            <td>{{ item.product.content.material }}</td>
            <td>{{ item.product.content.qty }} {{ item.product.unit }}</td>
            <td>$ {{ item.product.price }}</td>
            <td>{{ item.qty }}</td>
            <td>$ {{ item.total }}</td>
            <td><button class="btn btn-sm btn-outline-secondary" @click="delCart(item.id)">刪除</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row justify-content-center">
      <div class="col-8">
        <h3>收件人</h3>
        <v-form ref="form" v-slot="{ errors }" @submit="onSubmit">
          <div class="mb-3">
            <label for="name" class="form-label">姓名</label>
            <v-field name="姓名" id="name" type="text" rules="required" class="form-control" :class="{ 'is-invalid':errors['姓名'] }" v-model="order.user.name" placeholder="填入姓名" />
            <error-message name="姓名" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <v-field name="email" id="email" type="email" rules="required|email" class="form-control" :class="{ 'is-invalid':errors['email'] }" v-model="order.user.email" placeholder="填入 Email" />
            <error-message name="email" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label">電話</label>
            <v-field name="電話" id="tel" type="tel" rules="required|numeric|min:7|max:10" class="form-control" :class="{ 'is-invalid':errors['電話'] }" v-model="order.user.tel" />
            <error-message name="電話" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">地址</label>
            <v-field name="地址" id="address" type="text" rules="required" class="form-control" :class="{ 'is-invalid':errors['地址'] }" v-model="order.user.address" />
            <error-message name="地址" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">訂單備註</label>
            <v-field as="textarea" name="message" id="message" class="form-control" rows="3" v-model="order.message" />
          </div>
          <button type="submit" class="btn btn-primary">結帳</button>
        </v-form>
      </div>
    </div>
  </div>
</template>
<script>
// todo: 地址導入縣市 select
export default {
  data () {
    return {
      carts: [],
      order: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getCarts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then((res) => {
          this.carts = res.data.data.carts
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    clearCarts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(url)
        .then((res) => {
          alert(res.data.message)
          this.getCarts()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    delCart (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(url)
        .then((res) => {
          alert(res.data.message)
          this.getCarts()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    onSubmit () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`
      this.$http.post(url, { data: { ...this.order } })
        .then((res) => {
          alert(res.data.message)
          // 送出後 1.更新購物車 2.重置表單
          this.getCarts()
          this.$refs.form.resetForm()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
