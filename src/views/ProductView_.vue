<template>
  <div class="container">
    <div class="row">
      <div class="col d-flex flex-column justify-content-end">
        <p>{{ currProd.title }}</p>
        <p>{{ currProd.description }}</p>
      </div>
      <div class="col-4">
        <!-- <div class="product-img" :style="{backgroundImage: `url(${currProd.imageUrl})`}">

        </div> -->
      </div>
    </div>

    <hr />
    <div class="mb-3">
      <p>尺寸 (size)</p>
      <a
        href="#"
        @click.prevent="getProds('size', item)"
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
        @click.prevent="getProds('side',item)"
        v-for="(item, index) in sideList"
        :key="`side${index}`"
        class="btn btn-sm rounded-pill me-2"
        :class="[
          this.currProd.content.side === item
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
          <tr v-for="item in sortProds" :key="item.id" :class="{'bg-light':this.currProd.id === item.id}">
            <th>{{ item.content.width }}x{{ item.content.height }}</th>
            <td>{{ item.content.side }}</td>
            <td>{{ item.content.material }}</td>
            <td>{{ item.content.qty }}</td>
            <td>$ {{ item.origin_price }}</td>
            <td><a href="#" @click.prevent="getProds('all', item)">$ {{ item.price }}</a></td>
            <td><router-link :to="`/product/${item.id}`">$ {{ item.price }}</router-link></td>
            <td>{{ item.id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>NT$ {{currProd.price}}</p>
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
      currProd: {},
      currProds: [],
      sortProds: [],
      currSize: '',
      carts: [],
      sizeList: [],
      sideList: [],
      material: []
    }
  },
  computed: {
    prodId () {
      console.log('computed')
      return this.$route.params.id
    }
  },
  watch: {
    prodId () {
      console.log('watch', this.prodId)
      this.iniPage()
    }
  },
  methods: {
    // 1.顯示所有選項 size side
    // 2. 所有產品 products > 所有 title product
    // 3. 依篩選條件 顯示產品 sortProduct
    // 4. 切換條件時 更新產品列表
    // 所有 size、篩選過的 size、當前 size
    getProds (str, val) {
      // 取得所有產品
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http
        .get(url)
        .then((res) => {
          // 所有產品 ex: 名片、明信片...
          const products = res.data.products
          // 篩選出該產品 ex: 名片
          this.currProds = products.filter(
            (item) => item.title === this.currProd.title
          )
          // 顯示該產品所有選項 size side
          this.showSizeSide()
          // 依條件顯示產品 active
          if (str === 'size') {
            const size = val.split('x')
            this.currProd.content.width = Number(size[0])
            this.currProd.content.height = Number(size[1])
            this.currSize = `${size[0]}x${size[1]}`
            console.log(this.currProd)
          } else if (str === 'side') {
            this.currProd.content.side = val
          } else if (str === 'all') {
            // 傳整個 item
            this.currProd = { ...val }
            console.log(this.currProd)
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
      const allSize = []
      const allSide = []

      // 取出該產品所有 size, side
      this.currProds.forEach((item) => {
        const str = `${item.content.width}x${item.content.height}`
        allSize.push(str)
        allSide.push(item.content.side)
      })
      // 取出不重複的 size
      this.sizeList = allSize.filter((item, index) => allSize.indexOf(item) === index)
      // 取出不重複的 side
      this.sideList = allSide.filter((item, index) => allSide.indexOf(item) === index)
    },
    // 物件比較
    shallowEqual (obj1, obj2) {
      // 取出各自的 key 值 ['width', 'height']
      const keys1 = Object.keys(obj1)
      const keys2 = Object.keys(obj2)

      // 比較長度 如果不相等 返回
      if (keys1.length !== keys2.length) {
        return false
      }
      for (let i = 0; i <= keys1.length; i++) {
        const val1 = obj1[keys1[i]]
        const val2 = obj2[keys2[i]]
        if (val1 !== val2) {
          return false
        }
      }
      return true
    },
    // 依條件篩選
    sortProduct (str) {
      if (str === 'all') {
        // 點選 price 時進行嚴格篩選 跳至對應產品頁
        const choseProduct = this.currProds.find(item => {
          const currContent = this.currProd.content
          const iContent = item.content
          console.log(currContent, iContent)
          console.log(this.shallowEqual(currContent, iContent))
          // return this.shallowEqual(currContent, itemContent)
          // size(寬 高) 單雙面 數量 材質
          return iContent.width === currContent.width && iContent.height === currContent.height && iContent.side === currContent.side && iContent.material === currContent.material && iContent.qty === currContent.qty
        })
        console.log(choseProduct)
        this.currProd = { ...choseProduct }
      } else {
        // 篩選出當前的選取條件 size, side 的 products
        this.sortProds = this.currProds.filter(item => {
          const iContent = item.content
          const currContent = this.currProd.content
          return iContent.width === currContent.width && iContent.height === currContent.height && iContent.side === currContent.side
        })
        // 數量排序小到大排序
        this.sortProds.sort((a, b) => {
          return a.content.qty - b.content.qty
        })
        this.currProd = { ...this.sortProds[0] }
      }

      this.$router.push(`/product/${this.currProd.id}`)
    },
    addToCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(url, { data: { product_id: this.currProd.id, qty: 1 } })
        .then((res) => {
          alert(res.data.message)
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    },
    iniPage () {
      const id = this.prodId
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      console.log('iniPage', id)
      // 依當前產品頁顯示對應的產品資料
      this.$http
        .get(url)
        .then((res) => {
          // 當前產品
          this.currProd = res.data.product
          // 當前產品尺寸
          this.currSize = `${this.currProd.content.width}x${this.currProd.content.height}`
          // 顯示產品列表
          this.getProds()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.iniPage()
  }
}
</script>
