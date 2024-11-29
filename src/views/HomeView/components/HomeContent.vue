<template>
    <div class="flex">
        <!-- 主体内容 -->
         <div class="">
            <ContentItem></ContentItem>
         </div>
        <!-- 左边栏 -->
        <div class="ml-[10px]">
            <!-- produce -->
            <div class="rounded-[10px] w-[280px] flex flex-col shadow-xl overflow-hidden">
                <!-- 个人信息 -->
                <div class="profile-block flex flex-col items-center justify-center py-[20px]">
                    <img src="../../../assets/image/avator.jpg" class="w-[60px] h-[60px] rounded-full">
                    <span class="mt-[10px] text-white">工藤新一</span>
                </div>
                <!-- 列表 -->
               <div>
                <ul class="flex">
                    <li class="flex flex-col items-center flex-1" v-for="i in 3" :key="i">
                        <span>1</span>
                        <div>说说个数</div>
                    </li>
                </ul>
                <!-- 联系方式 -->
                <ul class="flex items-center justify-evenly my-[10px]">
                    <li class="w-[24px] h-[24px]" v-for="item in concactList" :key="item.type">
                        <img :src="item.icon" class="w-full h-full" @click="handleConcact(item.type)">
                    </li>
                </ul>

                <!-- 学历 -->
                <ul class="px-[8px]">
                    <li class="flex items-center justify-between mb-[1px]" v-for="(item) in schoolInfo" :key="item.name">
                        <span>{{item.name}}</span>
                        <span>{{item.value}}</span>
                    </li>
                </ul>
               </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ContentItem from './ContentItem.vue';

const concactList = [
    { name: 'QQ', icon: '/src/assets/image/QQ.png', type: 1 },
    { name: 'WeiChat', icon: '/src/assets/image/weixin.png', type: 2 },
    { name: 'GitHub', icon: '/src/assets/image/githubb.png', type: 3 },
    { name: '稀土掘金', icon: '/src/assets/image/th.png', type: 4 }
]

const handleConcact = (item) => {

}

const schoolInfo = [
    { name: '毕业院校', value: '华东交通大学' },
    { name: '所在城市', value: '江西赣州' },
    { name: '毕业时间', value: '2025' }
]

</script>


<style>
.profile-block {
    background-image: url('../../../assets/image/main-bg.webp');
    background-size: cover;
    background-position: center;
}
.icon-social {
    background-size: 100% 100%;
    background-position: center;
}
</style>