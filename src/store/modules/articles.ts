import axios from '@/axios';

const state = {
    articles: []
}

const getters = {
    articles: state => state.articles
}

const mutations = {
    setArticles(state, payload) {
        state.articles = payload
    },
    pushArticle(state, payload) {
        state.articles.push(payload)
    }
}

const actions = {
    getArticles({commit}) {
        axios.get('/articles')
            .then( (res) => {
                commit('setArticles', res.data)
            })
            .catch ( () => {
                console.error("Error fetching articles");
            })
    },
    addArticle({commit}, payload) {
        axios.post("/articles", payload)
            .then( (res) => {
                commit('addArticle', res.data)
            })
            .catch ( () => {
                console.error("Error adding article");
            })
    }   
}

export default {
    state,
    getters,
    mutations,
    actions
}