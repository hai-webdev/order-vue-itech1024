<template>
  <dl class="partner-list">
      <dt :style="{color:label.btys}">{{ title }}</dt>
      <dd class="partner-item" :class="num ? 'on' : ''">
          <img
          v-for="item in picArr"
          :key="item.id"
          :src="item.pic"
          >
      </dd>
  </dl>
</template>

<script>
export default {
    name: "Partner",
    props:{
        title: String,
        pics: String,
        num: String,
        label:Object
    },
    mounted(){
    },

    computed:{
        picArr:{
            get(){
                const arr = this.pics.split(",");
                const newArr = []; 
                for(let i = 0; i < arr.length; i ++){
                    newArr.push({
                        id:i,
                        pic: arr[i]
                    })
                }
                return newArr;
            },
            set(){

            }
        }
    }
}
</script>

<style scoped>
.partner-list{
    margin-bottom: 1rem;
}
dl{
    margin-left: 0.8rem;
    margin-right: 0.8rem;
}
dt{
    text-align: center;
    /* color: #49e0c9; */
    margin-bottom: 0.53333rem;
    margin-top: 0.66667rem;
}
.partner-item{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
 img{
    width: 3.6rem;
    /* height: 1.6rem; */
    /* background-color: #fff; */
    margin-bottom: 0.53333rem;
    margin-right: 0.26667rem;
}
.partner-item.on img{
    width: 100%;
    margin-top: 1rem;
    height: auto;
}
</style>