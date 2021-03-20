<template>
  <view>
    <view class="backg">
      <view class="title">
        排行榜
      </view>
      <view class="emum">
        多动症日常训练要点
      </view>
      <view class="emumtwo">
        时间周期:02月19日-03月10日
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
       <view class="ranlist">
         <view class="navtd1">
             <u-icon name="../../static/image/num1.png" size="55"></u-icon>
          </view>
          <view class="navtd2">
             周太才家长
          </view>
          <view class="navtd3">
             16天
          </view>
      </view>

      <view class="ranlist">
         <view class="navtd1">
             <u-icon name="../../static/image/num2.png" size="55"></u-icon>
          </view>
          <view class="navtd2">
             周太*家长
          </view>
          <view class="navtd3">
             16天
          </view>
      </view>

      <view class="ranlist">
         <view class="navtd1">
             <u-icon name="../../static/image/num3.png" size="55"></u-icon>
          </view>
          <view class="navtd2">
             周太*家长
          </view>
          <view class="navtd3">
             16天
          </view>
      </view>

      <view class="ranlist">
         <view class="navtd1">
             01
          </view>
          <view class="navtd2">
             周太*家长
          </view>
          <view class="navtd3">
             16天
          </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
	@import '../../static/css/ranking.scss';
</style>