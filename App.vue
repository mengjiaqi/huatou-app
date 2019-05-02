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
	* {
		margin: 0;
		padding: 0;
	}

	view {
		line-height: 1.5em;
	}

	image {
		will-change: transform;
		width: 100%;
		height: auto;
	}

	page,
	.page,
	.bg-default {
		background: #f8f8f8;
	}

	.flex-item {
		flex: 1
	}

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

	.panel {
		background: #FFFFFF;
		margin-bottom: 16upx;
	}

	/* .panel:last-child {
		margin-bottom: 0;
	} */
	.panel-header {
		padding-bottom: 16upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2upx solid #F8F8F8;
	}
	.panel-title {
		padding-left: 16upx;
		border-left: 6upx solid #FF0000;
		font-weight: 700;
	}
	.panel-header, .panel-body, .xl-padding {
		padding: 28upx;
	}
	.row {
		margin: 0 -14upx;
		display: flex;
	}
	.col {
		flex: 1;
		padding: 0 14upx;
	}
</style>
