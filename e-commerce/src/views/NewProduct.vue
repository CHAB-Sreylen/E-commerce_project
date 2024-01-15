<template>
<<<<<<< HEAD
    <div class=" w-4/5 h-fit grid grid-cols-4"  >
        <Items class="pBox" v-for="i in Items.slice(0,slice)" 
                    :promotion="i.promotion"  
                    :baseprice="i.baseprice"
                    :DiscountBox="i.DiscountBox" 
                    :discount="i.discount" 
                    :img = "i.img" :name="i.name" 
                    :price="i.price"> </Items>

        
        
    </div>
    <button v-if="Items.length > 8 &true& show === true "  @click="showmore()"> load more</button>
    <button v-else-if="Items.length> 8 && show === false" @click="showless()">show less</button>
    
    
</template> 

<style scoped>
    .pbox{
        width: 320px !important;
        height: 524px !important; 

    }
</style>

<script>

    import Items from '../components/Items.vue';

    import {useEStore} from '../stores/eStore';
    import {mapState} from 'pinia';

    export default {
        name: 'NewProduct',
        components: {
            Items,
        },
        data(){
            return {
                // name: ["Crown","Bracelet","Hair Pin","Earing","Rings","WAtc","a","b","c"],                
                slice: 8,
                show: true,
            }
        },
        computed:{
            ...mapState(useEStore,['Items']),
        },
        methods: {
            showmore() {
                this.slice = this.slice + 8;
                this.show = false;
            },
            showless(){
                this.slice = this.slice - 8;
                this.show = true;
            }
        }
       
            
        
=======
    <div class="w-full h-40 bg-gray-200">

    </div>
</template> 

<script>
    export default {
        name: 'NewProduct'
>>>>>>> main
    }

</script>
