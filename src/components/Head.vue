<template>
  <header :style="{backgroundColor:bgColor}">
    <div class="logo">
      <img :src="logoImg" :alt="title" />
    </div>
    <button>
      <a :href="mp">获取门票</a>
    </button>
  </header>
</template>

<script>
export default {
  name: "Head",
  props:{
      bgColor: String,
      logoImg: String,
      title: String,
      mp: String
  }
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 20rem;
  padding: 0.3rem;
  z-index: 999;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
}
.logo {
  max-width: 10rem;
  margin-left: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  width: 100%;
}
button {
  margin-right: 0.8rem;
  border-radius: 0;
  background-color: #fbc21b;
  border-color: #fbc21b;

  display: block;
  font-size: .5rem;
  width: 3rem;
  min-width: 80px;
  border: none;
  outline: none;
  text-align: center;
  min-height: 30px;
  height: 1rem;
}
button a {
  color: #0053f1;
}
</style>
