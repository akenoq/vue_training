<template>
    <div>
        Albums (количество: {{albumCounter}})
        <div class="albumList">
            <album-item v-for="a in getAllAlbums"
                        :key="a.id"
                        :id="a.id"
                        :title="a.title"
                        :user-id="a.userId"></album-item>
        </div>
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
</style>