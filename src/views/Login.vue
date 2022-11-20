<!--
 * @Date: 2022-11-20 23:40:08
 * @LastEditors: aibo chang aibochang@163.com
 * @LastEditTime: 2022-11-21 00:30:44
 * @FilePath: \VScodeWork\vue_project\try-something-new\src\views\Login.vue
 * @Description: 
-->
<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios'
let count = ref<number>(0);
let msg = ref<string>('');

const getWord = async () => {
  let res = await axios.get('api');
  msg.value = res.data.content;
}

</script>

<template>
  <div>
    <button @click="count++">{{ count }}</button>
    <button @click="getWord">获取土味情话</button>
    <h1>{{msg}}</h1>
  </div>
</template>

<style lang="less" scoped>

</style>