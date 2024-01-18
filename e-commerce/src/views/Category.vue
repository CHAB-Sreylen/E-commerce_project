<template>
    <div class="AllItems flex flex-wrap justify-between ">
                    <Items v-for="i in Items"
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

        name: "Category",
        computed: {
            ...mapState(useEStore,['Items']),
        },
        components: {
            Items,
            
        }
        
        
    }

</script>