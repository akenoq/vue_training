<template>
    <div class="postItem" :id="`post_${id}`"> <!-- использование JS  выражений и шаблонных строк -->
        <h3>{{title}}</h3>
        <p>{{body}}</p>
        <router-link :to="{name: 'pageonepost', params: {id: id}}">На страницу поста  >></router-link>
    </div>
</template>

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
            }
        }
    }
</script>

<style lang="scss" scoped>
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
</style>