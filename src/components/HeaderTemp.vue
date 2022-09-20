<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">Navbar</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/products" class="nav-link">所有產品</router-link>
          <router-link to="/admin" class="nav-link">後台</router-link>
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
</template>
<style lang="scss">
.nav-link {
  margin-left: 1rem;
}
</style>
<script>
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
          this.carts = res.data.data.carts
          console.log(this.carts)
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
