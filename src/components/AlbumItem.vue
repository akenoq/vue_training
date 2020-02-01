<template>
    <div class="albumBox">
        <i>#{{id}}</i>
        <p>{{title}}</p>
        <i>UserId: {{userId}}</i>
    </div>
</template>

<script>
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
    }
</style>