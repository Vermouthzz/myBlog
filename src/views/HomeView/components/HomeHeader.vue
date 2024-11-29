<template>
    <header class="flex items-center justify-between home-header w-full">
        <!-- 左边盒子 -->
        <div class="flex">
            <ul class="flex">
                <li class="py-[10px] px-[12px]" v-for="(item, index) in headerList" :key="index">
                    <i></i>
                    <span>{{ item.name }}</span>
                </li>
            </ul>
        </div>
        <!-- 右边盒子 -->
        <div class="flex">
            <checkbox></checkbox>
            <input type="text">
            <i></i>
            <div class="rounded-fill w-30 h-30 overflow-hidden">
                <img class="w-full h-full" src="https://www.bing.com/images/search?q=%E5%A4%B4%E5%83%8F&FORM=IQFRBA&id=4A552A4B929172911932B9EA84858DB3D79AA878" />
            </div>
            <div class="rounded-fill w-30 h-30 flex items-center justify-center">
                登陆
            </div>
        </div>
    </header>
</template>

<script setup>

// 导航列表
const headerList = [
    { name: '首页', icon: '', path: '' },
    { name: '说说', icon: '', path: '' },
    { name: '日志', icon: '', path: '' },
    { name: '首页', icon: '', path: '' },
    { name: '关于', icon: '', path: '' }
]
</script>


<style>
.home-header {
    background-color: skyblue;
    opacity: 0.5;
}
</style>
