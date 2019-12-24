import Vue from "vue"; // для реактивного изменения обьектов (set)

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

        setPosts(state, postsArr) {
            state.posts = postsArr.map(({id, title, body}) => {
                return {id, title, body, like: false}
            });
        },
        likePost(state, postId) {

            let index = state.posts.findIndex(p => p.id === postId);
            let post = {...state.posts[index], like: !state.posts[index].like};

            // способы РЕАКТИВНОГО обновления

            // способ 1: перезаписать массив
            // state.posts = [
            //     ...state.posts.slice(0, index),
            //     post,
            //     ...state.posts.slice(index + 1)
            // ]1

            // способ 2: использовать set для обновления
            Vue.set(state.posts, index, post);

            // способ 3: JSON копия

            // способ 4: изменение поля отдельно и потом set
            // state.posts[index].like = !state.posts[index].like;
            // Vue.set(state.posts, index, state.posts[index]);

            // способ 5: изменение поля в обьекте в массиве с перебором всех
            // state.posts.forEach((post, index) => {
            //     if (post.id === postId) {
            //         Vue.set(state.posts, index, { ...post, like: !post.like });
            //     }
            // });
        }
    },
    actions: {

        // первый параметр всегда ctx - контекст
        // второй параметр - payload

        fetchPosts(ctx) {

            //  здесь в параметре ctx  можно распаковать
            //  {commit -  для мутаций, getters - для геттеров, dispatch - для экшенов}

            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(resp => resp.json()) // переводим в обьект
                .then(arr => ctx.commit('setPosts', arr)) // вызываем мутацию для изменения стора
                .catch(err => console.error('network error'))
        }
    },
    modules: {
    }
}