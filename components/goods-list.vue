<template>
	<view class="list">
		<navigator class="item" hover-class="none" url="/pages/product/product" v-for="(item, index) in list" :key="index" v-if="index < limits">
			<view class="grace-flex">
				<view class="image">
					<image :src="item.pict_url" mode="aspectFit" lazy-load></image>
				</view>
				<view class="detail grace-columns grace-space-between">
					<view class="title">
						{{item.title}}
					</view>
					<view class="ads">
						{{item.item_description}}
					</view>
					<view class="price">
						<text class="final">&yen; {{item.zk_final_price}}</text>
						<text class="reserve">&yen; 199.00</text>
					</view>
					<view class="volume">
						{{item.volume}}人买过
					</view>
					<view class="extra grace-flex grace-space-between">
						<text class="coupon">{{item.coupon_info}}</text>
						<text class="profit">预估收益&yen;{{item.zk_final_price * item.commission_rate / 100 | fixPrice}}</text>
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
				// isShow: []
			};
		},
		created() {
			// this.lazyLoader.load(0, this);
		},
		computed: {
			limits() {
				return this.limit || this.list.length;
			}
		},
		filters: {
			fixPrice(value) {
				return value.toFixed(2);
			}
		}
	}
</script>

<style>
	.item {
		padding: 20upx 0;
		border-bottom: 2upx solid #F6F7F8;
	}

	.image {
		font-size: 0;
		flex-basis: 240upx;
	}

	.image image {
		width: 240upx;
		height: 240upx;
		border-radius: 6upx;
	}

	.detail {
		flex: 1;
		margin-left: 20upx;
	}

	.detail view {
		font-size: 24upx;
		line-height: 1.2em;
	}

	.detail .title,
	.detail .price .final {
		font-weight: 700;
		font-size: 28upx;
	}

	.title {
		width: 100%;
		overflow: hidden;
		/* 
	white-space: nowrap;
	text-overflow: ellipsis; */
	}

	.price .final {
		color: #FF3A30;
	}

	.price .reserve {
		text-decoration: line-through;
		color: #666666;
		margin-left: 16upx;
	}

	.volume {
		color: #333333;
	}

	.extra .coupon,
	.extra .profit {
		padding: 0.3em 0.5em;
		border-radius: 3upx;
		background: #FF3A30;
		color: #FFFFFF;
	}

	.extra .profit {
		background: #ffdddd;
		color: #ee0000;
		padding: 0.3em 1em;
	}
</style>
