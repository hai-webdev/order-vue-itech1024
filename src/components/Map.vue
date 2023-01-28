<template>
  <div class="map">
      <Title :img="ico" />
      
      <iframe :src="link" frameborder="0"></iframe>
      <div class="text">{{ title }}</div>
  </div>
</template>

<script>
import Title from "./Title";

export default {
    name: "Map",
    props:{
        link:String,
        title:String,
        ico:String,
    },
    components:{
        Title
    }
}
</script>

<style scoped>
.map{
    width: 18.4rem;
    margin: 0 auto;
}
iframe{
    width: 100%;
    height: 500px;
}
.text{
    color: white;
    line-height: 4;
    text-align: center;
    font-size: 1rem;
}
</style>