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
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" v-model="innProduct.content.side" id="single" value="單面">
                  <label class="form-check-label" for="single">單面</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" v-model="innProduct.content.side" id="double" value="雙面">
                  <label class="form-check-label" for="double">雙面</label>
                </div>
              </div>
              <div class="mb-3">
                <label for="unit" class="form-label">unit</label>
                <input type="text" class="form-control" id="unit" v-model="innProduct.unit" placeholder="Example input placeholder">
              </div>
              <div class="row mb-3">
                <div class="col-6">
                  <label for="width" class="form-label">寬(mm)</label>
                  <input type="number" class="form-control" id="width" v-model.number="innProduct.content.width" placeholder="Example input placeholder">
                </div>
                <div class="col-6">
                  <label for="height" class="form-label">高(mm)</label>
                  <input type="number" class="form-control" id="height" v-model.number="innProduct.content.height" placeholder="Example input placeholder">
                </div>
              </div>
              <div class="mb-3">
                <label for="material" class="form-label">材質</label>
                <input type="text" class="form-control" id="material" v-model="innProduct.content.material" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="qty" class="form-label">數量</label>
                <input type="number" class="form-control" id="qty" v-model.number="innProduct.content.qty" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <input type="text" class="form-control" id="description" v-model="innProduct.description" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="origin_price" class="form-label">origin_price</label>
                <input type="number" class="form-control" id="origin_price" v-model.number="innProduct.origin_price" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <label for="price" class="form-label">price</label>
                <input type="text" class="form-control" id="price" v-model.number="innProduct.price" placeholder="Example input placeholder">
              </div>
              <div class="mb-3">
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="is_enabled" v-model="innProduct.is_enabled" :checked="innProduct.is_enabled === 1">
                  <label class="form-check-label" for="is_enabled" v-if="innProduct.is_enabled === 1">顯示</label>
                  <label class="form-check-label" for="is_enabled" v-else>隱藏</label>
                </div>
              </div>
              <div class="mb-3" v-if="!innIsNew">
                <label for="num" class="form-label">排序</label>
                <input type="text" class="form-control" id="num" v-model.number="innProduct.num" placeholder="Example input placeholder">
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
      innProduct: {
        content: {
          width: 90,
          height: 54,
          qty: 100,
          side: 'single',
          material: '一級卡'
        },
        imagesUrl: []
      },
      addImage: ''
    }
  },
  props: {
    isNew: {
      type: Boolean
    },
    productItem: {
      type: Object
    }
  },
  watch: {
    isNew () {
      this.innIsNew = this.isNew
    },
    productItem () {
      this.innProduct = JSON.parse(JSON.stringify(this.productItem))
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
    this.innProduct = JSON.parse(JSON.stringify(this.productItem))
    console.log('hello', this.productItem.content)
  }
}
</script>
