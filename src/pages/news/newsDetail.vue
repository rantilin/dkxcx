<template>
	<view class="">
		<scroll-view scroll-y="true">
			<view class="list" v-for="(item,index) in list" :key='index'>
				<view class="time">
					{{item.private_time}}
				</view>
				<view class="doctor" v-if="item.type_status==1">
					<u-avatar :src="item.user_avatar"></u-avatar>
					<view class="doctor-conversation">
						{{item.content}}
						<image class="leftImg" src="../../static/image/left.png" mode=""></image>
					</view>
				</view>
				<view class="parent" v-if="item.type_status==2">
					<view class="parent-conversation">
						{{item.content}}
						<image class="rightImg" src="../../static/image/right.png" mode=""></image>
					</view>
					<u-avatar :src="item.user_avatar"></u-avatar>
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
	import {
		formatDateTime
	} from "../../config/common.js"
	export default {
		data() {
			return {
				list: [],
				ins: '',
				send_id: 0,
				msgList: []
			};
		},
		onLoad(o) {
			this.send_id = o.id
			let title = o.name + (o.type == 1 ? '医生' : '家长')
			uni.setNavigationBarTitle({
				title: title
			});
			this.init()
		},
		updated() {
			uni.pageScrollTo({
				scrollTop: 99999999999
			})
		},
		methods: {
			init() {
				let that = this
				let data = {
					key: this.$db.get("key"),
					send_id: this.send_id,
					receive_id: this.$db.get("user").ID
				}
				this.$api.notice_detail(data, (res => {
					console.log(res);
					if (res.code == 200) {
						for (let item of res.datas) {
							item.private_time = formatDateTime(Number(item.private_time) * 1000)
							if (that.$db.get("user").type_status != item.type_status && item.message_status ==
								1) {
								that.msgList.push(item.ID)
							}
						}
						that.msgList = that.msgList.join()
						that.$api.edit_private({
							key: that.$db.get("key"),
							id_arr: that.msgList
						}, res => {})
						that.list = res.datas
					}
				}))
			},
			send() {
				let data = {
					key: this.$db.get("key"),
					send_id: this.$db.get("user").ID,
					receive_id: this.send_id,
					content:this.ins
				}
				this.$api.depart_private(data,res=>{
					console.log(res);
				})
				this.list.push({
					user_avatar: this.$db.get("user").user_avatar?'this.$db.get("user").user_avatar':'http://172.168.50.20:3333/data/upload/shop/common/parent.png',
					content: this.ins,
					private_time: formatDateTime(new Date()),
					type_status: "2",
				})
				this.ins = ''
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
