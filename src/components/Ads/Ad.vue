<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card>
                    <v-img src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"></v-img>
                    <v-card-text>
                        <h1 class="text--primary">Lorem</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="warning" text>Edit</v-btn>
                        <v-btn class="success">Buy</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Ad"
    }
</script>

<style scoped>

</style>