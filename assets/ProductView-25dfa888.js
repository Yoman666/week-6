import{_ as r,o as c,c as a,d as n,a as s,t as u,F as d}from"./index-745c620a.js";const{VITE_API:i,VITE_PATH:p}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"yoyo123456",BASE_URL:"/week-6/",MODE:"production",DEV:!1,PROD:!0},l={data(){return{product:{}}},methods:{getProduct(){console.log("id位置",this.$route.params);const{id:o}=this.$route.params;this.$http.get(`${i}/api/${p}/product/${o}`).then(t=>{console.log("單一產品資料",t),this.product=t.data.product})}},mounted(){this.getProduct()}},_=["src"];function h(o,t,m,g,e,E){return c(),a(d,null,[n(" 這是單一產品頁面 "),s("h2",null,u(e.product.title),1),s("img",{src:e.product.imageUrl,style:{"max-width":"100%"},alt:""},null,8,_)],64)}const V=r(l,[["render",h]]);export{V as default};