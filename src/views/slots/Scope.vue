<template>
	<span>
		<span>
			<slot name="scopeName" v-bind:scopeData="age"></slot>
		</span>
	</span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Scope extends Vue {
	private age: Number = 23;
}
</script>