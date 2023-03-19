import{_ as h,f as g,r as m,o as n,c as a,d as r,a as t,F as d,g as f,t as V,b as $,w as k}from"./index-7a01b1ce.js";const{VITE_API:l,VITE_PATH:u}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"yoyo123456",BASE_URL:"/week-6/",MODE:"production",DEV:!1,PROD:!0},y={data(){return{products:[],cart:{}}},methods:{getProducts(){this.$http.get(`${l}/api/${u}/products`).then(o=>{console.log(o),this.products=o.data.products})},addToCart(o){const c={product_id:o,qty:1};this.$http.post(`${l}/api/${u}/cart`,{data:c}).then(s=>{console.log("購物車",s),this.cart=s.data})}},components:{RouterLink:g},mounted(){this.getProducts()}},P={class:"container"},T=t("thead",null,[t("th",null," 產品名稱 "),t("th",null," 產品圖片 "),t("th",null," 詳細資訊 ")],-1),b=["src"],E=["onClick"];function x(o,c,s,v,i,_){const p=m("RouterLink");return n(),a(d,null,[r("這是產品列表頁面 "),t("table",P,[T,t("tbody",null,[(n(!0),a(d,null,f(i.products,e=>(n(),a("tr",{key:e.id},[t("td",null,V(e.title),1),t("td",null,[t("img",{src:e.imageUrl,alt:"",width:"100"},null,8,b)]),$(p,{to:`/product/${e.id}`,class:"btn btn-primary m-2"},{default:k(()=>[r("單一產品")]),_:2},1032,["to"]),t("button",{class:"btn btn-info m-2",onClick:w=>_.addToCart(e.id)},"加入車車",8,E)]))),128))])])],64)}const I=h(y,[["render",x]]);export{I as default};
