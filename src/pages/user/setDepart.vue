<template>
	<view class="setDepart">
		<view class="topCard">
			<view class="topCardItem">
				<view class="topCardItemLeft">
					科室名称
				</view>
				<view class="topCardItemRight">
					<input class="topCardItemRightInput" v-model="name" type="text" />
				</view>
			</view>
			<view class="line"></view>
			<view class="topCardItem">
				<view class="topCardItemLeft">
					预设人数
				</view>
				<view class="topCardItemRight">
					<view class="topCardItemRight">
						<input class="topCardItemRightInput" v-model="num" type="text" />
					</view>
				</view>
			</view>
			<view class="line"></view>
			<view class="topCardItem">
				<view class="topCardItemLeft">
					科室口令
				</view>
				<view class="topCardItemRight">
					<view class="number topCardItemLeft">
						{{app_watchword}}
					</view>
					<u-icon class="copy" name="/static/image/copyIcon.png" size="28"></u-icon>
				</view>
			</view>
		</view>
		<view class="topCard">
			<view class="topCardItem" @tap='transfer'>
				<view class="topCardItemLeft">
					转让科室管理员权限
				</view>
				<view class="topCardItemRight">
					<u-icon name="arrow-right" color="#999999" size="18"></u-icon>
				</view>
			</view>
			<view class="line"></view>
			<view class="topCardItem" @tap='exit'>
				<view class="topCardItemLeft">
					退出科室
				</view>
				<view class="topCardItemRight">
					<u-icon name="arrow-right" color="#999999" size="18"></u-icon>
				</view>
			</view>
			<view class="line"></view>
			<view class="topCardItem" @tap='dissolution'>
				<view class="topCardItemLeft">
					解散科室
				</view>
				<view class="topCardItemRight">
					<u-icon name="arrow-right" color="#999999" size="18"></u-icon>
				</view>
			</view>
		</view>
		<view class="button" @tap='save'>
			保存信息
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: "多动症科室",
				num: "20",
				departId: 0,
				app_watchword: ''
			}
		},
		onLoad(o) {
			this.departId = o.id
			console.log(this.departId);
			this.init()
		},
		methods: {
			init() {
				let data = {
					key: this.$db.get('key'),
					ID: this.departId
				}
				this.$api.calssdeil(data, res => {
					this.name = res.datas.app_name
					this.num = res.datas.people_num
					this.app_watchword = res.datas.app_watchword
				})
			},
			transfer(){
				uni.navigateTo({
					url:'/pages/user/transfer?id='+this.departId
				})
			},
			save(){
				let data = {
					key: this.$db.get('key'),
					ID: this.departId,
					app_name:this.name,
					people_num:this.num
				}
				this.$api.saveDepartDetail(data, res => {
					// this.name = res.datas.app_name + "科室"
					// this.num = res.datas.people_num
					// this.app_watchword = res.datas.app_watchword
					if (res.code == 200) {
						uni.showToast({
							title: "修改成功"
						})
					}
				})
			},
			exit() {
				let that = this
				uni.showModal({
					title: "提示",
					content: "您确定要退出科室吗？",
					confirmColor: "#333333",
					success(res) {
						if (res.confirm) {
							let data = {
								key: that.$db.get('key'),
								department_id: that.departId
							}
							that.$api.exit_depart(data, res => {
								if (res.code == 200) {
									uni.navigateBack(1)
									uni.showToast({
										title: "退出成功"
									})
								}
							})
						}
					}
				})
			},
			dissolution() {
				uni.showModal({
					title: "提示",
					content: "您确定要解散科室吗？",
					confirmColor: "#333333",
					success(res) {
						if (res.confirm) {
							let data = {
								key: that.$db.get('key'),
								user_id:that.$db.get('user').ID,
								department_id: that.departId
							}
							that.$api.doctor_transfer_del(data, res => {
								if (res.code == 200) {
									uni.navigateBack(1)
									uni.showToast({
										title: "解散"
									})
								}
							})
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.setDepart {
		.topCard {
			width: 686rpx;
			height: 286rpx;
			background: #FEFFFE;
			border-radius: 12rpx;
			margin: auto;
			margin-top: 32rpx;

			// padding: 0 24rpx;
			.line {
				width: 638rpx;
				height: 1rpx;
				background: #EBEBEB;
				margin: auto;
			}

			.topCardItem {
				width: 638rpx;
				height: 94rpx;
				margin: auto;
				display: flex;
				align-items: center;
				justify-content: space-between;


				.topCardItemLeft {
					font-size: 32rpx;
					color: #666666;
				}

				.number {
					font-size: 28rpx;
					color: #999999;
				}

				.topCardItemRight {
					font-size: 28rpx;
					color: #333333;
					display: flex;
					align-items: center;

					.topCardItemRightInput {
						text-align: right;
					}

					.copy {
						margin-left: 14rpx;
					}
				}
			}
		}

		.bottomCard {
			width: 686rpx;
			height: 189rpx;
			background: #FEFFFE;
			border-radius: 12rpx;
		}

		.button {
			width: 686rpx;
			height: 88rpx;
			background: #0BC788;
			border-radius: 44rpx;
			font-size: 32rpx;
			color: #FEFFFE;
			line-height: 88rpx;
			text-align: center;
			margin: auto;
			margin-top: 75rpx;
		}
	}
</style>

<style>
	page {
		background: #F5F6F7;
	}
</style>
