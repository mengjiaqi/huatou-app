<template>
	<view class="page">
		<view class="grace-search grace-fixed-top top grace-gtbg-blue">
			<view class="icons grace-icons icon-scancode"></view>
			<view class="grace-search-in">
				<view class="icons grace-icons icon-search"></view>
				<input type="search" @input="searchChange" @confirm="searchNow" :value="searchKey" placeholder="关键字"></input>
				<view class="icons grace-icons icon-close" @tap="clearKey" v-if="searchClose"></view>
			</view>
		</view>
		<view class="xl-padding" style="margin-top:80rpx;">
			<view class="grace-title">
				<view>热门搜索</view>
			</view>
			<view class="grace-search-taps">
				<view v-for="(item, index) in HotKeyHistory" :key="index" :data-key="item" @tap="setKey">{{item}}</view>
			</view>
			<view class="grace-title" style="margin-top:20rpx;">
				<view>搜索历史</view>
				<text class="grace-more"><text class="grace-icons icon-remove"></text>清空</text>
			</view>
			<view class="grace-search-taps">
				<view v-for="(item, index) in searchKeyHistory" :key="index" :data-key="item" @tap="setKey">{{item}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchKey: "",
				searchClose: false,
				searchKeyHistory: [
					'graceUI', '测试', '关键字', '类型'
				],
				HotKeyHistory: [
					'graceUI', '手机', '小米', 'iphone X'
				]
			}
		},
		methods: {
			searchChange: function(e) {
				var key = e.detail.value;
				this.searchKey = key;
				if (key.length >= 1) {
					this.searchClose = true;
				} else {
					this.searchClose = false;
				}
			},
			clearKey: function() {
				this.searchClose = false;
				this.searchKey = "";
			},
			searchNow: function() {
				uni.showToast({
					title: '开始搜索 ' + this.searchKey,
					icon: "none"
				});
			},
			setKey: function(e) {
				var key = e.currentTarget.dataset.key;
				uni.showToast({
					title: '开始搜索 ' + key,
					icon: "none"
				});
			}
		}
	}
</script>

<style>
/* h5 端需要动态增加 44px [ 避开默认的头部导航 ] */
.top{top:0;}
/* #ifdef H5 */
.top{top:44px;}
/* #endif */
</style>
