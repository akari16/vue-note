<template>
	<div>
		<ul>
			<li>最开始的value值：{{ name }}</li>
			<li>computed计算后的值：{{ computedName }}</li>
			<li>
				watch修改后的值：{{ watchName }}
				<input type="text" v-model="watchName" />
			</li>
			<li><button @click="handleNumber">修改名字</button></li>
		</ul>
	</div>
</template>
<script>
export default {
	name: "TestCompoment",
	data() {
		return {
			name: "zhangsan",
			watchName: "张三",
		};
	},
	watch: {
		watchName(newVal, oldVal) {
			console.log("旧的值---->", newVal);
			console.log("新的值---->", oldVal);
			console.log("watch下所有的状态都会监听this.name---->", this.name);
			console.log(
				"watch下所有的状态都会监听this.computedName---->",
				this.computedName
			);
			this.watchName = newVal;
		},
	},
	computed: {
		computedName: function (currentThis) {
			console.log(
				"和计算属性无关的状态发生更改时,不会执行，只要依赖的状态发生更改，缓存才会更新",
				currentThis
			);
			return `依赖于name，：${this.name}`;
		},
	},
	methods: {
		handleNumber() {
			this.name = "lisi";
		},
	},
};
</script>