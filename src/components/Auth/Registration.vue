<template>
    <v-container
            class="fill-height"
            fluid
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col
                    cols="12"
                    sm="8"
                    md="6"
            >
                <v-card class="elevation-12">
                    <v-toolbar
                            color="primary"
                            dark
                            flat
                    >
                        <v-toolbar-title>Registration form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form v-model="valid" ref="form" lazy-validation>
                            <v-text-field
                                    label="Email"
                                    name="email"
                                    prepend-icon="mdi-face"
                                    type="email"
                                    :rules="emailRules"
                                    v-model="email"
                            />

                            <v-text-field
                                    id="password"
                                    label="Password"
                                    name="password"
                                    prepend-icon="mdi-lock"
                                    type="password"
                                    v-model="password"
                                    :rules="passwordRules"
                                    :counter="6"
                            />
                            <v-text-field
                                    id="confirmPassword"
                                    label="confirm-password"
                                    name="confirm-password"
                                    prepend-icon="mdi-lock"
                                    type="password"
                                    v-model="confirmPassword"
                                    :rules="confirmPasswordRules"
                                    :counter="6"
                            />
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer/>
                        <v-btn
                                :disabled="!valid"
                                color="primary"
                                @click="onSubmit">Registration
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Registration",
        data() {
            return {
                email: '',
                password: '',
                confirmPassword: '',
                valid: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => v.length >= 6 || 'Password must be more than or equal 6 characters',
                ],
                confirmPasswordRules: [
                    v => !!v || 'Password is required',
                    v => v === this.password || 'Passwords should match'
                ]
            }
        },
        methods: {
            onSubmit() {
                if(this.$refs.form.validate()) {
                    const user = {
                        email: this.email,
                        pasword: this.password
                    }
                    // eslint-disable-next-line no-console
                    console.log(user)

                }
            }
        }
    }
</script>

<style scoped>

</style>