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
          <div class="flex w-full h-fit mt-4" @mousedown="handleMouseDown" @mouseleave="handleMouseLeave" @mouseup="handleMouseUp" ref="scroll">
            <div class="w-full h-full flex overflow-x-hidden gap-16 " @mousemove="handleMouseMove" ref="scrollContent">
              <TrendingItem v-for="item in Pic" :image="item.image" :name="item.name" :price="item.price" class="focus:bg-green-300"></TrendingItem>
            </div>
          </div>
        </div>
        <!-- product item -->
        <div class="flex flex-col gap-3 items-center">
          <ProductIcon></ProductIcon>
          <ProductList></ProductList>
          <RouterView></RouterView>
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
    .scroll-x {
      cursor:grab;
    }
    .scroll-x::-webkit-scrollbar{
      display: none;
      width: 0px-;
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
    import TrendingItem from '../components/TrendingItem.vue'


    import {useImage} from '../stores/images';
    import {mapState} from 'pinia';

    export default {
      name: "App",
      data() {
    return {
      isMouseDown: false,
      startX: 0,
      scrollLeft: 0,
      };
    },
      components: {
      Navbar,
      ShopBox,
      CollectionBox,
      ProductIcon,
      ProductList,
      RouterLink,
      RouterView,
      TrendingItem,
      },
      computed:{
            ...mapState(useImage,['Pic']),
      },
      methods:{
        handleMouseDown(e) {
        this.isMouseDown = true;
        this.startX = e.pageX - this.$refs.scroll.offsetLeft;
        this.scrollLeft = this.$refs.scrollContent.scrollLeft;
        },
        handleMouseLeave() {
          this.isMouseDown = false;
        },
        handleMouseUp() {
          this.isMouseDown = false;
        },
        handleMouseMove(e) {
          if (!this.isMouseDown) return;
          e.preventDefault();
          const x = e.pageX - this.$refs.scroll.offsetLeft;
          const walk = (x - this.startX) * 2; // You can adjust the multiplier for faster or slower scrolling
          this.$refs.scrollContent.scrollLeft = this.scrollLeft - walk;

          // Determine the direction
          // if (walk < 0) {
          //   console.log('Scrolling to the left');
          // } else if (walk > 0) {
          //   console.log('Scrolling to the right');
          // }
          }
      }
     }
 
  </script>
  
   