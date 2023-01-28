<template>
  <div class="title">
      <img :src="img" :alt="title">
  </div>
</template>

<script>
export default {
    name: "Title",
    props: {
        img: String,
        title: String
    }
}
</script>

<style scoped>
    img{
        width: 50%;
        display: block;
        padding: 1.5rem 0;
        margin: 0 auto;
    }
</style>