<template>
    <div class="postBox">
        <form @submit.prevent>
            <input v-model.trim="post.title" type="text" name="title" placeholder="input title">
            <input v-model.trim="post.body" type="text" name="body" placeholder="input body">
            <button @click="triggerAddPost" class="addBtn">Add Post</button>
        </form>
    </div>
</template>

<!-- ToDo использовать mapMutations -->
<script>
    import {mapMutations} from "vuex";

    export default {
        name: "PostForm",
        data() {
            return {
                post: {
                    title: '',
                    body: '',
                }
            }
        },
        props: {},
        computed: {
        },
        methods: {
            // map мутаций и экшенов в methods

            ...mapMutations(['addPost']), // this.addPost(obj) будет вызывать `this.$store.commit('addPost', obj)`

            triggerAddPost: function (event) {
                this.addPost(this.post);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .addBtn {
        background: #60cd84;
        border: 1px solid #34cd55;
        color: white;
        outline: none;
        border-radius: 2px;
        cursor: pointer;

        &:hover {
            background: #34cd55;
        }
    }

    .postBox {
        margin-bottom: 32px;
    }
</style>