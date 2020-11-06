<template>
	<div class="about">
		<h1>这里是简历页</h1>
	</div>
</template>


<script>

export default {
	name: "Resume",
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