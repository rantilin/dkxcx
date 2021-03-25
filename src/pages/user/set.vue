<template>
	<view>
		<view class="user">
			<u-avatar size="98" src="../../static/image/doctor.png"></u-avatar>
			<view class="deil">
				微信昵称:{{wxname}}
			</view>
		</view>
		<view class="list border-butom">
			<view class="name">
				小孩姓名
			</view>
			<input class="deil" v-model="username" />
		</view>
		<view class="list">
			<view class="name">
				电话号码
			</view>
			<input class="deil" v-model="phone" />
		</view>
		<view class="buturn" @tap='save'>
			保存信息
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				wxname: uni.getStorageSync('user').nicknames,
				username: uni.getStorageSync('user').user_name,
				phone: uni.getStorageSync('user').user_mobile,
			}
		},
		onShow() {
			// this.wxname = JSON.parse(uni.getStorageInfoSync('user')).nicknames
			console.log();
		},
		methods: {
			save() {
				let userInfo = {
					nicknames: this.wxname,
					user_name: this.username,
					user_mobile: this.phone,
					key: this.$db.get('key'),
				}
				this.$api.saveUserInfo(userInfo).then(res => {
					console.log(res);
				})
			}
		},
	}
</script>
<style lang="scss" scoped>
	page {
		background: #fff;
	}

	.user {
		width: 686rpx;
		margin: 22rpx auto;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.deil {
			width: 260rpx;
			color: rgb(192, 196, 204);
			font-size: 26rpx;
			text-align: right;
		}
	}

	.list {
		width: 686rpx;
		margin: auto;
		padding: 56rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.name {
			font-size: 30rpx;
			color: #555555;
		}

		.deil {
			color: #333333;
			font-size: 26rpx;
			text-align: right;
		}
	}

	.border-butom {
		border-bottom: solid 1px #EBEBEB;
	}

	.buturn {
		width: 686rpx;
		height: 88rpx;
		margin: 100rpx auto;
		line-height: 88rpx;
		background: #0BC788;
		border-radius: 44rpx;
		text-align: center;
		color: #fff;
	}
</style>
