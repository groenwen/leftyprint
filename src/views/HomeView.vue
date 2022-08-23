<template>
  <div class="home">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/admin">後台</router-link>
    </nav>
    <button type="button" class="btn btn-secondary">Secondary</button>
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
