import VueRouter from 'vue-router';

// 导入对应的路由组件
import Home from './components/tabbar/Home.vue';
import Member from './components/tabbar/Member.vue';
import Search from './components/tabbar/Search.vue';
import Shopcart from './components/tabbar/Shopcart.vue';


// 创建路由对象
var router = new VueRouter({
  routes: [ // 配置路由规则
    {path:'/'      ,redirect:'/home'},
    {path:'/home'  ,component:Home},
    {path:'/member',component:Member},
    {path:'/search',component:Search},
    {path:'/shoper',component:Shopcart}
  ],
  linkActiveClass : 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做router-link-active
});

// 把路由对象暴露出去
export default router;