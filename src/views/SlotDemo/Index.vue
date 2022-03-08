<template>
	<div>
		<ul class="slot-list">
			<li>基础slot组件：<Base>这是一段父组件传过来的文字</Base></li>
			<li>
				<p>具名插槽：</p>
				<Specific>
					<template v-slot:name1>
						<p>名称是name1传过来的内容</p>
					</template>
					<template v-slot:name2>
						<p>名称是name2传过来的内容</p>
					</template>
				</Specific>
			</li>
			<li>
				<p>作用域插槽</p>
				<Scope :scopeData="scopeData"></Scope>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Base from "./Base.vue";
import Specific from "./Specific.vue";
import Scope from "./Scope.vue";

@Component({ components: { Base, Specific, Scope } })
export default class SlotDemo extends Vue {
	private scopeData: Number = 23;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.slot-list {
	text-align: left;
}
</style>
