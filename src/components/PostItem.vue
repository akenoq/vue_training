<template>
    <div class="postBox">
        <router-link class="linkCard" :to="{name: 'pageonepost', params: {id: id}}">
            <div class="postItem" :id="`post_${id}`"> <!-- использование JS  выражений и шаблонных строк -->
                <h3>{{title}}</h3>
                <p>{{body}}</p>
            </div>
        </router-link>
        <button :class="{'like-true': checkLike(), 'likeBtn': true}"
                @click="triggerLike">{{likeBtnName}}!</button> <!-- вызываем мутацию с параметром -->
    </div>
</template>

<!-- ToDo использовать mapMutations -->
<script>
    export default {
        name: "Post",
        props: {
            id: {
                type: Number,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            body:{
                type: String,
                required: true,
            },
            like: {
                type: Boolean,
                default: false,
            }
        },
        computed: {
            likeBtnName: function () {
                return !this.like ? 'Like' : 'Dislike';
            }
        },
        methods: {
            triggerLike() {
                this.$store.commit('likePost', this.id);
            },
            checkLike() {
                return this.like;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .likeBtn {
        background: lightcoral;
        color: white;
        outline: none;
        border: 1px solid coral;
        border-radius: 2px;
        cursor: pointer;

        &:hover {
            background: coral;
        }
    }

    .like-true {
        background: #60cd84;
        border: 1px solid #34cd55;

        &:hover {
            background: #34cd55;
        }
    }

    .postItem {
        margin: 12px;
        padding: 12px;
        border: 1px solid #42b983;
        border-radius: 6px;
        text-align: left;

        &:hover {
            background: rgba(66, 185, 131, 0.1);
        }
    }

    .linkCard {
        text-decoration: none;
        color: #2c3e50;
    }

    .postBox {
        margin-bottom: 32px;
    }
</style>