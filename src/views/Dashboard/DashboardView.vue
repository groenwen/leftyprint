<template>
  <div class="container">
    <p>Dashboard</p>
    <nav>
      <router-link to="/admin">後台首頁</router-link> |
      <router-link to="/admin/products">產品列表</router-link> |
      <router-link to="/admin/orders">訂單管理</router-link> |
      <router-link to="/admin/upload">上傳圖片</router-link> |&emsp;&emsp;
      <a href="#" @click.prevent="logout()">登出</a> |&emsp;&emsp;
      <router-link to="/">回首頁</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    checkAdmin () {
      const url = `${process.env.VUE_APP_API}/api/user/check`
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)groenToken\s*=\s*([^;]*).*$)|^.*$/, '$1')

      // 設置 token
      this.$http.defaults.headers.common.Authorization = token

      // 如果 token 有值
      if (token) {
        this.$http.post(url)
          .then((res) => {
            // 驗證成功
            this.$router.push('/admin/products')
          })
          .catch((err) => {
            // 驗證有誤 顯示錯誤訊息 回到登入頁面
            alert(err.response.data.message)
            this.$router.push('/login')
          })
      } else {
        // 尚未登入 回到登入頁面
        alert('尚未登入後台')
        this.$router.push('/login')
      }
    },
    logout () {
      // 移除 token 即代表登出
      document.cookie = 'groenToken=;expires=;'
      alert('已登出後台')
      this.$router.push('/login')
      // const url = `${process.env.VUE_APP_API}/logout`
      // this.$http.post(url)
      //   .then((res) => {
      //     alert(res.data.message)
      //     this.$router.push('/login')
      //   })
    }
  },
  mounted () {
    this.checkAdmin()
  }
}
</script>
