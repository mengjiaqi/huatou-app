<template>
	<view class="list">
		<navigator class="item" hover-class="none" url="/pages/groupon/product" v-for="(item, index) in list" :key="index"
		 v-if="index < limits">
			<view class="grace-flex">
				<view class="image">
					<image :src="item.image" mode="aspectFit" lazy-load></image>
				</view>
				<view class="detail grace-columns grace-space-between">
					<view>
						<view class="title">
							{{item.title}}
						</view>
						<view class="desc" v-if="item.item_description">
							{{item.item_description}}
						</view>
					</view>
					<view class="grace-space-between">
						<view class="info">
							<view class="price">
								<text class="final">&yen; {{item.originalPrice}}</text>
								<text class="reserve">&yen; {{item.favourPrice}}</text>
							</view>
							<view class="volume">
								{{item.volume}}人买过
							</view>
						</view>
						<view class="actions">
							<view class="grace-icons icon-shoppingcard"></view>
						</view>
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
		padding: 16upx 0;
		border-bottom: 2upx solid #F6F7F8;
	}

	.item:first-child {
		padding-top: 0;
	}

	.item:last-child {
		border: none;
		padding-bottom: 0;
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

	.icon-shoppingcard {
		border-radius: 50%;
		padding: 8upx 10upx;
		background: #F15858;
		color: #FFFFFF;
		font-size: 36upx;
	}
</style>
