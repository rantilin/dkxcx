<template>
  <view>
    <view class="logintext">
      <view class="headline1">
        请填写您的身份信息
      </view>
      <view class="headline2">加入健康打卡小程序，提高家长与医生的互动交流</view>
    </view>
    <view class="tebidentity">
      <view class="item">
        <image
          class="iconimg"
          src="../../../static/image/doctor.png"
        ></image>
        <text>我是家长</text>
      </view>
      <view class="item on">
        <image
          class="iconimg"
          src="../../../static/image/patriarch.png"
        ></image>
        <text>我是医生</text>
      </view>
    </view>
    <view class="loginframe">
      <view class="item">
        <text class="uname">小孩姓名:</text>
        <input
          type="text"
          class="logininput"
          value=""
          placeholder="请输入小孩姓名"
        />
      </view>
      <view class="item">
        <text class="uname">手机号码:</text>
        <input
          type="text"
          class="logininput iphoneinput"
          value=""
          placeholder="请输入小孩姓名"
        />
       <view class="caution">
          一键获取
       </view>
      </view>
    </view>
     <view class="savebutton" :ripple="true" ripple-bg-color="#909399">保存信息</view>
  </view>
</template>
<script>
export default {
    data (){
      return;
    }
}
</script>
<style lang="scss" scoped>
.logintext {
  margin: auto;
  width: 528rpx;
  margin-top: 151rpx;
  .headline1 {
    font-size: 54rpx;
    font-weight: 500;
  }
  .headline2 {
    color: #666666;
    font-size: 24rpx;
    margin: 40rpx auto 0 auto;
  }
}
.tebidentity {
  width: 686rpx;
  height: 124rpx;
  margin: 100px auto 0 auto;
  background: #f5f7fc;
  border-radius: 12rpx;
  display: flex;
  justify-content: space-between;
  .item {
    width: 50%;
    display: flex;
    align-items: center; /*垂直居中*/
    justify-content: center;
    font-size: 32rpx;
    font-weight: bold;
    color: #333333;
    .iconimg {
      width: 79rpx;
      height: 79rpx;
    }
  }
  .on {
    color: #999999;
  }
}
.loginframe {
  width: 686rpx;
  background: #f5f7fc;
  border-radius: 12px;
  margin: 40rpx auto;
  box-sizing: border-box;
  .item {
    width: 100%;
    padding: 0 56rpx;
    height: 100rpx;
    display: flex;
    align-items: center;
    font-size: 30rpx;
    .uname {
      max-width: 140rpx;
      margin-right: 30rpx;
      font-weight: bold;
    }
    .logininput {
      font-size: 28rpx;
    }
    .caution {
      width: 120rpx;
      height: 42rpx;
      text-align: center;
      border-radius: 8rpx;
      border: 1px solid #ffba4a;
      font-size: 25rpx;
      line-height: 42rpx;
      color: #FFBA4A;
    }
    .iphoneinput{
         width: 290rpx;
    }
  }
}
.savebutton{
  width: 686rpx;
height: 88rpx;
margin: 80rpx auto;
background: #0BC788;
border-radius: 44rpx;
color: #fff;
line-height: 88rpx;
text-align: center;
}
</style>