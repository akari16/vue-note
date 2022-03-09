<template>
	<span>
		我是基础slot子组件, 父组件传过来的值:
		<span style="color: red"><slot></slot></span>
	</span>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Base extends Vue {}
</script>