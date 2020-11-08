<template>
	<div class="about">
		<h1>这里是收支页</h1>
		<h2>{{this.$route.params}}</h2>
	</div>
</template>


<script>

export default {
	name: "InAndOut",
	data() {
		return {
			yearMonth: {
				year: this.$route.params.year,
				month: this.$route.params.month
			}
		}
	},
	methods: {
		getParams() {
			console.log(this.yearMonth.year);
			console.log(this.yearMonth.month);
		}
	},
	created() {
		this.getParams();
	}
}
</script>