<template>
    <div v-if="!loading">
    <v-container>
        <v-layout row>
            <v-flex xs12>
                    <v-carousel>
                        <v-carousel-item
                            v-for="item in promoAds"
                            :key="item.id"
                            :src="item.imageSrc">
                            <div class="car-link">
                                <v-btn class="error" :to="'/ad/' + item.id">{{ item.title }}</v-btn>
                            </div>
                        </v-carousel-item>
                    </v-carousel>
            </v-flex>
        </v-layout>
    </v-container>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex
                        v-for="item in ads"
                        :key="item.id"
                        xs12
                        sm6
                        md4>
                    <v-card
                            class="mx-auto"
                            max-width="400"
                    >
                        <v-img
                                class="white--text align-end"
                                height="200px"
                                :src="item.imageSrc"
                        >
                            <v-card-title>{{ item.title }}</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pb-0">Number {{ item.id }}</v-card-subtitle>

                        <v-card-text class="text--primary">
                            <div>{{ item.description }}</div>

                            <div>Whitsunday Island, Whitsunday Islands</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer/>
                            <v-btn
                                    text
                                    :to="'/ad/' + item.id"
                            >
                                Open
                            </v-btn>

                            <v-btn
                                    raised
                                    class="primary"
                            >
                                Buy
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
    <div v-else>
        <v-container>
            <v-layout row>
                <v-flex xs12 class="text-center pt-5">
                    <v-progress-circular
                            :size="100"
                            :width="4"
                            color="primary"
                            indeterminate
                    ></v-progress-circular>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
            }
        },
        computed: {
            promoAds() {
                return this.$store.getters.promoAds
            },
            ads() {
                return this.$store.getters.ads
            },
            loading() {
                return this.$store.getters.loading
            }
        }
    }
</script>

<style scoped>
    .car-link {
        position: absolute;
        bottom: 50px;
        left: 50%;
        background-color: rgba(0,0,0,.5);
        transform: translate(-50%, 0);
        padding: 5px 15px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
</style>