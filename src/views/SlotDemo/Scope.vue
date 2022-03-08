<template>
	<span>
		<span>
			<slot v-bind:scopeData="scopeData">
				接收了父组件传过来的值绑定在了属性上，所以能渲染：
				{{ scopeData }}
			</slot>
			<slot><p>没有绑定父组件传过来的值</p></slot>
		</span>
	</span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Scope extends Vue {
	@Prop({ type: Number }) private scopeData!: Number;
}
</script>