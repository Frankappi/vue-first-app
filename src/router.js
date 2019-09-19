import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/Login.vue'
import Register from './views/Register.vue'
import About from './views/About.vue'

import Dashboard from './views/Dashboard.vue'
import Social from './views/Social.vue'
import Profile from './views/Profile.vue'

require("firebase/auth");
require("firebase/firestore");
import { fb } from './main'

Vue.use(Router)

let router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			redirect: {
				name: 'login'
			}
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
			meta: {
				requiresAuth: false
			}
		},
		{
			path: '/register',
			name: 'register',
			component: Register,
			meta: {
				requiresAuth: false
			}
		},
		{
			path: '/about',
			name: 'about',
			component: About,
			meta: {
				requiresAuth: false
			}
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: Dashboard,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/social',
			name: 'social',
			component: Social,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/profile',
			name: 'profile',
			component: Profile,
			meta: {
				requiresAuth: true
			}
		},
	]
})

router.beforeEach((to, from, next) => {
	let currentUser = fb.auth().currentUser
	let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  
	if (requiresAuth && !currentUser) next('login')
	else if (requiresAuth && !currentUser) next('register')
	else if (requiresAuth && !currentUser) next('about')
	else if (!requiresAuth && currentUser) next('dashboard')
	else if (!requiresAuth && currentUser) next('social')
	else if (!requiresAuth && currentUser) next('profile')
	else next()
})

export default router;