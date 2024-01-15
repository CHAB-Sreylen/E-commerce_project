<template>
    <div class="flex flex-col justify-center items-center text-center">
          <img class="w-[250px] h-[250px] rounded-full" :src="Img" alt=""/>
          <p class="title font-[300px] text-[32px] mt-[50px]">{{ Title }}</p>
          <p class="w-[300px] font-[300px] text-[24px] mt-[20px] ">{{ Detail }}</p>
    </div>
</template>

<script>
export default{
    name:"Trending",
    props:{
        Img: String,
        Title:String,
        Detail:String,
    },
};

</script>