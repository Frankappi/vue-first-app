<template>
	<div class="about">
		<topBanner />
		<div class="col-sm-6 col-12 mx-auto text-left abtbox">
			<h2>About this App</h2>
			<p>
				This app is built with the purpose of online socializing.
			</p>
		</div>
	</div>
</template>

<script>
import topBanner from '../components/topBanner'
export default {
	name: 'about',
	components: {
		topBanner
	}
}
</script>

<style scoped>
	.abtbox {
		background-color: #f1f1f1;
		padding: 15px 25px 15px 25px;
		box-shadow: 0 8px 16px rgba(0,0,0,0.6);
		border-radius: 8px;
	}
</style>