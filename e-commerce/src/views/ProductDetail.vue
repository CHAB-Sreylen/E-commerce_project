<template>
    <div class=" w-full h-[40px] flex justify-end items-center "><p class="mr-20 text-[#7E7676]"> Sign in / Register </p></div>
    <div class=" w-full flex justify-center items-center border-y border-[#B16969] py-1 "><img class="h-[124px] w-[279px]" src="../assets/envylogo.svg" alt=""></div>
    <Navbar class="sticky top-0 z-50"></Navbar>
    <div class="h-fit w-full flex mt-24 gap-[19px] justify-around px-2">
        
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue';

    export default{
        
        components:{
            Navbar,
        }
    }
</script>