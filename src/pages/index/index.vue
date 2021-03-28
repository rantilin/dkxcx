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
          <selectSwitch @change="changeSwitch" :switchList="switchList" :defaultSwitch="status != 2" />
          <image :src="switchindex?'../../static/image/saixuan.png':'../../static/image/saixuannull.png'"
            class="filtrate" @click="filtrate"></image>
        </view>
      </view>
    </view>

    <scroll-view class="contentvm" scroll-y>
      <!-- 用户端 -->
      <template v-if="switchindex && current==0 && status == 2">
        <useralltask :indexList="indexList"></useralltask>
      </template>

      <template v-if="switchindex == false && current==0 && status == 2">
        <usermytask :signTaskList="signTaskList"></usermytask>
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
      <defaultPage :status="4" text="暂无打卡任务" v-if="taskList.length==0"></defaultPage>
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
          <view class="warp" @tap='checked(index)' v-for="(item,index) in taskList" :key="index">
            <view class="taskcheckboxWarp">
              <image src="../../static/image/doctor.png" class="taskcheckboxItem" mode=""></image>
              <view class="">
                <view class="taskcheckboxTitle">
                  {{item.task_title}}
                </view>
                <view class="taskcheckboxBottomWarp">
                  <view class="name">
                    {{item.user_name}}
                  </view>
                  <view class="position">
                    医生
                  </view>
                  <view class="time">
                    发布于{{item.issue_time_s}}
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
          <view class="reset" @tap='reset'>
            重置
          </view>
          <view class="confirm" @tap='saveTask'>
            确认选择
          </view>
        </view>
      </view>
    </u-popup>


    <view class="fixed" @click="addpub" v-if="status == 1">
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
import defaultPage from "@/components/default.vue";

export default {
  components: {
    selectSwitch,
    doclist,
    useralltask,
    usermytask,
    Classmanage,
    defaultPage
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
      isscreen: false,
      indexOfChecked: 0,
      status: this.$db.get("user").type_status, //2用户，1医生
      switchindex: this.status == 2 ,
      docmyclass: [],
      classify: [], //科室分类
      classid: 0, //默认科室id
      calssifyindex: 0,
      doctodaylist: [],
      dotaskclist: [], //医生任务列表
      //合并用户
      indexOfChecked: 0, //设置选择任务初始下标
      key: "",
      taskList: [], //任务列表
      taskId: 0, //选中任务id
      indexList: [],
      departmentName: "",
      signTaskList: [],
    };
  },

  onLoad() {
   this.key = uni.getStorageSync("key");
   if (this.status == 1) {
      this.docgetclasslist();
    } 
    if(this.status == 2){
       this.usermytask()
    }
  },
  methods: {
    change(index) {
      this.current = index;
      if (this.current == 1 && this.status == 1) {
        this.docgetmyclass();
      }
      if (this.current == 1 && this.status == 2){
        this.usergetmyclass()
      }
    },
    changeSwitch(is) {
      this.switchindex = is;
      if (is && this.status == 1) {
        this.doclisttask(this.classify[this.calssifyindex].ID);
      }
      if(!is && this.status == 1){
          this.mydoclisttask();
      }
      if (is && this.status == 2) {
         this.usergetclass();
      }
      if(!is && this.status == 2){
         
      }
    },
    filtrate() {
      if (this.switchindex) {
        this.isscreen = true;
      }
      if (this.status == 2) {
        this.calssteb(0, true);
      }
    },
    docgetmyclass() { //医生加入科室渲染
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
    usergetclass(){
      let data = {
        key: this.$db.get("key"),  //用户加入科室分类
        user_id: this.$db.get("user").ID,
      };
      this.$api.ParentClass(data, (res) => {
        if (res.code == 200) {
          this.classify = res.datas;
          this.departmentName = res.datas[0].app_name;
          this.calssteb(0, true);
        } else {
          this.$common.errorToShow(res.datas.error);
        }
      });
    },
    usergetmyclass() {  //用户加入科室渲染
      let data = {
        key: this.$db.get("key"),
        user_id: this.$db.get("user").ID,
      };
       this.$api.getParentClass(data, (res) => {
          if (res.code == 200) {
            this.docmyclass = res.datas;
          } else {
            this.$common.errorToShow(res.datas.error);
          }
        });
    },
    usermytask(){  //用户我的任务渲染
      let data = {
          key: this.key,
          user_id: this.userInfo.ID,
        };
      this.$api.getParentTask(data, (res) => {
          for (let item of res.datas) {
            item.time = item.issue_time
            item.i_time = this.$common.timeToDate(
              new Date(item.issue_time).getTime(),
              false,
              3
            );
            item.issue_time = this.$common.timeToDate(
              new Date(item.issue_time).getTime(),
              false,
              2
            );
          }
          this.signTaskList = res.datas;
        });
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
    // calssteb(index) {
    //   this.calssifyindex = index;
    //   this.classid = this.classify[this.calssifyindex].ID;
    // },
    taskstatus() {
      if(this.switchindex){
          this.doclisttask(this.classify[this.calssifyindex].ID);
      }else{
          this.mydoclisttask()
      }
    },
    //cxb开始
    checked(i) {
      this.indexOfChecked = i;
      this.taskId = this.taskList[this.indexOfChecked].ID;
    },
    calssteb(i, type) {
      //点击科室
      this.indexOfChecked = 0; //将选项默认重置为第一个
      this.calssifyindex = i; //将科室选择为点击那一项
      this.taskList = []; //清空任务列表，避免出错
      console.log(this.classify, 7);
      let data = {
        key: this.key,
        department_id: this.classify[i].department_id,
      };
      this.$api.getDepartTask(data, (res) => {
        if (res.code == 200) {
          this.taskList = res.datas;
          this.taskId = this.taskList[this.indexOfChecked].ID; //任务列表默认选项的id
        }
        // if(type&&res.code==0){//type:点击筛选类型，如果该选项下没有任务，跳转下一个选项
        //     i++
        //     this.calssifyindex=i
        //     this.calssteb(i,type)
        //   }
      });
    },
     saveTask() {
      //选择任务
      let data = {
        key: this.key,
        user_id: this.userInfo.ID,
        task_id: this.taskId,
      };
      this.$api.getParentIndexDetail(data, (res) => {
        if (res.code == 200 && res.datas != null) {
          
          for (let item of res.datas) {
			  item.time = item.app_time
            item.app_time = this.$common.timeToDate(
              new Date(item.app_time).getTime(),
              false,
              2
            );
          }
          this.indexList = res.datas;

          console.log(this.indexList);
          this.isscreen = false;
          this.departmentName = this.classify[this.calssifyindex].app_name;
        } else if (res.datas == null) {
          this.isscreen = false;
          console.log(223);
          uni.showModal({
            title: "提示",
            content: "当前任务无信息",
            showCancel: false,
            confirmText: "知道了",
          });
        }
      });
    },
    reset() {
      //重置
      this.calssteb(0);
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
