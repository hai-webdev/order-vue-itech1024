<template>
      <li v-if="active" class="sub-item" :style="{backgroundColor:label.nav_active_bg, color:label.active_color,borderColor:label.nav_border_color}"  @click="childClick">
        {{ title }}
      </li>
      <li v-else class="sub-item" :style="{borderColor:label.nav_border_color}" @click="childClick">
        {{ title }}
      </li>
</template>

<script>
export default {
    name: "Tabs",
    props:{
        title:String,
        active:Boolean,
        index: Number,
        label:Object,
    },
    mounted(){

    },
    methods:{
      childClick () {
        this.$emit('index', this.index)
      }
    }
}
</script>

<style scoped>
.sub-item{
  padding: 1.06667rem 0;
    text-align: center;
    border: 0.05333rem solid #1d2085;
    width: 25%;
    font-size: 0.8rem;
}
.sub-item.active{
      background-color: #fbc21b;
    color: #1d2085;
}

</style>