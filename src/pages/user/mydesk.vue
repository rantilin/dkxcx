<template>
	<view>
		<view class="addtitle" v-if="list.length>0">
			选择要退出的科室
		</view>
		<view class="" v-if="list.length>0">
			<view class="" v-for="(item,index) in list" :key='index'>
				<view class="list-cell">
					<u-avatar :src="item.user_avatar" size="60"></u-avatar>
					<text class="name">{{item.app_name}}</text>
					<view class="butorn" @click="exit(item.ID)">退出科室</view>
				</view>
			</view>
		</view>
		<view class="" v-else>
			<defaultPage :status='4' :text='"暂无科室"'></defaultPage>
		</view>
		<!-- 提示框 -->
		<u-modal v-model="config.iscread" :title="config.title" :content="config.tiptext" :show-confirm-button="config.confirm"
			:show-cancel-button="config.cancel" @confirm="exitOk">
		</u-modal>
	</view>
</template>
<script>
	import defaultPage from '../../components/default.vue'
 	export default {
		data() {
			return {
				config: {
					title: '',
					iscread: false,
					tiptext: '',
					confirm: true,
					cancel: false,
				},
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
				this.$api.getMyJoinDepart(data,
					(res => {
						this.list = res.datas
					})
				)
			},
			exit(id) {
				this.config.title = '确定要退出多动症科室吗？'
				this.config.cancel = true
				this.config.confirm = true
				this.config.tiptext = '确认此科室是否正确，防止错加乱加 以免造成数据错误！'
				this.config.iscread = true
				this.departmentId = id
			},
			exitOk(){
				let data = {
					key: this.$db.get('key'),
					user_id: this.$db.get('user').ID,
					department_id:this.departmentId
				}
				this.$api.quitDepartment(data,
					(res => {
						console.log(res);
						this.init()
					})
				)
			}
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
			background: #ff834a;
			border-radius: 27rpx;
			font-size: 24rpx;
			color: #fff;
			text-align: center;
		}
	}
</style>
