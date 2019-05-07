// 入口文件
import Vue from 'vue';

// 导入 App 跟组件
import app from "./App.vue";

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css';

// 按需导入Mint-UI 中的组件
import {Header} from 'mint-ui';
Vue.component(Header.name, Header);

var vm = new Vue({
  el : "#app",
  render : c=>c(app)
})