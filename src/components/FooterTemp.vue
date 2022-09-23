<template>
  <div class="mt-7 text-center">
    <img class="me-3" src="@/assets/images/people01.svg" height="60" alt="">
    <img class="me-3" src="@/assets/images/people04.svg" height="60" alt="">
    <img class="me-3" src="@/assets/images/people02.svg" height="60" alt="">
    <img src="@/assets/images/people03.svg" height="60" alt="">
  </div>
  <div class="bg-gray-200 py-5">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div class="d-flex justify-content-center align-items-center">
          <img class="me-7" src="@/assets/images/logo_dark.svg" height="28" alt="">
          <router-link to="/about" class="me-5 text-dark">關於 Print</router-link>
          <router-link to="/products" class="me-5 text-dark">所有產品</router-link>
          <ul class="list-unstyled">
            <li>
              <span class="material-symbols-outlined align-middle fs-6 me-2">headset_mic</span>( 02 ) 2222 - 2222
            </li>
            <li>
              <span class="material-symbols-outlined align-middle fs-6 me-2">drafts</span>yuwen7005@gmail.com
            </li>
            <li></li>
          </ul>
        </div>
        <router-link to="/admin" class="btn btn-sm btn-outline-secondary align-self-end">管理員登入</router-link>
      </div>
    </div>
  </div>
  <div class="bg-dark py-2">
    <p class="text-center text-white fs-7">Copyright © Print 2022 | 僅個人作品，無商業用途</p>
  </div>
</template>
