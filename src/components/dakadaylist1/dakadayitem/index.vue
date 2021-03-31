<template>
	<view class="xm-dakaday_item">
		<view class="xm_day" :class="[select?'active':'',item.timeStamp > nowtime?'dashed':'']" v-if=" type == 'date'">
			<!-- <view class="xm_daka-month xm_daka-theme_1">{{item.date.month}}月</view> -->
			<!-- <view class="xm_daka-day xm_daka-theme_1" >{{item.date.day}}</view> -->
			<!-- <view class="xm_badge" >
					<u-icon  name="../../static/image/dakanull.png" size="20"></u-icon>
				</view> -->
			<template>
				<u-circle-progress active-color="#0BC788" inactive-color='rgba(0,0,0,0)' bg-color='rgba(0,0,0,0)' :percent="num" width="100" :border-width='4'>
					<view class="u-progress-content">
						<!-- <view class="u-progress-dot"></view> -->
						<!-- <text class='u-progress-info'>查找中</text> -->
						<view class="u-progress-info" v-if="num!=0">
							{{num}}%
						</view>
					</view>
				</u-circle-progress>
			</template>
			<view class="week" :class="select?'active':''">{{item.week}}</view>
		</view>
		<view class="xm_day action" v-if="type == 'all'" @click="morecick">
			{{action?'收起':'展开'}}
		</view>
		<template v-if="type=='date'">
			<!-- <view class="xm_status" >
					{{item.timeStamp > nowtime?'待打卡':'缺卡'}}
				</view> -->
			<view class="xm_daka-month xm_daka-theme_1">{{item.date.month}}月{{item.date.day}}</view>
		</template>
	</view>
</template>
<script>
	export default {
		props: {
			item: '',
			type: '',
			select: false,
			num:0
		},
		data() {
			return {
				action: false,
				nowtime: new Date().getTime(),
				
			}
		},
		methods: {
			morecick() {
				if (this.action) {
					this.action = false;
					this.$emit('more', false);
				} else {
					this.action = true;
					this.$emit('more', true);
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.u-progress-content {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		
		.u-progress-dot {
			width: 16rpx;
			height: 16rpx;
			border-radius: 50%;
			background-color: #fb9126;
		}
		
		.u-progress-info {
			font-size: 28rpx;
			padding-left: 16rpx;
			letter-spacing: 2rpx
		}
	.xm-dakaday_item {
		width: 106rpx;
	}

	.xm-dakaday_item,
	.xm-dakaday_item .xm_day {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 10rpx;
	}

	.xm-dakaday_item .xm_day {
		width: 104rpx;
		height: 104rpx;
		border-radius: 50%;
		border: 4rpx solid #ededee;
		position: relative;
		box-sizing: border-box;
		margin-top: 10rpx;
	}

	.xm-dakaday_item .xm_day.action {
		border: 4rpx dashed #ededee;
		font-size: 13px;
		color: #666;
	}

	.xm-dakaday_item .xm_day .xm_badge {
		position: absolute;
		top: 2px;
		right: -7rpx;
		z-index: 10;
		border-radius: 50%;
		color: #fff;
		width: 14px;
		height: 14px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.xm-dakaday_item .xm_day .xm_badge::before {
		content: "";
		position: absolute;
		width: 10px;
		height: 10px;
		left: 50%;
		top: 50%;
		transform: translate3d(-50%, -50%, 0);
		border-radius: 50%;
		background-color: #fff;
		z-index: -1;
	}

	.xm-dakaday_item .xm_day .xm_badge_weidaka {
		background-color: #fb602d;
	}

	.xm-dakaday_item .xm_day .xm_daka-month {
		font-size: 20rpx;
	}

	.xm-dakaday_item .xm_day .xm_daka-day {
		font-size: 30rpx;
		line-height: 1em;
		margin-bottom: 15px;
	}

	.xm_daka-theme_1 {
		color: #d5dadc;
	}

	.xm_status {
		width: 100%;
		text-align: center;
		color: #a8adb1;
		font-size: 14px;
		line-height: 26px;
	}

	.xm_day.active {
		// border-color: #0BC788;
		// background-color: #0BC788;
		// color: #fff;
	}

	.xm_day.active .xm_daka-theme_1 {
		color: #fff;
	}

	.xm_status_action {
		color: #0BC788;
	}

	.xm_day.dashed {
		border-style: dashed;
	}

	.week {
		position: absolute;
		bottom: -5px;
		left: 0;
		right: 0;
		font-size: 18rpx;
		color: #BBBBBB;
		text-align: center;
		width: 62rpx;
		padding: 1px 0;
		border-radius: 100rpx;
		margin: auto;
		z-index: 97;
		background: #fff;
		border: 1px solid #D5D5D5;
	}

	.week.active {
		background: #0BC788;
		color: #fff;
		border-color: #fff;
	}
</style>
