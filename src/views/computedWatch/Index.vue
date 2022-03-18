<template>
	<div>
		<test-compoment />
		<p>----------------------------------------------------------</p>
		<watch-compoment />
		<p>----------------------------------------------------------</p>
		<computed-compoment />
	</div>
</template>
<script>
import TestCompoment from "./TestCompoment.vue";
import WatchCompoment from "./WatchCompoment.vue";
import ComputedCompoment from "./ComputedCompoment.vue";
export default {
	name: "Index",
	data() {
		return {};
	},
	components: {
		TestCompoment,
		WatchCompoment,
		ComputedCompoment,
	},
};
</script>