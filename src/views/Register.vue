<template>
    <div class="register">
        <transition name="regalert">
            <div class="alert alert-success alert-dismissible" v-if="show">
                <button type="button" class="close" @click="show = !show">&times;</button>
                <strong>You are registered! Enjoy the app!</strong>
            </div>
        </transition>
        
        <topBanner />
        <div class="col-sm-4 col-12 mx-auto regbox">
            <h2>Register</h2>
            <form @submit.prevent>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="E-mail" v-model="email">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="First name" v-model="firstName">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Last name" v-model="lastName">
                </div>
                <div class="form-group">
                    <input type="number" class="form-control" placeholder="Age" v-model="age">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Country" v-model="country">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="********" v-model="password">
                </div>
                <div class="form-group">
                    <button class="btn btn-success form-control regbtn" v-on:click="register()">Register</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
require("firebase/auth");
require("firebase/firestore");
import { fb } from '../main'
import { db } from '../main'

import topBanner from '../components/topBanner.vue'

export default {
    name: 'register',
    data() {
        return {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            age: '',
            country: '',
            show: false,
        }
    },
    components: {
        topBanner
    },
    methods: {
        register () {
            fb.auth().createUserWithEmailAndPassword(this.email, this.password).then(cred => {
                return db.collection('users').doc(cred.user.uid).set({
                    firstname: this.firstName,
                    lastname: this.lastName,
                    age: this.age,
                    country: this.country
                });
            }).then((user) => {
                this.show = true
                this.email = ''
                this.firstName = ''
                this.lastName = ''
                this.age = ''
                this.country = ''
                this.password = ''
            })
        },
                
    }
}
</script>

<style scoped>
    .regbtn:focus {
        background-color: #28a745;
        color: #fff;
    }
    .alert {
        position: fixed;
        z-index: 9999;
        top: 25%;
        left: 35%;
        right: 35%;
    }
    .close, .close:focus {
        border: none;
        border-color: transparent;
        outline: none;
    }
    .regbox {
        margin: 10px 0 35px 0;
        background-color: #f1f1f1;
		padding: 15px 25px 15px 25px;
		box-shadow: 0 8px 16px rgba(0,0,0,0.6);
		border-radius: 8px;
    }
    .regalert-enter-active {
        animation: bounce-in .5s;
    }
    .regalert-leave-active {
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