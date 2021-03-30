<template>
	<view>
		<view class="task">
			<view class="onetitle">
				<u-avatar src="" class="portrait" size="76"></u-avatar>
				<view class="introduce">
					<view class="title">
						{{type==1?userInfo.user_name:'1222'}}
					</view>
					<view class="textinfo">
						<text class="one">科室:</text>
						<text class="two">{{depart}}</text>
						<text class="three">发布于{{details.issue_time_s}}</text>
					</view>
				</view>
				<view class="clockime">编辑</view>
			</view>
			<view class="carddetail">
				<view class="contdetail">
					{{details.content}}
				</view>
				<view class="imglist">
					<view class="item" v-for="(item,index) in details.fileid_route" :key='index'>
						<u-image :src="item.fileid_route" width="174" height="157">
						</u-image>
					</view>
				</view>
				<view class="bottom">
					<u-icon size="32" class="d-icon" name="../../../static/image/give.png"></u-icon>
				</view>
				<view class="comment">
					<comments :give_clock_all='details.give_clock_all' :clock_private='details.clock_private'></comments>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import comments from './comment/index.vue'
	export default {
		props: ["details", "type","depart"],
		data() {
			return {
				userInfo: {}
			}
		},
		name: "record",
		components: {
			comments
		},
		data() {
			return {

			};
		},
		created() {
			this.userInfo = this.$db.get('user')
		},
		watch: {

		}
	}
</script>

<style lang="scss" scoped>
	.task {
		margin-top: 24rpx;
		width: 100%;
		background: #ffffff;
		border-radius: 12rpx;
		padding: 24rpx;

		.onetitle {
			width: 100%;
			display: flex;

			.portrait {
				width: 38rpx;
				margin: 10rpx 24rpx 0 0;
			}

			.introduce {
				width: 400rpx;

				.title {
					font-size: 32rpx;
					color: #333333;
					font-weight: bold;
				}

				.textinfo {
					width: 100%;
					padding: 6rpx 0 10rpx 6rpx;

					.one {
						font-size: 28rpx;
						color: #333333;
					}

					.two {
						color: #666666;
						font-size: 24rpx;
						margin: 0 10rpx;
					}

					.three {
						color: #999999;
						font-size: 24rpx;
					}
				}
			}

			.clockime {
				margin-left: auto;
				padding: 0 20rpx;
				height: 46rpx;
				line-height: 46rpx;
				background: #F5F6F7;
				font-size: 24rpx;
				color: #0BC788;
				text-align: center;
			}

			.on {
				color: #AAAAAA;
			}
		}

		.carddetail {
			width: 550rpx;
			margin-left: 105rpx;

			.contdetail {
				width: 100%;
				font-size: 28rpx;
				line-height: 40rpx;
				color: #666666;
			}

			.imglist {
				width: 100%;
				margin: 24rpx auto;
				display: flex;

				.item {
					width: 174rpx;
					height: 157rpx;
				}

				.item:nth-child(2) {
					margin: 0 10rpx;
				}
			}

			.bottom {
				width: 95%;
				margin: auto;
				display: flex;

				.d-icon {
					margin-left: auto;
				}
			}

			.comment {
				margin: 20rpx auto;
			}
		}
	}
</style>
