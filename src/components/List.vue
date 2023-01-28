<template>
  <div class="list">
    <Title :img="ico" :title="title" />
    <ul class="people-list">
      <People
        v-for="propel in propelList"
        :key="propel.id"
        :title="propel.title"
        :ico="propel.ico"
        :ext_zw="propel.ext_zw"
        :ext_gs="propel.ext_gs"
        :content="propel.content"
        :isActive="propel.isActive"
        :label="label"
      />
    </ul>
  </div>
</template>

<script>
import Title from "./Title";
import People from "./People";
export default {
  name: "List",
  props: {
    scode: String,
    id: String,
    ico: String,
    title: String,
    propelList: Array,
    label:Object
  },
  components: {
    Title,
    People,
  },

};
</script>

<style scoped>
/* .list{
    margin-bottom: 3rem;
} */
.people-list {
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>