<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 class="text-center pt-5" v-if="loading">
                <v-progress-circular
                        :size="100"
                        :width="4"
                        color="primary"
                        indeterminate
                ></v-progress-circular>
            </v-flex>
            <v-flex v-else-if="!loading && orders.length !== 0" xs12 sm6 offset-sm3>
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
        computed: {
            loading() {
                return this.$store.getters.loading
            },
            orders() {
                return this.$store.getters.orders
            }
        },
        methods: {
            markDone (order) {
                this.$store.dispatch('markOrderDone', order.id)
                    .then(() => {
                        order.done = true
                    })
                    .catch(() => {})
            }
        },
        created() {
            this.$store.dispatch('fetchOrders')
        }
    }
</script>

<style scoped>

</style>