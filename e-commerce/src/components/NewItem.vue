<template>
    <div class="min-w-[320px] min-h-[524px] relative " @mouseenter="showChildren" @mouseleave="hideChildren" @click="goToAnotherRoute('/ProductDetail')" >

        <div class="w-full h-[442px] absolute top-0 bg-[#FFF2F2]"></div>
        <img :src="img" class="w-full h-[442px] absolute top-0 object-contain" alt="">
        
        
        <div @click="addToCard" v-if="isChildrenVisible==true" @mouseover="showChildren"  class="absolute bottom-24 w-full px-28 py-3 bg-[#FF6289] text-white font-semibold ">add to card</div>
        <div v-if="DiscountBox == true" class="absolute top-5 right-5 w-[60px] h-[30px] bg-[#FF6289] flex justify-center items-center rounded-2xl text-white">{{ discount }}</div>
        <div class="absolute bottom-3 text-[20px]">
            <p class="mb-2">{{ name }}</p>
            <p v-if="DiscountBox == true" class="flex flex-row items-center text-[16px]"><span class=" line-through text-[14px] ">{{ baseprice }}</span>&nbsp;&nbsp;{{ price }}$</p>
            <p v-else class="flex flex-row text-[16px]">{{ price }}$</p>
            
        </div>  
    </div>
</template>

<script>

    import {mapState} from 'pinia';

    import {useCart} from '../stores/Cart'; 


    export default{
        name: "NewItem",
        data(){
            return {
                isChildrenVisible: false
            }
        },
        props: { 
            img: String,
            name: String,
            price: String,
            promotion:String,
            baseprice:String,
            DiscountBox:String,
            discount:String,
        },
        computed: {
            ...mapState(useCart,['cart']),
    
        },
        methods: {
        showChildren() {
          this.isChildrenVisible = true;
        },
        hideChildren() {
          this.isChildrenVisible = false;
        },
        addToCard(){
                console.log(useCart().addToCart(this.name,this.price,this.img)
                ? 'Item added to cart!'
                : 'Item was already in the cart.');
                console.log("click")
                console.log(this.cart)
        }, goToAnotherRoute(route) {
      // Use this.$router.push to navigate to another route
                this.$router.push(route);
            }
        }
        
    }
</script>