<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light fixed-top bg-white">
      <div class="container">
        <router-link to="/" class="navbar-brand"><img src="@/assets/images/logo.svg" height="28" alt=""></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <router-link to="/about" class="nav-link">關於 Print</router-link>
            <router-link to="/products" class="nav-link">所有產品</router-link>
            <router-link to="/carts" class="nav-link position-relative pe-1">
              <span class="material-symbols-outlined">shopping_cart</span>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {{carts?.length}}
                <span class="visually-hidden">unread messages</span>
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<style lang="scss">
.nav-link {
  margin-left: 1rem;
}
</style>
<script>
import 'bootstrap/js/dist/collapse.js'
import emitter from '@/js/emitter'
export default {
  data () {
    return {
      carts: []
    }
  },
  methods: {
    getCarts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then((res) => {
          const carts = res.data.data.carts
          const fileCarts = []
          carts.forEach(item => {
            // 如果沒有 files 值 或 files <= 1 直接存入 item
            if (item.files === undefined || item.files.length <= 1) {
              fileCarts.push(item)
            } else {
              // 依 files 的數量 拆分成對應的 cartItem 數，並存回 fileCarts
              const count = item.files.length
              for (let i = 0; i < count; i++) {
                const cartItem = { ...item }
                cartItem.files = [item.files[i]]
                cartItem.files[0].id = i + 1
                fileCarts.push(cartItem)
              }
            }
          })
          this.carts = fileCarts
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    emitter.on('cartCount', () => {
      this.getCarts()
    })
  }
}
</script>
