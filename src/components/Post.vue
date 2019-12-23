<template>
    <div class="postItem">
        POST {{title}} {{body}}
    </div>
</template>

<script>
    export default {
        name: "Post",
        props: {
            title: {
                type: String,
                required: true,
            },
            body:{
                type: String,
                required: true,
            }
        }
    }
</script>

<style scoped>
    .postItem {
        margin: 12px;
        padding: 12px;
        border: 1px solid greenyellow;
        border-radius: 6px;
    }
</style>