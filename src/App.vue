<template>
	<div id="app">
		<div id="nav">
			<div class="first">
				<h3 class="title"><router-link to="/resume">我的简历</router-link></h3>
			</div>
			<div class="first">
				<h3 class="title">收支</h3>
				<ul class="second">
					<li>
						<h4 class="title">2020年</h4>
						<ul class="second">
							<li v-for="(item,index) in month" :key="index"><router-link :to="{name: 'InAndOut', params: { year: 2020, month: item }}">{{item}}月</router-link></li>
							<!-- <li><router-link to="/">2月</router-link></li>
							<li><router-link to="/">3月</router-link></li>
							<li><router-link to="/">4月</router-link></li>
							<li><router-link to="/">5月</router-link></li>
							<li><router-link to="/">6月</router-link></li>
							<li><router-link to="/">7月</router-link></li>
							<li><router-link to="/">8月</router-link></li>
							<li><router-link to="/">9月</router-link></li>
							<li><router-link to="/">10月</router-link></li>
							<li><router-link to="/">11月</router-link></li>
							<li><router-link to="/">12月</router-link></li> -->
						</ul>
					</li>
					<li>
						<h4 class="title">2021年</h4>
						<ul class="second">
							<!-- <li><router-link to="/">1月</router-link></li>
							<li><router-link to="/">2月</router-link></li>
							<li><router-link to="/">3月</router-link></li>
							<li><router-link to="/">4月</router-link></li>
							<li><router-link to="/">5月</router-link></li>
							<li><router-link to="/">6月</router-link></li>
							<li><router-link to="/">7月</router-link></li>
							<li><router-link to="/">8月</router-link></li>
							<li><router-link to="/">9月</router-link></li>
							<li><router-link to="/">10月</router-link></li>
							<li><router-link to="/">11月</router-link></li>
							<li><router-link to="/">12月</router-link></li> -->
						</ul>
					</li>
				</ul>
			</div>
			<div class="first">
				<h3 class="title">收支图表</h3>
				<ul class="second">
					<!-- <li><router-link to="/about">2020年</router-link></li>
					<li><router-link to="/about">2021年</router-link></li> -->
				</ul>
			</div>
		</div>

		<!-- 路由出口 -->
		<div id="contain">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import { list } from './data';
import { util } from './util';

export default {
	name: "", //组件名称
	data() {
		return {
			month: [1,2,3,4,5,6,7,8,9,10,11,12]
		}
	}, //数据
	components: {}, //包含 Vue 实例可用组件的哈希表。
	props: {}, //来自父组件的数据
	methods: {}, //事件处理器
	computed: {}, //计算属性 return
	watch: {}, //key: data、props、computed中的    v:方法(newVal,oldVal)、对象、字符串(方法名)      deep：深度监听
	// 生命周期：
	beforeCreate() {}, //生命周期：在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
	created() {
		console.log("所有的集合",list);
		console.log("收入的集合",util.getFlag(list, "income"));
		console.log("支出的集合",util.getFlag(list, "expend"));
		console.log("2020年",util.getYearAll(list, 2020));
		console.log("2020年11月",util.getMonthAll(list, 2020, 11));
		console.log("2020年餐饮",util.getType(util.getYearAll(list, 2020), "restaurant"));
		// console.log(util);
	}, //在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el property 目前尚不可用。
	beforeMount() {}, //在挂载开始之前被调用：相关的 render 函数首次被调用。该钩子在服务器端渲染期间不被调用。
	mounted() {}, //实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内。该钩子在服务器端渲染期间不被调用。
	beforeUpdate() {}, //数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。
	updated() {}, //由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。
	activated() {}, //被 keep-alive 缓存的组件激活时调用。该钩子在服务器端渲染期间不被调用。
	deactivated() {}, //被 keep-alive 缓存的组件停用时调用。该钩子在服务器端渲染期间不被调用。
	beforeDestroy() {}, //实例销毁之前调用。在这一步，实例仍然完全可用。该钩子在服务器端渲染期间不被调用。
	destroyed() {}, //实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。该钩子在服务器端渲染期间不被调用。
	// 资源
	directives: {}, //包含 Vue 实例可用指令的哈希表。
	filters: {}, //包含 Vue 实例可用过滤器的哈希表。
}
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		position: relative; //全局做相对定位
		height: 100vh;
		overflow: hidden;
	}
</style>

<style lang="scss" scoped>
	#nav{
		width: 15rem;
		position: absolute;
		background-color: rgba(36, 117, 223, 0.651);
		border-right: 0.1rem solid rgb(40, 60, 175);
		height: 100vh;
		a{
			display: block;
		}
		overflow-y: scroll;
		cursor: pointer;
	}
	#contain{
		width: calc(100% - 15rem);
		position: absolute;
		top: 0;
		right: 0;
		padding: 2rem;
		overflow-y: scroll;
		height: 100vh;
	}
</style>
