<template>
   
   <div class="flex flex-row h-[50px] items-center justify-between px-[35px] bg-white">
   
    <div class="flex gap-[35px]"> 
            <div class="text-md font-semibold flex gap-1 justify-center text-[#7E7676]" v-for="t in NavTitle">
                <h1 class=" hover:text-[#B16969] text-[#B16969] " v-if="$route.path === t.link"><RouterLink :to="t.link">{{t.title}}</RouterLink></h1>
                <h1 class=" hover:text-[#B16969] " v-if="$route.path !== t.link"><RouterLink :to="t.link">{{t.title}}</RouterLink></h1>
                <img src="../assets/down chevron.svg" alt="">
            </div>
        </div>    
        <div class="flex flex-row gap-[35px] items-center" >
            <div class="h-[32px] w-[32px] flex items-center justify-center  hover:animate-bounce" v-for="icon in NavIcons">
                <img :src="icon" class="h-[16px] w-[16px]" >
            </div>
        </div>
        
    </div>
    

</template>


<script>
    import {useEStore} from '../stores/eStore';
    import {mapState} from 'pinia';

    import { RouterLink, RouterView } from 'vue-router'


    export default {
        name: "Navbar",
        computed: {
            ...mapState(useEStore,['NavTitle']),
            ...mapState(useEStore,['NavIcons']),
    
        },
        components: {
            RouterLink
        }
    }
</script>