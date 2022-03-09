<template>
	<div>
		<ul class="slot-list">
			<li>
				基础slot组件(匿名插槽)：<Base>这是一段父组件传过来的文字</Base>
			</li>
			<li>
				<p>具名插槽：</p>
				<Specific>
					<template v-slot:name1>
						<p>name1传过来的内容</p>
					</template>
					<template v-slot:name2>
						<p>name2传过来的内容</p>
					</template>
				</Specific>
			</li>
			<li>
				<p>作用域插槽</p>
				<Scope>
					<template v-slot:scopeName="childData">
						作用域子组件slot返回的数据：
						<span style="color: red">
							{{ childData.scopeData }}
						</span>
					</template>
				</Scope>
			</li>
			<li>
				<p>解构插槽</p>
				<Deconstru>
					<template v-slot="{ user: person }">
						父组件模板：{{ person.name }},{{ person.age }}
					</template>
				</Deconstru>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Base from "./Base.vue";
import Specific from "./Specific.vue";
import Scope from "./Scope.vue";
import Deconstru from "./Deconstru.vue";

@Component({ components: { Base, Specific, Scope, Deconstru } })
export default class Index extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.slot-list {
	text-align: left;
}
</style>
