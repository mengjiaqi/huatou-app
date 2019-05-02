<template>
	<scroll-view scroll-y>
		<view class="panel">
			<swiper-image :items="swipers"></swiper-image>
			<view class="xl-padding">
				<view class="grace-space-between channels">
					<view class="grace-space-between flex-item">
						<view class="channel flex-item" :class="{'current': currentChannel == 0}" @tap="changeChannel" id="channel-0">正在抢购</view>
						<view class="channel flex-item" :class="{'current': currentChannel == 1}" @tap="changeChannel" id="channel-1">即将开抢</view>
					</view>
					<view class="flex-item">
						<view class="count-down" v-if="currentChannel == 0">
							<text :style="{color}">距结束</text>
							<uni-countdown background-color="#f0f0f0" border-color="#f0f0f0" :color="color" :day="1" :show-day="false"></uni-countdown>
						</view>
					</view>
				</view>
				<scroll-view class="categories" :scroll-into-view="categoryInView" v-if="currentChannel == 0" scroll-x
				 scroll-with-animation>
					<view class="category" v-for="(c, i) in categories" :id="'cat-'+i" :key="i" :class="{current: currentCategory == i}"
					 @tap="changeCategory">
						<text>正在抢购</text>
						<text class="flag"></text>
					</view>
				</scroll-view>
				<scroll-view class="categories" :scroll-into-view="categoryInView" v-if="currentChannel == 1" scroll-x
				 scroll-with-animation>
					<view class="category" v-for="(c, i) in categories" :id="'cat-'+i" :key="i" :class="{current: currentCategory == i}"
					 @tap="changeCategory">
						<text>即将开抢</text>
						<text class="flag"></text>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="panel xl-padding">
			<product-list :list="productList"></product-list>
		</view>
		<view class="xl-actions">
			<button class="item" @tap="sharePage" open-type="share">
				<text class="grace-icons icon-share"></text>
				<text>分享</text>
			</button>
		</view>
	</scroll-view>
</template>

<script>
	import SwiperImage from '../../components/swiper-image';
	import ProductList from '../../components/product-list';
	import ProductGrid from '../../components/product-grid';

	import {
		uniCountdown
	} from '@dcloudio/uni-ui';

	export default {
		components: {
			SwiperImage,
			uniCountdown,
			ProductList,
			ProductGrid
		},
		data() {
			const productList = [];
			for(let i=0;i<10;i++) {
				productList.push({
					image: 'http://temp.im/800x800',
					title: '商品名称商品名称商品名称商品名称商品名称商品名称',
					originalPrice: 199,
					favourPrice: 299,
					tip: '秒杀',
					volume: 50000,
					remain: 1000
				});
			}
			return {
				swipers: [{
					src: 'http://temp.im/1125x552'
				}, {
					src: 'http://temp.im/1125x552'
				}],
				categories: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				color: '#666666',
				currentChannel: '0',
				currentCategory: '0',
				renderImage: true,
				productList
			}
		},
		methods: {
			changeChannel(e) {
				this.currentChannel = e.currentTarget.id.replace('channel-', '');
				this.currentCategory = '0';
			},
			changeCategory(e) {
				this.currentCategory = e.currentTarget.id.replace('cat-', '');
			},
			sharePage(e) {
				
			}
		},
		computed: {
			categoryInView() {
				const current = parseInt(this.currentCategory);
				if (current > 2) {
					return 'cat-' + (current - 2);
				}
				return 'cat-0';
			}
		},
		onShareAppMessage(share) {
			return {
				title: '领票票',
				path: '/pages/coupon/index'
			};
		}
	}
</script>

<style>
	.channels {
		border-bottom: 4upx solid #f15858;
	}

	.channel,
	.count-down {
		padding: 8upx 0;
	}

	.channel {
		background: #F0F0F0;
		color: #666666;
		text-align: center;
		border-top-left-radius: 8upx;
		border-top-right-radius: 8upx;
		margin-right: 8upx;
		font-weight: 500;
	}

	.channel.current {
		background: #f15858;
		color: #FFFFFF;
	}

	.count-down {
		text-align: right;
		font-size: 24upx;
	}

	.categories {
		white-space: nowrap;
		text-align: center;
	}

	.categories .category {
		display: inline-flex;
		padding: 16upx 16upx 0;
		flex-direction: column;
		align-items: center;
	}

	.categories .current {
		font-size: 32upx;
		font-weight: 700;
	}

	.categories .flag {
		width: 48upx;
		border-top: 4upx solid #F15858;
		border-bottom: 4upx solid #F15858;
		border-radius: 4upx;
		display: none;
		margin-top: 4upx;
	}

	.categories .current .flag {
		display: block;
	}
	.xl-actions {
		position: fixed;
		right: 16upx;
		bottom: 96upx;
	}
	.xl-actions .item {
		background: #000000;
		opacity: 0.6;
		border-radius: 50%;
		text-align: center;
		font-size: 20upx;
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		width: 96upx;
		height: 96upx;
	}
	.xl-actions .item, .xl-actions .grace-icons {
		color: #FFFFFF;
	}
	.xl-actions .grace-icons {
		font-size: 36upx;
		font-weight: 500;
		line-height: 1.5em;
	}
</style>
