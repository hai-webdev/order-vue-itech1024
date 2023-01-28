<template>
  <div class="sub-forum" :style="{backgroundColor: label.ltbg1}">
    <ul class="sub-tabs" :style="{backgroundColor:label.nav_color}">
    <Tabs 
    v-for="(item, i) in subForumListData"
    :key="item.scode"
    :title="item.title"
    :active="i == subIndex"
    :index="i"
    @index="index"
    :label="label"
    />
    
    </ul>
    <div class="SubForum-cont">
      <ForumCont 
      v-for="(item, i) in subForumListData"
      :key="item.scode"
      :title="item.title"
      :scode="item.scode"
      :active="active"
      :index="i"
      v-show="i == subIndex"
      :label="label"
      />
  </div>
  </div>
</template>

<script>
import Tabs from "./Tabs";
import ForumCont from "./ForumCont";
export default {
  name: "SubForumList",
  props: {
    subForumListData: Array,
    label:Object
  },
  data(){
    return {
      active: false,
      subIndex: 0
    }
  },
  components:{
    Tabs,
    ForumCont
  },
  methods:{
          index: function (childValue) {
        this.subIndex = childValue;
      }
  }
};
</script>

<style scoped>
.sub-forum{
    margin-left: 0.8rem;
  margin-right: 0.8rem;
  border-radius: 0.4rem;
  color: #fff;
  font-size: 0.8rem;
  overflow: hidden;
  margin-bottom: 3rem;
}
.sub-tabs{
  display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #0053f0;
}

.SubForum-cont{
  margin-bottom: 3rem;
}

</style>