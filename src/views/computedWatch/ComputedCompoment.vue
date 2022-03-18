<template>
	<div>
		<ul>
			<li>computed基本使用</li>
			<li>name值：{{ name }}</li>
			<li>{{ changeName }}</li>
			<li>
				---------------------------------------------------------------
			</li>
			<li>{{ isCache }}</li>
			<li>{{ cacheTip }}</li>
			<li>{{ changeCache }}</li>
			<li><button @click="handleChange">修改文字</button></li>
			<li>
				---------------------------------------------------------------
			</li>
			<li>{{ firstName }}</li>
			<li>{{ lastName }}</li>
			<li>{{ setterGetter }}</li>
			<li><button @click="handleChangeFirst">修改文字</button></li>
		</ul>
	</div>
</template>
<script>
export default {
	name: "ComputedCompoment",
	data() {
		return {
			name: "zhangsan",
			cacheTip: "cacheTip原始值",

			firstName: "lewyon001",
			lastName: "布欧001",
		};
	},
	computed: {
		changeName: function () {
			return `一段依赖于name：${this.name}的文字`;
		},
		isCache: function () {
			return `不依赖于任何属性值的一段文字`;
		},
		changeCache: function () {
			return `依赖于cacheTip，${this.cacheTip}`;
		},
		setterGetter: {
			// getter
			get: function (newValue) {
				console.log("newValue", newValue);
				return this.firstName + " " + this.lastName;
			},
			// setter
			set: function (newValue) {
				console.log("newValue", newValue);
				this.firstName = `${newValue.firstName}`;
				this.lastName = `${newValue.lastName}`;
			},
		},
	},
	methods: {
		handleChange() {
			this.cacheTip = "cacheTip状态被修改";
		},
		handleChangeFirst() {
			this.setterGetter = { firstName: "lewyon", lastName: "布欧" };
		},
	},
};
</script>