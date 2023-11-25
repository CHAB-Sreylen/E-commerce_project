<template>
  <div class=" w-full h-[40px] flex justify-end items-center "><p class="mr-20 text-[#7E7676]"> Sign in / Register </p></div>
  <div class=" w-full flex justify-center items-center border-y border-[#B16969] py-1 "><img class="h-[124px] w-[279px]" src="./assets/envylogo.svg" alt=""></div>
  <Navbar class="sticky top-0"></Navbar>
  <div class="h-[3000px] w-full"></div>

</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');
  body{
    font-family: 'Quicksand', sans-serif;
  }
</style>
 
<script>
  
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
  import Navbar from './components/Navbar.vue' 
  
  
  export default {
    name: "App",
    components: {
      Navbar,
    },
  } 
</script>

 