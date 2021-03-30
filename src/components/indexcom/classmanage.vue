<template>
  <view>
    <view class="classment">
      <view class="mange">
        <view class="item" @tap="creadcalss">
          <view class="left">
            <view class="one">
              创建科室
            </view>
            <view class="two">
              医生创建科室
            </view>
          </view>
          <view class="icon">
            <u-icon size="118" name="/static/image/creadclass.png"></u-icon>
          </view>
        </view>
        <view class="item" @tap="addclass">
          <view class="left">
            <view class="one">
              加入科室
            </view>
            <view class="two">
              已创建的科室
            </view>
          </view>
          <view class="icon">
            <u-icon size="118" name="/static/image/addclass.png"></u-icon>
          </view>
        </view>
      </view>

      <view class="classitem" v-for="(item,index) in docmyclass" :key="index">
        <view class="title" @tap="golist(item.ID)">
          <view class="deil">
            <u-avatar :src="item.user_avatar" class="portrait" size="60"></u-avatar>
            <text class="name">{{item.app_name}}</text>
          </view>
          <u-icon name="arrow-right" color="#A0A0A0" size="24"></u-icon>
        </view>
        <view class="command">
          <text class="crad" @tap='copy(item.app_watchword)'>科室口令:{{item.app_watchword}}</text>
          <u-icon name="/static/image/copy.png" size="20" @tap='copy(item.app_watchword)'></u-icon>
        </view>
        <view class="listbox">
          <view class="itembox">
            <view class="textone">
              {{item.depart_num == 0? '0':item.depart_num.parent_num}}
            </view>
            <view class="textwo">
              已加入(人)
            </view>
          </view>
          <view class="itembox">
            <view class="textone">
              {{item.people_num}}
            </view>
            <view class="textwo">
              预设人数
            </view>
          </view>
          <view class="itembox">
            <u-circle-progress class="circle" active-color="#0BC788" width="79"
              :percent="item.depart_num.rate | toconvertint" border-width="3">
              {{item.depart_num == 0 ? '0':item.depart_num.rate | toconvertint}}%
            </u-circle-progress>
            <view class="textwo">
              加入率
            </view>
          </view>
          <view class="itembox">
            <u-icon name="/static/image/add.png" size="70"></u-icon>
            <view class="textwo">
              邀请家长
            </view>
          </view>
        </view>
      </view>

      <!-- 提示框 -->
      <u-modal v-model="iscread" title="提示" :content="tiptext">
      </u-modal>

    </view>
  </view>
</template>
<script>
export default {
  props: {
    docmyclass: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      //提示框配置
      iscread: false,
      tiptext: '',
      status: parseInt(this.$db.get("user").type_status), //2用户，1医生
    }
  },
  methods: {
    creadcalss() {
      //创建科室
      //  this.tiptext ='只有医生角色才可以创建科室。 家长加入科室即可，无需创建科室！'
      //  this.iscread = true
      if (this.status == 2) {
        uni.showModal({
          title: "提示",
          content:
            "只有医生角色才可以创建科室。 家长加入科室即可，无需创建科室！",
          showCancel: false,
          confirmText: "知道了",
        });
        return;
      }
      uni.navigateTo({
        url: "/pages/class/creat",
      });
    },
    addclass() {
      uni.navigateTo({
        url: '/pages/class/add',
      })
    },
    golist(id) {
      console.log(this.status)
      if(this.status == 2){
         uni.navigateTo({
            url: '/pages/class/list?id=' + id,
          })
      }
      if(this.status == 1){
         uni.navigateTo({
            url: '/pages/class/doclist?id=' + id,
          })
      }
      
    },
    copy(e) {
      uni.setClipboardData({
        data: e,
        success: function () {
          uni.showToast({
            title:"复制成功"
          })
        },
      });
    }
  },
  filters: {
    toconvertint(val) {
      return val.slice(0, val.length - 1)
    },
  },
}
</script>
<style lang="scss" scoped>
.classment {
  .mange {
    width: 686rpx;
    margin: 32rpx auto;
    display: flex;
    justify-content: space-between;

    .item {
      width: 331rpx;
      min-height: 138rpx;
      background: #ffffff;
      border-radius: 12rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        padding: 0 0 0 24rpx;

        .one {
          font-size: 32rpx;
          color: #333333;
          font-weight: bold;
        }

        .two {
          margin-top: 10rpx;
          font-size: 24rpx;
          color: #666666;
        }
      }

      .icon {
      }
    }
  }

  .classitem {
    width: 686rpx;
    margin: 32rpx auto;
    min-height: 315rpx;
    background: #fff;
    border-radius: 12rpx;
    padding: 24rpx;

    .title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .deil {
        display: flex;
        align-items: center;

        .name {
          margin-left: 10rpx;
          font-size: 32rpx;
          color: #333333;
          font-weight: bold;
        }
      }
    }

    .command {
      margin: 24rpx auto;
      display: flex;
      color: #666666;
      font-size: 24rpx;

      .crad {
        margin-right: 10rpx;
      }
    }

    .listbox {
      width: 100%;
      display: flex;

      .itembox {
        width: 25%;
        text-align: center;
      }

      .textone {
        font-size: 40rpx;
        color: #333333;
        line-height: 80rpx;
      }

      .textwo {
        color: #666666;
      }

      .circle {
        margin: 0 auto 3rpx auto;
        font-size: 22rpx;
        color: #666666;
      }
    }
  }
}
</style>