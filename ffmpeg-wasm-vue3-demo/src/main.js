/*
 * @Description: 这是***页面（组件）
 * @Date: 2023-08-17 10:30:27
 * @Author: chenyujie
 * @LastEditors: chenyujie
 * @LastEditTime: 2023-08-17 10:46:18
 */
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);
app.use(Antd).mount('#app');
