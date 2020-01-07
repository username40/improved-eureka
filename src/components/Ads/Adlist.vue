<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My ads</h1>
                <v-card v-for="item in ads" :key="item.id" class="elevation-10 mb-5">
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
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>