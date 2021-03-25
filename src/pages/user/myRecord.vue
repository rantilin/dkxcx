<template>
	<view class="myRecord">
		<view class="warp">
			<view class="item" v-for="(item,index) in list" :key = 'index'>
				<view class="date">
					{{item.issue_time_s}}
				</view>
				<record :details='item' :type='1' :depart='depart'></record>
			</view>
		</view>
	</view>
</template>

<script>
	import record from '@/components/record'
	import {timeToDate} from '../../config/common.js'
	export default{
		data(){
			return{
				task_id:0,
				list:[],
				depart:''
			}
		},
		components:{
			record
		},
		onLoad(o) {
			this.task_id = o.task_id
			this.depart = o.depart
			this.init()
		},
		methods:{
			init(){
				let data ={
					key: this.$db.get('key'),
					user_id: this.$db.get('user').ID,
					task_id:this.task_id
				}
				this.$api.getRecordDetail(data,(res=>{
					console.log(res);
					this.list = res.datas
					for (let item of this.list) {
						item.issue_time_s = new Date(item.issue_time_s).getTime()
						item.issue_time_s = timeToDate(item.issue_time_s,false,2)
					}
					console.log(this.list);
				}))
			}
		}
	}
</script>
<style lang="scss" scoped>
	.myRecord{
		.warp{
			width: 686rpx;
			background-color: #fff;
			margin: auto;
			margin-top: 40rpx;
			.item{
				padding-top: 32rpx;
				// padding-bottom: 32rpx;
				border-bottom: 1rpx solid #ebebeb;
				position: relative;
				.date{
					// position: absolute;
					// top: 32rpx;
					// left: 24rpx;
					font-size: 36rpx;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: #333333;
					line-height: 36rpx;
					margin: 0rpx 0 0 24rpx;
				}
			}
		}
	}
</style>
<style>
	page{
		background-color: #F5F6F7;
	}
</style>
