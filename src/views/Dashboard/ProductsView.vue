<template>
  <div class="container">
    <table class="table">
      <tr>
        <td>Category</td>
        <td>Title</td>
        <td>Origin_price</td>
        <td>Price</td>
      </tr>
      <tr v-for="item in allProducts" :key="item.id">
        <td>{{item.category}}</td>
        <td>{{item.title}}</td>
        <td>{{item.origin_price}}</td>
        <td>{{item.price}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      allProducts: []
    }
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/all`
      this.$http.get(url)
        .then((res) => {
          this.allProducts = res.data.products
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
