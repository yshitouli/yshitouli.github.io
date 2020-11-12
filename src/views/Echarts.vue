<template>
	<div class="about">
		<h1>这里是图表页</h1>
		<h2>{{this.$route.params}}</h2>
	</div>
</template>


<script>

export default {
	name: "Echarts",
	data() {
		return {
			year: [
				this.$route.params.year
			]
		}
	},
	methods: {
		getParams() {
			console.log(this.year);
		}
	},
	created() {
		this.getParams();
	}
}
</script>