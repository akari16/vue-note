<template>
	<span>
		<p>
			<slot v-bind:user="user"></slot>
		</p>
	</span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Deconstru extends Vue {
	private user: Object = {
		name: "zhangsan",
		age: 23,
	};
}
</script>