<template>
	<view>
		<view class="comment">
			<view class="left">
				<image class="commentIcon" src="../../static/image/pinlun.png" mode=""></image>
				<view class="rots">
					
				</view>
				<view class="commenttext">
					评论
				</view>
			</view>
			<u-icon name="arrow-right" color="#999999" size="18"></u-icon>
		</view>
		<view class="comment">
			<view class="left">
				<image class="commentIcon" src="../../static/image/news.png" mode=""></image>
				<view class="rots">
				</view>
				<view class="commenttext">
					系统消息
				</view>
			</view>
			<u-icon name="arrow-right" color="#999999" size="18"></u-icon>
		</view>
		<view class="line"></view>
		<view class="list-title">
			私信列表
		</view>
		<view class="list">
			<view class="item" :style="index!==4?'border-bottom:1rpx solid #EBEBEB':'border:none'" v-for="(item,index) in 5" :key='index'>
				<view class="left">
					<image class="headImg" src="../../static/image/doctor.png" mode=""></image>
					<view class="name">
						张秋医生
					</view>
				</view>
				<view class="right">
					<view class="time">
						10:48
					</view>
					<view class="unread">
						1
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.list{
		
		.item,.left{
			height: 148rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			
			.headImg{
				width: 88rpx;
				height: 88rpx;
				border-radius: 50%;
			}
			.name{
				font-size: 32rpx;
				color: #333333;
				margin-left: 16rpx;
			}
			.time{
				font-size: 24rpx;
				color: #999999;
			}
			.right{
				
			}
			.unread{
				width: 28rpx;
				height: 28rpx;
				background: #FF834A;
				border-radius: 50%;
				text-align: center;
				line-height: 28rpx;
				font-size: 24rpx;
				color: #FFFFFF;
				margin-top: 23rpx;
				margin-left: 30rpx;
			}
		}
	}
	.list-title{
		font-size: 32rpx;
		color: #333333;
		font-weight: bold;
		margin-top: 30rpx;
	}
	.line{
		width: 750rpx;
		height: 16rpx;
		background: #EBEBEB;
		margin-left: -32rpx;
	}
	.comment {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 30rpx;
		.left {
			display: flex;
			align-items: center;
			position: relative;
			.rots{
				width: 18rpx;
				height: 18rpx;
				background: #FF834A;
				border: 2rpx solid #FFFFFF;
				border-radius: 50%;
				position: absolute;
				left: 70rpx;
				top: 5rpx;
			}
			.commentIcon{
				width: 88rpx;
				height: 88rpx;
				margin-right: 20rpx;
			}
		}
	}
</style>

<style>
	page {
		background: #fff;
		padding: 0 32rpx;
		box-sizing: border-box;
	}
</style>
