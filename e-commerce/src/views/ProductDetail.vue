<template>
    <router-link to="/login">
        <div class=" w-full h-[40px] flex justify-end items-center "><p class="mr-20 text-[#7E7676]"> Sign in / Register </p></div>
    </router-link>    
    <div class=" w-full flex justify-center items-center border-y border-[#B16969] py-1 "><img class="h-[124px] w-[279px]" src="../assets/envylogo.svg" alt=""></div>
    <Navbar class="sticky top-0 z-50"></Navbar>
    <div class="h-fit w-full flex flex-col gap-[19px] justify-around">
        <ProductTheme :coverPage="PDT.Page" :detailImg="PDT.image"></ProductTheme>
        <ProductDetailBox></ProductDetailBox>
        <div class="w-full h-fit bg-green-50 flex flex-col">

        </div>
        <div class="w-full h-5 bg-red-50">2</div>
        <div class="w-full h-5 bg-gray-50">3</div>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import ProductTheme from '../components/ProductTheme.vue';
    import ProductDetailBox from '../components/ProductDetailBox.vue';

    import {useEStore} from '../stores/eStore';
    import {mapState} from 'pinia';

    export default{
        
        components:{
            Navbar,
            ProductTheme,
            ProductDetailBox
        },
        computed: {
            ...mapState(useEStore,['PDT'])
        }
    }
</script>