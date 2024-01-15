<template>
    <div class="w-full h-fit flex justify-center gap-10">
        <p v-for="product in PCategory" class="text-[20px] hover:text-[#e0b0b0]">
<<<<<<< HEAD
            {{product}}
=======
            <h1 class=" hover:text-[#B16969] text-[#B16969] " v-if="$route.path === product.link"><RouterLink :to="product.link">{{product.name}}</RouterLink></h1>
            <h1 class=" hover:text-[#B16969] " v-if="$route.path !== product.link"><RouterLink :to="product.link">{{product.name}}</RouterLink></h1>
>>>>>>> main
        </p>
    </div>
</template>

<script>

    import {useEStore} from '../stores/eStore';
    import {mapState} from 'pinia';
<<<<<<< HEAD
=======
    import { RouterLink } from 'vue-router';
>>>>>>> main

    export default{
        name: "ProductList",
        computed: {
            ...mapState(useEStore,['PCategory'])
<<<<<<< HEAD
        }
=======
        },components: {
            RouterLink
         }
>>>>>>> main
    }

</script>