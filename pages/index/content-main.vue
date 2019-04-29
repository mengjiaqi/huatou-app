<template>
	<scroll-view class="content" scroll-y>
		<view class="panel">
			<swiper class="main-swiper">
				<swiper-item>
					<image src="http://temp.im/1125x480" mode="widthFix"></image>
				</swiper-item>
			</swiper>
			<view class="grace-grids channels">
				<view class="items" v-for="(item, index) in grids" :key="index">
					<view class="icon">
						<image :src="item" mode="widthFix"></image>
					</view>
					<view class="text">{{index}}</view>
				</view>
			</view>
		</view>
		<!-- 好货优选 -->
		<view class="panel recommend">
			<view class="panel-header grace-flex">
				<view class="panel-title">
					<text class="grace-icons icon-voice"></text>
					<text>好货优选</text>
				</view>
				<view class="panel-header-extra">
					<view class="grace-tab">
						<view class="grace-tab-title">
							<view :class="{'grace-tab-current': recommend === 0}" id="recommend-0" @tap="changeRecommend">今日热卖</view>
							<view :class="{'grace-tab-current': recommend === 1}" id="recommend-1" @tap="changeRecommend">明日预告</view>
						</view>
					</view>
				</view>
			</view>
			<view class="panel-body">
				<view class="list" :class="{'current': recommend === 0}">
					<goods-list :list="recommends" :limit="3"></goods-list>
				</view>
				<view class="list" :class="{'current': recommend === 1}">1</view>
			</view>
		</view>
		
		<!-- 热卖排行 -->
		<view class="panel ranking">
			<view class="panel-header grace-flex">
				<view class="panel-title">
					<text class="grace-icons icon-photograph"></text>
					<text>热卖榜单</text>
				</view>
			</view>
			<view class="panel-body">
				<goods-ranking :list="rankings" :limit="10"></goods-ranking>
			</view>
		</view>
		
		<!-- 猜你喜欢 -->
		<view class="panel favorite">
			<view class="panel-header grace-flex">
				<view class="panel-title">
					<text class="grace-icons icon-friend"></text>
					<text>猜你喜欢</text>
				</view>
			</view>
			<view class="panel-body bg-default">
				<goods-grid :list="favorites"></goods-grid>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import GoodsRanking from '../../components/goods-ranking';
	
	export default {
		data() {
			return {
				recommend: 0,
				goods: []
			};
		},
		components: {
			GoodsRanking
		},
		computed: {
			grids() {
				const items = [1, 2, 1, 1, 1, 2, 1, 2, 2, 1];
				return items.map(item => 'https://graceui.oss-cn-beijing.aliyuncs.com/faces/' + item + '.png');
			},
			recommends() {
				return this.goods.slice(0, 3);
			},
			rankings() {
				return this.goods.slice(10, 20);
			},
			favorites() {
				return this.goods.slice(20)
			}
		},
		methods: {
			changeRecommend(e) {
				this.recommend = parseInt(e.target.id.replace('recommend-', ''));
			}
		},
		created() {
			const _self = this;
			this.request({
				url: '/top/dg-item-coupon?q=小龙虾',
				success({ data }) {
					_self.goods = data.results.tbk_coupon;
				}
			})
		}
	}
</script>

<style>
	.main-swiper image {
		width: 100%;
	}

	.channels {
		border-right: 2upx solid #F8F8F8;
		border-bottom: 2upx solid #F5F6F8;
	}

	.channels .items {
		width: 20%;
		border-left: 2upx solid #F8F8F8;
		border-top: 2upx solid #F5F6F8;
		color: #A5A7B2;
	}
	.panel {
		margin-top: 20rpx;
		background: #FFFFFF;
		border-top: 2upx solid #F5F6F8;
	}
	.panel:first-child {
		margin-top: 0;
		border-top: none;
	}
	.panel,
	.panel-header {
		border-bottom: 2upx solid #F5F6F8;
	}

	.panel-title {
		line-height: 80rpx;
		flex: 1;
		padding: 0 16upx;
		font-weight: 700;
	}

	.panel-title .grace-icons {
		color: #FF3A30;
		margin-right: 0.5em;
	}

	.recommend .list {
		display: none;
		padding: 0 16upx;
	}

	.recommend .list.current {
		display: block;
	}
	
	.favorite .panel-body {
		padding: 8upx;
	}
</style>
