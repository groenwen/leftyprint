<template>
  <div class="container">
    <nav>
      <router-link to="/">回首頁</router-link>
    </nav>

    <p>Login</p>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" v-model="user.username" />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" v-model="user.password" />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button class="btn btn-primary" @click.prevent="login">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        username: 'yuwen7005@gmail.com',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const url = `${process.env.VUE_APP_API}/admin/signin`
      this.$http.post(url, this.user)
        .then((res) => {
          document.cookie = `groenToken=${res.data.token};expires=${new Date(res.data.expired)}`
          this.$router.push('/admin/products')
        })
    }
  }
}
</script>
