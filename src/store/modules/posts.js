export default {
    state: {
        posts: [],
    },
    getters: { // геттеры - вычисляемые свойства хранилища

        // первый параметр всегда  state состояние стора
        // второй параметр - getters
        // в геттерах модуля еще есть параметры rootState, rootGetters

        getAllPosts(state) {
            return state.posts;
        }
    },
    mutations: {

        // первый параметр всегда  state состояние стора
        // второй параметр - payload

        loadPosts(state, postsArr) {
            state.posts = postsArr;
        }
    },
    actions: {

        // первый параметр всегда ctx - контекст
        // второй параметр - payload

        fetchPosts(ctx) {

            //  здесь в параметре ctx  можно распаковать
            //  {commit -  для мутаций, getters - для геттеров, dispatch - для экшенов}

            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(resp => resp.json()) // переводим в json
                .then(arr => ctx.commit('loadPosts', arr)) // вызываем мутацию для изменения стора
                .catch(err => console.error('network error'))
        }
    },
    modules: {
    }
}