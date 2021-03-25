<template>
	<view>
		<u-icon :name="name" label="图片" :size="size" label-pos="bottom" @tap='checkedImg' label-size="26"></u-icon>
	</view>
</template>

<script>
	props:['name','size']
	export default {
		data() {
			return {
				name:"123",
				size:'57'
			};
		},
		onLoad() {
			console.log(this.size);
		}
	}
</script>

<style>

</style>
