<template>
  <v-loading :active="isLoading" ></v-loading>
  <div class="container">
    <p>所有產品</p>
    <div class="row">
      <div class="col-4" v-for="item in pords" :key="item.id">
        <div class="card bg-light p-4">
          <div class="card-img bg-cover" :style="{backgroundImage: `url(${item.imageUrl})`}">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <div class="text-end">
              <router-link :to="`/product/${item.id}`" class="btn btn-outline-primary">查看產品</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.card-img {
  height: 300px;
  background-size: cover;
  background-position: center;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
</style>
<script>
export default {
  data () {
    return {
      VUE_APP: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}`,
      isLoading: false,
      allProds: [],
      pords: []
    }
  },
  methods: {
    getProds () {
      this.isLoading = true

      const url = `${this.VUE_APP}/products/all`
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false
          this.allProds = res.data.products
          // 所有 title [a, a, b, c, c, ....]
          let title = this.allProds.map(el => el.title)

          // 不重複的 title [a, b, c, ....]
          title = title.filter((el, i) => title.indexOf(el) === i)

          // sort AllProds
          const mapped = this.allProds.map((el, i) => {
            return { index: i, value: el }
          })
          const sortList = ['width', 'height', 'side', 'qty']
          sortList.forEach(el => {
            mapped.sort((a, b) => {
              if (a.value[el] > b.value[el]) return 1
              if (a.value[el] < b.value[el]) return -1
              return 0
            })
          })
          this.allProds = mapped.map(el => this.allProds[el.index])

          // 將第一個產品 設為產品入口
          title.forEach((el, i) => {
            const prod = this.allProds.find(el2 => el === el2.title)
            this.pords.push(prod)
          })
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getProds()
  }
}
</script>
