<template>
    <div v-for="Picture in Pic" class="flex flex-col w-[300px]">
        <img :src="Picture.image" class="w-full h-[352px]" alt="">
        <div class="text-[20px]">
            <p>{{ Picture.name }}</p>
            <p>{{ Picture.price }}</p>
        </div>
        

    </div>
</template>

<script>
    import {useImage} from '../stores/images';
    import {mapState} from 'pinia';

   


    export default{
        name: "TrendingItem",
        computed:{
            ...mapState(useImage,['Pic']),
        },
      
    }
</script>