<template>
	<view>
		<view class="backg">
			<view class="title">
				{{headInfo.task_title}}
			</view>
			<view class="emum">
				科室：{{headInfo.app_name}}
			</view>
			<view class="emum">
				发布于：{{headInfo.openTime}}
			</view>
		</view>
		<view class="taskcont">
			<view class="content" :class="contmore?'more':''">
				{{headInfo.describes}}
			</view>
			<view class="imglist" style="justify-content: flex-start;" v-for="(item,index) in headInfo.fileid_route"
				:key='index'>
				<u-image :src="item.fileid_route" width="206" height="186" class="item"></u-image>
			</view>
			<!-- <view class="textnode">
				<u-icon name="/static/image/post.png" size="28"></u-icon>
				<text>提交方式: 图片+文字</text>
			</view> -->
			<view class="textnode">
				<u-icon name="/static/image/time.png" size="28"></u-icon>
				<text>时间周期: {{headInfo.start_time1}}-{{headInfo.end_time1}}</text>
			</view>
			<view class="bottom" @click="taskmore">
				<u-icon :name="contmore?'arrow-down':'arrow-up'" color="#AAAAAA" size="30"></u-icon>
			</view>
		</view>

		<view class="tasklist">
			<view class="navlist">
				<view class="navigation">
					<u-tabs :list="list" inactive-color="#999999" active-color="#333333" class="nav"
						:bar-style="{background: '#0BC788'}" :is-scroll="false" :current="current" bar-height="6"
						@change="change">
					</u-tabs>
				</view>
				<view class="carryout" @click="goranking">
					排行榜
				</view>
			</view>
			<view class="dakatitle" v-if="headInfo.today>0&&headInfo.today<=headInfo.days+1">
				打卡第{{headInfo.today}}/{{headInfo.days+1}}天
			</view>
			<dakadaylist @func='getComponent' :department_id='info.department_id' :task_id='info.task_id'
				:startTime='headInfo.start_time' :endTime='headInfo.end_time'></dakadaylist>

			<view class="common" v-for="(item,index) in clock_info" :key='index'>
				<view class="task" v-if="current==1&&item.user_id!=id">
					<view class="onetitle">
						<u-avatar src="" class="portrait" size="76"></u-avatar>
						<view class="introduce">
							<view class="title">
								{{item.user_name}}*家长
							</view>
							<view class="textinfo">
								<text class="one">科室:</text>
								<text class="two">{{headInfo.app_name}}</text>
								<text class="three">发布于{{headInfo.openTime}}</text>
							</view>
						</view>
						<view class="clockime">编辑</view>
					</view>
					<view class="carddetail">
						<view class="contdetail">
							{{item.content}}
						</view>
						<view class="imglist" v-for="(item1,index1) in item.fileid_route" :key="index1">
							<view class="item">
								<u-image :src="item1.fileid_route" width="174" height="157"></u-image>
							</view>
						</view>
						<view class="bottom">
							<u-icon size="32" class="d-icon" name="/static/image/give.png"></u-icon>
						</view>
						<view class="comment">
							<comments :comList='item.clock_private' :list='item1.give_clock_all'
								:user_name='item.user_name'>
							</comments>
						</view>

					</view>
				</view>
				<view class="task" v-if="current==0&&item.user_id==id">
					<view class="onetitle">
						<u-avatar src="" class="portrait" size="76"></u-avatar>
						<view class="introduce">
							<view class="title">
								{{item.user_name}}*家长
							</view>
							<view class="textinfo">
								<text class="one">科室:</text>
								<text class="two">{{headInfo.app_name}}</text>
								<text class="three">发布于{{headInfo.openTime}}</text>
							</view>
						</view>
						<view class="clockime">编辑</view>
					</view>
					<view class="carddetail">
						<view class="contdetail">
							{{item.content}}
						</view>
						<view class="imglist">
							<view class="item" v-for="(item1,index1) in item.fileid_route" :key="index1">
								<u-image :src="item1.fileid_route" width="174" height="157"></u-image>
							</view>
						</view>
						<view class="bottom">
							<u-icon size="32" class="d-icon" name="/static/image/give.png"></u-icon>
						</view>
						<view class="comment">
							<comments :comList='item.clock_private' :list='item.give_clock_all'
								:user_name='item.user_name'>
							</comments>
						</view>

					</view>
				</view>
			</view>

		</view>

		<view class="bottomfix">
			<view class="left" @tap='nav'>
				<view class="iconsamll">
					<u-icon name="/static/image/mycard.png" size="40"></u-icon>
				</view>
				<view class="name">我的打卡</view>
			</view>
			<view class="" v-if="current==0">
				<view class="botrun" style="background: #EEEEEE;color: #CCCCCC;" v-if="buttonStatus==1">
					打卡完成
				</view>
				<view class="botrun" style="background: #EEEEEE;color: #CCCCCC;" v-if="buttonStatus==2">
					已结束打卡
				</view>
				<view class="botrun" @click="godaka()" v-if="buttonStatus==3">
					立即打卡
				</view>
				<view class="botrun" style="background: #EEEEEE;color: #CCCCCC;" v-if="buttonStatus==4">
					缺卡
				</view>
			</view>
			<view class="right">
				<view class="iconsamll">
					<u-icon name="/static/image/sharecard.png" size="40"></u-icon>
				</view>
				<view class="name">分享家长</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		timeToDate,
		getTime2Time
	} from "../../config/common.js";
	import dakadaylist from "@/components/dakadaylist/index";
	import comments from "@/components/comment/index";
	export default {
		components: {
			dakadaylist,
			comments,
		},
		data() {
			return {
				contmore: false,
				list: [{
						name: "我的打卡",
					},
					{
						name: "其他家长",
					},
				],
				info: {},
				current: 0,
				headInfo: {},
				clock_info: [],
				other_info: [],
				id: uni.getStorageSync("user").ID,
				status: 0,
				depart: "",
				doc: "",
				par: "",
				task_id: "",
				department_id: "",
				buttonStatus: 0,
				isDoc:false
			};
		},
		onLoad(o) {
			console.log(o);
			if (o.type == 1) {
				this.current = 1;
			} else {
				this.current = 0;
			}
			if(o.doc){
				this.isDoc = true
				this.list=[{
						name: "已打卡",
					},
					{
						name: "未打卡",
					}]
			}
			let time = timeToDate(new Date().getTime(), true)
			this.department_id = o.department_id
			this.task_id = o.task_id
			this.info = {
				key: this.$db.get("key"),
				department_id: o.department_id,
				task_id: o.task_id,
				clock_time: time
			}
			this.init();
		},
		methods: {
			getComponent(e, item) {
				this.clock_info = e;
				const stamp1 = new Date(new Date().toLocaleDateString())
				if (this.status != 1 && this.headInfo.today <= this.headInfo.days + 1 && this.headInfo.today >
					0 && this.clock_info.length > 0) {
					this.buttonStatus = 1
				}
				if (this.headInfo.today > this.headInfo.days + 1 || this.status == 1 || this.headInfo.today <
					0) {
					this.buttonStatus = 2
				}
				if (this.clock_info.length == 0 && this.status != 1 && this.headInfo.today <= this.headInfo
					.days + 1 && this.headInfo.today > 0) {
					this.buttonStatus = 3
				}
				if (item.timeStamp < stamp1 && this.clock_info.length == 0 && this.status != 1) {
					this.buttonStatus = 4
					console.log(this.buttonStatus, 7878);
				}
				// for (let item of this.clock_info) {
				//   if (item.type_status == 1) {
				//     this.doc = item.user_name;
				//   } else {
				//     this.par = item.user_name;
				//   }
				// }
				// console.log(this.par);
			},
			init() {
				let that = this;
				that.$api.parentSignDetail(that.info, (res) => {
					if (res.datas.error) {
						res.datas.clock_info = []
						for (let item of res.datas.clock_info) {
							if (item.give_clock_all == null) {
								item.give_clock_all = [];
							}
							if (item.ID == uni.getStorageSync("user").ID) {
								that.status = item.storage_status;
							}
						}
					}
					that.other_info = res.datas.other_info;
					that.clock_info = res.datas.clock_info;
					console.log(that.clock_info,546546);
					that.getTaskInfo()
				});

			},
			getTaskInfo() {
				let data = {
					key: this.info.key,
					task_id: this.info.task_id,
				};
				this.$api.getTaskInfoTitle(data, (res) => {
					res.datas.days = getTime2Time(
						timeToDate(res.datas.end_time),
						timeToDate(res.datas.start_time)
					);
					res.datas.today = getTime2Time(
						timeToDate(new Date().getTime() / 1000),
						timeToDate(res.datas.start_time)
					);
					res.datas.days = parseInt(res.datas.days);
					res.datas.today = parseInt(res.datas.today) + 1;
					res.datas.start_time1 = timeToDate(res.datas.start_time, false, 4);
					res.datas.end_time1 = timeToDate(res.datas.end_time, false, 4);
					res.datas.start_time = Number(res.datas.start_time);
					res.datas.end_time = Number(res.datas.end_time);
					res.datas.openTime = timeToDate(
						new Date(res.datas.issue_time),
						false,
						3
					);
					this.headInfo = res.datas;
					if (this.status != 1 && this.headInfo.today <= this.headInfo.days + 1 && this.headInfo.today >
						0 && this.clock_info.length > 0) {
						this.buttonStatus = 1
					}
					if (this.headInfo.today > this.headInfo.days + 1 || this.status == 1 || this.headInfo.today <
						0) {
						this.buttonStatus = 2
					}
					if (this.clock_info.length == 0 && this.status != 1 && this.headInfo.today <= this.headInfo
						.days + 1 && this.headInfo.today > 0) {
						this.buttonStatus = 3
					}
					console.log(this.status != 1 && this.headInfo.today <= this.headInfo.days + 1 && this.headInfo.today >
						0 && this.clock_info.length > 0);
					// if (item.timeStamp < stamp1 && this.clock_info.length == 0 && this.status != 1) {
					// 	this.buttonStatus = 4
					// 	console.log(this.buttonStatus, 7878);
					// }
				});
			},
			change(index) {
				this.current = index;
			},
			taskmore() {
				if (this.contmore) {
					this.contmore = false;
				} else {
					this.contmore = true;
				}
			},
			godaka() {
				uni.navigateTo({
					url: "/pages/task/dakadd?info=" + JSON.stringify(this.info),
				});
			},
			goranking() {
				uni.navigateTo({
					url: "/pages/task/ranking?info=" + JSON.stringify(this.info),
				});
			},
			nav() {
				uni.navigateTo({
					url: "/pages/user/myRecord?task_id=" +
						this.info.task_id +
						"&depart=" +
						this.headInfo.app_name,
				});
			},
		},
	};
</script>
<style lang="scss" scoped>
	@import "../../static/css/task.scss";
</style>
