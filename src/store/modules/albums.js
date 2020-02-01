import Vue from "vue"; // для реактивного изменения обьектов (set)

export default {
    state: {
        albums: [],
    },
    getters: {
        getAllAlbums(state) {
            return state.albums;
        },
        albumCounter(state) {
            return state.albums.length;
        },
    },
    mutations: {
        setAlbums(state, albumsArr) {
            state.albums = albumsArr;
        },
        deleteAlbum(state, albumId) {
            let index = state.albums.findIndex(a => a.id === albumId);
            state.albums.splice(index, 1);
        },
    },
    actions: {
        fetchAlbums({ commit, state }) {
            if (!state.albums.length) {
                fetch('https://jsonplaceholder.typicode.com/albums')
                    .then(resp => resp.json()) // переводим в обьект
                    .then(arr => commit('setAlbums', arr)) // вызываем мутацию для изменения стора
                    .catch(err => console.error('network error'))
            }
        }
    },
    modules: {},
}
