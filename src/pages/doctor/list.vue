<template>
<view class="content">
  <view class="topsearch">
    <u-search class="search" placeholder="请输入医生名" bg-color="#ffffff" action-text="搜索" v-model="keyword" @search="search"></u-search>
  </view>
  <view class="details">

    <view class="leftmenu">
      <view class="menuitem" :class="index==doctindex?'on':''" v-for="(item,index) in doctorlist" :key="index" @click="docteb(index,item.ID)">
        <view class="shelectedZhu"></view>
        {{item.Name}}
      </view>

    </view>
    <view class="rightcontent">
      <template v-if="doctorlist[doctindex] && doctorlist[doctindex].Children">
        <view class="deskitem" v-for="(itmebz,index) in doctorlist[doctindex].Children" :key="index" @click="godoc(itmebz.ID)">
          {{itmebz.Name}}
        </view>
      </template>

    </view>

  </view>
</view>
</template>

<script>
export default {
  data() {
    return {
      doctorlist: [],
      doctindex: 0,
      keyword: '',

    }
  },
  onLoad() {
    this.getdotclass()
  },
  methods: {
    getdotclass() {
      this.$api.dotclass(res => {
        this.doctorlist = res.data
      })
    },
    docteb(index, docid) {
      this.doctindex = index
    },
    godoc(docid) {
      uni.navigateTo({
        url: `/pages/doctor/doclist?id=${docid}`
      })
    },
    search(value) {
      uni.navigateTo({
        url: `/pages/doctor/doclist?sear=${value}`
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.content {}

.topsearch {
  width: 100%;
  padding: 20upx 0 20upx 30upx;
  background: #fff;

  .search {
    width: 95%;
  }
}

.details {
  width: 100%;
  margin: auto;
  display: flex;

  .leftmenu {
    width: 35%;
    height: 85vh;
    background: #f8f8f8;

    .menuitem {
      font-size: 28upx;
      color: #9393a0;
      height: 100upx;
      line-height: 100upx;
      text-align: center;
      position: relative;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .shelectedZhu {
        height: 28px;
        width: 4px;
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
      }
    }

    .on {
      color: #2FDBC9;
      font-weight: bold;
      background: #ffffff;

      .shelectedZhu {
        background: #2FDBC9;
      }
    }
  }
}

.rightcontent {
  width: 65%;
  height: 85vh;
  background: #fff;
  .deskitem {
    font-size: 28upx;
    color: #5d5d5d;
    height: 100upx;
    line-height: 100upx;
    text-align: center;
    border-bottom: #f8f8f8 1upx solid;
  }
}
</style>
