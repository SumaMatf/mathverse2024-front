import { createStore } from 'vuex'

import auth from './auth'
import articles from './modules/articles'

const store = createStore({
    modules: {
        auth: {
            namespaced: true,
            modules: {
                auth
            }
        },
        articles: {
            namespaced: true,
            modules: {
                articles
            }
        }
    }
})

export default store