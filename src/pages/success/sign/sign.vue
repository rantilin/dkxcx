<template>
	<view class="sign-warp">
		<view class="head">
			<u-icon class="head-icon" name="arrow-left" color="#fff" size="32" @tap='back'></u-icon>
			<view class="title">
				打卡小程序
			</view>
		</view>
		<image class="bgImg" src="../../../static/image/signBg.png" mode=""></image>
		<view class="tips">
			已经连续坚持打卡 {{info.clock_day}} 天
		</view>
		<view class="tips bottom">
			今日已获取基础积分{{info.points}}
		</view>
		<view class="top-img">
			<image src="../../../static/image/success.png" mode=""></image>
			<view class="ins">
				打卡成功
			</view>
		</view>
		<view class="sign-tip">
			连续打卡{{info.task_days}}天可额外获得{{info.task_reward}}积分
		</view>
		<!-- <view class="tip-more">
			<view class="shu-title">
				<view class="shu"></view>
				<view class="tip">积分兑换</view>
			</view>
			<view class="more">
				<u-icon name="arrow-right" color="#999999" size="18"></u-icon>
			</view>
		</view>
		<view class="knowledge-warp">
			<view class="knowledge" v-for="(item,index) in 5" :key='index'>
				<image src="http://www.xnetkfyy.com/upload/images/2019/5/t_c5c16c274b1e2988.jpg" mode=""></image>
				<view class="title">
					现金抵扣券-到院可使用
				</view>
				<view class="foot">
					积分：1000
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:{}
			}
		},
		onLoad(o) {
			console.log(JSON.parse(o.info));
			this.info = JSON.parse(o.info)
		},
		methods: {
			back(){
				uni.navigateBack(1)
			}
		}
	}
</script>

<style lang="scss" scoped>
	uni-page-body {
		background: none
	}

	.sign-warp {
		.head {
			position: relative;
			text-align: center;
			height: 176rpx;
			line-height: 176rpx;

			.head-icon {
				position: absolute;
				top: 72rpx;
				left: 32rpx;
			}

			.title {
				font-size: 34rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 600;
				color: #FFFFFF;
			}
		}

		.bgImg {
			width: 750rpx;
			height: 410rpx;
			position: absolute;
			top: 0;
			z-index: -1;
		}

		.tips {
			width: 750rpx;
			padding-left: 32rpx;
			box-sizing: border-box;
			font-size: 32rpx;
			color: #FFFFFF;
			line-height: 32rpx;
			margin-top: 50rpx;
		}

		.bottom {
			font-size: 26rpx;
			color: #FFFFFF;
			margin-top: 27rpx;
		}

		.top-img {
			width: 232rpx;
			height: 232rpx;
			margin: auto;
			margin-top: 134rpx;

			image {
				width: 232rpx;
				height: 232rpx;
			}

			.ins {
				width: 128rpx;
				font-size: 32rpx;
				color: #333333;
				margin: auto;
				margin-top: 40rpx;
				font-weight: bold;
			}
		}

		.sign-tip {
			font-size: 24rpx;
			color: #FF834A;
			margin: auto;
			text-align: center;
			margin-top: 100rpx;
		}

		.tip-more {
			display: flex;
			padding: 0 32rpx;
			align-items: center;
			box-sizing: border-box;
			justify-content: space-between;
			margin-top: 56rpx;

			.shu-title {
				display: flex;
				align-items: center;

				.shu {
					width: 8rpx;
					height: 32rpx;
					background: #0BC788;
					border-radius: 4rpx;
					margin-right: 12rpx;
				}

				.tip {
					font-size: 36rpx;
					color: #292929;
					font-weight: bold;
				}
			}

			.more {
				display: flex;
				align-items: center;

				.text {
					font-size: 24rpx;
					color: #8e8e8e;
					line-height: 10rpx;
					margin-right: 10rpx;
				}

				.pic {
					width: 18rpx;
					height: 18rpx;
				}
			}
		}

		.knowledge-warp {
			width: 750rpx;
			padding: 0 32rpx;
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin-top: 24rpx;

			.knowledge {
				width: 330rpx;
				height: 333rpx;
				background: #FFFFFF;
				border-radius: 12rpx;
				margin-top: 26rpx;
				image {
					width: 331rpx;
					height: 237rpx;
					border-radius: 10rpx 10rpx 0 0;
				}

				.title {
					// width: 301rpx;
					font-size: 30rpx;
					color: #333333;
					line-height: 44rpx;
					margin-left: 10rpx;
				}

				.foot {
					font-size: 24rpx;
					color: #666666;
					margin-left: 10rpx;
				}
			}
		}
	}
</style>
