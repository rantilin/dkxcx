<template>
	<view class="">
		<scroll-view scroll-y="true">
			<view class="list" v-for="(item,index) in list" :key='index'>
				<view class="time">
					{{item.time}}
				</view>
				<view class="doctor" v-if="item.type==1">
					<u-avatar :src="item.avatar"></u-avatar>
					<view class="doctor-conversation">
						{{item.content}}
						<image class="leftImg" src="../../static/image/left.png" mode=""></image>
					</view>
				</view>
				<view class="parent" v-if="item.type==2">
					<view class="parent-conversation">
						{{item.content}}
						<image class="rightImg" src="../../static/image/right.png" mode=""></image>
					</view>
					<u-avatar :src="item.avatar"></u-avatar>
				</view>
			</view>
		</scroll-view>
		<view class="bottom-warp">
			<input class="bottom-warp-input" v-model="ins" type="text" value="" placeholder="请输入文字" />
			<image class="send" src="../../static/image/send.png" mode="" @tap='send'></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						avatar: "../../static/image/doctor.png",
						content: "您好，周太才家长记得去完成今日的的打开任务。",
						time: "2021-03-20 10:48",
						type: "1",
					},
					{
						avatar: "../../static/image/patriarch.png",
						content: "好的，一直在忙，稍后就去让小孩完成打卡训练。",
						time: "2021-03-20 10:48",
						type: "2",
					},
					{
						avatar: "../../static/image/doctor.png",
						content: "嗯",
						time: "2021-03-20 10:48",
						type: "1",
					},
					{
						avatar: "../../static/image/patriarch.png",
						content: "哦",
						time: "2021-03-20 10:48",
						type: "2",
					},{
						avatar: "../../static/image/doctor.png",
						content: "嗯",
						time: "2021-03-20 10:48",
						type: "1",
					},
					{
						avatar: "../../static/image/patriarch.png",
						content: "哦",
						time: "2021-03-20 10:48",
						type: "2",
					},{
						avatar: "../../static/image/doctor.png",
						content: "嗯",
						time: "2021-03-20 10:48",
						type: "1",
					},
					{
						avatar: "../../static/image/patriarch.png",
						content: "哦",
						time: "2021-03-20 10:48",
						type: "2",
					},{
						avatar: "../../static/image/doctor.png",
						content: "嗯",
						time: "2021-03-20 10:48",
						type: "1",
					},
					{
						avatar: "../../static/image/patriarch.png",
						content: "哦",
						time: "2021-03-20 10:48",
						type: "2",
					},
				],
				ins:''
			};
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: "设置标题",
			});
		},
		updated() {
			uni.pageScrollTo({
			    scrollTop: 99999999999
			})
		},
		methods: {
			send() {
				this.list.push({
					avatar: "../../static/image/patriarch.png",
					content: this.ins,
					time: "2021-03-20 10:48",
					type: "2",
				})
				this.ins=''
			}
		}
	};
</script>
<style lang='scss' scoped>
	.list {
		display: flex;
		flex-flow: column;
		padding: 0 32rpx;
	}

	.time {
		font-size: 24rpx;
		color: #666666;
		text-align: center;
		margin-top: 32rpx;
		margin-bottom: 24rpx;
	}

	.doctor {
		display: flex;
		margin-bottom: 48rpx;

		.doctor-conversation {
			max-width: 457rpx;
			background: #FFFFFF;
			border-radius: 8rpx;
			padding: 23rpx 32rpx;
			box-sizing: border-box;
			font-size: 28rpx;
			color: #333333;
			position: relative;
			margin-left: 21rpx;

			.leftImg {
				width: 9rpx;
				height: 13rpx;
				position: absolute;
				top: 30rpx;
				left: -9rpx;
			}
		}
	}

	.parent {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 48rpx;

		.parent-conversation {
			max-width: 457rpx;
			background: #0BC788;
			border-radius: 8rpx;
			padding: 23rpx 32rpx;
			box-sizing: border-box;
			font-size: 28rpx;
			color: #FFFFFF;
			position: relative;
			margin-right: 21rpx;

			.rightImg {
				width: 9rpx;
				height: 13rpx;
				position: absolute;
				top: 30rpx;
				right: -9rpx;
			}
		}
	}

	.bottom-warp {
		width: 750rpx;
		height: 80rpx;
		background: #FFFFFF;
		padding: 8rpx 32rpx;
		box-sizing: border-box;
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		align-items: center;
		justify-content: space-between;

		.bottom-warp-input {
			width: 616rpx;
			height: 64rpx;
			border-radius: 12rpx;
			border: 1rpx solid #DDDDDD;
			padding: 10rpx 24rpx;
			box-sizing: border-box;
		}

		.send {
			width: 36rpx;
			height: 36rpx;
		}
	}
</style>
<style>
	page {
		background-color: #f5f6f7;
		padding-bottom: 64rpx;
	}
</style>
