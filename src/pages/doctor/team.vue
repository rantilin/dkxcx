<template>
<view class="content">
  <u-dropdown active-color="#25C087" class="dropbg">
    <u-dropdown-item v-model="deskval" :title="desktitle" :options="deskdata"></u-dropdown-item>
    <u-dropdown-item v-model="rankval" :title="ranktitle" :options="rankdata"></u-dropdown-item>
  </u-dropdown>
  <template v-if="isqsy">
    <view class="doclist" @click="godetail()">
      <view class="listone">
        <u-avatar size="100" src="http://gh.xnetyykf.cn/upload/images/2020/8/92875ab0c9119e73.png"></u-avatar>
        <view class="textblock">
          <view class="name">徐磊<text class="zceng">主治医生</text></view>
          <view>中童儿童康复医院</view>
        </view>
        <view class="score">
          <u-icon label="4.9" label-size="24" label-color="#FFC44D" size="24" name="/static/image/give.png"></u-icon>
        </view>
      </view>
      <view class="listwo">
        擅长：从事儿童康复临床、教学及科研十余年，擅长儿童自闭谱系（ASD）、多动症（ADHD）……
      </view>
      <view class="listree">
        <view class="mstext">
          <u-icon label="电话 :￥20" margin-left="15" label-size="26" label-color="#333333" size="38" name="/static/image/cphone.png"></u-icon>
          <u-icon label="图文 :￥20" margin-left="15" label-size="26" label-color="#333333" size="38" name="/static/image/charpic.png"></u-icon>
        </view>
        <view class="wybutton">
          问医生
        </view>
      </view>
    </view>
    <view class="doclist" @click="godetail()">
      <view class="listone">
        <u-avatar size="100" src="http://gh.xnetyykf.cn/upload/images/2020/8/92875ab0c9119e73.png"></u-avatar>
        <view class="textblock">
          <view class="name">徐磊<text class="zceng">主治医生</text></view>
          <view>中童儿童康复医院</view>
        </view>
        <view class="score">
          <u-icon label="4.9" label-size="24" label-color="#FFC44D" size="24" name="/static/image/give.png"></u-icon>
        </view>
      </view>
      <view class="listwo">
        擅长：从事儿童康复临床、教学及科研十余年，擅长儿童自闭谱系（ASD）、多动症（ADHD）……
      </view>
      <view class="listree">
        <view class="mstext">
          <u-icon label="电话 :￥20" margin-left="15" label-size="26" label-color="#333333" size="38" name="/static/image/cphone.png"></u-icon>
          <u-icon label="图文 :￥20" margin-left="15" label-size="26" label-color="#333333" size="38" name="/static/image/charpic.png"></u-icon>
        </view>
        <view class="wybutton">
          问医生
        </view>
      </view>
    </view>
  </template>
  <template v-else>
    <view class="cradnull">
      <view class="cardnum1">
        <image class="cardimg" src="../../static/image/doctornull.png" mode=""></image>
      </view>
      <view class="cardtitle">
        暂无就诊人
      </view>
    </view>
  </template>
</view>
</template>

<script>
export default {
  data() {
    return {
      isqsy: true,
      deskval: 0,
      rankval: 0,
      deskdata: [{
          label: '全部科室',
          value: 0,
        },
        {
          label: '发育疾病',
          value: 1,
        },
        {
          label: '神内康复',
          value: 2,
        },
        {
          label: '语言障碍',
          value: 3,
        },
        {
          label: '心理康复',
          value: 4,
        }
      ],
      rankdata: [{
          label: '推荐排序',
          value: 0,
        },
        {
          label: '接诊数量',
          value: 1,
        },
        {
          label: '回复率',
          value: 2,
        },
        {
          label: '好评率',
          value: 3,
        },
      ],
    }
  },
  computed: {
    desktitle() {
      return this.deskdata[this.deskval].label;
    },
    ranktitle() {
      return this.rankdata[this.rankval].label;
    }
  },
  methods: {
    godetail() {
      uni.navigateTo({
        url: `/pages/doctor/detail`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
}

.dropbg {
  background: #fff;
}

.doclist {
  width: 686rpx;
  height: 354rpx;
  background: #FFFFFF;
  border-radius: 8rpx;
  margin: 32rpx auto;
  padding: 16rpx 24rpx 34rpx 24rpx;

  .listone {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    .textblock {
      width: 400rpx;
      line-height: 45rpx;
      margin: 24rpx;
      font-size: 26rpx;
      color: #333333;

      .name {
        font-size: 28rpx;
        font-weight: bold;

        .zceng {
          font-size: 26rpx;
          color: #666666;
          margin-left: 10rpx;
        }
      }
    }

    .score {
      height: 80rpx;
      margin-right: 0;
    }
  }

  .listwo {
    width: 100%;
    font-size: 26rpx;
    color: #666666;
    line-height: 40rpx;
  }

  .listree {
    width: 100%;
    display: flex;
    margin-top: 36rpx;
    justify-content: space-between;

    .mstext {
      width: 405rpx;
      display: flex;
      justify-content: space-between;
    }

    .wybutton {
      width: 130rpx;
      height: 60rpx;
      line-height: 60rpx;
      background: #25C087;
      border-radius: 30rpx;
      color: #fff;
      text-align: center;
    }
  }
}

.cradnull {
  width: 100%;

  .cardnum1 {
    margin-top: 78rpx;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .cardimg {
      width: 492rpx;
      height: 358rpx;
    }
  }

  .cardtitle {
    margin-top: 60rpx;
    color: #999999;
    font-size: 28rpx;
    text-align: center;
  }

}
</style>
