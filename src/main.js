import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Styling done by Bootstrap v4
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Font Awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { faIdBadge } from '@fortawesome/free-solid-svg-icons'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUsers)
library.add(faImages)
library.add(faIdBadge)
library.add(faCompactDisc)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Database by Firebase 
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
Vue.use(firestorePlugin)

firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
});
export const fb = firebase;
export const db = firebase.firestore();
export const currentUser = firebase.auth().currentUser;

// General Vue 

Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(user => {
  if(!app) {
    app = new Vue({
      router,
      render: function (h) { return h(App)}
    }).$mount('#app')
  }
});
