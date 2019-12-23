<template>
  <div class="postList">
    Posts
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'posts',
}
</script>

<style>
  .postList {
    margin: 0 auto;
    width: 70%;
    border-left: 1px solid greenyellow;
    border-right: 1px solid greenyellow;
  }

  .postItem {
    padding: 12px;
    border: 1px solid greenyellow;
    border-radius: 6px;
  }
</style>
