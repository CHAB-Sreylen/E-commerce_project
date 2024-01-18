<template>
    <div>
        <div class=" w-full h-[40px] flex justify-end items-center "><p class="mr-20 text-[#7E7676]"><RouterLink to="/login">Sign in</RouterLink> / <RouterLink to="/register">Register</RouterLink> </p></div>
        <div class=" w-full flex justify-center items-center border-y border-[#B16969] py-1 "><img class="h-[124px] w-[279px]" src="../assets/envylogo.svg" alt=""></div>
        <Navbar class="sticky top-0 z-50"></Navbar>
        <div class="h-fit w-full flex flex-col mt-24 gap-[19px] justify-around px-40 ">
            <div class="border-b border-[#E0B0B0] flex w-full h-fit pb-2">
                <p class="pl-24 w-[424px] ">Product</p>
                <p class=" w-[172px] ">Price</p>
                <p class="pl-10 w-[468px] ">Quantity</p>
                <p class=" w-[150px] ">Subtotal</p>
            </div>
            <div>
                <CardProductWeb v-for="c in cart" :name="c.name" :price="c.price" :img="c.img" :quantity="c.quantity"></CardProductWeb>
                
            </div>
            <div class="flex justify-between pt-2 border-t border-[#E0B0B0] px-24">
                <p class=" text-[20px] pr-10 font-medium">total</p>
                <p class="pl-6">${{ $store.getTotalPrice.toFixed(2) }}</p>
            </div>
            <div class="w-full h-fit">
                <div class="flex justify-center items-center border text-white bg-[#E0B0B0] w-[400px]  h-[50px] mt-2">
                        Check out
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    
    import Navbar from '../components/Navbar.vue';
    import CardProductWeb from '../components/CardProductWeb.vue';

    import {mapState} from 'pinia';
    import { useCart } from '../stores/Cart';


    export default{
        name: "Cart",
        setup(){
            const $store = useCart();
            return {
                $store
            }
        },
        components: {
            Navbar,
            CardProductWeb,
        },computed:{
            ...mapState(useCart,['cart']),
        },
        
    }

</script>