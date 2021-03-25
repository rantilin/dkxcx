<template>
	<view>
		<template v-if="options1.length > 0">
			<u-dropdown class="topnav">
				<u-dropdown-item :title="title" @change='select' :options="options1"></u-dropdown-item>
			</u-dropdown>
		</template>
		
		<scroll-view class="content" scroll-y>
			<view v-if="list.length>0">
				<view class="assignment" v-for="(item,index) in list" :key = 'index'>
					<view class="task">
						<view class="onetitle">
							<u-avatar :src="item.user_avatar" class="portrait" size="76"></u-avatar>
							<view class="introduce">
								<view class="title">
									{{item.task_title}}
								</view>
								<view class="textinfo">
									<text class="one">{{item.user_name}}</text>
									<text class="two">医生</text>
									<text class="three">发布于{{item.issue_time_s}}</text>
								</view>
							</view>
						</view>
						<view class="twodepartment">
							科室:{{title}}
						</view>
						<view class="describe">
							{{item.describe}}
						</view>
						<view class="info" @tap='seeRecord(item.ID)'>
							<text class="d-text on">查看打卡记录</text>
						</view>
					</view>
				</view>
			</view>
			<view v-else>
				<defaultPage :status='4' :text='"暂无打卡记录"'></defaultPage>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	import defaultPage from '../../components/default.vue'
	export default {
		data() {
			return {
				value1: 1,
				options1: [],
				title:'',
				list:[]
			}
		},
		components:{defaultPage},
		onLoad() {
			this.init()
		},
		methods: {
			seeRecord(id){
				uni.navigateTo({
					url:'/pages/user/myRecord?task_id='+id+'&depart='+this.title
				})
			},
			init() {
				let data = {
					key: this.$db.get('key'),
					user_id: this.$db.get('user').ID
				}
				this.$api.getMyClockInfo(data, (res => {
					let i = 1
					this.title = res.datas.depart_info[0].app_name
					for (let item of res.datas.depart_info) {
						this.options1.push({
							label: item.app_name,
							value: i++,
							department_id: item.department_id
						})
					}
					console.log(this.options1);
				}))
			},
			select(i) {
				this.title = this.options1[i-1].label
				let data = {
					key: this.$db.get('key'),
					user_id: this.$db.get('user').ID,
					department_id: this.options1[i-1].department_id
				}
				this.$api.getMyClockInfo(data, (res => {
					console.log(res.datas.task_info);
					if(res.datas.task_info==null){
						res.datas.task_info=[]
					}
					this.list = res.datas.task_info
				}))
			},
		}
	}
</script>
<style lang="scss" scoped>
	.topnav {
		background: #fff;
	}

	.content {
		width: 100%;
		height: 86vh;
	}

	.assignment {
		width: 686rpx;
		margin: 32rpx auto;

		.title {
			font-size: 36rpx;
			font-weight: bold;
			color: #333333;
			line-height: 40rpx;
			text-indent: 10rpx;
		}

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
						font-size: 30rpx;
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

				.datetime {
					width: 120rpx;
					padding: 0 0 0 14rpx;
					height: 30rpx;
					margin-top: 10rpx;
					margin-left: auto;
					font-size: 30rpx;
					font-weight: bold;
					color: #333333;
					line-height: 30rpx;
					border-left: solid 1px #d8d8d8;
				}

				.on {
					color: #AAAAAA;
				}
			}

			.twodepartment {
				color: #666666;
				font-size: 26rpx;
				margin: 15rpx auto 15rpx auto;
			}

			.describe {
				font-size: 28rpx;
				color: #666666;
				line-height: 40rpx;
			}
		}

		.info {
			margin-top: 30rpx;
			border-top: solid 1px #EBEBEB;
			display: flex;
			justify-content: center;
			align-items: center;
			line-height: 80rpx;

			.d-icon {
				margin-top: 5rpx;
				width: 28rpx;
				height: 28rpx;

			}

			.d-text {
				color: #999999;
				font-size: 30rpx;
				margin-left: 10rpx;
				font-weight: bold;
			}

			.on {
				color: #0BC788;
			}
		}
	}
</style>
