// 入口文件
import Vue from 'vue';

//1.1 导入路由的包
import VueRouter from 'vue-router';
//1.2 安装路由
Vue.use(VueRouter);

// 导入 App 跟组件
import app from "./App.vue";

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

// 按需导入Mint-UI 中的组件  只只用于vue的组件
import { Header ,Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 1.3 导入自己的路由模块
import router from './router.js';

var vm = new Vue({
  el : "#app",
  render : c=>c(app),
  router // 1.4 挂载路由对象到 vm 实例
})