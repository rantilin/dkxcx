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
            :bar-style="{background: '#0BC788'}"
            :is-scroll="false"
            :current="current"
            bar-height="4"
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
            :src="switchindex?'../../static/image/saixuan.png':'../../static/image/saixuannull.png'"
            class="filtrate"
            @click="filtrate"
          ></image>
        </view>
      </view>
    </view>
    <u-popup v-model="isscreen" mode="top">
	  	<view class="pop-department">
		      <view class="title">
              科室
          </view>
          <view class="ment-list">
              <view class="item on">
                  多动症
              </view>
              <view class="item">
                  自闭症
              </view>
              <view class="item">
                  抽动症
              </view>
          </view>
          <view class="title mt30">
               打卡任务
          </view>
          <scroll-view class="taskcheckbox" scroll-y>
             
          </scroll-view>
          <view class="bottom">
              <view class="reset">
                  重置
              </view>
              <view class="confirm">
                  确认选择
              </view>
          </view>
	  	</view>
	  </u-popup>
    <scroll-view
      class="content"
      scroll-y
    >
      <template v-if="switchindex">
        <view class="common">
          <view class="task">
            <view class="onetitle">
              <u-avatar
                src=""
                class="portrait"
                size="76"
              ></u-avatar>
              <view class="introduce">
                <view class="title">
                  都月*家长
                </view>
                <view class="textinfo">
                  <text class="one">科室:</text>
                  <text class="two">多动症</text>
                  <text class="three">发布于02-19 10:28</text>
                </view>
              </view>
              <view class="clockime">已打卡6天</view>
            </view>
            <view class="carddetail">
                <view class="contdetail">
                     我家孩子按照康复老师多动症日常训练表训练后我家孩子按照康复老师多动症日常训…
                </view>
                <view class="imglist">
                    <view class="item">
                         <u-image src="https://cdn.uviewui.com/uview/example/fade.jpg" width="174" height="157"></u-image>
                    </view>
                     <view class="item">
                         <u-image src="https://cdn.uviewui.com/uview/example/fade.jpg" width="174" height="157"></u-image>
                    </view>
                     <view class="item">
                         <u-image src="https://cdn.uviewui.com/uview/example/fade.jpg" width="174" height="157"></u-image>
                    </view>
                </view>
                <view class="bottom">
                    <u-icon size="32" class="d-icon" name="../../static/image/give.png" ></u-icon>
                </view>
            </view>
          </view>
        </view>
        
        <view class="common">
          <view class="task">
            <view class="onetitle">
              <u-avatar
                src=""
                class="portrait"
                size="76"
              ></u-avatar>
              <view class="introduce">
                <view class="title">
                  都月*家长
                </view>
                <view class="textinfo">
                  <text class="one">科室:</text>
                  <text class="two">多动症</text>
                  <text class="three">发布于02-19 10:28</text>
                </view>
              </view>
              <view class="clockime">已打卡6天</view>
            </view>
            <view class="carddetail">
                <view class="contdetail">
                     我家孩子按照康复老师多动症日常训练表训练后我家孩子按照康复老师多动症日常训…
                </view>
                <view class="imglist">
                    <view class="item">
                         <u-image src="https://cdn.uviewui.com/uview/example/fade.jpg" width="174" height="157"></u-image>
                    </view>
                     <view class="item">
                         <u-image src="https://cdn.uviewui.com/uview/example/fade.jpg" width="174" height="157"></u-image>
                    </view>
                     <view class="item">
                         <u-image src="https://cdn.uviewui.com/uview/example/fade.jpg" width="174" height="157"></u-image>
                    </view>
                </view>
                <view class="bottom">
                    <u-icon size="32" class="d-icon" name="../../static/image/givenull.png" ></u-icon>
                </view>
            </view>
          </view>
        </view>

        <view class="common">
          <view class="task">
            <view class="onetitle">
              <u-avatar
                src=""
                class="portrait"
                size="76"
              ></u-avatar>
              <view class="introduce">
                <view class="title">
                  都月*家长
                </view>
                <view class="textinfo">
                  <text class="one">科室:</text>
                  <text class="two">多动症</text>
                  <text class="three">发布于02-19 10:28</text>
                </view>
              </view>
              <view class="clockime">已打卡6天</view>
            </view>
            <view class="carddetail">
                <view class="contdetail">
                     我家孩子按照康复老师多动症日常训练表训练后我家孩子按照康复老师多动症日常训…
                </view>
                <view class="imglist">
                    <view class="item">
                         <u-image src="https://cdn.uviewui.com/uview/example/fade.jpg" width="174" height="157"></u-image>
                    </view>
                     <view class="item">
                         <u-image src="https://cdn.uviewui.com/uview/example/fade.jpg" width="174" height="157"></u-image>
                    </view>
                     <view class="item">
                         <u-image src="https://cdn.uviewui.com/uview/example/fade.jpg" width="174" height="157"></u-image>
                    </view>
                </view>
                <view class="bottom">
                    <u-icon size="32" class="d-icon" name="../../static/image/givenull.png" ></u-icon>
                </view>
            </view>
          </view>
        </view>
      </template>

      <template v-if="switchindex == false">
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
              <image
                src="../../static/image/accomplish.png"
                mode="widthFix"
                class="d-icon"
              ></image>
              <text class="d-text">已打卡</text>
            </view>
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
              <view class="datetime on">已结束</view>
            </view>
            <view class="twodepartment">
              科室:多动症
            </view>
            <view class="describe">
              各位家长，由专业医生针对多动症制定了训练…
            </view>
            <view class="info">
              <image
                src="../../static/image/proceed.png"
                mode="widthFix"
                class="d-icon"
              ></image>
              <text class="d-text on">去打卡</text>
            </view>
          </view>
        </view>

        <view class="assignment">
          <view class="title">
            01-28
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
              <image
                src="../../static/image/accomplish.png"
                mode="widthFix"
                class="d-icon"
              ></image>
              <text class="d-text">已打卡</text>
            </view>
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
              <view class="datetime on">已结束</view>
            </view>
            <view class="twodepartment">
              科室:多动症
            </view>
            <view class="describe">
              各位家长，由专业医生针对多动症制定了训练…
            </view>
            <view class="info">
              <image
                src="../../static/image/proceed.png"
                mode="widthFix"
                class="d-icon"
              ></image>
              <text class="d-text on">去打卡</text>
            </view>
          </view>
        </view>
      </template>
      
    </scroll-view>
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
      switchindex: true,
      isscreen: false,
    }
  },
  methods: {
    change(index) {
      this.current = index
    },
    changeSwitch(is) {
      this.switchindex = is
    },
    filtrate() {
      if (this.switchindex) {
         this.isscreen=true;
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../../static/css/home.scss';
</style>
