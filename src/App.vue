<template>
  <div id="app">
    <Head :bgColor="bgColor" :logoImg="logoImg" :mp="mp" />
    <Banner :banner="banner" />
    <Live :hydt="hydt" />
    <Content
    :bgImg="bgImg"
    :spzblj="spzblj"
    :tpzblj="tpzblj"
    :dhjs="dhjs"
    :ryScode="ryScode"
    :dhrcIco="dhrcIco"
    :mainForumTitle="mainForumTitle"
    :subForumTitle="subForumTitle"
    :mainNavList="mainNavList"
    :mainForumList="mainForumList"
    :subForumList="subForumList"
    :partnerList="partnerList"
    :map="map"
    :contactList="contactList"
    :contactIco="contactIco"
    :label="label"
     />
  </div>
</template>

<script>
import axios from "axios";
import Head from "./components/Head";
import Banner from "./components/Banner";
import Live from "./components/Live";
import Content from "./components/Content";

// axios.defaults.baseURL = "/api";
axios.interceptors.response.use((response) => {
  if (response.status == 200 && response.data.code == 1) {
    return response.data.data;
  }
  return response;
});
export default {
  name: "App",
  data() {
    return {
      bgColor: "",
      logoImg: "",
      title: "",
      banner: "",
      hydt: "",
      bgImg: "",
      mp: "",
      spzblj: "",
      tpzblj: "",
      dhjs: {
        title: "",
        content: "",
        ico: "",
      },
      ryScode: [],
      dhrcIco: "",
      mainForumTitle:"",
      subForumTitle:"",
      mainNavList:[],
      mainForumList:[],
      subForumList:[],
      partnerList:[],
      map:{},
      contactIco:'',
      contactList:[],
      label:{},
    };
  },
  components: {
    Head,
    Banner,
    Live,
    Content
  },
  mounted() {
    document.querySelector("html").style.fontSize =
      this.$el.offsetWidth / 20 + "px";
    axios
      .all([
        axios.get("/api.php/cms/site"),
        axios.get("/api.php/cms/company"),
        axios.get("/api.php/cms/label"),
        axios.get("/api.php/cms/sort/scode/1"),
        axios.get("/api.php/content/61"),
        axios.get("/api.php/cms/nav/scode/15"),
        axios.get("/api.php/cms/sort/scode/5"),
        axios.get("/api.php/cms/sort/scode/6"),
        axios.get("/api.php/cms/sort/scode/7"),
        axios.get("/api.php/cms/nav/scode/6"),
        axios.get("/api.php/list/6/num/10000"),
        axios.get("/api.php/cms/nav/scode/7"),
        axios.get("/api.php/list/12/num/10000"),
        axios.get("/api.php/content/84"),
        axios.get("/api.php/cms/sort/scode/14"),
        axios.get("/api.php/list/14/num/10000"),
      ])
      .then(
        axios.spread((site, company, label, scode1, content61, ryScode,dhrc, mainForum, subForum,mainNavList , mainForumList, subForumList, partner, map, contact, contactList) => {
          const { title, logo, keywords, description } = site;
          const { active_color, bgColor, bgImg, border_color, btys, dt, font_color, hydt, mp, nav_active_bg, nav_border_color, nav_color, rwbgys, rwjtys, rwmcbgys, rwmcztys, rwtxkys, spzblj, tpzblj, content_bg, ltbg1, ltbg2 } = label;
          const { ico: scode1Ico } = scode1;
          const {
            title: content61Title,
            content: content61Content,
          } = content61;
          const {ico:dhrcIco} = dhrc;
          const {name:mainForumTitle} = mainForum;
          const {name:subForumTitle} = subForum;
          this.label.active_color = active_color;
          this.label.border_color = border_color;
          this.label.btys = btys;
          this.label.font_color = font_color;
          this.label.nav_active_bg = nav_active_bg;
          this.label.nav_border_color = nav_border_color;
          this.label.nav_color = nav_color;
          this.label.rwbgys = rwbgys;
          this.label.rwjtys = rwjtys;
          this.label.rwmcbgys = rwmcbgys;
          this.label.rwmcztys = rwmcztys;
          this.label.rwtxkys = rwtxkys;
          this.label.content_bg = content_bg;
          this.label.ltbg1 = ltbg1;
          this.label.ltbg2 = ltbg2;
          this.logoImg = logo;
          this.title = title;
          this.bgColor = bgColor;
          this.mp = mp;
          this.spzblj = spzblj;
          this.tpzblj = tpzblj;
          this.banner = dt;
          this.hydt = hydt;
          this.bgImg = bgImg;
          this.dhjs.ico = scode1Ico;
          this.dhjs.title = content61Title;
          this.dhjs.content = content61Content;
          this.dhrcIco = dhrcIco;
          this.mainForumTitle = mainForumTitle;
          this.subForumTitle = subForumTitle;
          const {title:mapTitle, ext_map:mapLink, ico:mapIco} = map;
          this.map.title = mapTitle;
          this.map.link = mapLink;
          this.map.ico = mapIco;
          for (const item of mainNavList) {
            const {id:navId, name: navTitle, subname:navDate,scode:navScode} = item;
            this.mainNavList.push({
              navId,
              navTitle,
              navDate,
              navScode,
            })
          }
          for (const item of mainForumList) {
            const {title:MainTitle, ext_sj: MainDate, content:MainContent, ico:MainIco, id:MainId, scode} = item;
            this.mainForumList.push({
                MainTitle,
                MainDate,
                MainContent,
                MainIco: MainIco,
                MainId,
                scode
            })
          }
          for (const item of subForumList) {
            this.subForumList.push({
              title: item.name,
              scode:item.scode,
              active: false,
            })
          }
          for (const item in ryScode) {
            if (ryScode.hasOwnProperty(item)) {
              const el = ryScode[item];
              const propelList = [];
              axios.get(`/api.php/list/${el.scode}/num/10000`).then((res) => {
                for (const item of res) {
                  var { title, ico, ext_gs, ext_zw, content } = item;
                  var propelListNew = {
                    title,
                    ico: ico,
                    ext_gs,
                    ext_zw,
                    content,
                    isActive:false
                  };
                  propelList.push(propelListNew);
                }
              });
              var ryScodeObj = {
                title: el.name,
                ico: el.ico,
                id: el.id,
                scode: el.scode,
                propelList,
              };

              this.ryScode.push(ryScodeObj);
            }
          }
          for (const item of partner) {
            const {title, ext_num:num, pics, id} = item;
            this.partnerList.push({
              title,
              num,
              pics,
              id
            })
          }
          this.contactIco = contact.ico;
          for (const item of contactList) {
            const {id, title, content} = item;
            this.contactList.push({
              id,
              title,
              content
            })
          }
          document.querySelector("body").style.backgroundColor = this.bgColor;

        })
      );
  },

};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
}
html{
  font-family: 'Microsoft YaHei';
}
ul,li,dl,dt,dd{
  list-style: none;
  margin: 0;
  padding: 0;
}
p{
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
#app {
  max-width: 750px;
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;
}
.right img{
    width: 5.333rem;
}
</style>