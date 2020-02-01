<template>
    <transition name="album">
        <div class="albumBox">
            <span>
                <i>#{{id}}</i>
                <button v-on:click="deleteAlbum(id)" class="deleteBtn">Delete</button>
            </span>
            <p>{{title}}</p>
            <i>UserId: {{userId}}</i>



        </div>
    </transition>
</template>

<script>
    import {mapMutations} from "vuex";

    export default {
        name: "AlbumItem",
        props: {
            id: {
                type: Number,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            userId:{
                type: Number,
                required: true,
            },
        },
        methods: {
            ...mapMutations(['deleteAlbum']),
        }
    }
</script>

<style lang="scss" scoped>
    .albumBox {
        padding: 12px;
        margin: 12px;
        border: 1px solid coral;
        border-radius: 7px;
        display: block;

        &:hover {
            background: bisque;
            cursor: pointer;
        }

        .deleteBtn {
            height: 20px;
            padding: 0 2px 0 0;
            border: 1px solid #c9c9c9;
            border-radius: 4px;
            outline: none;

            &:before {
                content: "\274C";
                padding-left: 2px;
            }

            &:hover {
                color: red;
            }
        }
    }

    .album-enter-active, .album-leave-active {
      transition: all 0.5s;
    }
    .album-enter, .album-leave-to {
        opacity: 0;
        transform: translateX(300px);
    }
</style>