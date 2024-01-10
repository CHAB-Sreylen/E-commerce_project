<template>
    <div class=" w-full h-[40px] flex justify-end items-center "><p class="mr-20 text-[#7E7676]"> Sign in / Register </p></div>
    <div class=" w-full flex justify-center items-center border-y border-[#B16969] py-1 "><img class="h-[124px] w-[279px]" src="../assets/envylogo.svg" alt=""></div>
    <Navbar class="sticky top-0 z-50"></Navbar>
    <div class="h-fit w-full flex flex-col gap-[19px] justify-around">
        <ProductTheme :coverPage="PDT.Page" :detailImg="PDT.image"></ProductTheme>
        <div class="w-full h-fit bg-green-50 flex flex-col">

        </div>
        <div class="flex flex-col w-full h-[400px] bg-red-50">
            <div class="flex flex-row justify-between m-10">
                <p>Fhese are awesome items that's perfect for you</p>
                <div class="flex flex-col gap-5">
                    <div class="flex flex-row gap-20 justify-between border-b-2 border-black">
                        <p>Specification</p>
                        <fa icon="chevron-down"/>
                    </div>
                    <div class="flex flex-row gap-20 justify-between border-b-2 border-black">
                        <p>Size</p>
                        <fa icon="chevron-down"/>
                    </div>
                    <div class="flex flex-row gap-20 justify-between border-b-2 border-black">
                        <p>Material</p>
                        <fa icon="chevron-down"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-5 bg-gray-50">3</div>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import ProductTheme from '../components/ProductTheme.vue';

    import {useEStore} from '../stores/eStore';
    import {mapState} from 'pinia';

    export default{
        
        components:{
            Navbar,
            ProductTheme,
        },
        computed: {
            ...mapState(useEStore,['PDT'])
        }
    }
</script>