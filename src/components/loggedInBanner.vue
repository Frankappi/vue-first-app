<template>
    <div class="logged">
        <nav class="navbar navbar-expand-sm navbar-light">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <span class="navbar-text text-white mr-auto" v-if="isLoggedIn">
                        Welcome {{ profile.firstname }} ({{ profile.age }}) from {{ profile.country }}
                    </span>
                    <router-link to="/dashboard" class="btn btn-success">Dashboard</router-link>
                    <button v-on:click="logout()" class="btn btn-danger">Log out</button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
require("firebase/auth");
require("firebase/firestore");
import { fb, db, currentUser } from '../main'


export default {
    name: 'logged',
    data() {
        return {
            isLoggedIn: false,
            currentUser: false,
            profile: {
                firstname: '',
                age: '',
                country: ''
            }
        }
    },
    firestore() {
        if(fb.auth().currentUser) {
            this.isLoggedIn = true
            const user = fb.auth().currentUser;
            return {
                profile: db.collection('users').doc(user.uid)
            }
        }
    },
    methods: {
        logout () {
            fb.auth().signOut().then(() => {
                this.$router.replace('/login')
            })
        }
    }
}
</script>

<style scoped>
    .navbar {
        background-color: #218838;
    }
    .btn {
        margin: 0 5px 0 5px;
    }
</style>