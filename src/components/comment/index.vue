<template>
  <view class="comment">
    <view class="title">
      <u-icon
        size="32"
        name="../../static/image/give.png"
      ></u-icon>
      <text class="item">恒露*家长</text>
      <text class="item">恒露*家长</text>
      <text class="item">恒露*家长</text>
      <text class="item">恒露*家长</text>
    </view>
    <view class="usercom">
      <view class="user">
        <view class="name">
          点评医生：张秋医生
        </view>
        <view class="right">
           <view class="but1">
              回复
           </view>
           <view class="but2">
             咨询
           </view>
        </view>
      </view>
      <view class="content">
           小朋友日常打卡训练表现非常好，坚持每天都打卡哦！
      </view>
    </view>
    <view class="nestcontent">
        <text class="name">周泰才家长</text>回复<text class="name">张秋医生</text>：谢谢张医生的回复
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
.comment {
  width: 100%;
  height: 331rpx;
  background: #f8f9fa;
  border-radius: 4px;
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: solid 1px #ebebeb;
    padding: 15rpx 24rpx;
    flex-wrap: wrap;
    .item {
      color: #0bc788;
      font-size: 24rpx;
      margin: 0 5rpx;
    }
  }
  .usercom {
    width: 100%;
    color: #999999;
    .user {
      padding: 20rpx 30rpx 10rpx 30rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .name {
        color: #999999;
        font-size: 26rpx;
      }
      .right {
        display: flex;
        text-align: center;
        justify-content: flex-end;
        font-size: 24rpx;
        .but1 {
          width: 82rpx;
          line-height: 42rpx;
          border-radius: 6rpx;
          color: #ffba4a;
          border: 1px solid #ffba4a;
          margin: 0 10rpx;
        }
        .but2 {
          width: 82rpx;
          line-height: 42rpx;
          background: #0bc788;
          color: #fff;
          border-radius: 6rpx;
        }
      }
    }
    .content{
       font-size: 26rpx;
       color: #444444;
       line-height: 35rpx;
       padding: 0 24rpx;
       margin: 10rpx auto;
    } 
  }
  .nestcontent{
       padding: 0 24rpx;
       margin: 10rpx auto;
       font-size: 26rpx;
       color: #444444;
       line-height: 35rpx;
       .name{
          color: #999999;
       }
  }
}
</style>