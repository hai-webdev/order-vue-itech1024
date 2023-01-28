<template>
  <li class="people-item" @click="switchs" :class="active ? 'active' : ''">
    <div class="title" :style="{backgroundColor:label.rwbgys}">
      <div class="photo" :style="{borderColor:label.border_color}">
        <img :src="ico ? ico :''" :alt="title" />
      </div>
      <div class="fullname" :style="{backgroundColor:label.rwmcbgys,color:label.rwmcztys}">{{ title }}</div>
      <div class="subtitle">
        {{ ext_gs }}
        <br />
        {{ ext_zw }}
      </div>
      <div class="arrow-down" v-if="active" :style="{backgroundColor:label.border_color}">
        <span class="first"></span>
        <span class="more">MORE</span>
        <span class="last"></span>
      </div>
      <div class="arrow-down" v-else>
        <span class="first" :style="{backgroundColor: label.border_color}"></span>
        <span class="more">MORE</span>
        <span class="last" :style="{backgroundColor: label.border_color}"></span>
      </div>
    </div>
    <div class="content" v-html="content" :style="{backgroundColor:label.content_bg}"></div>
  </li>
</template>

<script>
export default {
  name: "People",
  data() {
    return {
      active: false,
    };
  },
  props: {
    title: String,
    ico: String,
    ext_zw: String,
    ext_gs: String,
    content: String,
    isActive: Boolean,
    label:Object
  },
  methods: {
    switchs() {
      if (!this.active) {
        for (const item in this.$parent.$children) {
          if (this.$parent.$children.hasOwnProperty(item)) {
            const el = this.$parent.$children[item];
            el.active = false;
          }
        }
      }

      this.active = !this.active;
    },
  },
};
</script>

<style scoped>
.people-item {
  width: 5.62667rem;
  margin: 0 .2rem;
  margin-bottom: 3rem;
}
.people-item .title {
  position: relative;
  border-radius: 0.4rem;
  padding-top: 4.8rem;
}

.content {
  display: none;
  margin-top: 2rem;
  width: 18.4rem;
  margin-bottom: 0.53333rem;
  padding: 0.26667rem 0.53333rem;
  box-sizing: border-box;
  border-radius: 0.4rem;
  color: #fff;
  font-size: 0.66667rem;
  line-height: 1.33333rem;
  text-indent: 1.33333rem;
}
.people-item:nth-child(3n + 2) .content {
  transform: translateX(-6.13rem);
}
.people-item:nth-child(3n + 3) .content {
  transform: translateX(-12.7rem);
}
.photo {
  position: absolute;
  left: 0.4rem;
  top: -1.3rem;
  width: 4.34667rem;
  height: 4.34667rem;
  border-width: 0.26667rem;
  border-style: solid;
  border-radius: 50%;
  overflow: hidden;
}
.fullname {
  position: absolute;
  left: 0;
  top: 3rem;
  height: 1.06667rem;
  font-size: 0.58667rem;
  line-height: 1.06667rem;
  padding: 0 0.3rem;
  text-align: center;
  /* background: linear-gradient(-115deg, transparent 0.8rem, #fbc21b 0) top right; */
}
.subtitle {
  color: #fff;
  font-size: 0.53333rem;
  padding-left: 0.53333rem;
  padding-right: 0.53333rem;
  height: 2.8rem;
}
.arrow-down {
  position: relative;
  height: 1.2rem;
}
.arrow-down span.more {
  display: none;
  font-size: 0.4rem;
  text-align: center;
  padding-top: 0.3rem;
  color: white;
}
.arrow-down span.last {
  display: block;
  position: absolute;
  width: 10px;
  height: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-75%, -50%) rotate(45deg);
}
.arrow-down span.first {
  display: block;
  position: absolute;
  width: 10px;
  height: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-15%, -50%) rotate(-45deg);
}
.people-item.active .title {
  transform: translateY(-1rem);
  background-color: #fff;
  padding-bottom: 2rem;
}
.people-item.active .subtitle {
  /* color: #162475; */
}
.people-item.active .arrow-down {
  width: 3rem;
  height: 2rem;
  position: absolute;
  bottom: -0.8rem;
  left: 50%;
  border-radius: 50%;
  transform: translateX(-50%);
}
.people-item.active .arrow-down span {
  display: block;
}
.people-item.active .arrow-down span.first,
.people-item.active .arrow-down span.last {
  background-color: #fff;
  width: 6px;
  top: calc(50% + 10px);
  height: 2px;
}
.people-item.active .content {
  display: block;
}
</style>