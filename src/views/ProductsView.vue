<template>
    <div>
        <p>所有產品 {{text}}</p>
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
          <td><router-link :to="`/product/${item.id}`">單一產品</router-link></td>
        </tr>
      </tbody>
    </table>
    </div>
</template>
<script>
export default {
  data () {
    return {
      text: '123',
      allProducts: []
    }
  },
  methods: {
    getProducts (page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.$http.get(url)
        .then((res) => {
          this.allProducts = res.data.products
          console.log(res.data.products)
        })
        .catch((err) => {
          console.log(err.data.message)
        })
    }
  },
  mounted () {
    this.getProducts()
    console.log('hello')
  }
}
</script>
