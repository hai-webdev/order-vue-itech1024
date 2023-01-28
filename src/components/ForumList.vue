<template>

    <div class="subfrom-item" :style="{backgroundColor:index % 2 === 1 ? label.ltbg2 : ''}">
      <div class="title">
        <div class="left date">
          <span :style="{color:label.font_color}">{{ date }}</span>
        </div>
        <div class="right" v-if="seo_title">
          <span :style="{color:label.btys}">
            {{ title }}
          </span>
          <span>
            {{ seo_title }}
          </span>
        </div>
        <div class="right" v-else>
          <span :class="seo_title ? 'color' : ''">
            {{ title }}
          </span>
          <span>
            {{ seo_title }}
          </span>
        </div>
      </div>
        <Rslist
        v-for="item in lists"
        :key="item.id"
        :title="item.title"
        :ico="item.ico"
        :content="item.content"
        :id="item.id"
        :label="label"
        :len="lists.length"
        v-show="item.ico && item.content"
         />
    </div>
</template>

<script>
import axios from "axios";
import Rslist from "./Rslist";
export default {
  name: "ForumList",
  props: {
    date: String,
    title: String,
    seo_title:String,
    id:String,
    color:Number,
    label:Object,
    index:Number
  },
  data(){
    return {
      lists:[],
    }
  },
  components:{
    Rslist
  },
  mounted(){
    axios.get(`/api.php/list/${this.id}/num/10000`).then(res => {
      for (const item of res) {
        const {title, ico, content,id} = item;
        this.lists.push({
          title,
          ico,
          content,
          id
        })
      }
    })
  }
};
</script>

<style scoped>
.subfrom-item{
  padding: .5rem;
}
.subfrom-item .title {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  vertical-align: bottom;
}
span{
    vertical-align: bottom;
    /* height: 1.2rem; */
    display: inline-block;
    line-height: 1.2rem;
}
/* .subfrom-item:nth-child(2n + 2) {
  background-color: #0053f0;
}
.subfrom-item.odd:nth-child(2n + 1) {
  background-color: #0053f0;
}
.subfrom-item.odd:nth-child(2n + 2) {
  background-color: transparent;
} */
.title{
  width: 100%;
  padding: .5rem 0;
}
.left {
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.right {
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.right span.color{
  color: #fbc21b;
}

</style>