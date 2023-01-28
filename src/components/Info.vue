<template>
  <div class="info">
    <Title :img="dhjs.ico" />
    <div class="text" v-html="dhjs.content">
      
    </div>
  </div>
</template>

<script>
import Title from "./Title";
export default {
  name: "info",
  props: {
    dhjs: Object
  },
  components: {
    Title,
  },
};
</script>

<style scoped>
.info {
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  height: 100%;
  border-radius: 0.53333rem;
  background-color: rgba(0, 83, 240, 0.4);
  width: 18.4rem;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
}
.text{
    padding: 0 1.3rem;
    font-size: 0.666rem;
    color: white;
    line-height: 1.333rem;
    text-indent: 1.333rem;
}
</style>