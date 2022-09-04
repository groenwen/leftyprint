<template>
  <div class="container">
    <nav>
      <router-link to="/">回首頁</router-link>
    </nav>

    <p>Login</p>
    <v-form v-slot="{ errors }" @submit="login">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <v-field name="email" id="email" type="email" rules="required|email" class="form-control" :class="{ 'is-invalid':errors['email'] }" v-model="user.username" />
        <error-message name="email" class="invalid-feedback" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">密碼</label>
        <v-field name="密碼" id="password" type="password" rules="required" class="form-control" :class="{ 'is-invalid':errors['密碼'] }" v-model="user.password" />
        <error-message name="密碼" class="invalid-feedback" />
      </div>
      <button class="btn btn-primary">登入</button>
    </v-form>
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
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>
