<template>
    <div class="topbanner">
        <nav class="navbar navbar-expand-sm navbar-light">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <button class="btn menubtn" v-on:click="lgnlink()">Login</button>
                        </li>
                        <li class="nav-item">
                            <button class="btn menubtn" v-on:click="reglink()">Register</button>
                        </li>
                        <li class="nav-item">
                            <button class="btn menubtn" v-on:click="abtlink()">About</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="jumbotron">
            <img alt="Vue logo" class="img-fluid" src="@/assets/logo.png" />
            <h2>The Vue-firebase App</h2>
        </div>
    </div>
</template>

<script>
require("firebase/auth");
require("firebase/firestore");
import { fb } from '../main'

export default {
    name: 'topbanner',
    methods: {
        lgnlink () {
            fb.auth().signOut().then(() => {
                this.$router.replace('/login')
            })
        },
        reglink () {
            fb.auth().signOut().then(() => {
                this.$router.replace('/register')
            })
        },
        abtlink() {
            fb.auth().signOut().then(() => {
                this.$router.replace('/about')
            })
        }
    }
}
</script>

<style scoped>
    .navbar {
        background-color: #218838;
    }
    .menubtn {
        border: none;
        color: white!important;
        padding: 10px 20px 10px 20px;
        transition: 0.2s;
    }
    .menubtn:hover {
        padding-top: 5px;
        color: #42b983!important;
        transition: 0.2s;
    }
    .menubtn:focus {
        outline: none;
        border: transparent;
        box-shadow: none;
    }
</style>