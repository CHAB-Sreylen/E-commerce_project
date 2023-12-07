<template>
    <RouterView></RouterView>
</template> 

<style>
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap');
  body{
    font-family: 'Quicksand', sans-serif;
  }
</style>
 
<script>
    import { RouterLink, RouterView } from 'vue-router'
    export default{
      components: {
        RouterView
      }
    }
</script>

 