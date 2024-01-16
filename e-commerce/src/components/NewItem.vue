<template>
    <div class="min-w-[320px] min-h-[524px] relative ">
        
        <div class="w-full h-[442px] absolute top-0 bg-[#FFF2F2]"></div>
        <img :src="img" class="w-full h-[442px] absolute top-0 object-contain" alt="">
        
        <div v-if="DiscountBox == true" class="absolute top-5 right-5 w-[60px] h-[30px] bg-[#FF6289] flex justify-center items-center rounded-2xl text-white">{{ discount }}</div>
        <div class="absolute bottom-3 text-[20px]">
            <p class="mb-2">{{ name }}</p>
            <p v-if="DiscountBox == true" class="flex flex-row items-center text-[16px]"><span class=" line-through text-[14px] ">{{ baseprice }}</span>&nbsp;&nbsp;{{ price }}</p>
            <p v-else class="flex flex-row text-[16px]">{{ price }}</p>
            
        </div>
    </div>
</template>

<script>

   import {useImage} from '../stores/images';
    import {mapState} from 'pinia';

   


    export default{
        name: "NewItem",
        props: { 
            img: String,
            name: String,
            price: String,
            promotion:String,
            baseprice:String,
            DiscountBox:String,
            discount:String,
        }
    }
</script>