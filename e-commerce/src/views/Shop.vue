<template>
    <div>
        <div class=" w-full h-[40px] flex justify-end items-center "><p class="mr-20 text-[#7E7676]"> Sign in / Register </p></div>
        <div class=" w-full flex justify-center items-center border-y border-[#B16969] py-1 "><img class="h-[124px] w-[279px]" src="../assets/envylogo.svg" alt=""></div>
        <Navbar class="sticky top-0 z-50"></Navbar>
        <div class="h-fit w-full flex mt-24 gap-[19px] justify-around px-2">
            <div class=" w-[342px] flex flex-col gap-5">
                <Searchbar></Searchbar>
                <List v-for="c in CList" :title="c.title" :name="c.name"></List>
            </div>
            <div class="bg-yellow-50 w-[1055px]">
                <div class="w-full h-[57px] bg-green-50 flex items-center justify-between">
                    <div class="text-[16px]">
                        Showing 1/12 of 99
                    </div>
                    <div class="flex gap-3 items-center">
                        <p class="text-[20px]">Default Sorting</p>
                        <fa icon="chevron-down" class=" text-md"></fa>
                    </div>
                </div>
                <!-- items coponent for shop layout column 3 -->
                <div class="">

                </div>


            </div>
        </div>

    </div>
</template>


<script>
    import {useEStore} from '../stores/eStore';
    import {mapState} from 'pinia';

    import Navbar from '../components/Navbar.vue';
    import Searchbar from '../components/Searchbar.vue';
    import List from '../components/List.vue';

    export default{
        components:{
            Navbar,
            Searchbar,
            List
        },
        computed:{
            ...mapState(useEStore,['CList']),
        }

    }

</script>