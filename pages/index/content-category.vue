<template>
	<view class="content">
		{{cid}}
	</view>
</template>

<script>
	export default {
		props: ['cid', 'initialize'],
		data() {
			return {
				banner: null,
				dataSource: null
			};
		},
		watch: {
			initialize(value, before) {
				if (value && !this.banner) {
					this.loadData();
				}
			}
		},
		methods: {
			loadData() {
				this.banner = true;
				console.log(this.cid);
			}
		}
	}
</script>

<style>
</style>
