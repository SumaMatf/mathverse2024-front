import { createStore } from 'vuex'

import auth from './auth'
import articles from './modules/articles'
import qna from './modules/qna'

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
        },
        qna: {
            namespaced: true,
            modules: {
                qna
            }
        }
    }
})

export default store