<template>
  <div class="container">
    <div class="text-end">
      <button type="button" class="btn btn-dark" @click="openModal('new')">
        新增
      </button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <td>No</td>
          <td>Category</td>
          <!-- <td></td> -->
          <td>Title</td>
          <td>單/雙面</td>
          <td>尺寸</td>
          <td>材質</td>
          <td>數量</td>
          <td>Description</td>
          <td>原價 (OP)</td>
          <td>特價</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in allProducts" :key="item.id">
          <td>{{ item.num }}</td>
          <td>
            <span class="badge text-bg-secondary">{{ item.category }}</span>
          </td>
          <!-- <td><img :src="item.imageUrl" width="100" /></td> -->
          <td>
            {{ item.title }} <br />
            <span class="small text-secondary">{{ item.id }}</span>
          </td>
          <td>{{ item.content.side }}</td>
          <td>{{ item.content.width }} mm X {{ item.content.height }} mm</td>
          <td>{{ item.content.material }}</td>
          <td>{{ item.content.qty }} {{ item.unit }}</td>
          <td>{{ item.description }}</td>
          <td>$ {{ item.origin_price }}</td>
          <td>$ {{ item.price }}</td>
          <td class="text-end">
            <button
              type="button"
              class="btn btn-sm btn-outline-dark"
              @click="openModal('edit', item)">
              編輯</button>&nbsp;
            <button
              type="button"
              class="btn btn-sm btn-outline-dark"
              @click="copyProduct(item)">
              複製</button>&nbsp;
            <button type="button" class="btn btn-sm btn-outline-danger" @click="openModal('delete', item)">
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <pagination :pages="pagination" @emit-pages="getProducts"></pagination>
  <!-- :isNew、:productData 傳資料進入元件 ； ref 傳方法進入元件(開啟 modal) ； @emit-product 元件傳方法出來並帶更新後的值 (更新 product) -->
  <productModal :is-new="isNew" :product-item="product" ref="callModal" @update-product="updateProduct"></productModal>
  <delProductModal  :product-item="product" ref="callDelModal" @del-product="delProduct"></delProductModal>
</template>
<script type="module">
// 切換頁數
// 打開 modal
// 新增 編輯 刪除 產品
import pagination from '../../components/PaginationTemp.vue'
import productModal from '../../components/ProductModal.vue'
import delProductModal from '../../components/DelProductModal.vue'

export default {
  data () {
    return {
      isNew: true,
      allProducts: [],
      product: {
        content: {
          width: 90,
          height: 54,
          qty: 100,
          side: 'single',
          material: '一級卡'
        },
        imagesUrl: []
      },
      pagination: {}
    }
  },
  components: {
    pagination, productModal, delProductModal
  },
  methods: {
    // 取得所有產品
    getProducts (page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.$http.get(url)
        .then((res) => {
          // API 資料存入 allProducts
          this.allProducts = res.data.products
          this.pagination = res.data.pagination
          console.log(this.allProducts)
          console.log(typeof this.allProducts[0].content)
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    },
    updateProduct (item) {
      console.log(item)
      const data = { ...item }
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      let http = 'post'
      if (!this.isNew) {
        http = 'put'
        url = `${url}/${item.id}`
      }
      this.$http[http](url, { data })
        .then((res) => {
          console.log(res)
          this.hideModal()
          this.getProducts()
        })
        .catch((err) => {
          alert(err.data)
        })
    },
    copyProduct (item) {
      const data = { ...item }
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      this.$http.post(url, { data })
        .then((res) => {
          this.getProducts()
        })
        .catch((err) => {
          alert(err.data)
        })
    },
    delProduct (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${id}`
      this.$http.delete(url)
        .then((res) => {
          alert(res.data.message)
          this.hideModal()
          this.getProducts()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 開啟 modal
    openModal (active, item) {
      if (active === 'new') {
        this.product = {
          content: {
            width: 90,
            height: 54,
            qty: 100,
            side: 'single',
            material: '一級卡'
          },
          imagesUrl: []
        }
        this.$refs.callModal.showModal()
        this.isNew = true
      } else if (active === 'edit') {
        this.product = { ...item }

        // 避免資料互相汙染需用解構賦值
        this.$refs.callModal.showModal()
        this.isNew = false
      } else if (active === 'delete') {
        this.product = { ...item }
        this.$refs.callDelModal.showModal()
      }
    },
    hideModal () {
      this.$refs.callModal.hideModal()
      this.$refs.callDelModal.hideModal()
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
