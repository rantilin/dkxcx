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
        发布于：{{headInfo.issue_time}}
      </view>
    </view>
    <view class="taskcont">
      <view class="content" :class="contmore?'more':''">
        {{headInfo.describes}}
      </view>
      <view class="imglist" style="justify-content: flex-start;" v-for="(item,index) in headInfo.fileid_route"
        :key="index">
        <u-image :src="item.fileid_route" width="206" height="186" class="item"></u-image>
      </view>
      <view class="textnode">
        <u-icon name="/static/image/time.png" size="28"></u-icon>
        <text>时间周期:{{headInfo.start_time1}}-{{headInfo.end_time1}}</text>
      </view>
      <view class="bottom" @click="taskmore">
        <u-icon :name="contmore?'arrow-down':'arrow-up'" color="#AAAAAA" size="30"></u-icon>
      </view>
    </view>

    <view class="taskpostcont">
      <textarea v-model="content" placeholder="请详细描述小孩每日状况，更加全面了解小孩情况" placeholder-style="textcontent"></textarea>
      <view class="listupload" style="display:flex;flex-wrap: wrap;">
        <u-image v-for="(item,index) in imgList" :key='index' style="margin-left:5rpx"
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2986114791,2667770254&fm=26&gp=0.jpg"
          width="206" height="186" class="item"></u-image>
      </view>
      <view class="listbut">
        <u-icon name="/static/image/picture.png" label="图片" @tap='upload' size="56" label-pos="bottom"
          label-size="26"></u-icon>
        <!-- <u-icon name="/static/image/audio.png" label="语音" size="56" label-pos="bottom" label-size="26"></u-icon>
        <u-icon name="/static/image/video.png" label="视频" size="56" label-pos="bottom" label-size="26"></u-icon> -->
      </view>

    </view>
    <view class="bottomflex">
      <view class="btn save" @tap='save'>
        保存草稿
      </view>
      <view class="btn post" @tap='post'>
        立即提交
      </view>
    </view>
  </view>
</template>
<script>
import { timeToDate, getTime2Time } from "../../config/common.js";

export default {
  data() {
    return {
      contmore: false,
      content: "",
      action: "http://www.example.com/upload", //上传地址
      fileList: [],
      info: {},
      other_info: [],
      clock_info: [],
      headInfo: {},
      imgList: [],
      status: 0,
    };
  },
  onLoad(o) {
    console.log(JSON.parse(o.info));
    this.info = JSON.parse(o.info);
    this.init();
    this.getDraft();
  },
  methods: {
    init() {
      let data = {
        key: this.info.key,
        task_id: this.info.task_id,
      };
      console.log();
      this.$api.getTaskInfoTitle(data, (res) => {
        res.datas.days = getTime2Time(
          timeToDate(res.datas.end_time),
          timeToDate(res.datas.start_time)
        );
        res.datas.today = getTime2Time(
          timeToDate(res.datas.end_time),
          timeToDate(new Date().getTime() / 1000)
        );
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
        console.log(this.headInfo, 222);
      });
    },
    post() {
      let that = this;
      let fileid_route = "";
      that.imgList.forEach(function (e, i) {
        if (i == 0) {
          fileid_route = e;
        } else if (i == that.imgList.length - 1) {
          fileid_route = fileid_route + "," + e;
        } else if (i < that.imgList.length - 1 && i > 0) {
          fileid_route = fileid_route + "," + e;
        }
      });
      
			if(that.status==0){
				let data = {
        content: that.content,
        user_id: uni.getStorageSync("user").ID,
        task_id: that.info.task_id,
        storage_status: 1,
        key: that.info.key,
        fileid_route,
      };
				this.$api.parentPelease(data, (res) => {
        if (res.code == 200) {
          uni.showToast({
            title: "保存成功",
          });
        } else {
          uni.showToast({
            title: res.datas.error,
          });
        }
      });
			}else{
				let data = {
        content: that.content,
        user_id: uni.getStorageSync("user").ID,
        task_id: that.info.task_id,
        storage_status: 1,
        key: that.info.key,
				ID:that.status,
        fileid_route,}
				this.$api.updateParentPelease(data, (res) => {
					if (res.code == 200) {
						uni.showToast({
							title: "保存成功",
						});
					} else {
						uni.showToast({
							title: res.datas.error,
						});
					}
				});
			}
    },
    getDraft() {
      let that = this;
      let data = {
        user_id: uni.getStorageSync("user").ID,
        task_id: this.info.task_id,
        key: this.info.key,
      };
      this.$api.parentPelease(data, (res) => {
        if (res.datas.error == "参数错误") {
          that.status = 0;
          return;
        } else {
          that.status = res.datas.ID;
          uni.showModal({
            title: "提示",
            content:
              "您上次编辑的打开任务尚未完成，您是继续编辑上次未完成的内容",
            confirmText: "继续编辑",
            cancelText: "放弃草稿",
            confirmColor: "#333333",
            cancelColor: "#666666",
            success(res1) {
              if (res1.confirm) {
                that.content = res.datas.content;
                for (let item of res.datas.fileid_route) {
                  that.imgList.push(item.fileid_route);
                }
              }
            },
          });
        }
      });
    },
    save() {
      let that = this;
      let fileid_route = "";
      this.imgList.forEach(function (e, i) {
        if (i == 0) {
          fileid_route = e;
        } else if (i == that.imgList.length - 1) {
          fileid_route = fileid_route + "," + e;
        } else if (i < that.imgList.length - 1 && i > 0) {
          fileid_route = fileid_route + "," + e;
        }
      });
      console.log(fileid_route);
      that.inputInfo = {
        content: that.content,
        user_id: uni.getStorageSync("user").ID,
        task_id: that.info.task_id,
        storage_status: 2,
        key: that.info.key,
        fileid_route,
      };
      // parentPelease
      if (this.status == 0) {
        that.$api.parentPelease(that.inputInfo, (res) => {
          if (res.code == 200) {
            uni.showToast({
              title: "保存成功",
            });
          } else {
            uni.showToast({
              title: res.datas.error,
            });
          }
        });
      } else {
        let data = {
          content: that.content,
          user_id: uni.getStorageSync("user").ID,
          task_id: that.info.task_id,
          storage_status: 2,
          key: that.info.key,
          fileid_route,
          ID: that.status,
        };
        that.$api.updateParentPelease(data, (res) => {
          if (res.code == 200) {
            uni.showToast({
              title: "保存成功",
            });
          } else {
            uni.showToast({
              title: res.datas.error,
            });
          }
        });
      }
    },
    taskmore() {
      if (this.contmore) {
        this.contmore = false;
      } else {
        this.contmore = true;
      }
    },
    upload() {
      if (this.imgList.length == 3) {
        uni.showModal({
          title: "提示",
          content: "只能上传三张图片",
        });
        return;
      }
      this.$api.uploadFiles((res) => {
        this.imgList.push(res.datas.file);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../static/css/task.scss";
</style>