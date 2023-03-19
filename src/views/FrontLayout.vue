<template class="banner-color">
  <!-- <div class="d-flex align-items-center justify-content-between container my-2">
    <h1>香蕉笨nana</h1>
    <div>
      <router-link to="/" class="mx-2">Home</router-link>
      <router-link to="/about" class="mx-2">About</router-link>
      <router-link to="/products" class="mx-2">前台產品列表</router-link>
      <router-link to="/product">Product</router-link> |
      <router-link to="/cart" class="mx-2">前台購物車 </router-link>
      <router-link to="/admin" class="mx-2">後台</router-link>
      <router-link to="/login" class="mx-2">登入</router-link>
    </div>
  </div> -->
  <div class="navbar-style">
            <nav class="navbar navbar-expand-lg navbar-light container">
                <div class="container-fluid">
                    <div>
                        <a class="navbar-brand" href="#">
                            <img src="" alt="" width="30" height="24"
                                class="d-inline-block align-text-top">
                            笨NaNa123
                        </a>
                    </div>
                </div>

                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link active" aria-current="page" href="#">首頁</router-link>
                            </li>
                            <!-- <li class="nav-item dropdown">
                                <router-link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    文章
                                </router-link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">所有文章</a></li>
                                    <li><a class="dropdown-item" href="#">初學者專區</a></li>
                                    <li><a class="dropdown-item" href="#">材料包教學</a></li>
                                </ul>
                            </li> -->

                            <li class="nav-item dropdown">
                                <router-link to="/products" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    產品
                                </router-link>
                                <!-- <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">所有產品</a></li>
                                    <li><a class="dropdown-item" href="#">材料包</a></li>
                                    <li><a class="dropdown-item" href="#">編織產品</a></li>
                                    <li><a class="dropdown-item" href="#">寵物用品</a></li>
                                    <li><a class="dropdown-item" href="#">毛線材料</a></li>
                                </ul> -->
                            </li>

                            <!-- <li class="nav-item">
                                <a class="nav-link" href="#">收藏</a>
                            </li> -->

                            <li class="nav-item">
                                <router-link to="/cart" class="nav-link" href="#">購物車123</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/login" class="nav-link" href="#">登入</router-link>
                            </li>

                        </ul>

                    </div>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success text-nowrap" type="submit">找尋</button>
                    </form>
                </div>
            </nav>
        </div>
    <RouterView></RouterView>
</template>
<script>
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView
  }
}
</script>
