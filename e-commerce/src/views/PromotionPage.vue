<template>
    <div class="AllItems  grid grid-cols-4 gap-3">
                    <Items v-for="i in RingItems"
                    :promotion="i.promotion"  
                    :baseprice="i.baseprice"
                    :DiscountBox="i.DiscountBox" 
                    :discount="i.discount" 
                    :img = "i.img" :name="i.name" 
                    :price="i.price"> </Items>
                </div>

</template>

<script>
    import Items from '../components/Items.vue';
    import {useEStore} from '../stores/eStore';
    import {mapState} from 'pinia';


    export default{

        name: "BraceletPage",
        computed: {
            ...mapState(useEStore,['Items']),
        },
        components: {
            Items,
            
        },
        data(){
            return{
                RingItems: []
            }
        },
        mounted(){
            this.RingItems = this.Items.filter(Items => Items.promotion == true)
        }
        
        
    }

</script>