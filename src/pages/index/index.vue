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
        <view
          class="tebright"
          v-if="current==0"
        >
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

    <scroll-view
      class="content"
      scroll-y
    >
      <template v-if="switchindex && current==0">
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
                  <u-image
                    src="https://cdn.uviewui.com/uview/example/fade.jpg"
                    width="174"
                    height="157"
                  ></u-image>
                </view>
                <view class="item">
                  <u-image
                    src="https://cdn.uviewui.com/uview/example/fade.jpg"
                    width="174"
                    height="157"
                  ></u-image>
                </view>
                <view class="item">
                  <u-image
                    src="https://cdn.uviewui.com/uview/example/fade.jpg"
                    width="174"
                    height="157"
                  ></u-image>
                </view>
              </view>
              <view class="bottom">
                <u-icon
                  size="32"
                  class="d-icon"
                  name="../../static/image/give.png"
                ></u-icon>
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
                  <u-image
                    src="https://cdn.uviewui.com/uview/example/fade.jpg"
                    width="174"
                    height="157"
                  ></u-image>
                </view>
                <view class="item">
                  <u-image
                    src="https://cdn.uviewui.com/uview/example/fade.jpg"
                    width="174"
                    height="157"
                  ></u-image>
                </view>
                <view class="item">
                  <u-image
                    src="https://cdn.uviewui.com/uview/example/fade.jpg"
                    width="174"
                    height="157"
                  ></u-image>
                </view>
              </view>
              <view class="bottom">
                <u-icon
                  size="32"
                  class="d-icon"
                  name="../../static/image/givenull.png"
                ></u-icon>
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
                  <u-image
                    src="https://cdn.uviewui.com/uview/example/fade.jpg"
                    width="174"
                    height="157"
                  ></u-image>
                </view>
                <view class="item">
                  <u-image
                    src="https://cdn.uviewui.com/uview/example/fade.jpg"
                    width="174"
                    height="157"
                  ></u-image>
                </view>
                <view class="item">
                  <u-image
                    src="https://cdn.uviewui.com/uview/example/fade.jpg"
                    width="174"
                    height="157"
                  ></u-image>
                </view>
              </view>
              <view class="bottom">
                <u-icon
                  size="32"
                  class="d-icon"
                  name="../../static/image/givenull.png"
                ></u-icon>
              </view>
            </view>
          </view>
        </view>
      </template>

      <template v-if="switchindex == false && current==0">
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
              <text class="d-text on" @click="gotask">去打卡</text>
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

      <template v-if="current == 1">
        <view class="classment">
          <view class="mange">
            <view
              class="item"
              @click="creadcalss"
            >
              <view class="left">
                <view class="one">
                  创建科室
                </view>
                <view class="two">
                  医生创建科室
                </view>
              </view>
              <view class="icon">
                <u-icon
                  size="118"
                  name="../../static/image/creadclass.png"
                ></u-icon>
              </view>
            </view>
            <view
              class="item"
              @click="addclass"
            >
              <view class="left">
                <view class="one">
                  加入科室
                </view>
                <view class="two">
                  已创建的科室
                </view>
              </view>
              <view class="icon">
                <u-icon
                  size="118"
                  name="../../static/image/addclass.png"
                ></u-icon>
              </view>
            </view>
          </view>

          <view class="classitem">
            <view
              class="title"
              @click="golist"
            >
              <view class="deil">
                <u-avatar
                  src=""
                  class="portrait"
                  size="60"
                ></u-avatar>
                <text class="name">多动症科室</text>
              </view>
              <u-icon
                name="arrow-right"
                color="#A0A0A0"
                size="24"
              ></u-icon>
            </view>
            <view class="command">
              <text class="crad">科室口令:2021010230</text>
              <u-icon
                name="../../static/image/copy.png"
                size="20"
              ></u-icon>
            </view>
            <view class="listbox">
              <view class="itembox">
                <view class="textone">
                  18
                </view>
                <view class="textwo">
                  已加入(人)
                </view>
              </view>
              <view class="itembox">
                <view class="textone">
                  20
                </view>
                <view class="textwo">
                  预设人数
                </view>
              </view>
              <view class="itembox">
                <u-circle-progress
                  class="circle"
                  active-color="#0BC788"
                  width="79"
                  :percent="33"
                  border-width="3"
                >
                  33%
                </u-circle-progress>
                <view class="textwo">
                  加入率
                </view>
              </view>
              <view class="itembox">
                <u-icon
                  name="../../static/image/add.png"
                  size="70"
                ></u-icon>
                <view class="textwo">
                  邀请家长
                </view>
              </view>
            </view>
          </view>

          <view class="classitem">
            <view
              class="title"
              @click="golist"
            >
              <view class="deil">
                <u-avatar
                  src=""
                  class="portrait"
                  size="60"
                ></u-avatar>
                <text class="name">多动症科室</text>
              </view>
              <u-icon
                name="arrow-right"
                color="#A0A0A0"
                size="24"
              ></u-icon>
            </view>
            <view class="command">
              <text class="crad">科室口令:2021010230</text>
              <u-icon
                name="../../static/image/copy.png"
                size="20"
              ></u-icon>
            </view>
            <view class="listbox">
              <view class="itembox">
                <view class="textone">
                  18
                </view>
                <view class="textwo">
                  已加入(人)
                </view>
              </view>
              <view class="itembox">
                <view class="textone">
                  20
                </view>
                <view class="textwo">
                  预设人数
                </view>
              </view>
              <view class="itembox">
                <u-circle-progress
                  class="circle"
                  active-color="#0BC788"
                  width="79"
                  :percent="33"
                  border-width="3"
                >
                  33%
                </u-circle-progress>
                <view class="textwo">
                  加入率
                </view>
              </view>
              <view class="itembox">
                <u-icon
                  name="../../static/image/add.png"
                  size="70"
                ></u-icon>
                <view class="textwo">
                  邀请家长
                </view>
              </view>
            </view>
          </view>
          <!-- 提示框 -->
          <u-modal
            v-model="iscread"
            title="提示"
            :content="tiptext"
          >
          </u-modal>

        </view>
      </template>
    </scroll-view>
    
    <u-popup
      v-model="isscreen"
      mode="top"
    >
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
        <scroll-view
          class="taskcheckbox"
          scroll-y
        >

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
  </view>
</template>

<script>
import selectSwitch from '@/components/xuan-switch/xuan-switch.vue'
export default {
  components: {
    selectSwitch,
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
      //提示框配置
      iscread: false,
      tiptext: '',
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
        this.isscreen = true
      }
    },
    creadcalss() {
      //创建科室
       this.tiptext ='只有医生角色才可以创建科室。 家长加入科室即可，无需创建科室！'
       this.iscread = true
    },
    addclass() {
      uni.navigateTo({
        url: '/pages/class/add',
      })
    },
    golist() {
      uni.navigateTo({
        url: '/pages/class/list',
      })
    },
    gotask(){
      uni.navigateTo({
        url: '/pages/task/index',
      })
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../../static/css/home.scss';
</style>
