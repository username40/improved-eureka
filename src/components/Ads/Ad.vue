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
                        <app-edit-ad-modal :ad="ad"></app-edit-ad-modal>
                        <v-btn class="success">Buy</v-btn>
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

    export default {
        name: "Ad",
        components: {
            appEditAdModal: EditAdModal
        },
        props: ['id'],
        computed: {
            ad() {
                const id = this.id
                return this.$store.getters.adById(id)
            },
            loading() {
                return this.$store.getters.loading
            }
        }
    }
</script>

<style scoped>

</style>