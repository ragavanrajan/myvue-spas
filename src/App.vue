<template>
    <div id="app">
        <Navigation :user="user" @logout="logout" />
        <router-view class="container" :user="user" @logout="logout" />
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Firebase from 'firebase';
import db from './db.js';
export default {
    name: 'App',
    data: function() {
        return {
            user: null,
        };
    },
    methods: {
        logout: function() {
            Firebase.auth()
                .signOut()
                .then(() => {
                    this.user = null;
                    this.$router.push('login');
                });
        },
    },
    mounted() {
        db.collection('users');
        Firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.user = user.displayName;
            }
        });
    },
    components: {
        Navigation,
    },
};
</script>

<style lang="scss">
$primary: #37c6cf;
@import '../node_modules/bootstrap/scss/bootstrap';
</style>
