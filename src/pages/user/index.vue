<template>
  <view>
      <view class="user">
        <u-avatar
          size="98"
          :src="userInfo.user_avatar"
        ></u-avatar>
        <view class="name">
             <view class="username">
               {{userInfo.nicknames+userInfo.type_status_name}}
             </view>
             <view class="phone">
               {{userInfo.user_mobile}}
             </view>
        </view>
        <view class="godeil" @click="godeil">
          资料编辑
        </view>
      </view>
      <view class="usermenu">
          <view class="item">
              <view class="block">
                   <text class="title">积分商城</text>
                   <u-icon name="../../static/image/integral.png" size="69"></u-icon>
              </view>
              <view class="blocktext">
                <text class="tip">积分:200</text>
                 积分换礼品
              </view>
          </view>
          <view class="item" @click="gocard">
              <view class="block">
                   <text class="title">打卡记录</text>
                   <u-icon name="../../static/image/cardre.png" size="69"></u-icon>
              </view>
              <view class="blocktext">
                 查看我的打开记录
              </view>
          </view>
      </view>
      <view class="listmenu">
           <view class="listitem">
                <u-icon name="../../static/image/recommend.png" size="44"></u-icon>
                <view class="title">推荐给其他家长</view>
                <u-icon name="arrow-right" size="24" class="more"></u-icon>
           </view>
           <view class="listitem">
                <u-icon name="../../static/image/mini.png" size="44"></u-icon>
                <view class="title">添加到我的小程序</view>
                <u-icon name="arrow-right" size="24" class="more"></u-icon>
           </view>
           <view class="listitem" @click="gomydesk">
                <u-icon name="../../static/image/myadd.png" size="44"></u-icon>
                <view class="title">我加入的科室</view> 
                <u-icon name="arrow-right" size="24" class="more"></u-icon>
           </view>
           <view class="line">
           </view>
           <view class="listitem">
                <u-icon name="../../static/image/clear.png" size="44"></u-icon>
                <view class="title">清除缓存</view>
                <u-icon name="arrow-right" size="24" class="more"></u-icon>
           </view>
           <view class="listitem">
                <u-icon name="../../static/image/set.png" size="44"></u-icon>
                <view class="title">设置</view>
                <u-icon name="arrow-right" size="24" class="more"></u-icon>
           </view>
      </view>
  </view>
</template>
<script>
import uIcon from '../../uview-ui/components/u-icon/u-icon.vue'
export default {
  components: { uIcon },
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
      let _this = this
      if (_this.$db.get('key')) {
        this.$api.user(
          {
            key: this.$db.get('key'),
          },
          (res) => {
            this.userInfo = res.datas
            this.$db.set('user',res.datas)
          }
        )
      } else {
        _this.hasLogin = false
        setTimeout(() => {
          uni.hideToast()
          uni.navigateTo({
            url: '/pages/login/choose/index',
            animationType: 'pop-in',
            animationDuration: 200,
          })
        }, 500)
      }
    },
     gocard(){
       uni.navigateTo({
        url: '/pages/user/cardrecord',
      })
     },
     godeil(){
       uni.navigateTo({
        url: '/pages/user/set',
      })
     },
     gomydesk(){
       uni.navigateTo({
        url: '/pages/user/mydesk',
      })
     }
  },
}
</script>

<style lang="scss" scoped>
	@import '../../static/css/user.scss';
</style>