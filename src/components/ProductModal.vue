<template>
  <div class="modal" ref="myModal" tabindex="-1">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ productData.title }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-3">
            <img class="img-fluid" :src="productData.imageUrl" alt="">
            <div v-for="(item, index) in productData.imagesUrl" :key="index">
              <img class="img-fluid" :src="item" alt="">
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="category" class="form-label">Category</label>
              <input type="text" :value="productData.category" class="form-control" id="category" placeholder="輸入類別" >
            </div>
            <div class="mb-3">
              <label for="title" class="form-label">Title</label>
              <input type="text" :value="productData.title" class="form-control" id="title" placeholder="輸入產品名稱">
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <input type="text" :value="productData.description" class="form-control" id="description" placeholder="輸入產品說明">
            </div>
            <div class="mb-3">
              <label for="content" class="form-label">Content</label>
              <input type="text" :value="productData.content" class="form-control" id="content" placeholder="輸入內容">
            </div>
            <div class="mb-3">
              <label for="originPrice" class="form-label">Origin Price</label>
              <input type="text" :value="productData.origin_price" class="form-control" id="originPrice" placeholder="輸入單價">
            </div>
            <div class="mb-3">
              <label for="price" class="form-label">Price</label>
              <input type="text" :value="productData.price" class="form-control" id="price" placeholder="輸入售價">
            </div>
            <div class="mb-3">
              <label for="unit" class="form-label">unit</label>
              <input type="text" :value="productData.unit" class="form-control" id="unit" placeholder="輸入單位">
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" >Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  data () {
    return {
      thisModal: '',
      newText: '區域註冊'
    }
  },
  props: ['isNew', 'productData'],
  methods: {
    innerOpenModal () {
      this.thisModal.show()
    }
  },
  mounted () {
    this.thisModal = new Modal(this.$refs.myModal)
  }
}
</script>
