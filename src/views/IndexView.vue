<template>
  <div class="container">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div class="row">
      <div class="col-7">
        <canvas ref="canvas" style="border: 1px solid #F7F9FB;"></canvas>
        <div>
          <a href="#" class="btn btn-secondary rounded-circle"></a>
        </div>
      </div>
      <div class="col">
        <form >
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" v-model="form.name">
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Phone</label>
            <input type="tel" class="form-control" id="phone" v-model="form.phone">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script>
export default {
  data () {
    return {
      vueCanvas: null,
      dataURL: '',
      form: {
        name: 'September',
        phone: '20220908'
      }
    }
  },
  watch: {
    form: {
      handler (newVal, oldVal) {
        this.createCanvas()
      },
      deep: true
    }
  },
  methods: {
    createCanvas () {
      const canvas = this.$refs.canvas
      canvas.width = 360
      canvas.height = 216
      const ctx = canvas.getContext('2d')

      // 先設定顏色 在繪製位置及尺寸
      ctx.fillStyle = '#F7F9FB'
      ctx.fillRect(0, 0, 360, 216)
      // 矩形
      // ctx.fillStyle = "#000000";
      // ctx.fillRect(10, 10, 340, 196);
      ctx.save()

      ctx.restore()
      // 文字
      ctx.font = '32px serif'
      ctx.fillStyle = '#00A0E9'
      ctx.fillText(this.form.name, 50, 50)
      ctx.save()

      ctx.restore()
      ctx.font = '16px serif'
      ctx.fillStyle = '#00A0E9'
      ctx.fillText(this.form.phone, 50, 100)

      this.dataURL = canvas.toDataURL()
      this.vueCanvas = ctx
    }
  },
  mounted () {
    this.createCanvas()
  }
}
</script>
