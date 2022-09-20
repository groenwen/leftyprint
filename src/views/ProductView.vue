<template>
  <div class="container">
    <div class="row">
      <div class="col d-flex flex-column justify-content-end">
        <h1>{{ currProd.title }}</h1>
        <p>{{ currProd.description }}</p>
      </div>
      <div class="col-4">
        <div class="currProduct-img" :style="{backgroundImage: `url(${currProd.imageUrl})`}">

        </div>
      </div>
    </div>

    <hr />
    <div class="mb-3">
      <p>尺寸 (size)</p>
      <a
        href="#"
        v-for="(item, index) in sizeList"
        :key="`size${index}`"
        @click.prevent="checkSizeAndSide('size', item)"
        class="btn btn-sm rounded-pill me-2"
        :class="[this.currSize === item ? 'btn-secondary' : 'btn-outline-secondary']"
        >{{ item }}
      </a>
    </div>
    <div class="mb-3">
      <p>單/雙面 (side)</p>
      <a
        href="#"
        v-for="(item, index) in sideList"
        :key="`side${index}`"
        @click.prevent="checkSizeAndSide('side', item)"
        class="btn btn-sm rounded-pill me-2"
        :class="[
          this.currProd.side === item
            ? 'btn-secondary'
            : 'btn-outline-secondary'
        ]"
        >{{ item }}</a
      >
    </div>
    <div class="position-relative" style="min-height: 100px">
      <v-loading :active="isLoading" ></v-loading>
      <table class="table">
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
            <th>{{ item.width }}x{{ item.height }}</th>
            <td>{{ item.side }}</td>
            <td>{{ item.material }}</td>
            <td>{{ item.p_qty }}</td>
            <td>$ {{ item.origin_price }}</td>
            <td><router-link :to="`/product/${item.id}`">$ {{ item.price }}</router-link></td>
            <td>{{ item.id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>NT$ {{currProd.price}}</p>
    <div>
      <p>upload</p>
      <form @submit.prevent="uploadFile">
        <input type="file" id="myFile" name="myFile" accept="image/png, image/jpeg" @change="choseFile">
        <button type="submit" >Upload</button>
      </form>
    </div>
    <a href="#" class="btn btn-secondary" @click.prevent="addToCart()">Add to cart</a>
  </div>
</template>
<style lang="scss">
.currProduct-img {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
}
</style>
<script>
import emitter from '@/js/emitter'
export default {
  data () {
    return {
      isLoading: true,
      VUE_APP: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}`,
      currProd: {},
      currProds: [],
      sortProds: [],
      currSize: '',
      currSide: '',
      carts: [],
      sizeList: [],
      sideList: [],
      file: {}
    }
  },
  computed: {
    prodId () {
      return this.$route.params.id
    }
  },
  watch: {
    prodId () {
      this.getProds()
    }
  },
  methods: {
    // 1.顯示所有選項 size side
    // 2. 所有產品 currProducts > 所有 title currProduct
    // 3. 依篩選條件 顯示產品 sortcurrProduct
    // 4. 切換條件時 更新產品列表
    // 所有 size、篩選過的 size、當前 size
    // canva https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLCanvasElement/toDataURL
    getProds () {
      // 取得所有產品
      const url = `${this.VUE_APP}/products/all`
      this.$http
        .get(url)
        .then((res) => {
          // [a, b, c...]
          const allProds = res.data.products
          // obj
          this.currProd = allProds.find((item) => item.id === this.prodId)
          this.currSize = `${this.currProd.width}x${this.currProd.height}`
          this.currSide = this.currProd.side
          // [a, a, a...]
          this.currProds = allProds.filter((item) => item.title === this.currProd.title)
          // 列出 size, side
          this.showSizeAndSide()

          // 篩選
          this.getSortProds()

          this.isLoading = false
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    checkSizeAndSide (status, val) {
      if (status === 'size') {
        const size = val.split('x')
        this.currSize = `${size[0]}x${size[1]}`
      } else if (status === 'side') {
        this.currSide = val
      }
      this.getSortProds()
      this.currProd = { ...this.sortProds[0] }
      this.$router.push(`/product/${this.currProd.id}`)
    },
    getSortProds () {
      // 選 size, side 時 預設選取 sortProds 的第一筆資料
      // 選 price 時 即選取該資料

      // 篩選的資料
      const filterProds = this.currProds.filter((el, i) => {
        const size = this.currSize.split('x')
        return el.width === Number(size[0]) && el.height === Number(size[1]) && el.side === this.currSide
      })

      // 排序 - 先將資料存入暫時的 Array
      const mapped = filterProds.map((el, i) => {
        return { index: i, value: el }
      })
      // 排序 - 暫時的 Array 依數量排序
      mapped.sort((a, b) => {
        if (a.value.p_qty > b.value.p_qty) return 1
        if (a.value.p_qty < b.value.p_qty) return -1
        return 0
      })
      // 排序 - 再依 filterProds 的資料存回 sortProds
      this.sortProds = mapped.map(el => filterProds[el.index])
    },
    // 初始化顯示 size, side
    showSizeAndSide () {
      // 該產品所有 size, side
      const allSize = this.currProds.map(item => {
        return `${item.width}x${item.height}`
      })
      const allSide = this.currProds.map(item => {
        return item.side
      })

      // 不重複的 size
      this.sizeList = allSize.filter((item, index) => allSize.indexOf(item) === index)
      this.sizeList.sort() // 排序 size
      // 不重複的 side
      this.sideList = allSide.filter((item, index) => allSide.indexOf(item) === index)
      this.sideList.sort() // 排序 side
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
    addToCart () {
      const url = `${this.VUE_APP}/cart`
      this.$http.post(url, { data: { product_id: this.currProd.id, qty: 1, files: [{ id: 0 }] } })
        .then((res) => {
          // 更新購物車數量
          emitter.emit('cartCount')
          alert(res.data.message)
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    choseFile (e) {
      this.file = e.target.files[0]
    },
    uploadFile () {
      const url = 'https://script.google.com/macros/s/AKfycbwuS2QeYvec72MZrQTPElC07XE1ntHm3tepY2ySf44qWRNvy_J9vADKZveVQ93dzhO8/exec'
      // const form = new FormData()
      // const parameter = {
      //   fileName: this.file.name,
      //   fileType: this.file.type
      // }
      // form.append('file', this.file)
      // console.log(form.parentNode)
      this.$http.post(url, this.file, { headers: { 'content-type': 'text/plain; charset=utf-8' } })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getProds()
  }
}
</script>
