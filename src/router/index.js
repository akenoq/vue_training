import Vue from 'vue'
import VueRouter from 'vue-router'
import PageHome from '../views/PageHome.vue'
import PagePosts from '../views/PagePosts.vue'
import PageOnePost from '../views/PageOnePost.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: PageHome,
  },
  {
    path: '/posts',
    name: 'posts',
    component: PagePosts,
  },
  {
    path: '/posts/:id',
    name: 'pageonepost',
    component: PageOnePost,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
});

export default router;
