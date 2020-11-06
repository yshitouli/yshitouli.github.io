<template>
	<div class="home">
		<h1>这里是首页</h1>
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
	name: 'Home',
	components: {
		HelloWorld
	},
	created() {
		this.getD();
	},
	methods: {
		getD() {
			console.log(this.$route.params)
		}
	}
}
</script>
