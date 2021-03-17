<template>
  <view>
    <view class="addtitle">
      选择要退出的科室
    </view>
    <view class="list-cell">
      <u-avatar
        url=""
        size="60"
      ></u-avatar>
      <text class="name">卞永*家长</text>
      <view
        class="butorn"
        @click="exit"
      >退出科室</view>
    </view>
    <view class="list-cell">
      <u-avatar
        url=""
        size="60"
      ></u-avatar>
      <text class="name">卞永*家长</text>
      <view class="butorn">退出科室</view>
    </view>
    <view class="list-cell">
      <u-avatar
        url=""
        size="60"
      ></u-avatar>
      <text class="name">卞永*家长</text>
      <view class="butorn">退出科室</view>
    </view>
    <!-- 提示框 -->
    <u-modal
      v-model="config.iscread"
      :title="title"
      :content="config.tiptext"
      :show-confirm-button="config.confirm"
      :show-cancel-button="config.cancel"
    >
    </u-modal>
  </view>
</template>
<script>
export default {
  data() {
    return {
      config: {
        title: '',
        iscread: false,
        tiptext: '',
        confirm: true,
        cancel: false,
      },
    }
  },
  methods: {
    exit() {
      this.config.title = '确定要退出多动症科室吗？'
      this.config.cancel = true
      this.config.confirm = true
      this.config.tiptext = '确认此科室是否正确，防止错加乱加 以免造成数据错误！'
      this.config.iscread = true
    },
  },
}
</script>
<style lang="scss" scoped>
.addtitle {
  width: 686rpx;
  margin: 32rpx auto;
}
.list-cell {
  display: flex;
  box-sizing: border-box;
  width: 686rpx;
  margin: 16rpx auto;
  padding: 0 24rpx;
  overflow: hidden;
  color: #323233;
  font-size: 28rpx;
  line-height: 96rpx;
  background-color: #fff;
  border-radius: 12rpx;
  align-items: center;
  .name {
    margin-left: 24rpx;
  }
  .butorn {
    margin-left: auto;
    width: 130rpx;
    height: 52rpx;
    line-height: 52rpx;
    background: #ff834a;
    border-radius: 27rpx;
    font-size: 24rpx;
    color: #fff;
    text-align: center;
  }
}
</style>