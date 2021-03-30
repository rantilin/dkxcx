<template>
  <view>
    <view class="backg">
      <view class="title">
        排行榜
      </view>
      <view class="emum">
        {{details.task_title}}
      </view>
      <view class="emumtwo">
        时间周期:{{details.start_time1}}-{{details.end_time1}}
      </view>
    </view>
    <view class="rankcont">
      <view class="navtitle">
        <view class="navtd1">
          排名
        </view>
        <view class="navtd2">
          姓名
        </view>
        <view class="navtd3">
          打卡天数
        </view>
      </view>
      <view class="ranlist" v-for="(item,index) in list" :key="index">
        <view class="navtd1">
          <u-icon :name="'../../static/image/num'+(index+1)+'.png'" size="55" v-if="index<=2"></u-icon>
          <view class="" v-if="index>2">
             {{index+1}}
          </view>
        </view>
        <view class="navtd2">
          {{item.user_name}}
        </view>
        <view class="navtd3">
          {{item.total_num}}天
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import { timeToDate} from "../../config/common.js";

export default {
  data() {
    return {
      task_id: 0,
      info: {},
      details: {},
      list: [],
    };
  },
  onLoad(o) {
    this.info = JSON.parse(o.info);
    console.log(this.info);
    this.init();
    this.getDetail();
  },
  methods: {
    init() {
      let data = {
        key: this.$db.get("key"),
        task_id: this.info.task_id,
        user_id: uni.getStorageSync("user").ID,
      };
      this.$api.ranking(data, (res) => {
        console.log(res);
        this.list = res.datas
      });
    },
    getDetail() {
      let data = {
        key: this.$db.get("key"),
        task_id: this.info.task_id,
      };
      this.$api.getTaskInfoTitle(data, (res) => {
      //   res.datas.days = getTime2Time(
      //     timeToDate(res.datas.end_time),
      //     timeToDate(res.datas.start_time)
      //   );
      //   res.datas.today = getTime2Time(
      //     timeToDate(res.datas.end_time),
      //     timeToDate(new Date().getTime() / 1000)
      //   );
        res.datas.start_time1 = timeToDate(res.datas.start_time, false, 4);
        res.datas.end_time1 = timeToDate(res.datas.end_time, false, 4);
        res.datas.start_time = Number(res.datas.start_time);
        res.datas.end_time = Number(res.datas.end_time);
        res.datas.openTime = timeToDate(
          new Date(res.datas.issue_time),
          false,
          3
        );
        this.details = res.datas;
        console.log(this.details);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../static/css/ranking.scss";
</style>