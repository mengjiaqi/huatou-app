<template>
	<view class="page">
		<view class="grace-tab tab-title-wrapper">
			<view class="tab-home grace-tab-title">
				<view :class="[currentIndex === 0 ? 'grace-tab-current' : '']" id="tabItem-0" @tap="tabChange">首页</view>
			</view>
			<view class="tab-cats">
				<scroll-view class="grace-tab-title" scroll-x>
					<view v-for="(tab, index) in tabs" :class="[currentIndex === (index + 1) ? 'grace-tab-current' : '']" :id="'tabItem-'+(index+1)"
					 @tap="tabChange" :key="index">{{tab.name}}</view>
				</scroll-view>
			</view>
		</view>
		<swiper class="grace-tab-swiper-full" :current="currentIndex" @change="swiperChange" :style="{height: mainHeight + 'px'}">
			<swiper-item><content-main></content-main></swiper-item>
			<swiper-item v-for="(tab, index) in tabs" :key="index">
				<content-category :cid="tab.name" :initialize="currentIndex === index+1"></content-category>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import ContentMain from './content-main';
	import ContentCategory from './content-category';
	export default {
		components: { ContentMain, ContentCategory },
		data() {
			return {
				currentIndex: 0,
				mainHeight: 500,
				goods: [],
				tabs: [
					{ name: '母婴' },
					{ name: '生鲜' },
					{ name: '食品' },
					{ name: '女装' },
					{ name: '彩妆' },
					{ name: '洗护' },
					{ name: '内衣' },
					{ name: '百货' },
					{ name: '家电' },
					{ name: '家居' },
					{ name: '数码' }
				]
			}
		},
		onLoad() {
		},
		onReady() {
			const _self = this;
			const system = this.CONSTS.SYSTEM;
			uni.createSelectorQuery().select('.tab-title-wrapper').boundingClientRect(data => {
				_self.mainHeight = system.windowHeight - data.height;
			}).exec();
		},
		methods: {
			tabChange(e) {
				this.currentIndex = parseInt(e.target.id.split('-')[1]);
			},
			swiperChange(e) {
				this.currentIndex = e.target.current;
			}
		}
	}
</script>

<style>
	.tab-title-wrapper {
		width: 100%;
		height: 84upx;
		position: relative;
		background: #FFFFFF;
	}
	.tab-home {
		width: 112upx;
		box-shadow: #000000;
	}
	.tab-cats {
		position: absolute;
		left: 114upx; right: 0; top: 0;
	}
	.tab-cats view:first-child {
		margin-left: 28rpx;
	}
</style>
