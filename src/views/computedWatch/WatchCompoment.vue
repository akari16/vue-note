<template>
	<div>
		<ul>
			<li>name值：{{ name }}</li>
			<li>{{ nameTip }}</li>
			<li>通过异步操作获取的age：{{ age }}</li>
			<li><button @click="getUser">修改名字</button></li>
			<li>{{ immediateNameTip }}</li>
		</ul>
	</div>
</template>
<script>
let p1 = new Promise((resolve, reject) => {
	resolve({ age: "14" });
});

export default {
	name: "watchTest",
	data() {
		return {
			name: "zhangsan",
			nameTip: "name未改变",
			age: 10,
			immediateName: "immediateName原始值",
			immediateNameTip: "immediateName改变时的提示文字",
		};
	},
	created() {},
	watch: {
		name(newVal, oldVal) {
			// watch可以监听一些状态发生更改的时候，做一些处理，修改状态，或者异步操作
			this.nameTip = "name状态改变了";
			this.getData();
		},
		immediateName: {
			handler(newVal, oldVal) {
				console.log("immediate表示最初监听值得时候，也执行这段代码");
				setTimeout(() => {
					this.immediateNameTip =
						"immediateName添加immediate，初次绑定也会执行";
				}, 2000);
			},
			immediate: true,
			deep: true, // 只针对对象的深层次属性变化
		},
	},
	methods: {
		getData() {
			setTimeout(() => {
				this.getAge();
			}, 1000);
		},
		getUser() {
			this.name = "lisi";
		},
		getAge() {
			p1.then((res) => {
				console.log(res);
				this.age = res.age;
			});
		},
	},
};
</script>