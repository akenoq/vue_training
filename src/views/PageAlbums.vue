<template>
    <div>
        Albums (количество: {{albumCounter}})
        <transition-group name="album-list" class="albumList">
            <album-item v-for="a in getAllAlbums"
                        :key="a.id"
                        :id="a.id"
                        :title="a.title"
                        :user-id="a.userId"></album-item>
        </transition-group>
    </div>
</template>

<script>
    import AlbumItem from "../components/AlbumItem";
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "PageAlbums",
        components: {AlbumItem},
        data: function () {
          return {}
        },
        computed: {
            ...mapGetters(['getAllAlbums', 'albumCounter']), // мб другое имя для проксирования в стор
        },
        methods: {
            ...mapActions(['fetchAlbums']),
        },
        created: function () {
          this.fetchAlbums();
        }
    }
</script>

<style scoped>
    .albumList {
        display: grid;
        grid-template-columns: repeat(auto-fill, 240px);
        grid-row-gap: 32px;
        grid-column-gap: 32px;
    }

    /* ToDo: плавно исчезает только первый, возможно проблема в том, что item кастомный компонент */
    /* transition-group стили для анимации в списке, у всех детей должны быть key
        решается проблема анимации при перемещении, благодаря событию v-move */
    .albumBox {
        transition: all 1s;
        display: inline-block;
        margin-right: 10px;
    }

    .album-list-leave-active {
        /*transition: all 1s;*/
      position: absolute;
    }

    .album-list-enter, .album-list-leave-to {
      opacity: 0;
      transform: rotateX(60deg);
    }

    /* реализуется flip-анимация css,
        она не работает с inline item,
        нужно использовать display: inline-block*/
    .album-list-move {
      transition: transform 1s;
    }
</style>