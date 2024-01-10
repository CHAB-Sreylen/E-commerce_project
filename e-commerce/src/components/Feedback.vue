<template>
    <div class="flex flex-row justify-between  m-10 h-[50px]">
        <p class="text-3xl w-[250px]">Feedback from our customer</p>
        <p class="flex w-[206px] h-[63px] border-[1px] border-red-400 items-center justify-center">Write a review</p>
    </div>
    <div class="flex flex-col m-10 border-t-2 border-b-2 border-red-400 gap-5">
        <p class="mt-5">write a review</p>
        <div class="flex flex-col w-full">
            <h1>Title</h1>
            <input type="text" class="border-red-400 border-[1px] focus:outline-none w-full">  
        </div>
        <div class="flex flex-col gap-2 pb-5">
            <form >
                <label for="Review">Review</label><br>
                <textarea id="Review" class="border-red-400 border-[1px] focus:outline-none w-full" name="message" rows="8" cols="50"></textarea><br>
                <div class="flex justify-end pt-2 pb-3">
                    <button class="w-[150px] border-red-400 border-[1px] focus:outline-none p-2">Post</button>
                    <!-- <input type="submit" value="Submit" class="w-[100px] border-red-400 border-[1px] focus:outline-none"> -->
                </div>   
            </form>
        </div>     
    </div>
    <div class="flex flex-col">
        <div class="flex flex-row ml-10 gap-2">
            <div class="w-[50px] h-[50px] border-round rounded-full bg-slate-400"></div>
            <div class="flex-flex-col">
                <p>Username</p>
                <div class="w-full h-fit flex pt-1">
                    <fa icon="star" class="text-[#F19292]"></fa>
                    <fa icon="star" class="text-[#F19292]"></fa>
                    <fa icon="star" class="text-[#F19292]"></fa>
                    <fa icon="star" class="text-[#F19292]"></fa>
                    <fa icon="star-half-alt" class="text-[#F19292] outline-[#F19292] "></fa>    
                </div>
            </div>  
        </div>
        <div class="flex flex-col ml-10 pt-5">
            <p>What a good product</p>
            <h3>The product was so good to used, i really like it. it cam from with the perfect size for me.  I was buying it for 2 more for my sister she love it so much</h3>
        </div>
    
    </div>
    
</template>