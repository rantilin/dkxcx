<template>
  <view class="page">
    <view class="topnav">
      <view class="user">
        <u-avatar
          size="60"
          src="../../static/image/doctor.png"
        ></u-avatar>
        <text class="username">周泰才家长</text>
      </view>
      <view class="tebnav">
        <view class="tebleft">
          <u-tabs
            :list="list"
            inactive-color="#999999"
            active-color="#333333"
            :is-scroll="false"
            :current="current"
            @change="change"
          ></u-tabs>
        </view>
        <view class="tebright">
          <selectSwitch
            @change="changeSwitch"
            :switchList="switchList"
            :defaultSwitch="switchindex"
          />
          <image
            src="../../static/image/saixuan.png"
            class="filtrate"
          ></image>
        </view>
      </view>
    </view>
    <view class="content">
      <view class="assignment">
        <view class="title">
          今天
        </view>
        <view class="task">
          <view class="onetitle">
            <u-avatar
              src=""
              class="portrait"
              size="76"
            ></u-avatar>
            <view class="introduce">
              <view class="title">
                多动动日常训练要点
              </view>
              <view class="textinfo">
                <text class="one">张秋</text>
                <text class="two">医生</text>
                <text class="three">发布于02-19 10:28</text>
              </view>
            </view>
            <view class="datetime">第1天</view>
          </view>
          <view class="twodepartment">
            科室:多动症
          </view>
          <view class="describe">
            各位家长，由专业医生针对多动症制定了训练…
          </view>
          <view class="info">
               
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import selectSwitch from '@/components/xuan-switch/xuan-switch.vue'
import UIcon from '../../uview-ui/components/u-icon/u-icon.vue'
export default {
  components: {
    selectSwitch,
    UIcon,
  },
  data() {
    return {
      list: [
        {
          name: '健康打卡',
          count: 5,
        },
        {
          name: '科室管理',
        },
      ],
      current: 0,
      switchList: ['全部', '我的'],
      switchindex: false,
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../../static/css/home.scss';
</style>
