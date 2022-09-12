<template>
  <div class="container">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <p>名名快速 9x5.4(side, material, qty)</p>
    <select class="form-select">
      <option v-for="(item, index) in sideList" value="item" :key="`side${index}`">{{ item }}</option>
    </select>
    <div>
      <a href="#" class="btn btn-sm pill" :class="[isFront ? 'btn-secondary' : 'btn-outline-secondary']" @click="isFront = true">正面</a>
      <a href="#" class="btn btn-sm pill" :class="[!isFront ? 'btn-secondary' : 'btn-outline-secondary']" @click="isFront = false">背面</a>
    </div>
    <div class="d-flex">
      <div>
        <canvas ref="front" style="border: 1px solid #F7F9FB;" v-show="isFront"></canvas>
        <canvas ref="back" style="border: 1px solid #F7F9FB;" v-show="!isFront"></canvas>
      </div>
      <div class="ms-5">
        <form @submit="addToCart('-NAn-K3qa3HOzb0sNyKh')">
          <p class="mb-3">名 / 9X5.4 / 一</p>
          <div v-show="isFront">
            <div class="mb-3">
              <label for="frontName" class="form-label">Name</label>
              <input type="text" class="form-control" id="frontName" v-model="frontForm.name">
            </div>
            <div class="mb-3">
              <label for="frontPhone" class="form-label">Phone</label>
              <input type="tel" class="form-control" id="frontPhone" v-model="frontForm.phone">
            </div>
          </div>
          <div v-show="!isFront">
            <div class="mb-3">
              <label for="backName" class="form-label">Name</label>
              <input type="text" class="form-control" id="backName" v-model="backForm.name">
            </div>
            <div class="mb-3">
              <label for="backPhone" class="form-label">Phone</label>
              <input type="tel" class="form-control" id="backPhone" v-model="backForm.phone">
            </div>
          </div>
            <div class="text-end">
              <button type="submit" class="btn btn-secondary">Add to Cart</button>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script>
export default {
  data () {
    return {
      VUE_APP: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}`,
      isFront: true,
      vueCanvas: null,
      dataURL: {
        front: '',
        back: ''
      },
      frontForm: {
        name: 'September',
        phone: '20220908'
      },
      backForm: {
        name: 'back',
        phone: '20220908'
      },
      carts: [],
      currProds: [],
      sideList: [],
      materialList: []
    }
  },
  watch: {
    frontForm: {
      handler (newVal, oldVal) {
        this.createCanvas('front')
      },
      deep: true
    },
    backForm: {
      handler (newVal, oldVal) {
        this.createCanvas('back')
      },
      deep: true
    }
  },
  methods: {
    createCanvas (side) {
      console.log(this.$refs[side], 'hello')
      const canvas = this.$refs[side]
      canvas.width = 360
      canvas.height = 216
      const ctx = canvas.getContext('2d')

      // 先設定顏色 再繪製位置及尺寸
      ctx.fillStyle = '#F7F9FB'
      ctx.fillRect(0, 0, 360, 216)
      // 矩形
      // ctx.fillStyle = "#000000";
      // ctx.fillRect(10, 10, 340, 196);
      ctx.save()

      ctx.restore()
      // 文字
      ctx.font = '32px serif'
      ctx.fillStyle = '#00A0E9'
      ctx.fillText(this[`${side}Form`].name, 50, 50)
      ctx.save()

      ctx.restore()
      ctx.font = '16px serif'
      ctx.fillStyle = '#00A0E9'
      ctx.fillText(this[`${side}Form`].phone, 50, 100)

      this.dataURL[side] = canvas.toDataURL()
      this.vueCanvas = ctx
    },
    showSpec () {
      const url = `${this.VUE_APP}/products/all`
      this.$http.get(url)
        .then((res) => {
          // [a, b, c...]
          const allProds = res.data.products
          // obj
          this.currProds = allProds.filter((item) => item.title === '名片')
          this.showSizeAndSide()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    // 初始化顯示 side, material
    showSizeAndSide () {
      // 該產品所有 side, material
      const allSide = this.currProds.map(item => {
        return item.content.side
      })

      // 該產品所有 side, material
      const allMaterial = this.currProds.map(item => {
        return item.content.material
      })

      // 不重複的 side
      this.sideList = allSide.filter((item, index) => allSide.indexOf(item) === index)
      this.sideList.sort() // 排序 side

      // 不重複的 side
      this.materialList = allMaterial.filter((item, index) => allMaterial.indexOf(item) === index)
      this.materialList.sort() // 排序 material
    },
    addToCart (id) {
      const url = `${this.VUE_APP}/cart`
      this.$http.get(url)
        .then((res) => {
          this.carts = res.data.data.carts
          // 撈出 carts 裡是否有同 ID 的資料
          // 有 抓出 將 file 再 push 進去
          // 沒有 直接 post
          let cartItem = this.carts.find(item => item.product_id === id)
          if (cartItem === undefined) {
            cartItem = { product_id: id, qty: 1, files: [this.dataURL] }
          } else {
            cartItem.files.push(this.dataURL)
          }
          this.$http.post(url, { data: cartItem })
            .then((res) => {
              alert(res.data.message)
              console.log(res.data)
            })
            .catch((err) => {
              console.log(err.response.data.message)
            })
          console.log(this.carts)
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.createCanvas('front')
    this.createCanvas('back')
    this.showSpec()
  }
}
</script>
