<template>
  <div class="schedule">
    <Title :img="dhrcIco" />
    <div class="m-title" :style="{color:label.btys}">
      {{ mainForumTitle }}
    </div>
    <MainForumList :mainNavList="mainNavList" :mainForumList="mainForumList" :label="label" />
        <div class="m-title" :style="{color:label.btys}">
      {{ subForumTitle }}
    </div>
    <SubForumList :subForumListData="subForumListData" :label="label" />
  </div>
</template>

<script>
import Title from "./Title";
import MainForumList from "./MainForumList";
import SubForumList from "./SubForumList";

export default {
  name: "Schedule",
  props: {
    dhrcIco: String,
    mainForumTitle: String,
    subForumTitle: String,
    mainNavList:Array,
    mainForumList:Array,
    subForumListData:Array,
    label:Object
  },
  components: {
    Title,
    MainForumList,
    SubForumList,
  },
};
</script>

<style scoped>
.m-title {
  text-align: center;
  margin-bottom: 0.9rem;
}
</style>