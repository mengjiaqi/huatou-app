<template>
	<scroll-view class="content" scroll-y>
		<!-- <view>{{banner}}</view> -->
		<view class="grace-bg-white xl-padding">
			<goods-list :list="goods"></goods-list>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		props: ['cid', 'initialize'],
		data() {
			return {
				banner: null,
				goods: null
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
				this.banner = this.cid;
				const _self = this;
				this.request({
					url: '/top/dg-item-coupon?q=' + this.cid,
					success({ data }) {
						_self.goods = data.results.tbk_coupon;
					}
				})
			}
		}
	}
</script>

<style>
</style>
