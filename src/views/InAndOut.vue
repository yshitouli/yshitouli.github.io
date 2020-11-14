<template>
	<div class="alls">
		<h1>{{this.$route.params.year}}年 收入和支出</h1>
		<!-- <h1> <span v-text="year"></span> 年 收入和支出</h1> -->
	
		<div class="yearSum">
			<span>年总收入：</span><b>{{getYearIncomeSum}}</b> 元 ===========
			<span>年总支出：</span><strong>{{getYearExpendSum}}</strong> 元
		</div>
	
		<div class="box one">
			<h2>{{this.$route.params.month}}月份</h2>
			<!-- <h2> <span v-text="month"></span> 月份</h2> -->
			<ul>
				<li v-for="(item,index) in day" :key="index">
					<h3>{{item}}日：</h3>
					<div>
						<p v-for="(val,i) in getDataList" :key="i">
							<font v-if="val.time.day==item">
							{{val.title}}-{{val.explain?"-"+val.explain:""}}：<strong v-if="val.flag=='expend'">{{val.money}}</strong><b v-else>{{val.money}}</b>元
							</font>
						</p>
						<!-- 
						<p>-：<b>100.00</b>元</p>
						<p>-：<strong>10.00</strong>元</p>
						<p>-：<strong>10.00</strong>元</p>
						<p>-：<strong>10.00</strong>元</p>
						<p>-：<strong>10.00</strong>元</p>
						<p>-：<strong>10.00</strong>元</p>
						<p>-：<strong>10.00</strong>元</p> -->
					</div>
				</li>
				<!-- <li>
					<h3>1日：</h3>
					<div>
						<p>-：<strong>10.00</strong>元</p>
						<p>-：<b>100.00</b>元</p>
						<p>-：<strong>10.00</strong>元</p>
						<p>-：<strong>10.00</strong>元</p>
						<p>-：<strong>10.00</strong>元</p>
						<p>-：<strong>10.00</strong>元</p>
						<p class="lastLine">-：<strong>10.00</strong>元</p>
						<p class="lastLine">-：<strong>10.00</strong>元</p>
					</div>
				</li> -->
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
		<!-- <h1>这里是收支页</h1>
		<h2>{{this.$route.params}}</h2>
		<h2>支出总和：{{getExpendSum}}</h2>
		<h2>收入总和：{{getIncomeSum}}</h2> -->
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
			return util.computeSum(util.getList(this.getDataList,"expend"));
		},
		getIncomeSum() {
			return util.computeSum(util.getList(this.getDataList,"income"));
		},
		day() {
			return util.getDays(this.year, this.month);
		},
		getYearExpendSum() {
			return util.computeSum(util.getList(list,"expend",this.year));
		},
		getYearIncomeSum() {
			return util.computeSum(util.getList(list,"income",this.year));
		}
	},
	methods: {
		getParams() {
			this.year = Number(this.$route.params.year);
			this.month = Number(this.$route.params.month);
			console.log("总",list);
			console.log("this.year:",this.year);
			console.log("年：",util.getList(list,"expend",this.year));
		},
		yangshi() {
			console.log("已执行")
			// this.$refs.pp.style.cssText = 'border-bottom:0.1rem solid #0000FF;';
		}
	},
	watch: {},
	created() {
		this.getParams();
	},
	updated() {
		this.getParams();
	},
	mounted() {
		this.yangshi();
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
}
.alls .box ul li div p.lastLine{
	border-bottom: none;
}
.alls .box ul li div p:nth-child(3n){ /* 每行最后一项不要 */
	border-right: 0;
}
.alls .box ul li div p:last-child{ /* 最后一项不要 */
	border-right: 0;
}
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