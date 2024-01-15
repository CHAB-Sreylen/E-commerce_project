<template>
<<<<<<< HEAD
    <router-link to="/login">
        <div class=" w-full h-[40px] flex justify-end items-center "><p class="mr-20 text-[#7E7676]"> Sign in / Register </p></div>
    </router-link>    
=======
    <div class=" w-full h-[40px] flex justify-end items-center "><p class="mr-20 text-[#7E7676]"> Sign in / Register </p></div>
>>>>>>> main
    <div class=" w-full flex justify-center items-center border-y border-[#B16969] py-1 "><img class="h-[124px] w-[279px]" src="../assets/envylogo.svg" alt=""></div>
    <Navbar class="sticky top-0 z-50"></Navbar>
    <div class="h-fit w-full flex flex-col gap-[19px] justify-around">
        <ProductTheme :coverPage="PDT.Page" :detailImg="PDT.image"></ProductTheme>
<<<<<<< HEAD
        <ProductDetailBox></ProductDetailBox>
        <div class="w-full h-fit bg-green-50 flex flex-col">

        </div>
        <div class="w-full h-5 bg-red-50">2</div>
        <div class="w-full h-5 bg-gray-50">3</div>
=======
        <div class="w-full h-fit bg-green-50 flex flex-col">

        </div>
        <div class="flex flex-col w-full h-[400px] bg-red-50">
            <itemsDetail></itemsDetail>
        </div>
        <div class="flex flex-col w-full h-[800px] bg-pink-100">
            <Feedback></Feedback>
        </div>
>>>>>>> main
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import ProductTheme from '../components/ProductTheme.vue';
<<<<<<< HEAD
    import ProductDetailBox from '../components/ProductDetailBox.vue';
=======
    import itemsDetail from '../components/itemsdetail.vue';
    import Feedback from '../components/Feedback.vue';
    import { RouterLink } from 'vue-router';

>>>>>>> main

    import {useEStore} from '../stores/eStore';
    import {mapState} from 'pinia';

    export default{
        
        components:{
            Navbar,
            ProductTheme,
<<<<<<< HEAD
            ProductDetailBox
=======
            itemsDetail,
            Feedback,
            RouterLink
>>>>>>> main
        },
        computed: {
            ...mapState(useEStore,['PDT'])
        }
    }
</script>