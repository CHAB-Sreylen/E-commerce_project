<template>
    <div class="w-fit h-fit flex flex-col">
        <h3 class=" text-[32px] font-semibold mb-[10px] ">{{ title }}</h3>
        <p class="text-lg mt-[10px]" v-for="(n ,index) in visableItem" :key="index" >{{ n }}</p>
        <p class="mt-5 font-semibold text-[16px] hover:font-bold" v-if="visableItem.length < name.length && name.length > itemsPerPage" @click="showMore">Show more</p>
        <p v-else-if="visableItem.length >= name.length && name.length > itemsPerPage" @click="showLess" class="mt-5 font-semibold text-[16px] hover:font-bold">show less</p>
        <p v-else></p>
    </div>
</template>
<script>
    
    export default{
        name: "List",
        props: {
            title: String,
            name: [],
        },
        data(){
            return {
                // name: ["Crown","Bracelet","Hair Pin","Earing","Rings","WAtc","a","b","c"],                
                visableItem: [],
                itemsPerPage: 5,
            }
        },
        mounted(){
            this.visableItem = this.name.slice(0,this.itemsPerPage)
        },
        methods: {
            showMore() {
                if (this.name) {
                    const start = this.visableItem.length;
                    // console.log(start);
                    const end = start + this.itemsPerPage;
                    // this.visibleItem = this.visibleItem.concat(this.name.slice(start, end));
                    this.visableItem = this.name.slice(0,end+ this.itemsPerPage);
                }
                // console.log('visibleItems:', this.visibleItem);
            },
            showLess(){
                if (this.name){
                    this.visableItem = this.name.slice(0,this.itemsPerPage);
                }
            }
        },
    }
</script>