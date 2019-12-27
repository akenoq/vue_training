import Vue from "vue"; // для реактивного изменения обьектов (set)

export default {
    state: {
        posts: [],
        lastId: 0,
    },
    getters: { // геттеры - вычисляемые свойства хранилища

        // первый параметр всегда  state состояние стора
        // второй параметр - getters
        // в геттерах модуля еще есть параметры rootState, rootGetters

        getAllPosts(state) {
            return state.posts;
        },
    },
    mutations: {

        // первый параметр всегда  state состояние стора
        // второй параметр - payload (в большинстве случаев нагрузка будет объектом)

        setPosts(state, postsArr) {
            state.posts = postsArr.map(({id, title, body}) => {
                return {id, title, body, like: false}
                // реактивность не работает только для новых полей
                //
                // return {id, title, body} если задать без поля like,
                // то потом его надо добавить через set см. ниже
                // Vue.set(state.posts, index, post);
                //
                // или задать его дефолтно и заранее
                // return {id, title, body, like: false}
                // то потом его можно просто присвоить
                // state.posts[index].like = !state.posts[index].like;
            });
            state.posts.forEach((post) => {
                if (post.id > state.lastId)
                    console.log(post.id);
                    state.lastId = post.id;
                }
            )
        },
        likePost(state, postId) {
            let index = state.posts.findIndex(p => p.id === postId);
            state.posts[index].like = !state.posts[index].like;

            // способы РЕАКТИВНОГО обновления НОВОГО ПОЛЯ (которого не было при создании)
            // best practices https://vuex.vuejs.org/ru/guide/mutations.html#мутации-сnедуют-правиnам-реактивности-vue

            // let index = state.posts.findIndex(p => p.id === postId);
            // let post = {...state.posts[index], like: !state.posts[index].like};

            // способ 1: перезаписать массив
            // state.posts = [
            //     ...state.posts.slice(0, index),
            //     post,
            //     ...state.posts.slice(index + 1)
            // ]1

            // способ 2: использовать set для обновления
            // Vue.set(state.posts, index, post);

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
        },
        addPost(state, payload) {
            state.posts.unshift({...payload, id: state.lastId + 1, like: false});
            state.lastId++;
        },
    },
    actions: {

        // первый параметр всегда ctx - контекст
        //  здесь в параметре ctx  можно распаковать
        //  {commit -  для мутаций, getters - для геттеров, dispatch - для экшенов}
        // второй параметр - payload

        // в экшенах выполняются асинхронные и сразу вызываются коммиты

        fetchPosts({ commit, state }) {
            if (!state.posts.length) {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(resp => resp.json()) // переводим в обьект
                    .then(arr => commit('setPosts', arr)) // вызываем мутацию для изменения стора
                    .catch(err => console.error('network error'))
            }
        }
    },
    modules: {
    }
}