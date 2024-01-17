<template>
    <div class="w-full h-fit mt-5 flex flex-col items-center">
        <div class=" flex flex-wrap justify-start gap-24 px-10">
                    <NewItem v-for="i in Items.slice(0,number)"
                    :promotion="i.promotion"  
                    :baseprice="i.baseprice"
                    :DiscountBox="i.DiscountBox" 
                    :discount="i.discount" 
                    :img = "i.img" :name="i.name" 
                    :price="i.price"></NewItem>
        </div>
        <div v-if="number== 8" @click="showMore()" class="mt-5 w-[200px] h-[80px] flex justify-center items-center font-semibold rounded-3xl border border-[#B0B0B0] text-[20px] text-[#B16969] hover:text-[#FF6289]">Load More</div>
        <div v-else-if="number == 16  " @click="showLess()" class="mt-5 w-[200px] h-[80px] flex justify-center items-center font-semibold rounded-3xl border border-[#B0B0B0] text-[20px] text-[#B16969] hover:text-[#FF6289]">Load Less</div>
        
    </div>
</template> 

<script>
    import Items from '../components/Items.vue';
    import {mapState} from 'pinia';
    import { useEStore } from '../stores/eStore'
    import NewItem from '../components/NewItem.vue';

    export default {
        name: 'NewProduct',
        components:{
            Items,
            NewItem
        },
        data(){
            return {
                number: 8,
            }
        },
        computed:{
            ...mapState(useEStore,['Items']),

        },methods:{
            showMore(){
                return this.number = 16;
            },
            showLess(){
                return this.number = 8;
            }
        }
    }

</script>
