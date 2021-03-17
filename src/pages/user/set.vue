<template>
  <view>
     <view class="user">
        <u-avatar
          size="98"
          src="../../static/image/doctor.png"
        ></u-avatar>
        <view class="deil">
          微信昵称:最美的你
        </view>
     </view>
     <view class="list border-butom">
        <view class="name">
          小孩姓名
        </view>
        <input class="deil" v-model="username"   />
     </view>
     <view class="list">
        <view class="name">
          电话号码
        </view>
        <input class="deil" v-model="phone"   />
     </view>
     <view class="buturn">
       保存信息
     </view>
  </view>
</template>
<script>
export default {
    data() {
      return {
        wxname: '',
        username: '周全才',
        phone:'15351224280'
      }
    },
}
</script>
<style lang="scss" scoped>
page{
  background: #fff;
}
.user {
  width: 686rpx;
  margin: 22rpx auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .deil {
    width: 260rpx;
    color: rgb(192, 196, 204);
    font-size: 26rpx;
     text-align: right;
  }
}
.list{
  width: 686rpx;
  margin: auto;
  padding: 56rpx 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .name{
    font-size: 30rpx;
    color: #555555;
  }
  .deil {
    color: #333333;
    font-size: 26rpx;
    text-align: right;
  }
}
.border-butom{
   border-bottom: solid 1px #EBEBEB;
}
.buturn{
  width: 686rpx;
height: 88rpx;
margin: 100rpx auto;
line-height: 88rpx;
background: #0BC788;
border-radius: 44rpx;
text-align: center;
color: #fff;
}
</style>