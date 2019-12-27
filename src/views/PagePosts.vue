<template>
  <div class="postList">
    Posts
    <div>
      <post-item v-for="p in getAllPosts"
            :key="p.id"
            :id="p.id"
            :body="p.body"
            :title="p.title"
            :like="p.like"></post-item>
    </div>
  </div>
</template>

<!--ToDo  сделать лоадер -->
<script>
import PostItem from "../components/PostItem";
import {mapGetters} from "vuex";
export default {
  name: 'PagePosts',
  components: {PostItem},
  data() {
    return {}
  },
  computed: {
    // map гетеров и стейтов в computed

    // mapGetters ПРОКСИРУЕТ ГЕТТЕРЫ хранилища в локальные ВЫЧИСЛЯЕМЫЕ СВОЙСТВА компонента
    ...mapGetters(['getAllPosts']),
  },
  mounted: function () { // НИКОГДА не использовать стрелочные в свойствах экз и колбэках
    this.$store.dispatch('fetchPosts');
  }
}
</script>

<style lang="scss">
  .postList {
    margin: 0 auto;
    width: 70%;
    border-left: 1px solid #42b983;
    border-right: 1px solid #42b983;
  }
</style>
