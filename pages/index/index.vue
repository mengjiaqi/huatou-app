<template>
	<view>
		<swiper-image :items="images"></swiper-image>
		<view class="prices-wrapper grace-space-between grace-flex-vcenter">
			<view class="grace-columns xl-padding">
				<view class="final-price">
					&yen;<text>{{product.price}}</text>
				</view>
				<view class="origin-price-wrapper">
					<text class="origin-price-desc">限时团</text>
					<text class="origin-price">
						&yen;{{product.priceMarket}}
					</text>
				</view>
			</view>
			<view class="count-down xl-padding">
				<view class="count-down-text">
					距离结束还剩
				</view>
				<uni-countdown :showDay="false" :day="1" background-color="#f00033" border-color="#f00033" color="#FFFFFF"></uni-countdown>
			</view>
		</view>
		<view class="panel xl-padding">
			<view class="grace-space-between">
				<view class="grace-product-title">{{product.name}}</view>
				<button class="grace-product-share" @tap="share"><text class="grace-icons icon-share3"></text></button>
			</view>
			<view class="grace-product-desc">
				<text>仅剩 1000 件</text>
				<text>已售 21008 件</text>
				<text>浏览 36 万次</text>
			</view>
		</view>
		<!-- 规格 -->
		<view class="panel xl-padding attr">
			<view class="attr-item grace-flex">
				<text class="attr-option">规格</text>
				<text class="text-grey text-bold">1份 约1kg/份</text>
			</view>
			<view class="attr-item grace-flex">
				<text class="attr-option">时间</text>
				<text class="text-grey">预计05月05日到货</text>
			</view>
			<view class="attr-item grace-flex">
				<text class="attr-option">限购</text>
				<text class="text-grey">每人限购2单，每单限购2份</text>
			</view>
		</view>
		<!-- 买家秀 -->
		<view class="panel xl-padding">
			<view class="grace-space-between grace-flex-vcenter">
				<view class="avatars grace-flex">
					<image :src="img.src" v-for="(img, i) in images" v-if="i<5" :key="i"></image>
				</view>
				<view class="text-grey">
					已有<text class="text-bold">16448</text>人购买 <text class="grace-icons icon-arrow-right"></text>
				</view>
			</view>
		</view>

		<view class="grace-product-menu">
			<view :class="[active == 1 ? 'active' : '']" @tap="showInfo">商品详情</view>
			<view :class="[active == 2 ? 'active' : '']" @tap="showComments">商品评论</view>
		</view>
		<!-- 详情 -->
		<view class="panel">
			<view class="grace-product-info" :hidden="active == 2">
				<image src="https://img30.360buyimg.com/sku/jfs/t21838/18/2275707529/311540/cba1d04c/5b4f155fNac3aa2f0.jpg" mode="widthFix"></image>
				<image src="https://img30.360buyimg.com/sku/jfs/t22021/327/2281785192/48707/57806074/5b4f1579Nae7adb49.jpg" mode="widthFix"></image>
				<image src="https://img30.360buyimg.com/sku/jfs/t21682/256/2344553276/204456/cf7a2ddb/5b4ffbbfN48c54307.jpg" mode="widthFix"></image>
			</view>
			<!-- 评论 -->
			<view class="grace-product-info" :hidden="active == 1">
				<view class="grace-comments">
					<view class="items">
						<view class="face">
							<image src="https://graceui.oss-cn-beijing.aliyuncs.com/faces/1.png" mode="widthFix"></image>
						</view>
						<view class="body">
							<view class="header">
								<text>刘美丽</text><text class="grace-icons icon-zan"></text>
							</view>
							<view class="info">
								<text>08/10 08:12</text><text>102</text>
							</view>
							<view class="content">很好的手机，赞了</view>
						</view>
					</view>
					<view class="items">
						<view class="face">
							<image src="https://graceui.oss-cn-beijing.aliyuncs.com/faces/2.png" mode="widthFix"></image>
						</view>
						<view class="body">
							<view class="header">
								<text>某用户</text>
								<text></text>
							</view>
							<view class="imgs">
								<view>
									<image src="https://graceui.oss-cn-beijing.aliyuncs.com/scollimgs/4.png" mode="widthFix"></image>
								</view>
								<view>
									<image src="https://graceui.oss-cn-beijing.aliyuncs.com/scollimgs/3.png" mode="widthFix"></image>
								</view>
								<view>
									<image src="https://graceui.oss-cn-beijing.aliyuncs.com/scollimgs/1.png" mode="widthFix"></image>
								</view>
								<view>
									<image src="https://graceui.oss-cn-beijing.aliyuncs.com/scollimgs/1.png" mode="widthFix"></image>
								</view>
								<view>
									<image src="https://graceui.oss-cn-beijing.aliyuncs.com/scollimgs/4.png" mode="widthFix"></image>
								</view>
								<view>
									<image src="https://graceui.oss-cn-beijing.aliyuncs.com/scollimgs/3.png" mode="widthFix"></image>
								</view>
							</view>
							<view class="content">很不错!</view>
							<view class="info">
								<text>08/10 08:12</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 服务说明 -->
		<view class="panel service">
			<view class="panel-body">
				<view class="service-header">
					- 服·务·说·明 -
				</view>
				<view class="service-item" v-for="(o, i) in images" :key="i">
					<text class="flag"></text>
					<text class="tip">服务说明</text>
					服务说明服务说明服务说明服务说明服务说明服务说明服务说明服务说明服务说明服务说明服务说明服务说明服务说明服务说明服务说明
				</view>
			</view>
		</view>
		<view style="height:60px;"></view>
		<!-- 底部 -->
		<view class="grace-footer">
			<view class="icon-btn">
				<view class="icon grace-icons icon-home"></view>
				<view class="text">首页</view>
			</view>
			<view class="icon-btn">
				<view class="icon grace-icons icon-shoppingcard"></view>
				<view class="text">购物车</view>
			</view>
			<button type="warn" style="background:#E55D52;" @click="buyNow">立即购买</button>
			<button type="warn" style="background:#F37B1D;" @click="buyNow">加入购物车</button>
		</view>
		<!-- 商品属性  start -->
		<view class="grace-shade grace-shade-black" v-if="attrIsShow">
			<view class="grace-product-attr" v-if="attrIsShow">
				<form @submit="attrSubmit" class="grace-form">
					<!-- 关闭按钮  -->
					<view class="grace-product-attr-close" @click="closeAttr">
						<text class="grace-icons icon-close2"></text>
					</view>
					<!-- 头部商品信息 -->
					<view class="grace-product-attr-info">
						<image src="https://img13.360buyimg.com/n7/jfs/t1/9085/2/12381/146200/5c371c5bE08328383/4f4ba51aed682207.jpg"
						 mode="widthFix"></image>
						<view class="title">
							{{product.name}}
							<text>\n库存 : 1999件</text>
						</view>
					</view>
					<!-- 属性列表区 -->
					<view style="height:calc(100% - 155px); overflow-y:auto;">
						<view class="grace-product-attr-list">
							<view class="title">颜色</view>
							<view class="grace-select-tags">
								<radio-group @change="colorChange" name="color">
									<label v-for="(item, index) in colorTips" :key="index" :class="[item.checked ? 'grace-checked' : '']">
										<radio :value="item.value" :checked="item.checked"></radio> {{item.name}}
									</label>
								</radio-group>
							</view>
						</view>
						<view class="grace-product-attr-list">
							<view class="title">套餐类型</view>
							<view class="grace-select-tags">
								<radio-group @change="typeChange" name="type">
									<label v-for="(item, index) in typeTips" :key="index" :class="[item.checked ? 'grace-checked' : '']">
										<radio :value="item.value" :checked="item.checked"></radio> {{item.name}}
									</label>
								</radio-group>
							</view>
						</view>
						<view class="grace-items" style="margin-top:8px;">
							<view class="grace-label">购买数量</view>
							<!-- input 用于记录购买数量隐藏形式并参与表单提交 -->
							<input type="number" name="buynum" :value="buyNum" style="display:none;" />
							<graceNumberBox :value="buyNum" v-on:change="buyNumChange"></graceNumberBox>
						</view>
					</view>
					<view class="grace-product-attr-btn">
						<button type="warn" formType="submit">确定</button>
					</view>
				</form>
			</view>
		</view>
		<!-- 商品属性 end -->
	</view>
</template>
<script>
	import graceNumberBox from "../../vendors/components/graceNumberBox";
	import swiperImage from '../../components/swiper-image';

	import {
		uniCountdown
	} from '@dcloudio/uni-ui';

	export default {
		data() {
			const images = [];
			for (let i = 0; i < 5; i++) {
				images.push({
					src: 'http://temp.im/800x800',
					href: '/pages/product/index'
				});
			}
			return {
				images,
				product: {
					name: "小米 MIX3 一面科技 一面艺术 ( 磁动力滑盖全面屏 | 故宫特别版 )",
					logo: "../../static/logo.png",
					imgs: [{
							imgUrl: this.staticUrl + 'banners/1.png'
						},
						{
							imgUrl: this.staticUrl + 'banners/2.png'
						},
						{
							imgUrl: this.staticUrl + 'banners/3.png'
						}
					],
					price: 3188,
					priceMarket: 3200
				},
				active: 1,
				//属性
				attrIsShow: false, //属性界面是否隐藏
				attrData: null, // attrdata用于记录用户选择的属性
				colorTips: [{
						name: '灰色',
						value: '灰色',
						checked: false
					},
					{
						name: '银色',
						value: '银色',
						checked: false
					}
				],
				typeTips: [{
						name: '套餐一',
						value: '套餐一',
						checked: false
					},
					{
						name: '套餐二',
						value: '套餐二',
						checked: false
					},
					{
						name: '套餐三',
						value: '套餐三',
						checked: false
					}
				],
				buyNum: 1
			};
		},
		methods: {
			share: function() {
				uni.showToast({
					title: '请自行完善分享代码',
					icon: "none"
				})
			},
			showComments: function() {
				this.active = 2;
			},
			showInfo: function() {
				this.active = 1;
			},
			home: function() {
				uni.switchTab({
					url: '../index/index'
				})
			},
			buyNow: function() {
				//打开属性视图
				this.attrIsShow = true;
			},
			//属性
			attrSubmit: function(e) {
				//记录用户选择的属性
				this.attrData = e.detail.value;
				console.log(this.attrData);
				//关闭
				this.attrIsShow = false;
				//后续操作
				uni.showToast({
					title: "属性已经收集,请自行完善下一步代码",
					icon: "none"
				})
			},
			closeAttr: function() {
				this.attrIsShow = false;
			},
			colorChange: function(e) {
				var checkVal = e.detail.value;
				for (var i = 0; i < this.colorTips.length; i++) {
					if (checkVal.indexOf(this.colorTips[i].value + '') != -1) {
						this.colorTips[i].checked = true;
					} else {
						this.colorTips[i].checked = false;
					}
				}
				this.colorTips = this.colorTips;
			},
			typeChange: function(e) {
				var checkVal = e.detail.value;
				for (var i = 0; i < this.typeTips.length; i++) {
					if (checkVal.indexOf(this.typeTips[i].value + '') != -1) {
						this.typeTips[i].checked = true;
					} else {
						this.typeTips[i].checked = false;
					}
				}
				this.typeTips = this.typeTips;
			},
			buyNumChange: function(e) {
				this.buyNum = e[0];
			}
		},
		components: {
			graceNumberBox,
			uniCountdown,
			swiperImage
		}
	}
</script>
<style lang="scss">
	.prices-wrapper {
		background: linear-gradient(left, #f00066, #f03399);

		.xl-padding {
			padding: 16rpx 28rpx;
		}

		.final-price,
		.origin-price,
		.origin-price-desc {
			color: #FFFFFF;
			font-weight: 500;
		}

		.origin-price-desc {
			border: 2upx solid #FFFFFF;
			padding: 0 8upx;
			border-radius: 24upx;
			font-size: 24upx;
		}

		.origin-price {
			text-decoration: line-through;
			margin-left: 16upx;
		}

		.final-price text {
			font-size: 48upx;
			font-weight: 700;
		}
	}

	.count-down {
		text-align: center;
		background: #FFDDDD;

		.count-down-text {
			color: #f00033;
		}
	}
	
	.text-grey {
		color: #666666;
	}
	.text-bold {
		color: #333333;
		font-weight: 500;
	}

	.attr {
		.attr-item {
			line-height: 2em;
		}

		.attr-option {
			flex-basis: 96upx;
		}
	}

	.avatars image {
		width: 56upx;
		height: 56upx;
		border-radius: 56upx;
		margin-right: 12upx;
	}
	
	.service {
		.service-header {
			font-size: 36upx;
			font-weight: 700;
			text-align: center;
			padding: 28upx;
		}

		.service-item {
			position: relative;
			padding: 16upx;

			.tip {
				font-weight: 700;
				margin-right: 8upx;
			}

			.flag {
				position: absolute;
				left: -8upx;
				top: 24upx;
				height: 16upx;
				border: 4upx solid #f00033;
				border-top-right-radius: 4upx;
				border-bottom-left-radius: 4upx;
			}
		}
	}

	.line {
		background: #F2F3F4;
		height: 8px;
		width: 100%;
	}

	/* 商品展示 */
	.grace-product-title {
		background: #FFF;
		font-weight: 600;
		line-height: 1.8;
		font-size: 32upx;
	}

	.grace-product-share {
		width: 40px;
		padding: 0;
		text-align: center;
		background: none;
		border: none;
		box-shadow: none;
		height: 40px;
		font-size: 24px;
		color: #FF7900;
		line-height: 40px;
		flex-shrink: 0;
		margin-left: 12px;
	}

	.grace-product-share:after {
		width: 0;
		height: 0;
	}

	.grace-product-price {
		background: #FFF;
		padding: 20upx 2%;
		padding-bottom: 5upx;
		color: #FF7900;
		line-height: 30px;
		font-size: 24px;
		font-weight: 600;
		margin-top: 5px;
	}

	.grace-product-price text {
		color: #999;
		font-size: 16px;
		text-decoration: line-through;
		line-height: 30px;
		margin-left: 8px;
	}

	.grace-product-desc {
		background: #FFF;
		font-size: 24upx;
		color: #666666;
		line-height: 1.8;
		justify-content: space-between;
		display: flex;
		flex-wrap: nowrap;
	}

	.grace-product-menu {
		padding: 0upx 2%;
		padding-top: 10px;
		background: #FFF;
		margin-top: 5px;
		display: flex;
		flex-wrap: nowrap;
	}

	.grace-product-menu view {
		width: 40%;
		margin: 0 5%;
		line-height: 80upx;
		border-bottom: 6upx solid #FFFFFF;
		font-size: 30upx;
		text-align: center;
	}

	.grace-product-menu .active {
		border-color: #FF7900;
		font-weight: 600;
		color: #FF7900;
	}

	.grace-product-info {
		background: #FFF;
		padding: 30upx 2%;
	}

	.grace-product-info image {
		width: 100%;
	}

	.grace-product-btn {
		width: 30%;
		height: 90upx;
		line-height: 90upx;
		font-size: 30upx;
		color: #FFF;
		text-align: center;
		background: #FF7900;
	}

	.grace-product-attr {
		width: 94%;
		padding: 5px 3%;
		height: 80%;
		position: absolute;
		left: 0;
		bottom: 0;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		background: #FFF;
	}

	.grace-product-attr-info {
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #F1F1F3;
		padding-bottom: 12px;
	}

	.grace-product-attr-info image {
		width: 60px;
		height: auto;
		margin-right: 10px;
		flex-shrink: 0;
	}

	.grace-product-attr-info .title {
		width: 100%;
	}

	.grace-product-attr-info .title text {
		font-size: 10px;
		color: #666666;
	}

	.grace-product-attr-list {
		padding-top: 15px;
		border-bottom: 1px solid #F1F1F3;
	}

	.grace-product-attr-list .title {
		font-weight: 700;
	}

	.grace-product-attr-btn {
		width: 94%;
		padding: 5px 3%;
		position: fixed;
		z-index: 10;
		bottom: 0;
		left: 0;
	}

	.grace-product-attr-btn button {
		height: 40px;
		line-height: 40px;
	}

	.grace-product-attr-close {
		padding: 5px 0;
		line-height: 25px;
		text-align: right;
	}

	.grace-product-attr-close text {
		font-size: 24px;
		color: #666666;
	}
</style>
