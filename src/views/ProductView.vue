<template>
    <div>
        <p>{{ product.title }}</p>
        {{ product.description }}
        <hr>
        <p>尺寸 (size)</p>
        <a href="#" @click="updateProduct({size: item})" v-for="(item, index) in this.size" :key="`size${index}`" class="btn btn-sm rounded-pill" :class="[this.currSize === item ? 'btn-secondary' : 'btn-outline-secondary']">{{item}}</a>
        <p>單/雙面 (side)</p>
        <a href="#" v-for="(item, index) in this.side" :key="`side${index}`" class="btn btn-sm rounded-pill" :class="[this.product.content.side === item ? 'btn-secondary' : 'btn-outline-secondary']">{{item}}</a>
        <p>材質(material)</p>
        <a href="#" class="btn btn-sm btn-secondary rounded-pill">single</a>
    </div>
</template>
<script>
export default {
  data () {
    return {
      text: '123',
      products: [],
      product: {},
      currSize: '',
      size: [],
      side: [],
      material: []
    }
  },
  methods: {
    getTitle () {
      // 取得所有產品
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url)
        .then((res) => {
          // 取得所有產品 ex: 名片、明信片
          this.allProducts = res.data.products
          // 取得 該產品名稱的所有資料 ex: 名片
          const productTitle = this.product.title
          this.products = this.allProducts.filter(item => item.title === productTitle)

          // 取出所有 size
          const allSize = []
          this.products.forEach(item => {
            const str = `${item.content.width}x${item.content.height}`
            allSize.push(str)
          })
          // 取出 size 唯一值
          this.size = allSize.filter((item, index) => allSize.indexOf(item) === index)

          // 取出所有 side
          const allSide = []
          this.products.forEach(item => allSide.push(item.content.side))
          // 取出 side 唯一值
          this.side = allSide.filter((item, index) => allSide.indexOf(item) === index)

          console.log(this.size)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    updateProduct () {
      // this.$router.push(`/product/${id}`)
    }
  },
  mounted () {
    const { id } = this.$route.params
    const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
    this.$http.get(url)
      .then((res) => {
        this.product = res.data.product
        this.currSize = `${this.product.content.width}x${this.product.content.height}`
        this.getTitle()
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
