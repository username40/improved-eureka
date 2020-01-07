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
    mutations: {},
    actions: {},
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
        }
    }
}