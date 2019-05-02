<template>
	<swiper class="main-swiper" indicator-dots :style="{height: height + 'px'}">
		<swiper-item v-for="(item, index) in items" :key="index">
			<image :src="item.src" @load="imageLoaded" :style="{height: height + 'px'}"></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		props: {
			items: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				width: 0,
				height: 0
			};
		},
		created() {
			const info = uni.getSystemInfoSync();
			this.width = info.windowWidth;
		},
		methods: {
			imageLoaded(e) {
				this.height = this.width * e.detail.height / e.detail.width;
			}
		}
	}
</script>

<style>
	.main-swiper {
		height: auto;
	}
	.main-swiper image {
		width: 100%;
		height: auto;
	}
</style>
