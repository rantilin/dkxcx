<template>
  <view>
    <view class="head">
      <u-tabs
        :list="list"
        inactive-color="#999999"
        active-color="#333333"
        class="nav"
        :bar-style="{background: '#0BC788'}"
        :is-scroll="false"
        :current="current"
        bar-height="6"
        @change="change"
      ></u-tabs>
    </view>
    <u-index-list :scrollTop="scrollTop" offset-top="170" class="ulist">
      <view
        v-for="(item, index) in indexList"
        :key="index"
      >
        <u-index-anchor :index="item" />
        <view class="list-cell">
           <u-avatar url="" size="60"></u-avatar>
           <text class="name">卞永*家长</text>
        </view>
        <view class="list-cell">
          列表2
        </view>
        <view class="list-cell">
          列表3
        </view>
      </view>
    </u-index-list>

  </view>
</template>
<script>
import uAvatar from '../../uview-ui/components/u-avatar/u-avatar.vue';
export default {
  components: { uAvatar },
  data() {
    return {
      list: [
        {
          name: '家长(18)',
        },
        {
          name: '医生(3)',
        },
      ],
      current: 0,
      scrollTop: 0,
			indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
					"V", "W", "X", "Y", "Z"
			],
    }
  },
  onPageScroll(e) {
			this.scrollTop = e.scrollTop;
	},
  methods:{
    change(index) {
      this.current = index
    },
  }
}
</script>
<style lang="scss" scoped>
.head {
  width: 100%;
  height: 94rpx;
  background: #fff;
  position: fixed;
  top:88rpx;
  z-index: 999;
  .nav {
    width: 45%;
    margin-left: 32rpx;
  }
}
.ulist{
  margin-top: 100rpx;
}
.list-cell {
  display: flex;
  box-sizing: border-box;
  width: 686rpx;
  margin: 10rpx auto;
  padding: 0 24rpx;
  overflow: hidden;
  color: #323233;
  font-size: 28rpx;
  line-height: 96rpx;
  background-color: #fff;
  border-radius: 12rpx;
  align-items: center;
  .name{
     margin-left: 24rpx;
  }
}
</style>