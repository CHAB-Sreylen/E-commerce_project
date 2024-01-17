
<template>
  <div class="">
    <div class=" w-full h-[40px] flex justify-end items-center "><p class="mr-20 text-[#7E7676]"><RouterLink to="/login">Sign in</RouterLink> / <RouterLink to="/register">Register</RouterLink> </p></div>
      <div class=" w-full flex justify-center items-center border-y border-[#B16969] py-1 "><img class="h-[124px] w-[279px]" src="../assets/envylogo.svg" alt=""></div>
      <Navbar class="sticky top-0 z-50"></Navbar>
      <div class="box w-full h-[557px] flex  bg-no-repeat bg-cover bg-center relative">
        <div class="box1 w-2/4 flex justify-between">
           <img src="../assets/WomanCover.png" alt="">
           <div class="flex items-center justify-center">
              <div class=" top-[200px] flex items-center justify-center">
                <h1 class="About text-[64px] font-normal">About us</h1>
              </div> 
           </div>
        </div>
        <div class="w-[500px]"></div>
      </div>
      <div class="logo mt-[150px] w-full h-[154px] flex justify-center items-center flex-col">
        <img class="" src="../assets/flower.png" alt="">
        <p class=" Welcome text-[60px] absolute font-[600] ">Welcome to EVVY</p>
        <p class=" Welcome text-[36px] font-[300] leading-3 ">Girl accessories store</p>
      </div>
      <div class="text-balance text-center flex justify-center items-center mt-[100px]">
        <!-- absolute ml-[600px] mt-[100px] -->
        <p class="w-[850px]  h-[280px] font-[200] text-[32px]">
              EVVY is a place where from several
          years we create a unique fashion accessories for women ,
          often personalized for individual needs and tastes.
          We dedicate the main part of our work to unforgettable 
          accessories pieces touched with a retro aesthetics.</p>
      </div>
      <div class="flex flex-row justify-center gap-[150px] w-full mt-[150px]">
        <Trending
        v-for="i in Trending"
        :Img = "i.Img"
        :Title ="i.Title"
        :Detail = "i.Detail"
        ></Trending>
      </div>
      <div class="flex justify-center items-center text-center w-full mt-80 ">
        <p class="font-[300] text-[32px] w-2/4">PO Box 86, Russian Conf. Blvd. Phnom Penh, Cambodia.
            Copyright @ 2023 EVVY Store
        </p>
      </div>
      <div class="w-full flex flex-col">
        <div class="w-[50px] h-[50px] rounded-full bg-slate-500"></div>
      </div>

  </div>
</template>
<script>
  import {useEStore} from '../stores/eStore';
  import { mapState } from 'pinia';
  import Trending from '../components/Trending.vue' ;
  import Navbar from '../components/Navbar.vue';

  
  export default{
    name:"About us",
    components:{
      Navbar,
      Trending,
    
    },
    computed:{
            ...mapState(useEStore,['CList']),
            ...mapState(useEStore,['Trending']),
    }
  }
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:ital,wght@0,300;0,400;1,300&family=Quicksand:wght@300;400;700&display=swap");
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.box{
  background-image: url('../assets/FlowerBackground.png');
}
.about{
  font-family: Quicksand;
}
.Welcome{
  font-family: Quicksand;

}
/* .logo{
 background-image:url('../assets/flower.png') ;
} */
</style>
