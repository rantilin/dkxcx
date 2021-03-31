<template>
  <view>
    <view class="assignment">
      <view class="title" v-if="doctodaylist.length > 0 ">
        今天
      </view>
      <view class="task" v-for="(item, index) in doctodaylist" :key="index" @tap='nav(item)'>
        <view class="onetitle">
          <u-avatar :src="item.user_avatar" class="portrait" size="76"></u-avatar>
          <view class="introduce">
            <view class="title">
              {{item.task_title}}
            </view>
            <view class="textinfo">
              <text class="one"> {{item.user_name}}</text>
              <text class="two">医生</text>
              <text class="three">发布于{{item.issue_time_s}}</text>
            </view>
          </view>
          <view class="datetime">第{{ item.task_days}}天</view>
        </view>

        <view class="describe">
          {{item.describes}}
        </view>
        <view class="listbox" v-if="item.parent_department">
          <view class="itembox">
            <view class="textone">
              {{ item.parent_department.nothit}}
            </view>
            <view class="textwo">
              已打卡(人)
            </view>
          </view>
          <view class="itembox">
            <view class="textone">
              {{item.parent_department.played}}
            </view>
            <view class="textwo">
              未打卡(人)
            </view>
          </view>
          <view class="itembox">
            <u-circle-progress class="circle" active-color="#0BC788" width="79" :percent="item.parent_department.ratio"
              border-width="3">
              {{item.parent_department.ratio}}%
            </u-circle-progress>
            <view class="textwo">
              打卡率
            </view>
          </view>
        </view>
        <view class="line"></view>
        <view class="docbottom">
          <view class="box1">
            科室:{{item.app_name}}
          </view>
          <view class="box2">
            <div class="status" :class="item.issue_name=='已结束'?'on':''">{{item.issue_name}}</div>
            <u-icon name="more-dot-fill" color="#666666" size="28"  @click="docedit(item.ID, item.user_id, item.department_user_id)"></u-icon>
          </view>
        </view>
      </view>
    </view>

    <view class="assignment" v-for="(item, index) in dotaskclist" :key="index" @tap='nav(item)'>
      <view class="title">
        {{item.issue_time | timeToDate }}
      </view>
      <view class="task">
        <view class="onetitle">
          <u-avatar :src="item.user_avatar" class="portrait" size="76"></u-avatar>
          <view class="introduce">
            <view class="title">
              {{item.task_title}}
            </view>
            <view class="textinfo">
              <text class="one"> {{item.user_name}}</text>
              <text class="two">医生</text>
              <text class="three">发布于{{item.issue_time_s}}</text>
            </view>
          </view>
          <view class="datetime">第{{ item.task_days}}天</view>
        </view>

        <view class="describe">
          {{item.describes}}
        </view>
        <view class="listbox" v-if="item.parent_department">
          <view class="itembox">
            <view class="textone">
              {{item.parent_department.nothit}}
            </view>
            <view class="textwo">
              已打卡(人)
            </view>
          </view>
          <view class="itembox">
            <view class="textone">
              {{item.parent_department.played}}
            </view>
            <view class="textwo">
              未打卡(人)
            </view>
          </view>
          <view class="itembox">
            <u-circle-progress class="circle" active-color="#0BC788" width="79" :percent="item.parent_department.ratio"
              border-width="3">
              {{item.parent_department.ratio}}%
            </u-circle-progress>
            <view class="textwo">
              打卡率
            </view>
          </view>
        </view>
        <view class="line"></view>
        <view class="docbottom">
          <view class="box1">
            科室:{{item.app_name}}
          </view>
          <view class="box2">
            <div class="status" :class="item.issue_name=='已结束'?'on':''">{{item.issue_name}}</div>
            <u-icon name="more-dot-fill" color="#666666" size="28" @click="docedit(item.ID, item.user_id, item.department_user_id)" ></u-icon>
          </view>
        </view>
      </view>
    </view>
    <u-popup v-model="docbottom" mode="bottom" border-radius="12">
      <view class="docbottom">
        <view class="checkbox" @click="edit">
          编辑
        </view>
        <view class="checkbox" @click="del" >
          删除
        </view>
        <view class="line"></view>
        <view class="checkbox" @click="stoptask">
          结束此打卡
        </view>
      </view>
    </u-popup>
  </view>
</template>
<script>
export default {
  props: {
    doctodaylist: {
      type: Array,
      default: [],
    },
    dotaskclist: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      docbottom: false,
      doclistid: 0,
      systemuser:0
    };
  },
  
  methods: {
    nav(e){
		console.log(e);
      uni.navigateTo({
        url:'/pages/task/docTaskIndex?department_id='+e.department_id+"&task_id="+e.ID+"&doc="+true
      })
    },
    docedit(id, user, systemid) {
      if(systemid == this.$db.get("user").ID || user == this.$db.get("user").ID){
          this.docbottom = true;
          this.doclistid = id
      }else{
        this.$common.modelShow('提示','你没有管理权限')
      }
    },
    edit() {
      this.docbottom = false;
      uni.navigateTo({
        url: "/pages/task/docedit?id=" + this.doclistid,
      });
    },
    del() {
      this.docbottom = false;
      this.$common.modelShow("警告", "确认删除这条任务", () => {
        this.$api.delclock(
          {
            key: this.$db.get("key"),
            user_id: this.$db.get("user").ID,
            ID: this.doclistid,
          },
          (res) => {
            if(res.code = 200){
               this.$emit("status");
            }else{
               _this.$common.errorToShow(res.datas.error);
            }
          }
        );
      });
    },
    stoptask(){
       this.docbottom = false;
       this.$common.modelShow("警告", "确认停止这条任务", () => {
        this.$api.stopclock(
          {
            key: this.$db.get("key"),
            ID: this.doclistid,
          },
          (res) => {
            if(res.code = 200){
               this.$emit("status");
            }else{
               _this.$common.errorToShow(res.datas.error);
            }
          }
        );
      });
    }
  },
 
  filters: {
    timeToDate(val) {
      var date = new Date(val * 1000);
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";

      return M + D;
    },
  },
};
</script>
<style lang="scss" scoped>
.assignment {
  width: 686rpx;
  margin: 32rpx auto;

  .title {
    font-size: 36rpx;
    font-weight: bold;
    color: #333333;
    line-height: 40rpx;
    text-indent: 10rpx;
  }

  .task {
    margin-top: 24rpx;
    width: 100%;
    background: #ffffff;
    border-radius: 12rpx;
    padding: 24rpx;

    .onetitle {
      width: 100%;
      display: flex;

      .portrait {
        width: 38rpx;
        margin: 10rpx 24rpx 0 0;
      }

      .introduce {
        width: 400rpx;

        .title {
          font-size: 30rpx;
          color: #333333;
          font-weight: bold;
        }

        .textinfo {
          width: 100%;
          padding: 6rpx 0 10rpx 6rpx;

          .one {
            font-size: 28rpx;
            color: #333333;
          }

          .two {
            color: #666666;
            font-size: 24rpx;
            margin: 0 10rpx;
          }

          .three {
            color: #999999;
            font-size: 24rpx;
          }
        }
      }

      .datetime {
        width: 120rpx;
        padding: 0 0 0 14rpx;
        height: 30rpx;
        margin-top: 10rpx;
        margin-left: auto;
        font-size: 30rpx;
        font-weight: bold;
        color: #333333;
        line-height: 30rpx;
        border-left: solid 1px #d8d8d8;
      }

      .on {
        color: #aaaaaa;
      }
    }

    .twodepartment {
      color: #666666;
      font-size: 26rpx;
      margin: 15rpx auto 15rpx auto;
    }

    .describe {
      font-size: 28rpx;
      color: #666666;
      line-height: 40rpx;
    }

    .listbox {
      width: 100%;
      margin-top: 20rpx;
      display: flex;

      .itembox {
        flex: 4;
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
    .docbottom {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .box1 {
        color: #333333;
        font-size: 26rpx;
      }
      .box2 {
        display: flex;
        .status {
          width: 108rpx;
          line-height: 46rpx;
          background: linear-gradient(118deg, #ffbe74 0%, #fd6e52 100%);
          border-radius: 23rpx;
          color: #fff;
          text-align: center;
          font-size: 26rpx;
          margin-right: 10rpx;
        }
        .on {
          background: #f5f6f7;
          color: #666666;
        }
      }
    }
    .line {
      width: 100%;
      height: 1px;
      margin: 32rpx auto;
      background: #ebebeb;
    }
  }

  .info {
    margin-top: 30rpx;
    border-top: solid 1px #ebebeb;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80rpx;

    .d-icon {
      margin-top: 5rpx;
      width: 28rpx;
      height: 28rpx;
    }

    .d-text {
      color: #999999;
      font-size: 30rpx;
      margin-left: 10rpx;
      font-weight: bold;
    }

    .on {
      color: #0bc788;
    }
  }
}
.docbottom {
  width: 100%;
  padding: 40prx 0;
  .checkbox {
    width: 100%;
    line-height: 96rpx;
    text-align: center;
    color: #333333;
    border-bottom: 1px solid #ebebeb;
    text-align: center;
    font-size: 32rpx;
  }
  .line {
    width: 100%;
    height: 16rpx;
    background: #ebebeb;
  }
}
</style>