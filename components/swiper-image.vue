<template>
	<swiper class="main-swiper" indicator-dots>
		<swiper-item v-for="(item, index) in items" :key="index">
			<image src="http://temp.im/1125x552" mode="widthFix"></image>
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

			};
		}
	}
</script>

<style>
	.main-swiper image {
		width: 100%;
	}
</style>
