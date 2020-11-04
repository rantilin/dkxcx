<template>
<view class="content">
  <view class="overlap">
    <view class="bglinear"></view>
    <view class="doctorvm">
      <view class="listone">
        <view class="pim">
          <view class="name">徐磊</view>
          <view>主治医生</view>
          <view>中童儿童康复医院</view>
        </view>
        <u-avatar size="120" src="http://gh.xnetyykf.cn/upload/images/2020/8/92875ab0c9119e73.png"></u-avatar>
      </view>
      <view class="listwo">
        <view class="item">
          <view>接诊量</view>
          <view>189</view>
        </view>
        <view class="item">
          <view>好评率</view>
          <view>98%</view>
        </view>
        <view class="item">
          <view>回复率</view>
          <view>98%</view>
        </view>
      </view>
    </view>
  </view>
  <view class="titlehead">
    <view class="verticalicon"></view>
    <text class="headline">视频了解</text>
  </view>
  <scroll-view class="health-video" scrollX="true" style="width: 100%">
    <view class="health-video-item-wrap mr10">
      <view class="health-video-item">
        <image class="placeholder-img video-thumb" src="http://gh.xnetyykf.cn/upload/images/2020/8/92875ab0c9119e73.png"></image>
        <view class="wrap-text">
          <view class="t1">视频案例介绍</view>

        </view>
      </view>
    </view>
    <view class="health-video-item-wrap">
      <view class="health-video-item">
        <image class="placeholder-img video-thumb" src="http://gh.xnetyykf.cn/upload/images/2020/8/92875ab0c9119e73.png"></image>
        <view class="wrap-text">
          <view class="t1">视频案例介绍</view>

        </view>
      </view>
    </view>
    <view class="health-video-item-wrap mr10">
      <view class="health-video-item">
        <image class="placeholder-img video-thumb" src="http://gh.xnetyykf.cn/upload/images/2020/8/92875ab0c9119e73.png"></image>
        <view class="wrap-text">
          <view class="t1">视频案例介绍</view>

        </view>
      </view>
    </view>
    <view class="health-video-item-wrap mr10">
      <view class="health-video-item">
        <image class="placeholder-img video-thumb" src="http://gh.xnetyykf.cn/upload/images/2020/8/92875ab0c9119e73.png"></image>
        <view class="wrap-text">
          <view class="t1">视频案例介绍</view>

        </view>
      </view>
    </view>
  </scroll-view>
  <view class="titlehead">
    <view class="verticalicon"></view>
    <text class="headline">个人简介</text>
  </view>
  <view class="numtext">
    卫生部认证国家中级营养师 上海交通大学医学院营养学理学士，2008-2015年任职上海复旦大学附属中山医院营养师 2015.8起任职上海星益健康管理公司医学部健康营养2015.8起任职上海星益健康管理公司医学部健康……
  </view>
  <view class="titlehead">
    <view class="verticalicon"></view>
    <text class="headline">专家擅长</text>
  </view>
  <view class="numtext">
    擅长：从事儿童康复临床、教学及科研十余年、擅长儿童自闭谱系障碍（ASD）、多动症（ADHD）、抽动症（TD）、脑瘫、学习障碍、感统统合障碍、发育性语言障碍、发育迟缓、遗传代谢性疾病(Rett综合症、DMD杜氏肌营养不良症)等的诊断、评估和康复……
  </view>
</view>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  onLoad() {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
}

.overlap {
  width: 100%;

  .bglinear {
    width: 100%;
    height: 300rpx;
    background: linear-gradient(135deg, #5FD9A2 0%, #2AC697 100%);

  }

  .doctorvm {
    width: 686rpx;
    height: 330rpx;
    background: #FFFFFF;
    box-shadow: 0rpx 3rpx 12rpx 0rpx rgba(23, 56, 44, 0.07);
    border-radius: 8rpx;
    margin: auto;
    margin-top: -250rpx;
    box-sizing: border-box;
    padding: 16rpx 32rpx 0 32rpx;

    .listone {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .pim {
        width: 300rpx;
        color: #333333;
        line-height: 50rpx;

        .name {
          font-size: 32rpx;
          font-weight: bold;
          text-shadow: 0px 3rpx 12rpx rgba(23, 56, 44, 0.07);
        }

      }
    }

    .listwo {
      width: 100%;
      margin: 15rpx auto 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .item {
        width: 33%;
        text-align: center;
        font-size: 28rpx;
        color: #333333;
        line-height: 70rpx;
        text-shadow: 0px 3rpx 12rpx rgba(23, 56, 44, 0.07);
      }
    }
  }
}

.titlehead {
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 32rpx;
  margin: 56rpx auto 24rpx auto;

  .verticalicon {
    width: 6rpx;
    height: 32rpx;
    background: #25C087;
  }

  .headline {
    font-size: 32rpx;
    color: #333333;
    margin-left: 12rpx;
    font-weight: bold;
  }

}

.numtext {
  width: 100%;
  font-size: 28rpx;
  color: #666666;
  box-sizing: border-box;
  padding: 0 32rpx;
  line-height: 40rpx;
}

.health-video {
  white-space: nowrap;
  margin-left: 32rpx;

  .mr10 {
    margin-right: 30rpx;
  }
}

.health-video-item-wrap {
  display: inline-block;
}

.video-thumb {
  width: 100%;
  height: 243rpx;
  border-radius: 5rpx 5rpx 0rpx 0rpx;
}

.health-video-item {
  width: 634rpx;
  height: 400rpx;
  background: #FFFFFF;
  box-shadow: 0px 0px 10rpx 0px rgba(105, 119, 114, 0.09);
  border-radius: 10rpx;
  overflow: hidden;

  .t1 {
    font-size: 26rpx;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin-bottom: 5rpx;
  }

  .t2,
  .click {
    font-size: 22rpx;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(121, 121, 121, 1);
  }

  .t2 {
    width: 270rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .icon-click {
    width: 26rpx;
    height: 26rpx;
    margin-left: 60rpx;
  }

  .wrap-text {
    padding: 20rpx;
    padding-top: 10rpx;
  }
}

.video-thumb {
  width: 100%;
  height: 324rpx;
  box-shadow: 0px 0px 10rpx 0px rgba(105, 119, 114, 0.09);
  border-radius: 10rpx 10rpx 0rpx 0rpx;
}
</style>
