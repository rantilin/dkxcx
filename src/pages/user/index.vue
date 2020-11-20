<template>
  <view>
    <view class="userbg">
      <view class="userdeil">
        <image
          class="userimg"
          src="http://gh.xnetyykf.cn/upload/images/2020/8/92875ab0c9119e73.png"
        ></image>
        <view class="signature">
          <view class="p1">青春、年华</view>
          <view class="p2">没有坑，就先让自己成为萝卜</view>
        </view>
        <u-icon
          name="arrow-right"
          style="margin-left: auto;"
          color="#fff"
          size="28"
        ></u-icon>
      </view>
    </view>
    <view class="userframe">
      <view class="box">
        <image
          class="icon"
          src="../../static/image/usergh.png"
          mode="widthFix"
        ></image>
        <view class="title">
          挂号记录
        </view>
      </view>
      <view class="box">
        <image
          class="icon"
          src="../../static/image/userwz.png"
          mode="widthFix"
        ></image>
        <view class="title">
          问诊记录
        </view>
      </view>
      <view class="box">
        <image
          class="icon"
          src="../../static/image/usercs.png"
          mode="widthFix"
        ></image>
        <view class="title">
          我的评估
        </view>
      </view>
      <view class="box">
        <image
          class="icon"
          src="../../static/image/userxx.png"
          mode="widthFix"
        ></image>
        <view class="title">
          我的消息
        </view>
      </view>
    </view>
    <view class="usercard">
      <view class="leftname">
        <view class="name">姓名</view>
        <view class="card">就诊卡号：20200****1666</view>
      </view>
      <view class="rightsys">就诊人管理</view>
    </view>
    <view class="case">
      <view class="titletg">
        <view class="title">电子病历</view>
        <view class="rightmore">
          <view>查看更多</view>
          <u-icon
            name="arrow-right"
            color="#999999"
            size="24"
          ></u-icon>
        </view>
      </view>
      <view class="carenum">
        <view class="box1">
          <view>当前病历总数</view>
          <view class="num">10份</view>
        </view>
        <view class="box2">
          <view>当前病历总数</view>
          <view class="num">13.5MB/30MB</view>
          <u-line-progress
            active-color="#25C087"
            :percent="34"
            striped
          ></u-line-progress>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      hasLogin: false,
      userInfo: {},
    }
  },
  onShow() {
      this.initData()
  },
  methods: {
    initData() {
      // 获取用户信息
      var _this = this
      if (this.$db.get('token')) {
        console.log(this.$db.get('token'))
      } else {
        this.hasLogin = false
        setTimeout(() => {
					uni.hideToast();
					uni.navigateTo({
						url: '/pages/login/choose/index',
						animationType: 'pop-in',
						animationDuration: 200
					})
				}, 500)
        // #ifdef MP-WEIXIN
        this.getWxCode()
        // #endif
      }
    },
    getWxCode() {
      let that = this
      uni.login({
        scopes: 'auth_user',
        success: function (res) {
          if (res.code) {
            that.wxLoginStep1(res.code)
          } else {
            this.$common.errorToShow('未取得code')
          }
        },
        fail: function (res) {
          this.$common.errorToShow('用户授权失败wx.login')
        },
      })
    },
    wxLoginStep1(code) {
      
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../static/css/user.scss';
</style>