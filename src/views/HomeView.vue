<template>
  <div class="container">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/products">所有產品</router-link> |
      <router-link to="/carts">Cart <span class="pill">{{carts.length}}</span></router-link> |
      <router-link to="/admin">後台</router-link>
    </nav>
    <router-view />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      carts: []
    }
  },
  watch: {
    carts: {
      handler () {
        console.log('watch')
        // this.getCarts()
      },
      deep: true
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
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
