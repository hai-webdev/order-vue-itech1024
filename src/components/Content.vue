<template>
  <div class="content" :style="{ backgroundImage: `url(${bgImg})` }">
    <Button title="图片直播" :href="tpzblj" />
    <Button title="视频直播" :href="spzblj" />
    <Info :dhjs="dhjs" />
    <List
      v-for="ry in ryScode"
      :key="ry.id"
      :scode="ry.scode"
      :ico="ry.ico"
      :title="ry.title"
      :propelList="ry.propelList"
      :label="label"
    />
    <Schedule 
    :dhrcIco="dhrcIco"
    :mainForumTitle="mainForumTitle"
    :subForumTitle="subForumTitle"
    :mainNavList="mainNavList"
    :mainForumList="mainForumList"
    :subForumListData="subForumList"
    :label="label"
     />
    <Partner 
    v-for="item in partnerList"
    :key="item.id"
    :title="item.title"
    :pics="item.pics"
    :num="item.num"
    :label="label"
     />
     <Map
     :link="map.link"
     :title="map.title"
     :ico="map.ico"
      />
      <Contact :contactList="contactList" :contactIco="contactIco" />
  </div>
</template>

<script>
import Button from "./button";
import Info from "./Info";
import List from "./List";
import Schedule from "./Schedule";
import Partner from "./Partner";
import Map from "./Map";
import Contact from "./Contact";

export default {
  name: "Content",
  props: {
    bgImg: String,
    spzblj: String,
    tpzblj: String,
    dhjs: Object,
    ryScode: Array,
    dhrcIco:String,
    mainForumTitle:String,
    subForumTitle:String,
    mainNavList: Array,
    mainForumList:Array,
    subForumList:Array,
    partnerList: Array,
    map:Object,
    contactList:Array,
    contactIco:String,
    label:Object
  },
  components: {
    Button,
    Info,
    List,
    Schedule,
    Partner,
    Map,
    Contact
  },
};
</script>

<style scoped>
</style>