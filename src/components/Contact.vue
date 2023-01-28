<template>
  <div class="contact">
      <Title :img="contactIco" />
      <ul>
          <li
            v-for="item in contactList"
            :key="item.id"
            >
              <div class="left">{{ item.title }}</div>
              <div class="right" v-html="item.content"></div>
          </li>
      </ul>
  </div>
</template>

<script>
import Title from "./Title";
export default {
    name: "Contact",
    props:{
        contactIco:String,
        contactList:Array
    },
    components:{
        Title
    },
}
</script>

<style scoped>
ul{
    margin-left: 0.8rem;
    margin-right: 0.8rem;
    border-radius: 0.4rem;
    background-color: rgba(0, 83, 240, 0.4);
    color: #fff;
    font-size: 0.8rem;
    padding: 1.06667rem;
    margin-bottom: 1.33333rem;
}
li{
    border-bottom: 0.02667rem solid #1d2085;
    padding-bottom: 0.8rem;
    margin-bottom: 0.8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.left{
    width: 4rem;
    margin-right: 1.33333rem;
    color: #49e0c9;
    font-size: 0.8rem;
}
.right{
    width: 10.66667rem;
    font-size: 0.8rem;
}

</style>