<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My ads</h1>
                <v-card v-for="item in myAds" :key="item.id" class="elevation-10 mb-5">
                    <v-layout>
                        <v-flex xs4>
                                <v-img :src="item.imageSrc" height="175px"/>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary">{{ item.title }}</h2>
                                <p>{{ item.description }}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn class="info" :to="'/ad/' + item.id">Open</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
<!--        <v-layout v-else-if="!loading && myAds.length === 0">-->
<!--            <v-flex xs12 class="text-center">-->
<!--                <h1 class="text-primary">You have no ads</h1>-->
<!--            </v-flex>-->
<!--        </v-layout>-->
<!--        <v-layout v-else>-->
<!--            <v-progress-circular-->
<!--                    :size="100"-->
<!--                    :width="4"-->
<!--                    color="primary"-->
<!--                    indeterminate-->
<!--            ></v-progress-circular>-->
<!--        </v-layout>-->
    </v-container>
</template>

<script>
    export default {
        name: "Adlist",
        data() {
            return {

            }
        },
        computed: {
            myAds() {
                return this.$store.getters.myAds
            },
            loading() {
                return this.$store.getters.loading
            }
        }
    }
</script>

<style scoped>

</style>