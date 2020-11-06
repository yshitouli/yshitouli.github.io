<template>
	<div class="about">
		<h1>This is an about page</h1>
	</div>
</template>


<script>

export default {
	name: "About",
	methods: {
		getD() {
			console.log(this.$route.params)
		}
	},
	created() {
		this.getD();
	}
}
</script>