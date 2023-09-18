<!--
 * @Description: 这是***页面（组件）
 * @Date: 2023-08-17 10:40:50
 * @Author: chenyujie
 * @LastEditors: chenyujie
 * @LastEditTime: 2023-09-18 09:47:46
-->
<template>
  <div>
    <div>上传视频:</div>
    <a-upload v-model:file-list="fileList" name="avatar" list-type="picture-card" class="avatar-uploader"
      :show-upload-list="false" action="xxxxxxxxxxxxxxx" :before-upload="beforeUpload" @change="handleChange">
      <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
      <div v-else>
        <LoadingOutlined v-if="loading"></LoadingOutlined>
        <PlusOutlined v-else></PlusOutlined>
        <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload>
    <div>转码压缩后的视频</div>
    <video :src="videoPlayURL" :controls="true" ref="videoPreview" crossorigin="Anonymous"></video>
  </div>

  <div v-if="uploadInfo">info：{{ uploadInfo }}</div>
</template>
<script setup>
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { getCurrentInstance, onMounted, ref } from "vue";
import { transcode } from "../utils/vedio";

const uploadInfo = ref(""); //上传过程提示
const videoPlayURL = ref(""); //上传后视频路劲回显
const videoPreview = ref(null);

const fileList = ref([]);
const loading = ref(false);
const imageUrl = ref("");
//mov-mp4
const handleChange = async (info) => {
  console.log(info.file);
  const url = await transcode(info.file, "mov");
  videoPlayURL.value = url;
};
const beforeUpload = (file) => {
  //视频转码、压缩
  return false;
};
</script>
