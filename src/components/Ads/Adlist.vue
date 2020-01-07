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
            }
        }
    }
</script>

<style scoped>

</style>