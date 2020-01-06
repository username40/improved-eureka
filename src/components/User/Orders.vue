<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-list
                        subheader
                        two-line
                        flat>
                    <h1 class="text--secondary mb3">Orders</h1>
                    <v-list-item-group
                            multiple>
                        <v-list-item v-for="item in orders" :key="item.id">
                                <v-list-item-action>
                                    <v-checkbox
                                            color="success"
                                            :input-value="item.done"
                                            :disabled="item.done"
                                            @change="markDone(item)"
                                    ></v-checkbox>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                                    <v-list-item-subtitle>{{ item.phone }}</v-list-item-subtitle>
                                </v-list-item-content>
                            <v-list-item-action>
                                <v-btn
                                        :to="'/ad/' + item.adId"
                                        class="primary">Open</v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Orders",
        data() {
            return {
                orders: [
                    {
                        id: 1,
                        name: 'Slava',
                        phone: 89024444444,
                        adId: 111,
                        done: false
                    },
                ]
            }
        },
        methods: {
            markDone (item) {
                item.done = true
            }
        }
    }
</script>

<style scoped>

</style>