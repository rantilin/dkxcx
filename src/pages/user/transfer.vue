<template>
	<view class="transfer">
		<view class="transferTitle">
			选择要转让的医生
		</view>
		<view class="list-box">
			<view class="item-box" v-for="(item,index) in list" :style="index!=list.length-1?'border-bottom:1rpx #EBEBEB solid':'border:none'" :key='index'>
				<view class="" style="display: flex;align-items: center;">
					<u-avatar size="60" :src="item.user_avatar"></u-avatar>
					<view class="name">
						{{item.user_name}}
					</view>
				</view>
				<view class="button" @tap='transfer(item.ID)'>
					转让给TA
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
				list:[],
				department_id:0
			}
		},
		onLoad(o) {
			this.department_id = o.id
			this.init()
		},
		methods: {
			init(){
				let data = {
					key: this.$db.get('key'),
					department_id: this.department_id
				}
				this.$api.getDoctor(data, (res => {
					this.list = res.datas
				}))
			},
			transfer(id){
				let that = this
				uni.showModal({
					title:"提示",
					content:'您确定将科室管理员转让给张秋医生转让后张秋医生将有所有权限。',
					success(res) {
						if(res.confirm){
							let data = {
								key: that.$db.get('key'),
								department_id: that.department_id,
								doctorID:id
							}
							that.$api.transferDepart(data, (res => {
								if (res.code == 200) {
									uni.showToast({
										title: "转让成功"
									})
								}
							}))
						}
					}
				})
			},
		}
	}
</script>

<style lang='scss' scoped>
	.transferTitle {
		font-size: 28rpx;
		color: #666666;
		margin-top: 32rpx;
	}

	.list-box {
		margin-top: 32rpx;
		background-color: #fff;
		border-radius: 12px;
		padding: 0 24rpx;
	}

	.item-box {
		display: flex;
		height: 92rpx;
		align-items: center;
		justify-content: space-between;
	}

	.name {
		font-size: 28rpx;
		color: #333333;
		margin-left: 16rpx;
	}

	.button {
		width: 131rpx;
		height: 42rpx;
		border-radius: 21rpx;
		border: 1rpx solid #FF834A;
		font-size: 24rpx;
		color: #FF834A;
		line-height: 42rpx;
		text-align: center;
	}

	.line {
		width: 638rpx;
		height: 1rpx;
		background: #EBEBEB;
		margin: auto;
	}
</style>
<style>
	page {
		background: #F5F6F7;
		padding: 0 32rpx;
	}
</style>
