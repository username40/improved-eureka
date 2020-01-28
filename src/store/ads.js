import * as fb from 'firebase'

class Ad {
    constructor(title, description, ownerId = '', imageSrc = '', promo = false, id = null) {
        this.title = title
        this.description = description
        this.ownerId = ownerId
        this.imageSrc = imageSrc
        this.promo = promo
        this.id = id
    }
}

export default {
    state: {
        ads: [
            {
                title: 'first Ad',
                description: 'Hello',
                promo: false,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                id: '1'
            },
            {
                title: 'second Ad',
                description: 'this is a second',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                id: '2'
            },
            {
                title: 'third Ad',
                description: 'And it is third',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                id: '3'},
        ]
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload)
        }
    },
    actions: {
        async createAd ({commit, getters}, payload){
            commit('clearError')
            commit('setLoading', true)

            try {
                const newAd = new Ad(
                    payload.title,
                    payload.description,
                    getters.user.id,
                    payload.imageSrc,
                    payload.promo
                )
                commit('setLoading', false)
                const ad = await fb.database().ref('ads').push(newAd)

                commit('createAd', {
                    ...newAd,
                    id: ad.key
                })
            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }
        }
    },
    getters: {
        ads(state) {
            return state.ads
        },
        promoAds(state) {
            return state.ads.filter(ad => {
                return ad.promo
            })
        },
        myAds(state) {
            return state.ads
        },
        adById(state) {
            return adId => {
                return state.ads.find(ad => ad.id === adId)
            }
        }
    }
}