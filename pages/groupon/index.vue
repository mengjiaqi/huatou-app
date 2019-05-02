<template>
	<scroll-view scroll-y>
		<view class="panel">
			<swiper-image :items="swipers"></swiper-image>
		</view>
	</scroll-view>
</template>

<script>
	import SwiperImage from '../../components/swiper-image';

	export default {
		components: {
			SwiperImage
		},
		data() {
			return {
				swipers: [1, 1]
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
