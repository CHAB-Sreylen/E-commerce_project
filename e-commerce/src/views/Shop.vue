<template>
    <div>
        <div class=" w-full h-[40px] flex justify-end items-center "><p class="mr-20 text-[#7E7676]"> Sign in / Register </p></div>
        <div class=" w-full flex justify-center items-center border-y border-[#B16969] py-1 "><img class="h-[124px] w-[279px]" src="../assets/envylogo.svg" alt=""></div>
        <Navbar class="sticky top-0 z-50"></Navbar>
        <div class="h-fit w-full flex gap-[19px] justify-evenly">
            <div class="bg-gray-200 w-[342px] flex flex-col pl-[15px] "><Searchbar></Searchbar></div>
            <div class="bg-yellow-300 w-[1055px] ">jeff</div>
        </div>

    </div>
</template>


<script>
    import Navbar from '../components/Navbar.vue';
    import Searchbar from '../components/Searchbar.vue';


    export default{
        components:{
            Navbar,
            Searchbar
        }

    }

</script>