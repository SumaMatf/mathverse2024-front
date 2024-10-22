import axios from '@/axios';

const state = {
    qnas: []
}

const getters = {
    qnas: state => state.qnas
}

const mutations = {
    setQnas(state, payload) {
        state.qnas = payload
    },
    addQna(state, payload) {
        state.qnas.push(payload)
    },
    updateQna(state, payload) {
        const index = state.qnas.findIndex(el => el.id == payload.id)
        if (index != -1)
            Object.assign(state.qnas[index], payload);
    }
}

const actions = {
    getQnas({commit}) {
        axios.get('/questions')
            .then( (res) => {
                commit('setQnas', res.data)
            })
            .catch( () => {
                console.error("Error fetching questions");
            });
    },
    addQna({commit}, payload) {
        axios.post('/questions', payload)
            .then( (res) => {
                commit('addQna', res.data)
            })
            .catch( () => {
                console.error("Error adding question");
            });
    },
    answerQuestion({commit}, payload) {
        const {question_id, content} = payload
        axios.post(`/questions/${question_id}/answers`, {content: content})
            .then( (res) => {
                commit('updateQna', res.data)
            })
            .catch( () => {
                console.error("Error answering question");
            });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}