<template>
	<view>
		<view class="dakalist">
			<view v-for="(item,index) in dateArr" :key="index" @click.stop="selectDateEvent(index, item)">
				<dakadayitem class="ldate" :select="dateActive == index" :item="item" type="date" v-show=" index < num">
				</dakadayitem>
			</view>
			<dakadayitem class="ldate" type="all" @more="morecick"></dakadayitem>
		</view>
	</view>
</template>
<script>
	import dakadayitem from './dakadayitem/index'
	import {
		dateData
	} from './date.js';
	import {
		timeToDate
	} from "../../config/common.js";

	export default {
		components: {
			dakadayitem,
		},
		props: {
			//选中的tab颜色
			selectedTabColor: {
				type: String,
				default: '#fff'
			},
			startTime: {
				type: Number,
				default: 0
			},
			endTime: {
				type: Number,
				default: 0
			},
			department_id: {
				type: String,
				default: ''
			},
			task_id: {
				type: String,
				default: ''
			},
		},
		data() {
			return {
				dateArr: [], //日期数据
				dateActive: 0, //选中的日期索引
				dayindex: 0, //当天牵引
				num: 9,
				other_info: [],
				clock_info: []
			}
		},
		created() {
			//获取日期tab数据
		},
		watch: {
			startTime(value) {
				console.log(value, 51613);
				this.dateArr = dateData(this.startTime, this.endTime);
				let index = this.dateArr.findIndex((value) => {
					return new Date(value.timeStamp).toDateString() === new Date().toDateString()
				})
				this.dayindex = index
				this.dateActive = index
			}
		},
		methods: {
			morecick(val) {
				if (val) {
					this.num = this.dateArr.length
				} else {
					this.num = 9
				}
			},
			selectDateEvent(index, item) {
				if (index > this.dayindex) {
					uni.showToast({
						title: '未到打卡时间',
						icon: 'none',
						duration: 1000,
					})
				} else {
					let info = {
						key: this.$db.get("key"),
						department_id: this.department_id,
						task_id: this.task_id,
						clock_time: timeToDate(item.timeStamp, true)
					}
					this.$api.parentSignDetail(info, (res => {
						if (res.code == 0) {
							uni.showToast({
								title: res.datas.error,
								icon: 'none'
							})
							res.datas.clock_info = []
							this.$emit('func', res.datas.clock_info,item)
						}else{
							for (let item of res.datas.clock_info) {
								if (item.give_clock_all == null) {
									item.give_clock_all = []
								}
							}
							this.$emit('func', res.datas.clock_info,item)
						}
					}))
					this.dateActive = index;
				}
				//  this.selectDate = `${this.dateArr[index]['date']}`;
				//  this.$emit('selectTime', `${this.selectDate}`);
			},
		}
	}
</script>
<style lang="scss" scoped>
	.dakalist {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		padding: 10rpx;

		.ldate {
			margin: 4rpx 12rpx;
		}
	}
</style>
