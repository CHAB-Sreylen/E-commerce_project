<template>
    <div class="w-full h-fit flex justify-center gap-10">
        <p v-for="product in PCategory" class="text-[20px] hover:text-[#e0b0b0]">
            {{product}}
        </p>
    </div>
</template>

<script>

    import {useEStore} from '../stores/eStore';
    import {mapState} from 'pinia';

    export default{
        name: "ProductList",
        computed: {
            ...mapState(useEStore,['PCategory'])
        }
    }

</script>