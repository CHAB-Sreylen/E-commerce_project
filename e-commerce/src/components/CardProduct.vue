<template>
    <div class="h-[148px] ws-[340px] flex gap-2">
        <img :src="img" alt="" class="w-[122px] h-[144px] bg-[#FFF2F2]" >
        <div class="flex flex-col w-[145px] h-fit" >
            <p class="text-[16px]">{{ name }}</p>
            <p class="text-[12px]">{{ price }}</p>
            <p class="text-[16px] pt-4">Quantity: {{ quantity }}</p>
        </div>
        <fa icon="times" class="text-xl pl-5 group-hover:text-white transition duration-200"  ></fa>
    </div>
</template>

<script>
    export default{
        name: "CardProduct",
        props: {
            img: String,
            name: String,
            price: String,
            quantity: String,
        }
    }
</script>