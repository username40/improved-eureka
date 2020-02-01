<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card v-if="!loading">
                    <v-img :src="ad.imageSrc"></v-img>
                    <v-card-text>
                        <h1 class="text--primary">{{ ad.title }}</h1>
                        <p>{{ ad.description }}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <app-edit-ad-modal :ad="ad" v-if="isOwner"></app-edit-ad-modal>

                        <app-buy-modal :ad="ad"></app-buy-modal>
                    </v-card-actions>
                </v-card>
                <div v-else class="text-center mt-10">
                    <v-progress-circular
                            :size="100"
                            :width="4"
                            color="primary"
                            indeterminate
                    ></v-progress-circular>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import EditAdModal from "./EditAdModal";
    import store from "../../store";

    export default {
        name: "Ad",
        data() {
            return {
            }
        },
        components: {
            appEditAdModal: EditAdModal
        },
        props: ['id'],
        computed: {
            isAuth() {
                if(!store.getters.user) {
                    // eslint-disable-next-line no-console
                    console.log(111)
                    return false
                }
                else {
                    return true
                }
            },
            ad() {
                const id = this.id
                return this.$store.getters.adById(id)
            },
            loading() {
                return this.$store.getters.loading
            },
            isOwner() {
                if(!store.getters.user) {
                    return false
                } else {
                    return this.ad.ownerId === this.$store.getters.user.id
                }

            }
        }
    }
</script>

<style scoped>

</style>