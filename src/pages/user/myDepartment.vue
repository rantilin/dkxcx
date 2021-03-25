<template>
	<view>
		<view class="addtitle" v-if="list.length>0">
			选择要设置的科室
		</view>
		<view class="" v-if="list.length>0">
			<view class="" v-for="(item,index) in list" :key='index'>
				<view class="list-cell">
					<u-avatar :src="item.user_avatar" size="60"></u-avatar>
					<text class="name">{{item.app_name}}</text>
					<view class="butorn" @click="set(item.ID)">科室设置</view>
				</view>
			</view>
		</view>
		<view class="" v-else>
			<defaultPage :status='4' :text='"暂无科室"'></defaultPage>
		</view>
	</view>
</template>
<script>
	import defaultPage from '../../components/default.vue'
 	export default {
		data() {
			return {
				list:[],
				departmentId:0
			}
		},
		onLoad() {
			this.init()
		},
		components:{
			defaultPage
		},
		methods: {
			init(){
				let data = {
					key: this.$db.get('key'),
					user_id: this.$db.get('user').ID
				}
				this.$api.getMyCreateDepart(data,
					(res => {
						this.list = res.datas
					})
				)
			},
			set(id){
				uni.navigateTo({
					url:'/pages/user/setDepart?id='+id
				})
			},
		},
	}
</script>
<style lang="scss" scoped>
	.addtitle {
		width: 686rpx;
		margin: 32rpx auto;
	}

	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 686rpx;
		margin: 16rpx auto;
		padding: 0 24rpx;
		overflow: hidden;
		color: #323233;
		font-size: 28rpx;
		line-height: 96rpx;
		background-color: #fff;
		border-radius: 12rpx;
		align-items: center;

		.name {
			margin-left: 24rpx;
		}

		.butorn {
			margin-left: auto;
			width: 130rpx;
			height: 52rpx;
			line-height: 52rpx;
			background: #0BC788;
			border-radius: 27rpx;
			font-size: 24rpx;
			color: #fff;
			text-align: center;
		}
	}
</style>
