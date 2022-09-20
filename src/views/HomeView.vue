<template>
  <headerView></headerView>
  <router-view />
  <footerView></footerView>
</template>

<script>
import headerView from '../components/HeaderTemp.vue'
import footerView from '../components/FooterTemp.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    headerView, footerView
  },
  mounted () {

  }
}
</script>
