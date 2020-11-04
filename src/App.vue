<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/about">About</router-link>
		</div>

		<!-- 路由出口 -->
		<div id="contain">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
	name: "", //组件名称
	data() {
		return {
			
		}
	}, //数据
	components: {}, //包含 Vue 实例可用组件的哈希表。
	props: {
		"": {
			type: String,
			default: "a"
		}
	}, //来自父组件的数据
	methods: {}, //事件处理器
	computed: {}, //计算属性 return
	watch: {}, //key: data、props、computed中的    v:方法(newVal,oldVal)、对象、字符串(方法名)      deep：深度监听
	// 生命周期：
	beforeCreate() {}, //生命周期：在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
	created() {}, //在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el property 目前尚不可用。
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
