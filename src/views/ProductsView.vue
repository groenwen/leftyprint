<template>
  <v-loading :active="isLoading" ></v-loading>
  <div>
    <h1>所有產品</h1>
    <div class="row">
      <div class="col-4" v-for="item in products" :key="item.id">
        <div class="card">
          <div class="card-img" :style="{backgroundImage: `url(${item.imageUrl})`}">

          </div>
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <router-link :to="`/product/${item.id}`" class="btn btn-primary">Go somewhere</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.card-img {
  height: 300px;
  background-size: cover;
  background-position: center;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
</style>
<script>
export default {
  data () {
    return {
      isLoading: false,
      allProducts: [],
      products: []
    }
  },
  methods: {
    getProducts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false
          this.allProducts = res.data.products
          // 儲存所有 title
          let title = []
          this.allProducts.forEach(item => {
            title.push(item.title)
          })
          // 所有 title 唯一值
          title = title.filter((item, index) => title.indexOf(item) === index)
          console.log(this.allProducts)
          // 取第一個產品的入口
          title.forEach((item1, index) => {
            const product = this.allProducts.find(item2 => item1 === item2.title)
            this.products.push(product)
          })

          console.log(this.products)
        })
        .catch((err) => {
          console.log(err.data.message)
        })
    }
  },
  mounted () {
    this.getProducts()
    console.log('hello')
  }
}
</script>
