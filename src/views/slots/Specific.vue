<template>
	<span>
		<span style="color: red">
			<slot name="name1"></slot>
			<slot name="name2"></slot>
		</span>
	</span>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Specific extends Vue {}
</script>