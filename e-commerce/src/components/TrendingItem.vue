<template>
    <div class="flex flex-col min-w-[300px] min-h-[442px]">
        <img :src="image" class="w-full h-[372px]" alt="">
        <div class="text-[20px]">
            <p>{{ name }}</p>
            <p>{{ price }}</p>
        </div>
    </div>
</template>

<script>

   import {useImage} from '../stores/images';
    import {mapState} from 'pinia';

   


    export default{
        name: "TrendingItem",
        props: { 
            image: String,
            name: String,
            price: String,
        }
    }
</script>