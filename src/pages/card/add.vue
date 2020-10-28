<template>
<view class="content">
  <view class="registration">
    <view class="ghlist">
      <text class="name">就诊人姓名<text class="red">*</text></text>
      <view class="rightext">
        <input type="text" v-model="user.CardName" placeholder="请输入患者姓名" class="ztinput" />
      </view>
    </view>
    <view class="ghlist">
      <text class="name">证件类型</text>
      <view class="rightext">
        <picker @change="kidchange" :value="user.kidcardindex" :range="user.kidcard" range-key="label">
          <view class="uni-input">{{user.kidcard[user.kidcardindex].label}}</view>
        </picker>

      </view>
    </view>
    <view class="ghlist">
      <text class="name">证件号码<text class="red">*</text></text>
      <view class="rightext">
        <input type="text" v-model="user.kidcardnum" placeholder="请输入证件号码" class="ztinput" />
      </view>
    </view>
    <view class="ghlist">
      <text class="name">性别</text>
      <view class="rightext">
        <picker @change="sexchange" :value="user.sexindex" :range="user.sex" range-key="label">
          <view class="uni-input">{{user.sex[user.sexindex].label}}</view>
        </picker>

      </view>
    </view>
    <view class="ghlist">
      <text class="name">出生年月</text>
      <view class="rightext" @click="agetime">
        <text>{{user.age}}</text>
        <u-picker mode="time" @confirm="agecon" v-model="ageshow"></u-picker>
      </view>
    </view>
    <view class="ghlist">
      <text class="name">监护人姓名<text class="red">*</text></text>
      <view class="rightext">
        <input type="text" v-model="user.guardianname" placeholder="请输入监护人姓名" class="ztinput" />
      </view>
    </view>
    <view class="ghlist">
      <text class="name">监护人手机<text class="red">*</text></text>
      <view class="rightext">
        <input type="text" v-model="user.guardianphone" placeholder="请输入监护人手机" class="ztinput" />
      </view>
    </view>
    <view class="ghlist">
      <text class="name">与就诊人关系</text>
      <view class="rightext">
        <picker @change="concernchange" :value="user.concernindex" :range="user.concern" range-key="label">
          <view class="uni-input">{{user.concern[user.concernindex].label}}</view>
        </picker>
      </view>
    </view>
    <view class="ghlist">
      <text class="name">所在区域</text>

      <view class="rightext" @tap="handleTap('picker4')">
        <text class="item-label">{{ label4 }}</text>
        <text v-if="!label4" class="item-placeholder">请选择</text>
        <lb-picker ref="picker4" v-model="value4" mode="multiSelector" :list="list1" :level="3" :dataset="{ name: 'label4' }" @change="handleChange" @confirm="handleConfirm" @cancel="handleCancel">
        </lb-picker>
      </view>
    </view>

    <view class="ghlist">
      <text class="name">详细住址</text>
      <view class="rightext">
        <input maxlength="300" type="text" v-model="user.address" placeholder="请输入详细地址" class="ztinput" />
      </view>
    </view>
    <view class="hint">
      <view class="name">温馨提示</view>
      <view class="text">本院实行实名制就诊，请务必填写真实信息，因信息错误产生的一切后果自行负责。</view>
    </view>
    <view class="gopaybuttom">
      立即增加
    </view>
  </view>
</view>
</template>

<script>
import LbPicker from '@/components/lb-picker'
import areaData from '@/common/citydata/area-data-min'
export default {
  components: {
    LbPicker
  },
  data() {

    return {
      user: {
        CardName: '',
        sexindex: 0,
        sex: [{
            value: 0,
            label: '男'
          },
          {
            value: 1,
            label: '女'
          }
        ],
        kidcardindex: 0,
        kidcard: [{
            value: 0,
            label: '户口本编号'
          },
          {
            value: 1,
            label: '身份证'
          }
        ],
        age: '请选择',
        concernindex: 0,
        concern: [{
            value: 0,
            label: '请选择'
          },
          {
            value: 1,
            label: '父母'
          },
          {
            value: 2,
            label: '祖父母和外祖父母'
          },
          {
            value: 3,
            label: '兄、弟、姐、妹'
          },
          {
            value: 4,
            label: '其他'
          }
        ],
        kidcardnum: '',
        guardianname: '',
        guardianphone: '',
        address: ''
      },

      value4: ['510000', '510100', '510101'],
      label4: '',
      list1: areaData,
      ageshow: false,
    }
  },
  computed: {

  },
  methods: {
    sexchange(val) {
      this.user.sexindex = val.detail.value
    },
    kidchange(val) {
      this.user.kidcardindex = val.detail.value
    },
    concernchange(val) {
      this.user.concernindex = val.detail.value
    },
    handleTap(picker) {
      this.$refs[picker].show()
    },
    handleChange(e) {

    },
    handleConfirm(e) {
      // 如果存在多个picker，可以在picker上设置dataset属性，confirm中获取，就能区分是哪个picker了

      if (e) {
        const name = e.dataset.name
        const label = e.item.map(m => m.label).join('-')
        if (name && label) {
          this[name] = label
        }
      }
    },
    handleCancel(e) {
      console.log('cancel::', e)
    },
    agetime() {
      this.ageshow = true
    },
    agecon(val) {
      this.user.age = `${val.year}-${val.month}-${val.day}`
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding: 32rpx;
}

.registration {
  .ghtrae {
    width: 100%;

    .nameopint {
      color: #333333;
      font-size: 28rpx;
      line-height: 80rpx;
    }

    .issue {
      width: 100%;

      .describe {
        color: #666666;
        font-size: 26rpx;
      }
    }

  }

  .red {
    color: red;
  }

  .hint {
    width: 100%;

    .name {
      color: #333333;
      font-size: 26rpx;
      line-height: 80rpx;
      font-weight: bold;
    }

    .text {
      color: #666666;
      font-size: 26rpx;
      line-height: 40rpx;
    }
  }

  .ghlist {
    width: 100%;
    height: 80rpx;
    border-bottom: #F2F2F2 solid 1px;
    display: flex;
    justify-content: space-between;

    .name {
      color: #333333;
      font-size: 28rpx;
      line-height: 80rpx;
    }

    .rightextone {
      font-size: 26rpx;
      color: #666666;
      line-height: 80rpx;
    }

    .rightext {
      font-size: 26rpx;
      color: #000000;
      line-height: 80rpx;

      .ztinput {
        height: 80rpx;
        text-align: right;
        color: #666666;
        font-size: 26rpx;
      }
    }

    .green {
      color: #07CC86;
    }

    .rightmore {
      width: 26rpx;
      height: 26rpx;
      float: right;
      margin-top: 50rpx;
      margin-left: 22rpx;
    }

    .userimg {
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
    }
  }
}

.pixbuttom {
  position: fixed;
  bottom: 10rpx;
  width: 686rpx;
  height: 100rpx;
  background: rgba(7, 204, 134, 1);
  border-radius: 8rpx;
  font-size: 32rpx;
  font-weight: 500;
  color: #fff;
  line-height: 32rpx;
  text-align: center;
  line-height: 100rpx;
}

.paybottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  height: 400rpx;
  padding: 32rpx;
  border-radius: 20rpx 20rpx 0 0;

  .title {
    font-size: 40rpx;
    color: #333333;
    font-weight: bold;
  }

  .xx {
    position: absolute;
    width: 40rpx;
    height: 40rpx;
    top: 20rpx;
    right: 20rpx;
  }

  .list {
    width: 100%;
    height: 80rpx;
    overflow: hidden;
    zoom: 1;
    padding: 20rpx 0;
    margin: 20rpx 0;

    .leftimg {
      width: 60rpx;
      height: 60rpx;
      float: left;
      margin-right: 20rpx;
    }

    .lefttext {
      font-size: 32rpx;
      float: left;
      line-height: 50rpx;
    }

    .rihgtradio {
      color: #07CC86;
      float: right;
    }
  }

}

.gopaybuttom {
  position: absolute;
  bottom: 10rpx;
  width: 686rpx;
  height: 100rpx;
  background: #3398FF;
  border-radius: 8rpx;
  font-size: 32rpx;
  font-weight: 500;
  color: #fff;
  line-height: 32rpx;
  text-align: center;
  line-height: 100rpx;
}
</style>
