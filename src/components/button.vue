<template>
  <a href="">
    {{ title }}
  </a>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: String,
  },
};
</script>

<style scoped>
a {
  display: block;
  margin: 2rem auto;
  width: 12.8rem;
  height: 2.13rem;
  line-height: 2.13rem;
  color: #0053f1;
  background-color: #fbc21b;
  border-color: #fbc21b;
  font-size: 1rem;
  border-radius: 4px;
  text-align: center;
}
</style>