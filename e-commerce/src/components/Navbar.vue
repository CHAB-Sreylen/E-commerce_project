<template>
   
   <div class="flex flex-row h-[50px] items-center justify-between px-[35px] bg-white">   
    <div class="flex gap-[35px]"> 
            <div class="text-md font-semibold flex gap-1 justify-center text-[#7E7676]" v-for="t in NavTitle">
                <h1 class=" hover:text-[#B16969] text-[#B16969] " v-if="$route.path === t.link"><RouterLink :to="t.link">{{t.title}}</RouterLink></h1>
                <h1 class=" hover:text-[#B16969] " v-if="$route.path !== t.link"><RouterLink :to="t.link">{{t.title}}</RouterLink></h1>
                <img src="../assets/down chevron.svg"  alt="">
            </div>
        </div>    
        <!-- shopping back pop up -->
        <div class="flex flex-row gap-[35px] items-center" >
            <div class="h-[32px] w-[32px] flex items-center justify-center" @click="clicking" v-for="icon in NavIcons">
                <img :src="icon.img" class="h-[16px] w-[16px]">    
            </div>
            <div :key="click" v-if="shouldShowCart" class="bg-white fixed h-full w-[400px] top-0 right-0 px-5 pt-3">
                    <div class="flex justify-between items-center">
                        <p class="text-3xl">shopping bag</p>
                        <fa icon="times" class="text-4xl group-hover:text-white transition duration-200" @click="cancel"></fa>
                    </div>
                    <div class="mt-4 border-b border-[#E0B0B0] flex flex-col gap-2">
                        <CardProduct v-for="c in cart" :name="c.name" :price="c.price" :img="c.img" :quantity="c.quantity"></CardProduct>
                    </div>
                    <div class="flex justify-between pt-2">
                        <p>Total</p>
                        <p>90$</p>
                    </div>
                    <div class="flex justify-center items-center bg-[#E0B0B0] text-white h-[50px] mt-2">
                        <RouterLink to="/cart">view cart</RouterLink>
                    </div>
                    <div class="flex justify-center items-center border border-[#E0B0B0]  h-[50px] mt-2">
                        Check out
                    </div>
                </div>
        </div>
        
    </div>
    

</template>


<script>
    import {useEStore} from '../stores/eStore';
    import {mapState} from 'pinia';
    import { useCart } from '../stores/Cart';
    import { RouterLink } from 'vue-router';

    
   
    import CardProduct from './CardProduct.vue';



    export default {
        name: "Navbar",
        data(){
            return {
                click: false,
                totalPrice:"",
            }
        },
        computed: {
            ...mapState(useEStore,['NavTitle']),
            ...mapState(useEStore,['NavIcons']),
            ...mapState(useCart,['cart']),
            shouldShowCart() {
                return this.NavIcons.some(icon => icon.name === 'cart') && this.click;
            },
           
        },
        components: {
            RouterLink,
            CardProduct
        },
        
        methods: {
            cancel(){
                this.click = false;
                console.log(this.click);
            },
            clicking(){
                this.click = true
                console.log('Clicking. Click:', this.click);
            }
        }
    }
</script>