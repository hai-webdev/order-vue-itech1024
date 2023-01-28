<template>
  <div class="subforum-list">
    <ForumList
      v-for="(item, index) in list"
      :key="item.id"
      :id="item.id"
      :date="item.date"
      :title="item.title"
      :seo_title="item.seo_title"
      :ico="item.ico"
      :content="item.content"
      :class="isActive ? 'active' : ''"
      :color="2"
      :index="index"
      :label="label"
    />
  </div>
</template>

<script>
import axios from "axios";
import ForumList from "./ForumList";
export default {
  name: "Tabs",
  props: {
    title: String,
    active: Boolean,
    index: Number,
    scode: String,
    label:Object
  },
  data() {
    return {
      isActive: false,
      list: [],
    };
  },
  components: {
    ForumList,
  },
  mounted() {
    if (this.index == 0) {
      this.isActive = !this.isActive;
    }
    axios.get(`/api.php/cms/nav/scode/${this.scode}`).then((rs) => {
      for (const item of rs) {
        const { name: title, scode: id, subname: date, title:seo_title } = item;
        this.list.push({
          title,
          id,
          date,
          seo_title
        });
      }
    });
  },
  methods: {},
};
</script>

<style scoped>
</style>