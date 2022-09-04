<template>
  <div class="container">
    <div class="row">
      <div class="col d-flex flex-column justify-content-end">
        <h1>{{ currProduct.title }}</h1>
        <p>{{ currProduct.description }}</p>
      </div>
      <div class="col-4">
        <div class="product-img" :style="{backgroundImage: `url(${currProduct.imageUrl})`}">

        </div>
      </div>
    </div>

    <hr />
    <div class="mb-3">
      <p>尺寸 (size)</p>
      <a
        href="#"
        @click.prevent="getProduct('size', item)"
        v-for="(item, index) in sizeList"
        :key="`size${index}`"
        class="btn btn-sm rounded-pill me-2"
        :class="[
          this.currSize === item ? 'btn-secondary' : 'btn-outline-secondary'
        ]"
        >{{ item }}</a
      >
    </div>
    <div class="mb-3">
      <p>單/雙面 (side)</p>
      <a
        href="#"
        @click.prevent="getProduct('side',item)"
        v-for="(item, index) in sideList"
        :key="`side${index}`"
        class="btn btn-sm rounded-pill me-2"
        :class="[
          this.currProduct.content.side === item
            ? 'btn-secondary'
            : 'btn-outline-secondary'
        ]"
        >{{ item }}</a
      >
    </div>
    <div class="position-relative" style="min-height: 100px">
      <v-loading :active="isLoading" :is-full-page="false" v-if="isLoading"></v-loading>
      <table class="table" v-else>
        <thead>
          <tr>
            <th>size</th>
            <th>side</th>
            <th>材質</th>
            <th>數量</th>
            <th>origin_price</th>
            <th>Price</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in sortProducts" :key="item.id" :class="{'bg-light':this.currProduct.id === item.id}">
            <th>{{ item.content.width }}x{{ item.content.height }}</th>
            <td>{{ item.content.side }}</td>
            <td>{{ item.content.material }}</td>
            <td>{{ item.content.qty }}</td>
            <td>$ {{ item.origin_price }}</td>
            <td><a href="#" @click.prevent="getProduct('all', item)">$ {{ item.price }}</a></td>
            <td>{{ item.id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>NT$ {{currProduct.price}}</p>
    <a href="#" class="btn btn-secondary" @click.prevent="addToCart()">Add to cart</a>
  </div>
</template>
<style lang="scss">
.product-img {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
}
</style>
<script>
export default {
  data () {
    return {
      isLoading: true,
      currProduct: {},
      currProducts: [],
      sortProducts: [],
      currSize: '',
      carts: [],
      sizeList: [],
      sideList: [],
      material: []
    }
  },
  methods: {
    // 1.顯示所有選項 size side
    // 2. 所有產品 products > 所有 title product
    // 3. 依篩選條件 顯示產品 sortProduct
    // 4. 切換條件時 更新產品列表
    // 所有 size、篩選過的 size、當前 size
    getProduct (str, val) {
      // 取得所有產品
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http
        .get(url)
        .then((res) => {
          // 所有產品 ex: 名片、明信片...
          const products = res.data.products
          // 篩選出該產品 ex: 名片
          this.currProducts = products.filter(
            (item) => item.title === this.currProduct.title
          )
          // 顯示該產品所有選項 size side
          this.showSizeSide()
          // 依條件顯示產品 active
          if (str === 'size') {
            const size = val.split('x')
            this.currProduct.content.width = Number(size[0])
            this.currProduct.content.height = Number(size[1])
            this.currSize = `${size[0]}x${size[1]}`
            console.log(this.currProduct)
          } else if (str === 'side') {
            this.currProduct.content.side = val
          } else if (str === 'all') {
            this.currProduct = { ...val }
            console.log(this.currProduct)
          }
          this.sortProduct(str)
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 顯示產品的尺寸、單雙面
    showSizeSide () {
      // 取出所有 size, side
      const allSize = []
      const allSide = []
      // size, side 唯一值
      this.currProducts.forEach((item) => {
        // size 組成物件
        const str = `${item.content.width}x${item.content.height}`
        allSize.push(str)
        allSide.push(item.content.side)
      })
      // 取出 size 唯一值
      this.sizeList = allSize.filter((item, index) => allSize.indexOf(item) === index)
      // 取出 side 唯一值
      this.sideList = allSide.filter(
        (item, index) => allSide.indexOf(item) === index
      )
      console.log(this.sideList)
    },
    // 依條件篩選
    sortProduct (str) {
      if (str === 'all') {
        // 選擇 價格 嚴格篩選 跳至對應產品頁
        const choseProduct = this.currProducts.find(item => {
          const iContent = item.content
          const currContent = this.currProduct.content
          // size(寬 高) 單雙面 數量 材質
          return iContent.width === currContent.width && iContent.height === currContent.height && iContent.side === currContent.side && iContent.material === currContent.material && iContent.qty === currContent.qty
        })
        this.currProduct = { ...choseProduct }
      } else {
        // 篩選出當前的選取條件的 products
        this.sortProducts = this.currProducts.filter(item => {
          const iContent = item.content
          const currContent = this.currProduct.content
          return iContent.width === currContent.width && iContent.height === currContent.height && iContent.side === currContent.side
        })
        // 數量排序小到大排序
        this.sortProducts.sort((a, b) => {
          return a.content.qty - b.content.qty
        })
        this.currProduct = { ...this.sortProducts[0] }
      }

      this.$router.push(`/product/${this.currProduct.id}`)
    },
    addToCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(url, { data: { product_id: this.currProduct.id, qty: 1 } })
        .then((res) => {
          alert(res.data.message)
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    }
  },
  mounted () {
    const { id } = this.$route.params
    const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`

    // 依當前產品頁顯示對應的產品資料
    this.$http
      .get(url)
      .then((res) => {
        // 當前產品
        this.currProduct = res.data.product
        // 當前產品尺寸
        this.currSize = `${this.currProduct.content.width}x${this.currProduct.content.height}`
        // 顯示產品列表
        this.getProduct()
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
