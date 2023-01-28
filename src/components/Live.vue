<template>
  <div class="live">
      <img :src="hydt" alt="">
  </div>
</template>

<script>
export default {
    name: "Live",
    props:{
      hydt:String
    }
}
</script>

<style scoped>
img{
  width: 16.5rem;
  display: block;
  margin: 1rem auto;
}
</style>