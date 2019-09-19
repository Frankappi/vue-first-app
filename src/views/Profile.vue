<template>
    <div class="profile">
        <transition name="updatealert">
            <div class="alert alert-info alert-dismissible" v-if="show">
                <button type="button" class="close" @click="show = !show">&times;</button>
                <strong>Profile updated!</strong>
            </div>
        </transition>
        <loggedInMenu />
        <div class="container">
            <div class="col-sm-7 mx-auto prflblok">
                <div class="card bg-warning prflcard">
                    <div class="card-body">
                        <img alt="User picture" class="img-fluid prflpicture" src="@/assets/user.gif" />
                    </div>
                </div>
                <div class="card bg-info prflcard">
                    <div class="card-body">
                        <form @submit.prevent>
                            <div class="form-group">
                                <input type="text" class="form-control" v-model="profile.firstname">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" v-model="profile.lastname">
                            </div>
                            <div class="form-group">
                                <input type="number" class="form-control" v-model="profile.age">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" v-model="profile.country">
                            </div>
                            <button class="btn btn-success form-control" v-on:click="saveProfile()">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
require("firebase/auth");
require("firebase/firestore");
import { fb, db, currentUser } from '../main'

import loggedInMenu from '../components/loggedInBanner.vue'

export default {
    name: 'profile',
    data() {
        return {
            show: false,
            profile: {
                firstname: '',
                lastname: '',
                age: '',
                country: '',
                
            },
        }
    },
    components: {
        loggedInMenu
    },
    firestore() {
        const user = fb.auth().currentUser;
        return {
            profile: db.collection('users').doc(user.uid),
        }
    },
    methods: {
        saveProfile() {
            const user = fb.auth().currentUser;
            var userRef = db.collection("users").doc(user.uid);

            return userRef.update({
                firstname: this.profile.firstname,
                lastname: this.profile.lastname,
                age: this.profile.age,
                country: this.profile.country
            })
            .then((user) => {
                this.show = true
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });

        },
    }
}
</script>

<style scoped>
    .prflblok {
        margin: 25px 0 0 0;
    }
    .prflcard {
        margin: 25px 0 25px 0;
        border-radius: 10px;
        box-shadow: 0 6px 12px rgba(0,0,0,0.6);
    }
    .prflpicture {
        border-radius: 50%;
        border: 2px solid #fff;
        padding: 5px;
    }
    .alert {
        position: fixed;
        z-index: 9999;
        top: 25%;
        left: 35%;
        right: 35%;
    }
    .updatealert-enter-active {
        animation: bounce-in .5s;
    }
    .updatealert-leave-active {
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