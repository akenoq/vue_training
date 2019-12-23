<template>
  <div class="postList">
    Posts
    <div>
      <post v-for="p in getAllPosts"
            :key="p.id"
            :id="p.id"
            :body="p.body"
            :title="p.title"></post>
    </div>
  </div>
</template>

<!--ToDo  сделать лоадер -->
<script>
import Post from "../components/Post";
import {mapGetters} from "vuex";
export default {
  name: 'posts',
  components: {Post},
  data() {
    return {}
  },
  computed: {
    // mapGetters ПРОКСИРУЕТ ГЕТТЕРЫ хранилища в локальные ВЫЧИСЛЯЕМЫЕ СВОЙСТВА компонента
    ...mapGetters(['getAllPosts']),
  },
  mounted: function () { // НИКОГДА не использовать стрелочные в свойствах экз и колбэках
    this.$store.dispatch('fetchPosts');
  }
}
</script>

<style>
  .postList {
    margin: 0 auto;
    width: 70%;
    border-left: 1px solid greenyellow;
    border-right: 1px solid greenyellow;
  }
</style>
