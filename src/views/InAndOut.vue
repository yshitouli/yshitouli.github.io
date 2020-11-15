<template>
	<div class="alls">
		<h1>{{this.$route.params.year}}年 收入和支出</h1>
	
		<div class="yearSum">
			<span>年总收入：</span><b>{{getYearIncomeSum}}</b> 元 ===========
			<span>年总支出：</span><strong>{{getYearExpendSum}}</strong> 元
		</div>
	
		<div class="box one">
			<h2>{{this.$route.params.month}}月份</h2>
			<ul>
				<li v-for="(item,index) in getDayList" :key="index">
					<h3>{{index+1}}日：</h3>
					<div>
						<p v-for="(val,i) in item" :key="i" :class="{lastLine: flagLastLine(item.length,i)}">
							{{val.title}}{{val.explain?"-"+val.explain:""}}：<strong v-if="val.flag=='expend'">{{val.money.toFixed(2)}}</strong><b v-else>{{val.money.toFixed(2)}}</b>元
						</p>
						
					</div>
				</li>
			</ul>
			<div class="monthSum">
				<div>
					<h3>收入：</h3>
					<p><b>{{getIncomeSum}}</b>元</p>
				</div>
				<div>
					<h3>支出：</h3>
					<p><strong>{{getExpendSum}}</strong>元</p>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import { list } from '../data';
import { util } from '../util';

export default {
	name: "InAndOut",
	data() {
		return {
			year: null,
			month: null
		}
	},
	components: {
		// InOutList
	},
	computed: {
		getDataList() {
			return util.getList(list,this.year,this.month);
		},
		getExpendSum() {
			let sum = util.computeSum(util.getList(this.getDataList,"expend"))
			return sum;
		},
		getIncomeSum() {
			return util.computeSum(util.getList(this.getDataList,"income"));
		},
		day() {
			return util.getDays(this.year, this.month, util.getListDay(this.getDataList));
		},
		getYearExpendSum() {
			let sum = util.computeSum(util.getList(list,"expend",this.year))
			return sum;
		},
		getYearIncomeSum() {
			let sum = util.computeSum(util.getList(list,"income",this.year));
			return sum;
		},
		getDayList() {
			let arr = [];
			this.day.forEach(item => {
				let arr2 = [];
				this.getDataList.forEach(value => {
					if(value.time.day == item) {
						arr2.push(value);
					}
				});
				arr.push(arr2);
			});
			return arr;
		}
	},
	methods: {
		getParams() {
			this.year = Number(this.$route.params.year);
			this.month = Number(this.$route.params.month);
		},
		flagLastLine(len,i) {
			let j = Math.floor((len-1)/3)*3-1;
			return i>j;
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

<style scoped>
.alls{
	width: 75rem;
	margin: 2rem auto;
}
.alls h1{
	font-size: 3rem;
	line-height: 4rem;
	text-align: center;
}
.alls .yearSum{
	text-align: center;
	font-size: 1.4rem;
	line-height: 2rem;
}
.alls .yearSum b{
	color: #0000FF;
}
.alls .yearSum strong{
	color: #FF0000;
}

.alls .box{
	width: 100%;
	height: 100%;
	font-size: 1.4rem;
	line-height: 2.4rem;
	border: 0.2rem solid #0000FF;
}
.alls .box h2{
	font-size: 2.8rem;
	text-align: center;
	line-height: 3.8rem;
}
.alls .box ul li{
	border-top: 0.1rem solid #0000FF;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
}
.alls .box ul li h3{
	width: 12%;
	border-right: 0.1rem solid #0000FF;
	text-align: right;
}
.alls .box ul li div{
	width: 88%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
}
.alls .box ul li div p{
	width: 33.33%;
	height: 2.4rem;
	border-right: 0.1rem solid #0000FF;
	text-indent: 0.6em;
	border-bottom: 0.1rem solid #0000FF;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.alls .box ul li div p.lastLine{
	border-bottom: none;
}
.alls .box ul li div p:nth-child(3n){ /* 每行最后一项不要 */
	border-right: 0;
}
/* .alls .box ul li div p:last-child{ 最后一项不要 
	border-right: 0;
} */
.alls .box ul li div p b{
	font-weight: normal;
	color: #0000FF;
}
.alls .box ul li div p strong{
	font-weight: normal;
	color: #FF0000;
}

.alls .box .monthSum div{
	border-top: 0.1rem solid #0000FF;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
}
.alls .box .monthSum div h3{
	width: 12%;
	border-right: 0.1rem solid #0000FF;
	text-align: right;
	font-weight: bold;
}
.alls .box .monthSum div p{
	width: 88%;
	text-indent: 1em;
}
.alls .box .monthSum div p b{
	font-weight: bold;
	color: #0000FF;
}
.alls .box .monthSum div p strong{
	font-weight: bold;
	color: #FF0000;
}
</style>