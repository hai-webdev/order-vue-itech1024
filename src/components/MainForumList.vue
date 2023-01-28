<template>
  <ul class="MainForumList">
    <ForumCont

      :scode="'6'"
      :active="active"
      :label="label"
    />
  </ul>
</template>

<script>
import ForumCont from "./ForumCont";
export default {
  name: "MainForumList",
  props: {
    mainForumList: Array,
    mainNavList: Array,
    label: Object,
  },
    data(){
    return {
      active: false,
    }
  },
  components: {
    ForumCont,
  },
};
</script>

<style scoped>
.MainForumList {
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  border-radius: 0.4rem;
  background-color: rgba(0, 83, 240, 0.4);
  color: #fff;
  font-size: 0.8rem;
  overflow: hidden;
  margin-bottom: 3rem;
}
</style>