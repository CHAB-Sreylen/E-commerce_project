<template>
    <div class="w-full h-fit flex flex-col gap-[29px]">
        <div class="w-full h-[663px] bg-gray-300 relative">
            <img :src="coverPage" class="w-full h-[663px]" alt="">
            <div class="bg-white w-[420px] h-[510px] flex flex-col absolute right-20 top-20 px-10 py-5 gap-2">
                <h3 class="text-[32px] font-medium leading-tight">Rolo chain charm necklece</h3>
                <div class="w-full h-fit flex gap-1 pt-1">
                    <fa icon="star" class="text-[#F19292]"></fa>
                    <fa icon="star" class="text-[#F19292]"></fa>
                    <fa icon="star" class="text-[#F19292]"></fa>
                    <fa icon="star" class="text-[#F19292]"></fa>
                    <fa icon="star-half-alt" class="text-[#F19292] outline-[#F19292] "></fa>    
                </div>
                <p class="text-gray-400 leading-tight h-[160px] overflow-hidden">It’s the chain. The well-rounded, gets-along-with-every-look type of chain. Handcrafted in 14k solid gold featuring our Stacker Clasp—a link that layers three of your favorite charms together.</p>
                <p class=" font-semibold">Category: Golden Chain</p>
                <p class=" font-semibold">Tag:  14K gold, right chain</p>
                <div class="w-full h-[68px] flex gap-3 mt-4">
                    <div class="h-full w-[68px] border border-[#F19292] flex justify-center items-center">
                        <fa icon="heart" class="text-[#F19292] text-2xl"></fa>
                    </div>
                    <div class="w-[263px] h-full bg-[#F19292] flex justify-between px-3 items-center">
                        <p class=" font-medium">add to card</p>
                        <fa icon="chevron-right" class="text-xl"></fa>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-fit grid grid-cols-3 px-[29px] gap-y-[29px] ml-3">
            <img v-for="n in detailImg" :src="n" class="w-[460px] h-[480px]" alt="">
        </div>

    </div>
</template>

<script>
    import {useEStore} from '../stores/eStore';
    import {mapState} from 'pinia';

    import detail1 from '../assets/detail1.png'
    import detail2 from '../assets/detail2.png'

    export default{
        name: "ProductTheme",
        props:{
            coverPage: String,
            detailImg: [],
        },
        
    }
</script>