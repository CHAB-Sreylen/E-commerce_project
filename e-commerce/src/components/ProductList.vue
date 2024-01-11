<template>
    <div class="w-full h-fit flex justify-center gap-10">
        <p v-for="product in PCategory" class="text-[20px] hover:text-[#e0b0b0]">
            <h1 class=" hover:text-[#B16969] text-[#B16969] " v-if="$route.path === product.link"><RouterLink :to="product.link">{{product.name}}</RouterLink></h1>
            <h1 class=" hover:text-[#B16969] " v-if="$route.path !== product.link"><RouterLink :to="product.link">{{product.name}}</RouterLink></h1>
        </p>
    </div>
</template>

<script>

    import {useEStore} from '../stores/eStore';
    import {mapState} from 'pinia';
    import { RouterLink } from 'vue-router';

    export default{
        name: "ProductList",
        computed: {
            ...mapState(useEStore,['PCategory'])
        },components: {
            RouterLink
         }
    }

</script>