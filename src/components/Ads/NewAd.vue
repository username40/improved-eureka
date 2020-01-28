<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb3">Create new Ad</h1>
                <v-form v-model="valid" ref="form" validation class="mb-3">
                    <v-text-field
                            label="Ad Title"
                            name="title"
                            type="text"
                            required
                            :rules="[v => !!v || 'Title is required']"
                            v-model="title"
                    />
                    <v-textarea
                            name="decription"
                            label="Ad description"
                            hint="Hint text"
                            v-model="description"
                            :rules="[v => !!v || 'Description is required']"
                    ></v-textarea>
                </v-form>
                <v-layout row>
                    <v-flex xs12>
                        <v-btn class="warning">Upload
                            <v-icon right dark>mdi-cloud-upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row class="mt-3">
                    <v-flex xs12>
                        <img src="" height="100px" alt="">
                    </v-flex>
                </v-layout>
                <v-layout row class="mt-3">
                    <v-flex xs12>
                        <v-switch
                                v-model="promo"
                                label="Add to promo"
                                color="primary"
                        ></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn :disabled="!valid || loading" :loading="loading" class="success" @click="createAd">Create Add
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "NewAd",
        data() {
            return {
                title: '',
                description: '',
                promo: false,
                valid: false
            }
        },
        computed: {
            loading() {
                return this.$store.getters.loading
            }
        },
        methods: {
            createAd() {
                if(this.$refs.form.validate()) {
                    const ad = {
                        title: this.title,
                        description: this.description,
                        promo: this.promo,
                        imageSrc: 'https://i.imgur.com/QHPqqay.jpg'
                    }
                    this.$store.dispatch('createAd', ad)
                        .then(() => {
                            this.$router.push('/list')
                        })
                        .catch(() => {})
                }
            }
        }
    }
</script>

<style scoped>

</style>