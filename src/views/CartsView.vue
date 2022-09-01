<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <td>Category</td>
          <td>Title</td>
          <td>單/雙面</td>
          <td>尺寸</td>
          <td>材質</td>
          <td>張數</td>
          <td>單價</td>
          <td>總數</td>
          <td>特價</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in carts" :key="item.id">
          <td>
            <span class="badge text-bg-secondary">{{ item.product.category }}</span>
          </td>
          <!-- <td><img :src="item.imageUrl" width="100" /></td> -->
          <td>
            {{ item.product.title }} <br />
            <span class="small text-secondary">{{ item.product.id }}</span>
          </td>
          <td>{{ item.product.content.side }}</td>
          <td>{{ item.product.content.width }} mm X {{item.product.content.height }} mm</td>
          <td>{{ item.product.content.material }}</td>
          <td>{{ item.product.content.qty }} {{ item.product.unit }}</td>
          <td>$ {{ item.product.price }}</td>
          <td>{{ item.qty }}</td>
          <td>$ {{ item.total }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      carts: []
    }
  },
  methods: {
    getCarts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then((res) => {
          console.log(res.data.data.carts)
          this.carts = res.data.data.carts
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
