<template>
  <div id="carouselCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" style="background-image: url(https://images.unsplash.com/photo-1573673601222-53e378f40f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80)">
        <div class="carousel-caption d-none d-md-block px-5 py-4 bg-dark bg-opacity-25">
          <h3 class="ff-serif">複雜的事我們處理好了，<br>簡單的事交給你</h3>
        </div>
      </div>
      <div class="carousel-item" style="background-image: url(https://images.unsplash.com/photo-1573763665563-6e377217d29b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80)">
        <div class="carousel-caption d-none d-md-block px-5 py-4 bg-dark bg-opacity-25">
          <h3 class="ff-serif">複雜的事我們處理好了，<br>簡單的事交給你</h3>
        </div>
      </div>
      <!-- <div class="carousel-item" style="background-image: url(https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1518&q=80)">
        <div class="carousel-caption d-none d-md-block px-5 py-4 bg-dark bg-opacity-25">
          <h3 class="ff-serif">複雜的事我們處理好了，<br>簡單的事交給你</h3>
        </div>
      </div> -->
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="main">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <section>
      <div class="container">
        <h2 class="d-flex align-items-center justify-content-center">
          <span class="me-3 bg-primary text-white fs-6 px-3 py-2 rounded-pill position-relative dialog">Try It !</span>
          <img class="me-3" src="@/assets/images/people01.svg" alt="">
          <span><span class="text-primary">名片</span>快速製作</span>
        </h2>
        <div class="row justify-content-center">
          <div class="col-10">
            <div class="rounded-3 overflow-hidden">
              <div class="p-5 bg-gray-100">
                <div class="mb-3">
                  <a href="#" class="btn btn-sm rounded-pill me-2" :class="[isFront ? 'btn-dark' : 'btn-outline-dark']" @click.prevent="isFront = true">正面</a>
                  <a href="#" class="btn btn-sm rounded-pill" :class="[!isFront ? 'btn-dark' : 'btn-outline-dark']" @click.prevent="isFront = false">背面</a>
                </div>
                <div class="d-flex align-items-center">
                  <div class="me-5">
                    <canvas ref="front" class="shadow-sm" v-show="isFront"></canvas>
                    <canvas ref="back" class="shadow-sm" v-show="!isFront"></canvas>
                    <div class="d-none">
                      <img ref="phone_icon" src="@/assets/images/phone_icon.svg" alt="">
                      <img ref="email_icon" src="@/assets/images/email_icon.svg" alt="">
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <form>
                      <div v-show="isFront">
                        <div class="mb-2 form-floating">
                          <input type="text" class="form-control" id="frontCompany" v-model="frontForm.company" placeholder="輸入公司名稱">
                          <label for="frontCompany" class="form-label small">公司名稱</label>
                        </div>
                        <div class="mb-2 form-floating">
                          <input type="text" class="form-control" id="frontName" v-model="frontForm.name" placeholder="輸入名字">
                          <label for="frontName" class="form-label small">名字</label>
                        </div>
                        <div class="mb-2 form-floating">
                          <input type="text" class="form-control" id="frontEName" v-model="frontForm.e_name" placeholder="輸入英文名字">
                          <label for="frontEName" class="form-label small">英文名字</label>
                        </div>
                        <div class="mb-2 form-floating">
                          <input type="tel" class="form-control" id="frontPhone" v-model="frontForm.phone" placeholder="輸入電話">
                          <label for="frontPhone" class="form-label small">電話</label>
                        </div>
                        <div class="mb-2 form-floating">
                          <input type="email" class="form-control" id="frontEmail" v-model="frontForm.email" placeholder="輸入 Email">
                          <label for="frontEmail" class="form-label small">Email</label>
                        </div>
                      </div>
                      <div v-show="!isFront">
                        <div class="mb-3">
                          <label for="backName" class="form-label small">Name</label>
                          <input type="text" class="form-control" id="backName" v-model="backForm.name">
                        </div>
                        <div class="mb-3">
                          <label for="backPhone" class="form-label small">Phone</label>
                          <input type="tel" class="form-control" id="backPhone" v-model="backForm.phone">
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center bg-gray-200 px-5 py-3">
                <span class="text-dark">規格 —— 9x5.4cm ／ 雙面一級卡 ／ 300 張</span>
                <a href="#" class="btn btn-primary ms-auto" @click.prevent="addToCart('-NCAtlm5RkX8T74O5ILR')">加入購物車</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="bg-light py-5">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="d-flex align-items-center">
          <span class="material-symbols-outlined fs-1 me-3">backup</span>
          <span>套用版型 / 上傳檔案</span>
        </div>
        <span class="material-symbols-outlined text-secondary mx-4">
          arrow_forward_ios
        </span>
        <div class="d-flex align-items-center">
          <span class="material-symbols-outlined fs-1 me-3">style</span>
          <span>選擇材質數量</span>
        </div>
        <span class="material-symbols-outlined mx-4">
          arrow_forward_ios
        </span>
        <div class="d-flex align-items-center">
          <span class="material-symbols-outlined fs-1 me-3">shopping_cart</span>
          <span>加入購物車</span>
        </div>
        <span class="material-symbols-outlined mx-4">
          arrow_forward_ios
        </span>
        <div class="d-flex align-items-center">
          <span class="material-symbols-outlined fs-1 me-3">local_shipping</span>
          <span>宅配到府</span>
        </div>
      </div>
    </div>
    <section>
      <div class="container">
        <div class="d-flex align-items-end mb-5">
          <img class="me-3" src="@/assets/images/people02.svg" alt="">
          <div>
            <span class="d-inline-block mb-2 px-3 py-2 text-white lh-1 bg-primary rounded-pill position-relative">\ Business /</span>
            <h2 class="mb-0 fw-bolder">專業形象</h2>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card bg-gray-100 p-4 shadow-sm">
              <div class="card-img bg-cover" style="background-image: url('https://images.unsplash.com/photo-1561015314-6bd8c1e875ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1830&q=80');">
              </div>
              <div class="card-body">
                <h5 class="card-title">名片</h5>
                <p class="card-text">名片、集點卡，提供多種材質選擇</p>
                <div class="text-end">
                  <a href="#" class="btn btn-sm btn-outline-primary stretched-link">查看產品</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-gray-100 p-4 shadow-sm">
              <div class="card-img bg-cover" style="background-image: url('https://images.unsplash.com/photo-1644352739408-a191ed85e513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1658&q=80');">
              </div>
              <div class="card-body">
                <h5 class="card-title">名片</h5>
                <p class="card-text">名片、集點卡，提供多種材質選擇</p>
                <div class="text-end">
                  <a href="#" class="btn btn-sm btn-outline-primary stretched-link">查看產品</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-gray-100 p-4 shadow-sm">
              <div class="card-img bg-cover" style="background-image: url('https://images.unsplash.com/photo-1567473030492-533b30c5494c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80');">
              </div>
              <div class="card-body">
                <h5 class="card-title">信封</h5>
                <p class="card-text">名片、集點卡，提供多種材質選擇</p>
                <div class="text-end">
                  <a href="#" class="btn btn-sm btn-outline-primary stretched-link">查看產品</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section style="background:linear-gradient(120deg, #F0F3FA 55%, rgba(240, 243, 250, 0.1) 75%, rgba(240, 243, 250, 0.5) 99%), url(https://images.unsplash.com/photo-1561015314-6bd8c1e875ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80) right bottom 30% / 50% no-repeat;">
      <div class="container">
        <div class="d-flex align-items-center">
          <div class="me-7">
            <h2 class="mb-3 fw-bolder">特殊尺寸</h2>
            <p>輸入欲印製的尺寸，取得模數後，<br>
              由專人為你報價 <span class="material-symbols-outlined text-primary me-2 align-middle">drafts</span><a href="mailto:yuwen7005@gmail.com" class="text-link">yuwen7005@gmail.com</a>
            </p>
            <p class="small">一模 92mm X 56mm (名片大小)</p>
          </div>
          <div class="mt-3">
            <form>
              <div class="d-flex align-items-center">
                <div class="d-flex me-5">
                  <label for="modeWidth" class="me-2 pt-1 fs-5 text-center lh-1 fw-bold">
                    寬<br><span class="fs-8">(mm)</span>
                  </label>
                  <input type="number" class="form-control fs-5 border-0" id="modeWidth" v-model="mode.width" @keyup="caluMode()" style="width: 120px;">
                </div>
                <div class="d-flex me-5">
                  <label for="modeHeight" class="me-2 pt-1 fs-5 text-center lh-1 fw-bold">
                    高<br><span class="fs-8">(mm)</span>
                  </label>
                  <input type="number" class="form-control fs-5 border-0" id="modeHeight" v-model="mode.height" @keyup="caluMode()" style="width: 120px;">
                </div>
                <div class="text-primary">
                  <span class="fs-1 fw-bold me-2">{{ mode.result }}</span><span>模</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="d-flex align-items-end mb-5">
          <img class="me-3" src="@/assets/images/people03.svg" alt="">
          <div>
            <p class="d-inline-block mb-2 px-3 py-2 text-white lh-1 bg-primary rounded-pill position-relative">\ Life /</p>
            <h2 class="mb-0 fw-bolder">生活印象</h2>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card bg-gray-100 p-4 shadow-sm">
              <div class="card-img bg-cover" style="background-image: url('https://images.unsplash.com/photo-1612599316791-451087c7fe15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1724&q=80');">
              </div>
              <div class="card-body">
                <h5 class="card-title">名片</h5>
                <p class="card-text">名片、集點卡，提供多種材質選擇</p>
                <div class="text-end">
                  <a href="#" class="btn btn-sm btn-outline-primary stretched-link">查看產品</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-gray-100 p-4 shadow-sm">
              <div class="card-img bg-cover" style="background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/groen/1663654149646.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=eTKYldy%2BVa%2BAdaO1WrzR6D%2Bw1cPD%2B5iYwrRJqi0ww5DGzdoCUI1f%2BTyX09Yki5stbOUaYP8DYXvbYNpJCnNkCOi1Vp1wolLxM45RYalLsodpGoKkZUcn0KOV3OyBkKmMT9EKz%2Fa%2F5BqK97dNYC05CXMFYFO5CRk0OWnsBFSIqhDAzl36ZzWi5q3dIPrWiHsVptcYgoBtqGgm9EnUv7uNoT4B77zyxpunc%2BU3daHsbezaYvJ8CqeOmKFSSYochblKmSJHO%2Fx9lzNj1%2BIBNwWXgvWMDkfQyNcTjyqO2UALxxm%2FraQ2kpUxaXKBEWyq3RuGOBY36fTtHnGwIWs3A4IDhA%3D%3D');">
              </div>
              <div class="card-body">
                <h5 class="card-title">名片</h5>
                <p class="card-text">名片、集點卡，提供多種材質選擇</p>
                <div class="text-end">
                  <a href="#" class="btn btn-sm btn-outline-primary stretched-link">查看產品</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-gray-100 p-4 shadow-sm">
              <div class="card-img bg-cover" style="background-image: url('https://images.unsplash.com/photo-1617912760717-06f3976cf18c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');">
              </div>
              <div class="card-body">
                <h5 class="card-title">信封</h5>
                <p class="card-text">名片、集點卡，提供多種材質選擇</p>
                <div class="text-end">
                  <a href="#" class="btn btn-sm btn-outline-primary stretched-link">查看產品</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">

$primary: #6C93F9;

.carousel-caption {
  left: auto;
  right: 15%;
  top: 50%;
  bottom: auto;
  transform: translateY(-50%);
  h3 {
    text-align: left;
    line-height: 200%;
  }
}

.carousel-item {
  height: 500px;
  background-size: cover;
  background-position: center;
}
.dialog::before {
  position: absolute;
  content: '';
  left: 50%;
  top: 100%;
  width: 0;
  height: 0;
  border: 10px solid;
  border-color: $primary transparent transparent transparent;
}
.card-img {
  height: 300px;
}
</style>
<script>
import 'bootstrap/js/dist/carousel.js'
import emitter from '@/js/emitter'
export default {
  data () {
    return {
      VUE_APP: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}`,
      isFront: true,
      vueCanvas: null,
      dataURL: {
        front: '',
        back: ''
      },
      frontForm: {
        company: 'Lefty Print',
        name: '林小希',
        e_name: 'Shi Shi',
        phone: '0912345678',
        email: 'abc78463@gmail.com'
      },
      backForm: {
        name: 'back',
        phone: '20220908'
      },
      mode: {
        width: 92,
        height: 56,
        result: 0
      },
      carts: []
    }
  },
  watch: {
    frontForm: {
      handler (newVal, oldVal) {
        this.createCanvas('front')
      },
      deep: true
    },
    backForm: {
      handler (newVal, oldVal) {
        this.createCanvas('back')
      },
      deep: true
    }
  },
  methods: {
    createCanvas (side) {
      const canvas = this.$refs[side]
      canvas.width = 612
      canvas.height = 353
      const ctx = canvas.getContext('2d')

      // 先設定顏色 再繪製位置及尺寸
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, 612, 353)
      // 矩形
      // ctx.fillStyle = "#000000";
      // ctx.fillRect(10, 10, 340, 196);
      ctx.save()

      ctx.restore()
      // 文字
      ctx.font = '20px serif'
      ctx.fillStyle = '#323232'
      ctx.fillText(this[`${side}Form`].company, 50, 50)
      ctx.save()

      // 名字
      ctx.font = '40px serif'
      ctx.fillStyle = '#323232'
      ctx.fillText(this[`${side}Form`].name, 140, 180)
      ctx.save()

      // 英文名字
      ctx.font = '24px serif'
      ctx.fillStyle = '#323232'
      ctx.fillText(this[`${side}Form`].e_name, 290, 180)
      ctx.save()

      // image
      ctx.drawImage(this.$refs.phone_icon, 360, 235, 16, 16)

      // 文字
      ctx.font = '16px serif'
      ctx.fillStyle = '#323232'
      ctx.fillText(`${this[`${side}Form`].phone}`, 380, 250)
      ctx.save()

      // image
      ctx.drawImage(this.$refs.email_icon, 360, 265, 16, 16)

      // 文字
      ctx.font = '16px serif'
      ctx.fillStyle = '#323232'
      ctx.fillText(`${this[`${side}Form`].email}`, 380, 280)
      ctx.save()

      ctx.restore()

      this.dataURL[side] = canvas.toDataURL()
      this.vueCanvas = ctx
    },
    addToCart (id) {
      const url = `${this.VUE_APP}/cart`
      this.$http.get(url)
        .then((res) => {
          this.carts = res.data.data.carts
          // 撈出 carts 裡是否有同 ID 的資料
          // 有 抓出 將 file 再 push 進去
          // 沒有 直接 post
          let cartItem = this.carts.find(item => item.product_id === id)
          if (cartItem === undefined) {
            cartItem = { product_id: id, qty: 1, files: [this.dataURL] }
          } else {
            cartItem.files.push(this.dataURL)
          }
          // 加入購物車
          this.$http.post(url, { data: cartItem })
            .then((res) => {
              // 更新購物車數量
              emitter.emit('cartCount')
              alert(res.data.message)
            })
            .catch((err) => {
              alert(err.response.data.message)
            })
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    caluMode () {
      if (
        this.mode.width === '' ||
        this.mode.width === 0 ||
        this.mode.height === '' ||
        this.mode.height === 0
      ) {
        this.mode.result = 0
      }
      if (this.mode.width > 0 && this.mode.height > 0) {
        const caluHorizontal =
          Math.ceil(this.mode.width / 92) *
          Math.ceil(this.mode.height / 56)
        const caluVertical =
          Math.ceil(this.mode.width / 56) *
          Math.ceil(this.mode.height / 92)
        this.mode.result =
          caluHorizontal > caluVertical ? caluVertical : caluHorizontal
      }
    }
  },
  mounted () {
    this.createCanvas('front')
    this.createCanvas('back')
    this.caluMode()
    // this.carousel = new Carousel(this.$refs.pCarousel, {
    //   interval: 2000
    // })
  }
}
</script>
