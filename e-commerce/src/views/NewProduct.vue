<template>
    <div class="w-full h-fit mt-5 flex justify-center">
        <div class=" flex flex-wrap justify-start gap-12 px-10">
                    <NewItem v-for="i in Items"
                    :promotion="i.promotion"  
                    :baseprice="i.baseprice"
                    :DiscountBox="i.DiscountBox" 
                    :discount="i.discount" 
                    :img = "i.img" :name="i.name" 
                    :price="i.price"></NewItem>
        </div>
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
        computed:{
            ...mapState(useEStore,['Items']),

        },
    }

</script>
