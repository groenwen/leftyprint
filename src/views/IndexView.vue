<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" style="background-image: url(https://images.unsplash.com/photo-1563432074030-1486c35fe5d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)">
        <!-- <img src="https://images.unsplash.com/photo-1563432074030-1486c35fe5d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" class="d-block w-100" alt="..."> -->
        <div class="carousel-caption d-none d-md-block">
          <h3>複雜的事我們處理好了，簡單的事交給你</h3>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="main">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <section>
      <div class="container">
        <h2 class="d-flex align-items-center justify-content-center">
          <span class="me-3 bg-accent text-white fs-6 px-3 py-2 rounded-pill position-relative dialog">Try It !</span>
          <img class="me-3" src="@/assets/images/people01.svg" alt="">
          <span><span class="text-accent">名片</span>快速製作</span>
        </h2>
        <div class="row justify-content-center ">
          <div class="col-10">
            <div class="p-5 bg-light rounded-top">
              <div class="mb-3">
                <a href="#" class="btn btn-sm rounded-pill me-2" :class="[isFront ? 'btn-secondary' : 'btn-outline-secondary']" @click.prevent="isFront = true">正面</a>
                <a href="#" class="btn btn-sm rounded-pill" :class="[!isFront ? 'btn-secondary' : 'btn-outline-secondary']" @click.prevent="isFront = false">背面</a>
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
                      <div class="mb-2">
                        <label for="frontCompany" class="form-label small">公司名稱</label>
                        <input type="text" class="form-control" id="frontCompany" v-model="frontForm.company" placeholder="輸入公司名稱">
                      </div>
                      <div class="mb-2">
                        <label for="frontName" class="form-label small">名字</label>
                        <input type="text" class="form-control" id="frontName" v-model="frontForm.name" placeholder="輸入名字">
                      </div>
                      <div class="mb-2">
                        <label for="frontEName" class="form-label small">英文名字</label>
                        <input type="text" class="form-control" id="frontEName" v-model="frontForm.e_name" placeholder="輸入英文名字">
                      </div>
                      <div class="mb-2">
                        <label for="frontPhone" class="form-label small">電話</label>
                        <input type="tel" class="form-control" id="frontPhone" v-model="frontForm.phone" placeholder="輸入電話">
                      </div>
                      <div class="mb-2">
                        <label for="frontEmail" class="form-label small">Email</label>
                        <input type="email" class="form-control" id="frontEmail" v-model="frontForm.email" placeholder="輸入 Email">
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
            <div class="d-flex align-items-center bg-gray-200 px-5 py-3 rounded-bottom">
              <div>規格 —— 9x5.4cm ／ 雙面一級卡 ／ 300 張</div>
              <a href="#" class="btn btn-secondary ms-auto" @click.prevent="addToCart('-NCAtlm5RkX8T74O5ILR')">加入購物車</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="bg-light py-5">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="d-flex align-items-center text-secondary">
          <span class="material-symbols-outlined fs-1 me-2">backup</span>
          <span>套用版型 / 上傳檔案</span>
        </div>
        <span class="material-symbols-outlined mx-4">
          arrow_forward_ios
        </span>
        <div class="d-flex align-items-center">
          <span class="material-symbols-outlined fs-1 me-2">style</span>
          <span>選擇材質數量</span>
        </div>
        <span class="material-symbols-outlined mx-4">
          arrow_forward_ios
        </span>
        <div class="d-flex align-items-center">
          <span class="material-symbols-outlined fs-1 me-2">shopping_cart</span>
          <span>加入購物車</span>
        </div>
        <span class="material-symbols-outlined mx-4">
          arrow_forward_ios
        </span>
        <div class="d-flex align-items-center">
          <span class="material-symbols-outlined fs-1 me-2">local_shipping</span>
          <span>宅配到府</span>
        </div>
      </div>
    </div>
    <section>
      <div class="container">
        <h2 class="d-flex align-items-center mb-5">
          <img class="me-3" src="@/assets/images/people02.svg" alt="">
          <div class="d-flex flex-column align-items-start">
            <span class="me-3 bg-accent text-white fs-6 mb-3 px-3 py-2 rounded-pill position-relative">Business</span>
            <span>專業形象</span>
          </div>
        </h2>
        <div class="row">
          <div class="col">
            <div class="card bg-light p-4">
              <div class="card-img bg-cover" style="background-image: url('https://images.unsplash.com/photo-1561015314-6bd8c1e875ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1830&q=80');">
              </div>
              <div class="card-body">
                <h5 class="card-title">名片</h5>
                <p class="card-text">名片、集點卡，提供多種材質選擇</p>
                <div class="text-end">
                  <a href="#" class="btn btn-outline-secondary">查看產品</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-light p-4">
              <div class="card-img bg-cover" style="background-image: url('https://images.unsplash.com/photo-1644352739408-a191ed85e513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1658&q=80');">
              </div>
              <div class="card-body">
                <h5 class="card-title">名片</h5>
                <p class="card-text">名片、集點卡，提供多種材質選擇</p>
                <div class="text-end">
                  <a href="#" class="btn btn-outline-secondary">查看產品</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-light p-4">
              <div class="card-img bg-cover" style="background-image: url('https://images.unsplash.com/photo-1567473030492-533b30c5494c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80');">
              </div>
              <div class="card-body">
                <h5 class="card-title">信封</h5>
                <p class="card-text">名片、集點卡，提供多種材質選擇</p>
                <div class="text-end">
                  <a href="#" class="btn btn-outline-secondary">查看產品</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section style="background:linear-gradient(120deg, #F8F9FA 62.47%, rgba(248, 249, 250, 0.1) 80%), url(https://images.unsplash.com/photo-1561015314-6bd8c1e875ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80) right bottom 30% / 50% no-repeat;">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-4">
            <h2 class="mb-3">特殊尺寸</h2>
            <p>輸入要印製的尺寸，計算模數後，<br>
              由專人為你報價 <span class="d-flex"><span class="material-symbols-outlined text-accent me-2">mail</span><a href="mailto:yuwen7005@gmail.com" class="text-accent">yuwen7005@gmail.com</a></span>
            </p>
            <p class="small">一模 92mm X 56mm (名片大小)</p>
          </div>
          <div class="col">
            <form action="">
              <div class="mb-3 row align-items-center">
                <div class="col-auto">
                  <label for="inputPassword" class="col-form-label fs-5">寬</label>
                </div>
                <div class="col-auto">
                  <input type="password" class="form-control" id="inputPassword">
                </div>
                <div class="col-auto">
                  <label for="inputPassword" class="col-form-label fs-5">高</label>
                </div>
                <div class="col-auto">
                  <input type="password" class="form-control" id="inputPassword">
                </div>
                <div class="col-auto">
                  <span class="fs-1 fw-bold">8</span><span>mm</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="d-flex align-items-center mb-5">
          <img class="me-3" src="@/assets/images/people03.svg" alt="">
          <div class="d-flex flex-column align-items-start">
            <span class="me-3 bg-accent text-white fs-6 mb-3 px-3 py-2 rounded-pill position-relative">Business</span>
            <span>生活印象</span>
          </div>
        </h2>
        <div class="row">
          <div class="col">
            <div class="card bg-light p-4">
              <div class="card-img bg-cover" style="background-image: url('https://images.unsplash.com/photo-1612599316791-451087c7fe15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1724&q=80');">
              </div>
              <div class="card-body">
                <h5 class="card-title">名片</h5>
                <p class="card-text">名片、集點卡，提供多種材質選擇</p>
                <div class="text-end">
                  <a href="#" class="btn btn-outline-secondary">查看產品</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-light p-4">
              <div class="card-img bg-cover" style="background-image: url('~@/assets/images/p_card.jpg');">
              </div>
              <div class="card-body">
                <h5 class="card-title">名片</h5>
                <p class="card-text">名片、集點卡，提供多種材質選擇</p>
                <div class="text-end">
                  <a href="#" class="btn btn-outline-secondary">查看產品</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-light p-4">
              <div class="card-img bg-cover" style="background-image: url('https://images.unsplash.com/photo-1617912760717-06f3976cf18c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');">
              </div>
              <div class="card-body">
                <h5 class="card-title">信封</h5>
                <p class="card-text">名片、集點卡，提供多種材質選擇</p>
                <div class="text-end">
                  <a href="#" class="btn btn-outline-secondary">查看產品</a>
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
$accent: #6C93F9;
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
  border-color: $accent transparent transparent transparent;
}
.card-img {
  height: 300px;
}
</style>
<script>
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
      carts: [],
      currProds: [],
      sideList: [],
      materialList: []
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
    }
  },
  mounted () {
    this.createCanvas('front')
    this.createCanvas('back')
  }
}
</script>
