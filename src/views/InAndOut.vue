<template>
	<div class="about">
		<h1>这里是收支页</h1>
		<h2>{{this.$route.params}}</h2>
	</div>
</template>


<script>
import data from '../data';

export default {
	name: "InAndOut",
	data() {
		return {
			yearMonth: {
				year: this.$route.params.year,
				month: this.$route.params.month
			},
			income: null,
			expend: null
		}
	},
	methods: {
		getD() {
			console.log(this.yearMonth);
			console.log(this.income);
			console.log(this.expend);
		},
		getData() {
			this.income = data.income;
			this.expend = data.expend;
		}
	},
	created() {
		this.getData();
		this.getD();
	}
}
</script>