<template>
    <v-app>
        <v-navigation-drawer
                app
                temporary
                v-model="drawer">
            <v-list>
                <v-list-item
                        v-for="item in links"
                        :key="item.title"
                        :to="item.url">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-if="isUserLoggedIn">
                    <v-list-item-icon>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="'Logout'"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app dark color="primary">
            <v-app-bar-nav-icon @click="drawer = !drawer"
                                class="hidden-md-and-up"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <router-link to="/" tag="span" class="pointer">Ad application</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                        v-for="item in links"
                        :key="item.title"
                        :to="item.url"
                        text>
                    <v-icon left>{{ item.icon }}</v-icon>
                    {{ item.title }}
                </v-btn>
                <v-btn
                        text
                        v-if="isUserLoggedIn"
                        @click="onLogout">
                    <v-icon>mdi-exit-to-app</v-icon>
                    Logout
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
        <v-content>
            <router-view></router-view>
        </v-content>
        <template v-if="error">
            <v-snackbar
                    @input="closeError"
                    :value="true"
                    :timeout="5000"
                    color="error"
                    :multi-line="true"
            >
                {{ error }}
                <v-btn
                        dark
                        text
                        @click.native="closeError"
                >
                    Close
                </v-btn>
            </v-snackbar>
        </template>

    </v-app>
</template>

<script>

    export default {
        data() {
            return {
                drawer: false,
            }
        },
        methods: {
            closeError() {
                this.$store.dispatch('clearError')
            },
            onLogout() {
                this.$store.dispatch('logoutUser')
                this.$router.push('/')
            }
        },
        computed: {
            error() {
                return this.$store.getters.error
            },
            isUserLoggedIn() {
                return this.$store.getters.isUserLoggedIn
            },
            links() {
                if (this.isUserLoggedIn) {
                    return [
                        {title: 'Orders', icon: 'mdi-bookmark-outline', url: '/orders'},
                        {title: 'New ad', icon: 'mdi-note-plus', url: '/new'},
                        {title: 'My ads', icon: 'mdi-format-list-bulleted', url: '/list'}
                    ]
                }
                return [
                    {title: 'Login', icon: 'mdi-lock', url: '/login'},
                    {title: 'Registration', icon: 'mdi-face', url: '/registration'}
                ]
            }
        }
    };
</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }
</style>
