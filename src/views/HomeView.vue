<template>
  <div class="container">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/products">所有產品</router-link> |
      <router-link to="/carts">Cart</router-link> |
      <router-link to="/admin">後台</router-link>
    </nav>
    <router-view />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src

// export default {
//   name: "HomeView",
//   components: {
//     HelloWorld,
//   },
// };
</script>
