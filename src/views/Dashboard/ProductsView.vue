<template>
  <div class="container">
    <div class="text-end">
      <button type="button" class="btn btn-sm btn-primary">新增</button>
    </div>
    <table class="table">
      <thead>
        <tr>
        <td>Category</td>
        <td>Title</td>
        <td>Origin_price</td>
        <td>Price</td>
        <td></td>
      </tr>
      </thead>
      <tbody>
        <tr v-for="item in allProducts" :key="item.id">
        <td>{{item.category}}</td>
        <td>{{item.title}}</td>
        <td>{{item.origin_price}}</td>
        <td>{{item.price}}</td>
        <td class="text-end">
          <button type="button" class="btn btn-sm btn-outline-primary" :id="item.id">編輯</button>&nbsp;
          <button type="button" class="btn btn-sm btn-outline-danger">刪除</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <button type="button" class="btn btn-primary" @click="openModal">
  Launch demo modal
</button>
  <productModal :inside="outside" ref="callModal"></productModal>
</template>
<script type="module">
import productModal from '../../components/ProductModal.vue'

export default {
  data () {
    return {
      allProducts: [],
      outside: '外層 data'
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
        })
    },
    openModal () {
      this.$refs.callModal.innerOpenModal()
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
