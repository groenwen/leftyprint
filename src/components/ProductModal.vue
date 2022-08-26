<template>
  <div class="modal fade" ref="productModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" v-if="innIsNew">新增產品</h5>
          <h5 class="modal-title" v-else>{{ innProduct.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-3">
              <div class="mb-4">
                <p>主圖</p>
                <img class="img-fluid" :src="innProduct.imageUrl" alt="">
                <input type="text" class="form-control" placeholder="圖片網址" v-model="innProduct.imageUrl">
              </div>
              <div>
                <p>詳細圖片</p>
                <img class="img-fluid" v-for="(item, index) in innProduct.imagesUrl" :src="item" :key="index" alt="">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="圖片網址" v-model="addImage">
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="innProduct.imagesUrl.push(addImage)">新增圖片</button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <label for="category" class="form-label">Category</label>
                <input type="text" class="form-control" id="category" v-model="innProduct.category" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="title" class="form-label">title</label>
                <input type="text" class="form-control" id="title" v-model="innProduct.title" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="num" class="form-label">num</label>
                <input type="text" class="form-control" id="num" v-model.number="innProduct.num" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="unit" class="form-label">unit</label>
                <input type="text" class="form-control" id="unit" v-model="innProduct.unit" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">content</label>
                <input type="text" class="form-control" id="content" v-model="innProduct.content" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <input type="text" class="form-control" id="description" v-model="innProduct.description" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="origin_price" class="form-label">origin_price</label>
                <input type="text" class="form-control" id="origin_price" v-model.number="innProduct.origin_price" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="price" class="form-label">price</label>
                <input type="text" class="form-control" id="price" v-model.number="innProduct.price" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="is_enabled" class="form-label">is_enabled</label>
                <input type="text" class="form-control" id="is_enabled" v-model.number="innProduct.is_enabled" placeholder="Example input placeholder">
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="updateProduct(innProduct)">儲存</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal.js'

export default {
  data () {
    return {
      myModal: '',
      innIsNew: '',
      innProduct: {},
      addImage: ''
    }
  },
  props: ['isNew', 'productItem'],
  watch: {
    isNew () {
      this.innIsNew = this.isNew
    },
    productItem () {
      this.innProduct = this.productItem
    }
  },
  methods: {
    showModal () {
      this.myModal.show()
    },
    hideModal () {
      this.myModal.hide()
    },
    updateProduct (item) {
      this.$emit('updateProduct', item)
    }
  },
  mounted () {
    this.myModal = new Modal(this.$refs.productModal)
    this.innIsNew = this.isNew
    this.innProduct = this.productItem
    console.log('hello', this.productItem)
  }
}
</script>
