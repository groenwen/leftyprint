<template>
  <div class="container">
    <div class="text-end">
        <button type="button" class="btn btn-dark" @click="openModal('new')">新增</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <td>Category</td>
          <td></td>
          <td>Title</td>
          <td>Description</td>
          <td>Content</td>
          <td>Origin_price</td>
          <td>Price</td>
          <td>Unit</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in allProducts" :key="item.id" >
        <td><span class="badge text-bg-secondary">{{item.category}}</span></td>
        <td><img :src="item.imageUrl" width="100"></td>
        <td>{{item.title}} <br> <span class="small text-secondary">{{item.id}}</span></td>
        <td>{{item.description}}</td>
        <td>{{item.content}}</td>
        <td>$ {{item.origin_price}}</td>
        <td>$ {{item.price}}</td>
        <td>{{item.unit}}</td>
        <td class="text-end">
          <button type="button" class="btn btn-sm btn-outline-dark" :id="item.id" @click="openModal('edit', item)">編輯</button>&nbsp;
          <button type="button" class="btn btn-sm btn-outline-danger">刪除</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

  <productModal :isNew="isNew" :productData="productData" ref="callModal"></productModal>
</template>
<script type="module">
import productModal from '../../components/ProductModal.vue'

export default {
  data () {
    return {
      allProducts: [],
      isNew: '',
      productData: {}
    }
  },
  components: {
    productModal
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/all`
      this.$http.get(url)
        .then((res) => {
          this.allProducts = res.data.products
          console.log(this.allProducts)
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    },
    addProduct () {

    },
    editProduct () {

    },
    openModal (status, product) {
      // 新增 編輯 共用 modal
      if (status === 'new') {
        this.isNew = 'new'
        this.productData = ''
        this.$refs.callModal.innerOpenModal()
      } else if (status === 'edit') {
        this.isNew = 'edit'
        this.productData = product
        this.$refs.callModal.innerOpenModal()
      }
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
