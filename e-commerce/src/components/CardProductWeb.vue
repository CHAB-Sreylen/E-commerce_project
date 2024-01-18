<template>
    <div class="h-[148px] w-full flex  items-center">
        <div class=" w-[424px] flex items-center gap-4">
            <fa icon="times" @click="deleteCart" class="text-xl pl-5 group-hover:text-white transition duration-200"  ></fa>
            <img :src="img" alt="" class="w-[122px] h-[144px] bg-[#FFF2F2]" >   
            <p class="text-[16px]">{{ name }}</p>
        </div>
        <p class="text-[16px] pl-2 w-[172px] flex">${{ price }}</p>
        <p class="text-[16px] pl-10 w-[468px]">Quantity: {{ quantity }}</p>
        <p class="pl-1 w-[150px] ">${{ subtotal }}</p>
    </div>
    
</template>

<script>
    import {mapState} from 'pinia';
    import {useCart} from '../stores/Cart'; 

    export default{
        name: "CardProductWeb",
        props: {
            img: String,
            name: String,
            price: String,
            quantity: String,
        },
        computed: {
            ...mapState(useCart,['cart']),
            subtotal(){
                return (parseFloat(this.price) * parseInt(this.quantity)).toFixed(2)
            }
        },
        methods: {
            deleteCart(){
                console.log(useCart().deleteCart(this.name,this.price)
                ? 'Item added to cart!'
                : 'Item was already in the cart.');
                console.log("click")
            }
        }
    }
</script>