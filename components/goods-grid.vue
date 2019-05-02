<template>
	<view class="goods">
		<navigator class="item" hover-class="none" url="/pages/coupon/product" v-for="(item, index) in list" :key="index" v-if="index < limits">
			<view class="inner">
				<view class="image">
					<image :src="item.pict_url" mode="widthFix"></image>
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
			</view>
		</navigator>
	</view>
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
	.goods {
	}

	.item {
		width: 50%;
		display: inline-flex;
		flex-direction: column;
	}
	
	.inner {
		margin: 8upx;
		background: #FFFFFF;
		border-radius: 8upx;
	}

	.item view {
		font-size: 24upx;
		line-height: 1.8em;
	}

	.item view.image {
		font-size: 0;
		line-height: 1em;
		overflow: hidden;
	}

	.image image {
		width: 100%;
		height: none;
	}
	
	.detail {
		padding: 8px;
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
