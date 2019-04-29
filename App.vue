<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("./vendors/graceUI.css");
	@import url("./vendors/graceIcons.css");
	/*每个页面公共css */
	*{margin: 0; padding: 0;}
	image{will-change: transform}
	page, .page, .bg-default { background: #f8f8f8; }
	.xl-padding { padding: 16rpx ;}
	
	.grace-tab-current {
		color: #f15858;
		border-color: #f15858 !important;
	}
	.grace-tab-title view {
		padding: 0;
		margin: 0 28rpx;
	}
	.grace-tab-title view:first-child {
		margin-left: 8rpx;
	}
	.grace-tab-title view:last-child {
		margin-right: 8rpx;
	}
</style>
