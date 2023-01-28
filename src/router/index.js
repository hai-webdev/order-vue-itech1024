import Vue from "vue";
import Router from "vue-router";
import Main from "../App"

Vue.use(Router);

const data = Main.data();
export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      meta: {
        title: data.title ? data.title : '',
        content:{
          keywords: data.keywords ? data.keywords : '',
          description: data.description ? data.description : ''
        },
      
      }
    }
    ]
});
