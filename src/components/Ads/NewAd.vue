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
                        <v-btn class="warning" @click="triggerUpload">Upload
                            <v-icon right dark>mdi-cloud-upload</v-icon>
                        </v-btn>
                        <input
                                ref="fileInput"
                                type="file"
                                style="display: none"
                                accept="image/*"
                                @change="onFileChange">
                    </v-flex>
                </v-layout>
                <v-layout row class="mt-3">
                    <v-flex xs12>
                        <img :src="imageSrc" height="100px" alt="" v-if="imageSrc">
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
                        <v-btn :disabled="!valid || !image || loading" :loading="loading" class="success" @click="createAd">Create Add
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
                valid: false,
                image: null,
                imageSrc: ''
            }
        },
        computed: {
            loading() {
                return this.$store.getters.loading
            }
        },
        methods: {
            createAd() {
                if(this.$refs.form.validate() && this.image) {
                    const ad = {
                        title: this.title,
                        description: this.description,
                        promo: this.promo,
                        image: this.image
                    }
                    this.$store.dispatch('createAd', ad)
                        .then(() => {
                            this.$router.push('/list')
                        })
                        .catch(() => {})
                }
            },
            triggerUpload() {
                this.$refs.fileInput.click()
            },
            onFileChange(event) {
                const file = event.target.files[0]

                const reader = new FileReader()
                // eslint-disable-next-line no-unused-vars
                reader.onload = e => {
                    this.imageSrc = reader.result
                }
                reader.readAsDataURL(file)
                this.image = file
            }
        }
    }
</script>

<style scoped>

</style>