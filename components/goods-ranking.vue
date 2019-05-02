<template>
	<scroll-view class="grace-scroll-x" scroll-x>
		<navigator class="item" hover-class="none" url="/pages/coupon/product" v-for="(item, index) in list" :key="index" v-if="index < limits">
			<view class="image">
				<image :src="item.pict_url" mode="aspectFit"></image>
			</view>
			<view class="detail">
				<view class="title">
					{{item.title}}
				</view>
				<view class="coupon">
					<text>{{item.coupon_info}}</text>
				</view>
				<view class="price">
					<text class="final">&yen;{{item.zk_final_price}}</text>
					<text class="reserve">&yen;199.00</text>
				</view>
			</view>
		</navigator>
	</scroll-view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: []
			},
			limit: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {

			};
		},
		computed: {
			limits() {
				return this.limit || this.list.length;
			}
		}
	}
</script>

<style>
	.item {
		width: 232upx;
		display: inline-flex;
		flex-direction: column;
		margin: 16upx 0;
	}

	.item view {
		font-size: 24upx;
		line-height: 1.8em;
	}

	.image {
		font-size: 0;
		margin: 0 16upx;
		width: 200upx;
		height: 200upx;
		overflow: hidden;
	}

	.image image {
		width: 200upx;
		height: 200upx;
	}
	
	.detail {
		border-right: 2upx solid #f8f8f8;
		padding: 0 16upx;
	}

	.title {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-weight: bold;
	}

	.coupon text {
		padding: 0.1em 0.3em;
		border: 2upx solid #FF3A30;
		color: #FF3A30;
		border-radius: 3upx;
		font-size: 18upx;
	}

	.price .final {
		color: #FF3A30;
		font-weight: 700;
	}

	.price .reserve {
		color: #666666;
		text-decoration: line-through;
		margin-left: 1em;
	}
</style>
