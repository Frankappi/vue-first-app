<template>
    <div class="login">
        <transition name="lgnalert">
            <div class="alert alert-danger alert-dismissible" v-if="show">
                <button type="button" class="close" @click="show = !show">&times;</button>
                <strong>Oops something went wrong, try again!</strong>
            </div>
        </transition>
        <topBanner />
        <div class="col-sm-4 col-12 mx-auto lgnbox">
            <h2>Login</h2>
            <form @submit.prevent>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="E-mail" v-model="email">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="********" v-model="password">
                </div>
                <div class="form-group">
                    <button class="btn btn-success form-control" v-on:click="login()">Enter</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
require("firebase/auth");
require("firebase/firestore");
import { fb } from '../main'

import topBanner from '../components/topBanner.vue'

export default {
    name: 'login',
    components: {
        topBanner,
    },
    data() {
        return {
            email: '',
            password: '',
            show: false,
        }
    },
    methods: {
        login () {
           fb.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
                this.$router.replace('/dashboard')
            }).catch((err) => {
                alert(err.message)
            });
        }
    }
}
</script>

<style scoped>
    .lgnbox {
        background-color: #f1f1f1;
		padding: 15px 25px 15px 25px;
		box-shadow: 0 8px 16px rgba(0,0,0,0.6);
		border-radius: 8px;
    }
    .alert {
        position: fixed;
        z-index: 9999;
        top: 35%;
        left: 35%;
        right: 35%;
    }
    .close, .close:focus {
        border: none;
        border-color: transparent;
        outline: none;
    }
    .lgnalert-enter-active {
        animation: bounce-in .5s;
    }
    .lgnalert-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>