<template>
    <div class="no-scrollbar">
      <div class=" w-full h-[40px] flex justify-end items-center "><p class="mr-20 text-[#7E7676]"> Sign in / Register </p></div>
      <div class=" w-full flex justify-center items-center border-y border-[#B16969] py-1 "><img class="h-[124px] w-[279px]" src="../assets/envylogo.svg" alt=""></div>
      <Navbar class="sticky top-0 z-50"></Navbar>
      <div class="h-fit w-full flex flex-col gap-[19px]">
        <ShopBox></ShopBox>
        <CollectionBox></CollectionBox>
        
        <!-- tranding box -->
        <div class="w-full h-fit flex flex-col pl-9 mt-14">
          <p class="text-[35px]">Tranding Page</p>        
          <p class="text-[15px]">Most Popular Item</p>
          <div class="w-full h-[300px] bg-gray-500 overflow-x-auto mt-4">
            
          </div>
        </div>
        <!-- product item -->
        <div class="flex flex-col gap-3 items-center">
          <ProductIcon></ProductIcon>
          <ProductList></ProductList>
        </div>
        <HomeView></HomeView>
      </div>
    </div>
  </template> 
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap');
    body{
      font-family: 'Quicksand', sans-serif;
    }
  </style>
   
  <script>
    import { RouterLink, RouterView } from 'vue-router'
    // import HelloWorld from './components/HelloWorld.vue'
    import Navbar from '../components/Navbar.vue' 
    import ShopBox from '../components/ShopBox.vue' 
    import CollectionBox from '../components/CollectionBox.vue'
    import ProductIcon from '../components/icons/ProductIcon.vue'
    import ProductList from '../components/ProductList.vue'
  
    export default {
      name: "App",
      components: {
      Navbar,
      ShopBox,
      CollectionBox,
      ProductIcon,
      ProductList,
      RouterLink,
      RouterView,
      },
    } 
  </script>
  
   