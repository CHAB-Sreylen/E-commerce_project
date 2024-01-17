<template>
    <div>
        <div class=" w-full h-[40px] flex justify-end items-center "><p class="mr-20 text-[#7E7676]"><RouterLink to="/login">Sign in</RouterLink> / <RouterLink to="/register">Register</RouterLink> </p></div>
        <div class=" w-full flex justify-center items-center border-y border-[#B16969] py-1 "><img class="h-[124px] w-[279px]" src="../assets/envylogo.svg" alt=""></div>
        <Navbar class="sticky top-0 z-50"></Navbar>

    </div>

</template>

<script>
    import Navbar from '../components/Navbar.vue';


    export default{
        name: "Cart",
        components: {
            Navbar,
        }
    }

</script>