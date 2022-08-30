<template>
    <div>
        <h1>{{ product.title }}</h1>
        {{ product.description }}
    </div>
</template>
<script>
export default {
  data () {
    return {
      text: '123',
      allProducts: [],
      product: {}
    }
  },
  methods: {
    getTitle () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url)
        .then((res) => {
          this.allProducts = res.data.products
          console.log(res.data.products)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    console.log(this.$route.params)
    const { id } = this.$route.params
    const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
    this.getTitle()
    this.$http.get(url)
      .then((res) => {
        console.log(res.data)
        this.product = res.data.product
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
