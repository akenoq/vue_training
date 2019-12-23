<template>
    <div>
        <h3>Post ID: {{this.$route.params.id}}</h3>
        <div class="postInfoBox" v-if="!loading">
            <h4>{{postInfo.title}}</h4>
            <p>{{postInfo.body}}</p>
            <i>User ID: {{postInfo.userId}}</i>
        </div>
        <div v-else>Loading...</div>
    </div>
</template>

<!-- ToDo отвязать от роутера и передавать парам через  props-->
<script>
    export default {
        name: "PageOnePost",
        data() {
            return {
                postInfo: {},
                loading: true,
            }
        },
        mounted: function () {
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                .then(resp => resp.json())
                .then(obj => this.setPostInfo(obj)) // вызов метода
                .catch(err => console.log('network err'))
        },
        methods: {
            setPostInfo(obj) {
                this.postInfo = obj;
                this.loading = false;
            },
        }
    }
</script>

<style scoped>

</style>