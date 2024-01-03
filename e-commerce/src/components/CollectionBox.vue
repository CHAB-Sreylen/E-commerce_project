<template>
    <div class="w-full h-[557px] flex justify-evenly ">
        <div v-for="c in Cbox" class="h-[557px] w-[708px] relative group"  >
            <img :src="c.image" class="absolute object-scale-down" alt="">
            <div class="absolute w-[449px] h-[96px] bottom-7 flex left-32 bg-white group-hover:scale-105 transition duration-500">
                <div class="flex flex-col h-full gap:1 w-[353px] pl-6 justify-center bg-white">
                    <p class="text-[12px] pl-3 font-normal">{{c.title}}</p>
                    <p class=" text-[20px] pl-3 font-normal">{{ c.dis }}</p>
                </div>
                <div class="flex w-[96px] h-[96px] justify-center items-center border-l border-gray-400 group-hover:bg-black transition duration-200">
                    <fa icon="chevron-right" class=" text-4xl group-hover:text-white transition duration-200"></fa>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {useEStore} from '../stores/eStore';
    import {mapState} from 'pinia';

   


    export default{
        name: "CollectionBox",
        computed:{
            ...mapState(useEStore,['Cbox']),
        },
      
    }
</script>