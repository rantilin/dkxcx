<template>
<view class="page page-index">
  <view class="main">
    <swiper autoplay circular indicatorDots :duration="500" :interval="5000">
      <swiper-item v-for="(item, index) in banners" :key="index">
        <image bindtap="goMiniProgram" class="banner-item" :src="item.imageUrl|imgurl"></image>
      </swiper-item>
    </swiper>
    <view class="mt20">
      <u-notice-bar class="notice" :border-radius="10" mode="horizontal" :list="tiptitle"></u-notice-bar>
    </view>
    <view class="znzl flex box-center">
      <image class="placeholder-img znzl-img" src="../../static/image/znzl.png"></image>
      <view>
        <view class="t1">就诊提醒</view>
        <view class="t2">您有9月20日预约的挂号,记得按时去..</view>
      </view>
    </view>
    <view class="service flex">
      <view class="service-item flex dir-top box-center main-start" @click="goyuyue">
        <image class="placeholder-img img" src="../../static/image/icon-ask.png"></image>
        <view class="t1">门诊挂号</view>
        <view class="t2">成都中童康复医院挂号</view>
      </view>
      <view class="service-item flex dir-top box-center main-start" @click="goteam">
        <image class="placeholder-img img" src="../../static/image/icon-guahao.png"></image>
        <view class="t1">医生团队</view>
        <view class="t2">院内医生专业团队 为您服务</view>
      </view>
      <view class="service-item flex dir-top box-center main-start" data-url="/pages/doctor-list/doctor-list">
        <image class="placeholder-img img" src="../../static/image/icon-fzxf.png"></image>
        <view class="t1">在线问诊</view>
        <view class="t2">院内医生在线 解答</view>
      </view>
    </view>
    <view class="ecard flex main-between box-center" @click="gocrad">
      <view></view>
      <view class="btn mr35">申领卡片</view>
    </view>
    <view class="sec-title flex main-between box-center">
      <text>在线测评</text>
    </view>
    <view class="tszq flex-center">
      <view bindtap="goPage" class="tszq-item flex-center" style="background-image: url(/static/images/bg-page-index-tszq-1.png)">
        IEP个别化康复计划
      </view>
      <view bindtap="goPage" class="tszq-item flex-center" style="background-image: url(/static/images/bg-page-index-tszq-2.png)">
        格里菲斯评估
      </view>
      <view bindtap="goPage" class="tszq-item flex-center" style="background-image: url(/static/images/bg-page-index-tszq-3.png)">
        Q博士家长课堂
      </view>
    </view>
    <view class="sec-title flex main-between box-center">
      <text>名医专家</text>
    </view>

  </view>
</view>
</template>

<script>
export default {
  data() {
    return {
      recommendedDoctors: [],
      banners: [],
      tiptitle: []
    }
  },
  onLoad() {
    this.getbanner()
    this.getnotice()
  },
  methods: {
    getbanner() {
      let param = {
        channelId: 2,
      }
      this.$api.contents(param, res => {
        this.banners = res.contents
        //console.log(res.contents);
      })
    },
    getnotice() {
      let param = {
        channelId: 8,
      }
      this.$api.contents(param, res => {
        // this.tiptitle = res.contents
        let list = res.contents;
        let data = [];
        for (let key in res.contents) {
          data.push(list[key].body);
        }
        this.tiptitle = data
      })
    },
    goyuyue() {
      uni.navigateTo({
        url: `/pages/doctor/list`
      })
    },
    gocrad() {
      uni.navigateTo({
        url: `/pages/card/index`
      })
    },
    goteam() {
      uni.navigateTo({
        url: `/pages/doctor/team`
      })
    }
  },

}
</script>

<style lang="scss" scoped>
@import "../../static/css/home.scss";
</style>
