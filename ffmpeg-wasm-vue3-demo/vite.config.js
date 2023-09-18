/*
 * @Description: 这是***页面（组件）
 * @Date: 2023-08-17 10:30:27
 * @Author: chenyujie
 * @LastEditors: chenyujie
 * @LastEditTime: 2023-08-17 11:10:31
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server: {
  //   headers: {
  //     "Cross-Origin-Opener-Policy": "same-origin",
  //     "Cross-Origin-Embedder-Policy": "require-corp",
  //   },
  // }
})
