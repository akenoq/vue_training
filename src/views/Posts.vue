<template>
  <div class="postList">
    Posts
    <div>
      <post v-for="p in posts"
            :key="p.id"
            :body="p.body"
            :title="p.title"></post>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post";
export default {
  name: 'posts',
  components: {Post},
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'title 1',
          body: 'body 1',
        },
        {
          id: 2,
          title: 'title 2',
          body: 'body 2',
        }
      ]
    }
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
