import axios from '@/axios'
import router from '@/router/index'

const state = {
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('jwt-token') || ''
}

const getters = {
    user: (state) => state.user,
    token: (state) => state.token
}

const mutations = {
    setUser(state, payload) {
        state.user = payload
        localStorage.setItem('user', JSON.stringify(payload))
    },
    setToken(state, payload) {
        state.token = payload
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload
        localStorage.setItem('jwt-token', payload)
    },
    clearUser(state) {
        state.user = null
        localStorage.removeItem('user')
    },
    clearToken(state) {
        state.jwtToken = ''
        axios.defaults.headers.common['Authorization'] = ''
        localStorage.removeItem('jwt-token')
    }
}

const actions = {
    login({commit}, payload) {
        axios.post("login", payload)
        .then( (res) => {
            commit('setUser', res.data.user)
            commit('setToken', res.data.token)
            router.push({name: 'agenda'})
        })
        .catch ( () => {
            alert("Molimo vas unesite validan email i password")
        });
    },
    logout({commit}) {
        commit('clearUser')
        commit('clearToken')
        router.push({name: 'login'})
    },
    checkin(payload) {
        axios.post("/lectures/checkin", {lecture_id: payload})
            .then( () =>  {
                alert("Uspesno cekiranje")
            })
            .catch (() => {
                alert("Neuspesno cekiranje")
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}