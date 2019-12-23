<template>
    <div>
        <h3>Post ID: {{this.$route.params.id}}</h3>
        <div class="postInfoBox" v-if="!loading">
            <h4>{{postInfo.title}}</h4>
            <p>{{postInfo.body}}</p>
            <i>User Name: {{userInfo.name}} | User ID: {{postInfo.userId}}</i>
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
                userInfo: {},
                loading: true,
            }
        },
        mounted: function () {
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                .then(resp => resp.json())
                .then(obj => {
                    this.setPostInfo(obj); // вызов метода через this

                    // последовательный вызов fetch
                    return fetch(`https://jsonplaceholder.typicode.com/users/${obj.userId}`);
                })
                .then(resp => resp.json())
                .then(obj => this.setUserInfo(obj))
                .catch(err => console.log('network err'))
        },
        methods: {
            setPostInfo(obj) {
                this.postInfo = obj;
            },
            setUserInfo({name, username, email}) { // распаковка обьекта юзера, так как он был избыточным
                this.userInfo = {name, username, email};
                this.loading = false;
            }
        }
    }
</script>

<style scoped>
    .postInfoBox {
        padding: 12px;
        border: 1px solid #42b983;
        border-radius: 6px;
        width: 60%;
        margin: 0 auto;
    }
</style>