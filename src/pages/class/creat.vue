<template>
  <view>
    <view class="cviews">
      填写科室基本信息
    </view>
    <view class="config">
      <view class="listinput">
        <view class="label">
          预设人数
        </view>
        <view class="rightcont">
          <u-input v-model="num" input-align="right" placeholder="请输入预设人数" type="number" />
        </view>
      </view>
      <view class="listinput onborder">
        <view class="label">
          科室名称
        </view>
        <view class="rightcont">
          <u-input v-model="classt" input-align="right" placeholder="请输入科室名称" />
        </view>
      </view>
    </view>
    <view class="buttom" @click="cread">
      创建科室
    </view>
    <!-- 提示框 -->
    <u-modal v-model="config.iscread" title="创建科室成功" :content="config.tiptext" :show-confirm-button="true"
      :show-cancel-button="true" confirm-text="邀请家长" cancel-text="邀请医生" confirm-color="#0BC788" cancel-color="#FFBA4A"
      @confirm="confirm" @cancel="cancel">
    </u-modal>
    
  </view>
</template>
<script>
export default {
  data() {
    return {
      num: '',
      classt: '',
      config: {
        iscread: false,
        tiptext:
          '已创建科室，可邀请医生/家长进入科室。 使用过程中有任何问题，可联系我们！',
      },
      app_watchword: '',
    }
  },
  methods: {
    cread() {
      let _this = this
      if (_this.num == null || _this.num == '') {
        _this.$common.errorToShow('班级人数不能为空')
        return false
      }
      if (_this.classt == null || _this.classt == '') {
        _this.$common.errorToShow('科室名称不能为空')
        return false
      }
      _this.$api.calsscreat(
        {
          people_num: _this.num,
          app_name: _this.classt,
          key: _this.$db.get('key'),
        },
        (res) => {
          if (res.code == 200) {
            _this.app_watchword = res.datas.app_watchword
            _this.config.iscread = true
          } else {
            _this.$common.errorToShow(res.datas.error)
          }
        }
      )
    },
    numcode() {
      if (this.num >= 100) {
        this.$common.errorToShow('班级人数不能超过100')
      }
    },
    confirm() {
        uni.navigateTo({
         url: `/pages/share/wxshare?code=${this.app_watchword}&type=2&title=${this.classt}`,
      })
    },
    cancel() {
      uni.navigateTo({
         url: `/pages/share/wxshare?code=${this.app_watchword}&type=1&title=${this.classt}`,
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.config {
  width: 686rpx;
  margin: 30rpx auto;
  padding: 0 24rpx;
  border-radius: 12rpx;
  background: #fefffe;
  .listinput {
    width: 100%;
    display: flex;
    padding: 24rpx 0;
    border-bottom: solid 1px #ebebeb;
    justify-content: space-between;
    align-items: center;
    .label {
      color: #666666;
      font-size: 32rpx;
    }

    .rightcont {
      color: #333333;
      font-size: 28rpx;
      display: flex;
      .my-input {
        text-align: right;
      }
    }
  }
  .onborder {
    border: none;
  }
}
.buttom {
  width: 686rpx;
  margin: 200rpx auto;
  text-align: center;
  line-height: 88rpx;
  background: #0bc788;
  color: #ffffff;
  border-radius: 44rpx;
}
.cviews {
  width: 686rpx;
  color: #666666;
  margin: 20rpx auto;
  font-size: 28rpx;
}
</style>