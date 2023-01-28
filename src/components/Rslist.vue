<template>
  <div class="rs-item">
      <div class="left">
        <div class="img" v-if="ico" :style="{borderColor:label.border_color}">
          <img :src="ico" :alt="title" />
        </div>
      </div>
      <div class="right">
        <!-- <div class="title" v-if="len !== 1">{{ title }}</div> -->
        <div class="note" v-html="content" :style="{color:label.font_color}"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Rslist",
    props:{
        title:String,
        ico:String,
        id:String,
        content: String,
        label:Object,
        len:Number
    },
}
</script>

<style scoped>
.rs-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.left {
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0 1.06667rem;
}
.right {
  width: 65%;
  padding: 0 0.53333rem 1.06667rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.img {
  width: 4rem;
  height: 4rem;
  border-width: 0.26667rem;
  border-style: solid;
  border-radius: 50%;
  overflow: hidden;
}

</style>