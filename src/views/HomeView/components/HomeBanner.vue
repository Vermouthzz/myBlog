<template>
    <div class="h-screen main-bg relative w-screen">
        <div class="absolute w-full top-0 left-0 main-header">
            <HomeHeader></HomeHeader>
        </div>
        <div class="line flex absolute top-[60px] left-[100px] ">
            <div class="item flex items-center p-[6px] bg-slate-700">
                <img class="w-[30px] h-[30px] rounded-full" src="../../../assets/image/avator.jpg">
                <span class="text-[14px] text-white">你好你好！！</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import HomeHeader from './HomeHeader.vue';
const browserWidth = window.innerWidth
let row = 5

onMounted(() => {
    const header = document.querySelector('.main-header')
    console.log(header.clientHeight)
})
</script>


<style>
.main-bg {
    background-image: url('@/assets/image/main-bg.webp');
    background-size: cover;
    background-position: center;
}
</style>