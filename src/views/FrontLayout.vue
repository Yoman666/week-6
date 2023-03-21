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
                            <img src="https://cdn-icons-png.flaticon.com/128/2083/2083677.png" alt="" width="30" height="24"
                                class="d-inline-block align-text-top">
                            笨NaNa手做坊
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
                                <router-link to="/products" class="nav-link" href="#" id="navbarDropdown" role="button"
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
                                <router-link to="/cart" class="nav-link" href="#">購物車</router-link>
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
    <!-- footer -->
    <footer>
            <div class="py-5 container">
                <div class="row">
                    <div class="col-2">
                        <h5>香蕉笨nana</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><router-link to="/" href="#" class="nav-link p-0 text-muted">Home</router-link></li>
                            <li class="nav-item mb-2"><router-link to="/products" href="#" class="nav-link p-0 text-muted">Products</router-link></li>
                            <li class="nav-item mb-2"><router-link to="/cart" href="#" class="nav-link p-0 text-muted">Cart</router-link></li>
                            <li class="nav-item mb-2"><router-link to="/login" href="#" class="nav-link p-0 text-muted">Login</router-link></li>
                        </ul>
                    </div>

                    <div class="col-4 offset-1">
                        <form>
                            <h5>訂閱</h5>
                            <p>歡迎訂閱，不要錯過新品喔!</p>
                            <div class="d-flex w-100 gap-2">
                                <label for="newsletter1" class="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
                                <button class="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="d-flex justify-content-between py-4 my-4 border-top">
                    <p>© 2023 六角冬季vue直播班. 作品及練習</p>
                    <ul class="list-unstyled d-flex">
                        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24">
                                    <use xlink:href="#twitter"></use>
                                </svg></a></li>
                        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24">
                                    <use xlink:href="#instagram"></use>
                                </svg></a></li>
                        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24">
                                    <use xlink:href="#facebook"></use>
                                </svg></a></li>
                    </ul>
                </div>
            </div>
        </footer>
</template>
<script>
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView
  }
}
</script>
