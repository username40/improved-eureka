<template>
    <v-dialog width="400px" v-model="modal">
        <template v-slot:activator="{ on }">
            <v-btn class="warning" text v-on="on">Edit</v-btn>
        </template>
        <v-card>
            <v-container>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-title>
                            <h1 class="text--primary">Edit Ad</h1>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-text>
                            <v-text-field
                                    label="title"
                                    name="title"
                                    type="text"
                                    v-model="editedTitle"
                            />
                            <v-text-field
                                    label="description"
                                    name="description"
                                    type="text"
                                    multi-line
                                    v-model="editedDescription"
                            />
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-actions>
                            <v-spacer/>
                            <v-btn class="" @click="onCancel">cancel</v-btn>
                            <v-btn class="success" @click="onSave">save</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>
<script>
    export default {
        name: "EditAdModal",
        props: ['ad'],
        data() {
            return {
                modal: false,
                editedTitle: this.ad.title,
                editedDescription: this.ad.description
            }
        },
        methods: {
            onCancel() {
                this.editedDescription = this.ad.description
                this.editedTitle = this.ad.title
                this.modal = false
            },
            onSave() {
                if(this.editedDescription !== '' && this.editedTitle !== '') {
                    this.$store.dispatch('updateAd', {
                        title: this.editedTitle,
                        description: this.editedDescription,
                        id: this.ad.id
                    })

                    this.modal = false
                }
            }
        }
    }
</script>

<style scoped>

</style>