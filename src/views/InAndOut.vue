<template>
	<div class="about">
		<h1>这里是收支页</h1>
		<h2>{{this.$route.params}}</h2>
		<h3>{{getDataList}}</h3>

		<!-- <InOutList :yearMonth="yearMonth"></InOutList> -->
	</div>
</template>


<script>
// import InOutList from '../components/InOutList.vue';
import { list } from '../data';
import { util } from '../util';

export default {
	name: "InAndOut",
	data() {
		return {
			year: null,
			month: null,
			dataList: []
		}
	},
	components: {
		// InOutList
	},
	computed: {
		getDataList() {
			console.log(this.year+"年"+this.month+"月：",util.getList(list,this.year,this.month))
			return util.getList(list,this.year,this.month);
		}
	},
	methods: {
		getParams() {
			this.year = Number(this.$route.params.year);
			this.month = Number(this.$route.params.month);
		}
	},
	watch: {},
	created() {
		this.getParams();
	},
	updated() {
		this.getParams();
	}
}
</script>