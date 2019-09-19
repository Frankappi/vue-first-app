<template>
    <div class="social">
        <loggedInMenu />
        <div class="container">
            <!-- add posts to the list -->
            <div class="col-sm-7 col-12 mx-auto postit bg-info">
                <form @submit.prevent >
                    <textarea name="post" rows="6" class="form-control" v-model="text"></textarea>
                    <button class="btn btn-success form-control" v-on:click="addPost()">Post it</button>
                </form>
            </div>

            <!-- list all posts -->
            <div class="col-sm-8 col-12 mx-auto postblok bg-warning" v-for="(post, idx) in posts" :key="idx">
                <div class="row">
                    <div class="col-sm-3 col-3">
                        <img alt="User picture" class="img-fluid userimg" src="@/assets/user.gif" />
                        <h6>{{ post.user }}</h6>
                        <p>{{ post.time }}</p>
                    </div>
                    <div class="col-sm-9 col-9">
                        <p class="posttext">
                            {{ post.text }}
                        </p>
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
    name: 'social',
    data() {
        return {
            text: '',
            posts: [],
            postRef: fb.firestore().collection('posts'),
        }
    },
    components: {
        loggedInMenu
    },
    created() {
        // db.collection("posts").get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         this.posts.push(doc.data);
        //     });
        // });

        this.ref.onSnapshot((querySnapshot) => {
        this.posts = [];
        querySnapshot.forEach((doc) => {
            this.boards.push({
            key: doc.id,
            text: doc.data().text
            });
        });
        });
        
    },
    methods: {
        addPost() {
            const user = fb.auth().currentUser;
            var postRef = db.collection("posts").doc("docId");
            return postRef.set({
                name: user,
                text: this.text,
                createdAt: new Date()
            })
            .then(() => {
                this.text = ''
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            })
        }
    }
}
</script>

<style scoped>  
    .postit {
        margin: 25px 0 25px 0;
        padding: 25px 30px 25px 30px;
        border-radius: 10px;
        box-shadow: 0 6px 12px rgba(0,0,0,0.6);
    }
    .postblok {
        margin: 25px 0 25px 0;
        padding: 0 30px 0 30px;
        border-radius: 10px;
        box-shadow: 0 6px 12px rgba(0,0,0,0.6);
    }
    .userimg {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 10%;
        border-bottom-right-radius: 10%;
        max-height: 120px;
    }
    .posttext{
        background-color: #f2f2f2;
        border-radius: 10px;
        margin: 10px 0 10px 0;
        text-align: left;
        padding: 0 10px 0 10px;
    }
</style>