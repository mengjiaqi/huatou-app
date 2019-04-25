<template>
	<view class="page">
		<view class="grace-tab">
			<view class="grace-flex grace-tab-title-wrapper">
				<view class="tab-home grace-tab-title">
					<view :class="[currentIndex === 0 ? 'grace-tab-current' : '']" id="tabItem-0" @tap="tabChange">首页</view>
				</view>
				<scroll-view class="tab-cats grace-tab-title" scroll-x :style="{width: catsWidth + 'px' }">
					<view v-for="(tab, index) in tabs" :class="[currentIndex === (index + 1) ? 'grace-tab-current' : '']" :id="'tabItem-'+index"
					 @tap="tabChange" :key="index">{{tab.name}}</view>
				</scroll-view>
			</view>
		<swiper class="grace-tab-swiper-full" :current="currentIndex" @change="swiperChange" :style="{height: mainHeight + 'px'}">
			<swiper-item><content-main></content-main></swiper-item>
			<swiper-item v-for="(tab, index) in tabs" :key="index">
				<content-category :cid="index+1" :initialize="currentIndex === index+1"></content-category>
			</swiper-item>
		</swiper>
		</view>
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
				catsWidth: 319,
				goods: [],
				tabs: [
					{ name: '女装' },
					{ name: '女装' },
					{ name: '女装' },
					{ name: '女装' },
					{ name: '女装' },
					{ name: '女装' }
				]
			}
		},
		onLoad() {
		},
		onReady() {
			const _self = this;
			const system = this.CONSTS.SYSTEM;
			uni.createSelectorQuery().select('.tab-home').boundingClientRect(data => {
				_self.catsWidth = system.windowWidth - data.width;
			}).exec();
			uni.createSelectorQuery().select('.grace-tab-title-wrapper').boundingClientRect(data => {
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
	.tab-cats view:first-child {
		margin-left: 16rpx;
	}
</style>
