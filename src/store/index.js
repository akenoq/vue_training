import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/posts.js';
import albums from "./modules/albums";

Vue.use(Vuex);

export default new Vuex.Store({
  // разбиваем на модулии и подключаем их
  modules: {
    posts,
    albums,
  }
})
