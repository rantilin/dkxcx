<template>
  <view>
   
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
</style>