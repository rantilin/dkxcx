<template>
  <view class="page">
    <view class="topnav">
      <view class="user">
        <u-avatar size="60" :src="userInfo.user_avatar"></u-avatar>
        <text class="username"> {{userInfo.nicknames+userInfo.type_status_name}}</text>
      </view>
      <view class="tebnav">
        <view class="tebleft">
          <u-tabs :list="list" inactive-color="#999999" active-color="#333333" :bar-style="{background: '#0BC788'}"
            :is-scroll="false" :current="current" bar-height="4" @change="change"></u-tabs>
        </view>
        <view class="tebright" v-if="current==0">
          <selectSwitch @change="changeSwitch" :switchList="switchList" :defaultSwitch="switchindex" />
          <image :src="switchindex?'../../static/image/saixuan.png':'../../static/image/saixuannull.png'"
            class="filtrate" @click="filtrate"></image>
        </view>
      </view>
    </view>

    <scroll-view class="contentvm" scroll-y>
      <!-- 用户端 -->
      <template v-if="switchindex && current==0 && status == 0">
        <useralltask></useralltask>
      </template>

      <template v-if="switchindex == false && current==0 && status == 0">
        <usermytask></usermytask>
      </template>
      <!-- 用户端结束 -->
      <!-- 医生端 -->
      <template v-if="current==0 && status == 1">
        <doclist :doctodaylist="doctodaylist" :dotaskclist="dotaskclist" @status="taskstatus"></doclist>
      </template>
      <!-- 医生端结束 -->

      <template v-if="current == 1">
        <classmanage :docmyclass="docmyclass"></classmanage>
      </template>

    </scroll-view>

    <u-popup v-model="isscreen" mode="top">
      <view class="pop-department">
        <view class="title">
          科室
        </view>
        <view class="ment-list">
          <view class="item" :class="calssifyindex == index?'on':''" v-for="(item,index) in classify" :key="index"
            @click="calssteb(index)">
            {{item.app_name}}
          </view>
        </view>
        <view class="title mt30">
          打卡任务
        </view>
        <scroll-view class="taskcheckbox" scroll-y>
          <view class="warp" @tap='checked(index)' v-for="(item,index) in 4" :key="index">
            <view class="taskcheckboxWarp">
              <image src="" class="taskcheckboxItem" mode=""></image>
              <view class="">
                <view class="taskcheckboxTitle">
                  多动动日常训练要点
                </view>
                <view class="taskcheckboxBottomWarp">
                  <view class="name">
                    张秋
                  </view>
                  <view class="position">
                    医生
                  </view>
                  <view class="time">
                    发布于02-19 10:28
                  </view>
                </view>
              </view>
            </view>
            <view class="">
              <image class="check" v-if="index!==indexOfChecked" src="../../static/image/checked.png" mode=""></image>
              <image class="check" v-else src="../../static/image/checked1.png" mode=""></image>
            </view>
          </view>
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

    <view class="fixed" @click="addpub">
      <u-icon name="plus" color="#fff" size="38"></u-icon>
    </view>
  </view>
</template>

<script>
import selectSwitch from "@/components/xuan-switch/xuan-switch.vue";
import doclist from "@/components/indexcom/doclist.vue";
import useralltask from "@/components/indexcom/useralltask.vue";
import usermytask from "@/components/indexcom/usermytask.vue";
import Classmanage from "@/components/indexcom/classmanage.vue";
export default {
  components: {
    selectSwitch,
    doclist,
    useralltask,
    usermytask,
    Classmanage,
  },
  data() {
    return {
      list: [
        {
          name: "健康打卡",
        },
        {
          name: "科室管理",
        },
      ],
      userInfo: this.$db.get("user"),
      current: 0,
      switchList: ["全部", "我的"],
      switchindex: true,
      isscreen: false,
      indexOfChecked: 0,
      status: this.$db.get("user").type_status, //0用户，1医生
      docmyclass: [],
      classify: [], //科室分类
      classid: 0, //默认科室id
      calssifyindex: 0,
      doctodaylist: [],
      dotaskclist: [],
    };
  },
  onLoad() {
    this.docgetclasslist();
  },
  methods: {
    change(index) {
      this.current = index;
      if (this.current == 1) {
        this.docgetmyclass();
      }
    },
    changeSwitch(is) {
      this.switchindex = is;
      if (is) {
        this.doclisttask(this.classify[this.calssifyindex].ID);
      } else {
        this.mydoclisttask();
      }
    },
    filtrate() {
      if (this.switchindex) {
        this.isscreen = true;
      }
    },
    docgetmyclass() {
      let _this = this;
      _this.$api.mycalss(
        {
          key: _this.$db.get("key"),
          user_id: _this.$db.get("user").ID,
        },
        (res) => {
          if (res.code == 200) {
            _this.docmyclass = res.datas;
          } else {
            _this.$common.errorToShow(res.datas.error);
          }
        }
      );
    },

    docgetclasslist() {
      this.$api.classpubic(
        {
          key: this.$db.get("key"),
          user_id: this.$db.get("user").ID,
        },
        (res) => {
          if (res.code == 200) {
            this.classify = res.datas;
            this.doclisttask(this.classify[this.calssifyindex].ID);
          } else {
            this.$common.errorToShow(res.datas.error);
          }
        }
      );
    },
    doclisttask(id) {
      let _this = this
      _this.$api.docdakalist(
        {
          key: _this.$db.get("key"),
          department_id: id,
        },
        (res) => {
          if (res.code == 200) {
            let datalist = [];
            datalist = res.datas;
            _this.doctodaylist = datalist.filter((item) => {
              return (
                new Date(item.issue_time * 1000).toDateString() ==
                new Date().toDateString()
              );
            });
            _this.dotaskclist = datalist.filter((item) => {
              return (
                new Date(item.issue_time * 1000).toDateString() !=
                new Date().toDateString()
              );
            });
           
          } else {
            _this.$common.errorToShow(res.datas.error);
          }
        }
      );
    },
    mydoclisttask() {
      let _this = this;
      _this.$api.mydocdakalist(
        {
          key: _this.$db.get("key"),
          user_id: _this.$db.get("user").ID,
        },
        (res) => {
          if (res.code == 200) {
            let datalist = [];
            datalist = res.datas;
            _this.doctodaylist = datalist.filter((item) => {
              return (
                new Date(item.issue_time * 1000).toDateString() ==
                new Date().toDateString()
              );
            });
            _this.dotaskclist = datalist.filter((item) => {
              return (
                new Date(item.issue_time * 1000).toDateString() !=
                new Date().toDateString()
              );
            });
          } else {
            _this.$common.errorToShow(res.datas.error);
          }
        }
      );
    },
    calssteb(index) {
      this.calssifyindex = index;
      this.classid = this.classify[this.calssifyindex].ID;
    },
    taskstatus() {
      if(this.switchindex){
          this.doclisttask(this.classify[this.calssifyindex].ID);
      }else{
          this.mydoclisttask()
      }
    },

    gotask() {
      uni.navigateTo({
        url: "/pages/task/index",
      });
    },
    addpub() {
      uni.navigateTo({
        url: "/pages/task/publish",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../static/css/home.scss";
</style>
