<template>
	<view class="release">
		<view class="top-img">
			<image src="../../../static/image/success.png" mode=""></image>
			<view class="ins">
				发布成功
			</view>
		</view>
		<button class="button">
			分享到家长
		</button>
		<view class="back" @tep="back">
			返回首页
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shareUrl:'/pages/index/index'
			}
		},
		methods: {
			 back(){
         uni.switchTab({
					 url:'/pages/index/index'
				 })
			 }
		},
    //分享
  onShareAppMessage() {
    return {
      title: '健康小管家',
      imageUrl:
        'https://yy.xnetkfyy.cn/upload/images/202134/2103041039260007.jpg',
      path: this.shareUrl,
    }
  }
	}
</script>

<style lang="scss" scoped>
.release{
	// height: 100vh;
	padding-top: 183rpx;
	box-sizing: border-box;
	.top-img{
		width: 232rpx;
		height: 232rpx;
		margin: auto;
		image{
			width: 232rpx;
			height: 232rpx;
		}
		.ins{
			width: 128rpx;
			font-size: 32rpx;
			color: #666666;
			margin: auto;
			margin-top: 60rpx;
		}
	}
	.button{
		width: 686rpx;
		height: 88rpx;
		background: #0BC788;
		border-radius: 44rpx;
		font-size: 32rpx;
		color: #FEFFFE;
		line-height: 88rpx;
		text-align: center;
		margin: auto;
		margin-top: 310rpx;
	}
	.back{
		font-size: 28rpx;
		line-height: 28px;
		text-align: center;
		margin-top: 250rpx;
	}
}
</style>
<style>
	page{
		background-color: #fff;
	}
</style>