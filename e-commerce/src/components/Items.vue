<template>
    <div class="flex flex-col mb-10">
        <div class="w-[255px] h-[350px] bg-[#FFF2F2] flex flex-col relative">
            <div class="flex justify-end">
                <div class="w-[60px] h-[30px] bg-[#FF6289] flex justify-center items-center rounded-2xl absolute top-3 right-3" v-if="DiscountBox==true">
                    <p class="text-[14px] font-[500] text-white">{{ discount }}</p>
                </div>
                <div class="mr-3" v-else></div>
            </div>
            <div class="w-full flex absolute top-3 justify-center ">
                <img class="Img w-[300px] h-[350px] " :src="img"  alt="" />
            </div>
        </div>
        <p class="name font-[400] text-[20px] ml-3 mt-4">{{ name }}</p>
       <div class="flex flex-row">
           <div class="" v-if="promotion == true">
                <p class="price font-[400] text-[14px] ml-3 mt-4 line-through">{{ baseprice }}</p>
           </div>
           <div class="" v-else></div>
           <div>
                <p class="price font-[400] text-[14px] ml-2 mt-4">{{ price }}</p>
           </div>
       </div>
    </div>
    
    
    
    
    
</template>
<script>
export default{
    name:"Items" ,
    props:{
        promotion:String,
        baseprice:String,
        DiscountBox:String,
        discount:String,
        img: String,
        name:String,
        price:String,
    },
};
</script>
<style>

@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lato:ital,wght@0,300;0,400;1,300&family=Quicksand:wght@300;400;700&display=swap");
.name{
    font-family: Quicksand;
}
.price{
    font-family: Quicksand;
}

</style>