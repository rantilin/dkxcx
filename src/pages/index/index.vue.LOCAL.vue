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
      <template v-if="switchindex && current==0 && status == 2">
        <view class="common" v-for="(item,index) in indexList" :key='index' @tap='gotask(item,1)'>
          <view class="task">
            <view class="onetitle">
              <u-avatar :src="item.user_avatar" class="portrait" size="76"></u-avatar>
              <view class="introduce">
                <view class="title">
                  {{item.user_name}}
                </view>
                <view class="textinfo">
                  <text class="one">科室:</text>
                  <text class="two">{{departmentName}}</text>
                  <text class="three">发布于{{item.app_time}}</text>
                </view>
              </view>
              <view class="clockime">已打卡{{item.day}}天</view>
            </view>
            <view class="carddetail">
              <view class="contdetail">
                {{item.content}}
              </view>
              <view class="imglist">
                <view class="item" v-for="(itemChild,index1) in item.fileid_route" :key='index1'>
                  <u-image :src="itemChild.fileid_route" width="174" height="157"></u-image>
                </view>
              </view>
              <view class="bottom">
                <u-icon size="32" @tap='giveFabulous(item.ID)' class="d-icon" name="../../static/image/give.png">
                </u-icon>
              </view>
            </view>
          </view>
        </view>
      </template>
      <template v-if="switchindex == false && current==0 && status == 2">
        <view class="assignment" v-for="(item,index) in signTaskList" :key='index'  @tap='gotask(item,2)'>
          <view class="title">
            {{item.issue_time}}
          </view>
          <view class="task">
            <view class="onetitle">
              <u-avatar :src="item.user_avatar" class="portrait" size="76"></u-avatar>
              <view class="introduce">
                <view class="title">
                  {{item.task_title}}
                </view>
                <view class="textinfo">
                  <text class="one">{{item.user_name}}</text>
                  <text class="two">医生</text>
                  <text class="three">发布于{{item.i_time}}</text>
                </view>
              </view>
              <view class="datetime" v-if="item.task_status==0">第{{item.day}}天</view>
              <view class="datetime on" v-if="item.task_status==1">已结束</view>
            </view>
            <view class="twodepartment">
              科室:{{item.app_name}}
            </view>
            <view class="describe">
              {{item.describes}}
            </view>
            <view class="info" v-if="item.issue_name=='已打卡'">
              <image src="../../static/image/accomplish.png" mode="widthFix" class="d-icon"></image>
              <text class="d-text">已打卡</text>
            </view>
            <view class="info" v-if="item.issue_name=='已结束'">
              <text class="d-text">已结束打卡</text>
            </view>
            <view class="info" v-if="item.issue_name=='未打卡'">
              <image src="../../static/image/proceed.png" mode="widthFix" class="d-icon"></image>
              <text class="d-text on">去打卡</text>
            </view>
          </view>
        </view>
      </template>
      <!-- 用户端结束 -->
      <!-- 医生端 -->
      <template v-if="switchindex && current==0 && status == 1">
        <view class="assignment">
          <view class="title">
            今天
          </view>
          <view class="task" @click="docedit">
            <view class="onetitle">
              <u-avatar src="" class="portrait" size="76"></u-avatar>
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

            <view class="describe">
              各位家长，由专业医生针对多动症制定了训练…
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
                <u-circle-progress class="circle" active-color="#0BC788" width="79" :percent="33" border-width="3">
                  33%
                </u-circle-progress>
                <view class="textwo">
                  打卡率
                </view>
              </view>
            </view>
            <view class="line"></view>
            <view class="docbottom">
              <view class="box1">
                科室:多动症
              </view>
              <view class="box2">
                <div class="status">进行中</div>
                <u-icon name="more-dot-fill" color="#666666" size="28"></u-icon>
              </view>
            </view>
          </view>

          <view class="task" @click="docedit">
            <view class="onetitle">
              <u-avatar src="" class="portrait" size="76"></u-avatar>
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

            <view class="describe">
              各位家长，由专业医生针对多动症制定了训练…
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
                <u-circle-progress class="circle" active-color="#0BC788" width="79" :percent="33" border-width="3">
                  33%
                </u-circle-progress>
                <view class="textwo">
                  打卡率
                </view>
              </view>
            </view>
            <view class="line"></view>
            <view class="docbottom">
              <view class="box1">
                科室:多动症
              </view>
              <view class="box2">
                <div class="status on">已结束</div>
                <u-icon name="more-dot-fill" color="#666666" size="28"></u-icon>
              </view>
            </view>
          </view>

        </view>
      </template>
      <!-- 医生端结束 -->

      <template v-if="current == 1">
        <view class="classment">
          <view class="mange">
            <view class="item" @click="creadcalss">
              <view class="left">
                <view class="one">
                  创建科室
                </view>
                <view class="two">
                  医生创建科室
                </view>
              </view>
              <view class="icon">
                <u-icon size="118" name="../../static/image/creadclass.png"></u-icon>
              </view>
            </view>
            <view class="item" @click="addclass">
              <view class="left">
                <view class="one">
                  加入科室
                </view>
                <view class="two">
                  已创建的科室
                </view>
              </view>
              <view class="icon">
                <u-icon size="118" name="../../static/image/addclass.png"></u-icon>
              </view>
            </view>
          </view>

          <view class="classitem" v-for="(item,index) in docmyclass" :key="index">
            <view class="title" @click="golist(item.ID)">
              <view class="deil">
                <u-avatar :src="item.user_avatar" class="portrait" size="60"></u-avatar>
                <text class="name">{{item.app_name}}</text>
              </view>
              <u-icon name="arrow-right" color="#A0A0A0" size="24"></u-icon>
            </view>
            <view class="command">
              <text class="crad">科室口令:{{item.app_watchword}}</text>
              <u-icon name="../../static/image/copy.png" size="20" @tap='copy(item.app_watchword)'></u-icon>
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
                <u-circle-progress class="circle" active-color="#0BC788" width="79" :percent="33" border-width="3">
                  {{item.depart_num == 0? '0':item.depart_num.rate}}
                </u-circle-progress>
                <view class="textwo">
                  加入率
                </view>
              </view>
              <view class="itembox">
                <u-icon name="../../static/image/add.png" size="70"></u-icon>
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

    <u-popup v-model="docbottom" mode="bottom" border-radius="12">
      <view class="docbottom">
        <view class="checkbox">
          编辑
        </view>
        <view class="checkbox">
          删除
        </view>
        <view class="line"></view>
        <view class="checkbox">
          结束此打卡
        </view>
      </view>
    </u-popup>
    <view class="fixed" @click="addpub" v-if="status!=2">
      <u-icon name="plus" color="#fff" size="38"></u-icon>
    </view>
  </view>
</template>

<script>
import selectSwitch from "@/components/xuan-switch/xuan-switch.vue";
import defaultPage from "@/components/default.vue";
import { timeToDate } from "../../config/common.js";
export default {
  components: {
    selectSwitch,
    defaultPage,
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
      //提示框配置
      iscread: false,
      tiptext: "",
      status: this.$db.get("user").type_status, //2用户，1医生
      docbottom: false,
      docmyclass: [],
      classify: [], //科室分类
      calssifyindex: 0,
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
      this.getmyclass();
      this.getclasslist();
    } else {
      console.log(123);
      this.getParentClass();
    }
  },
  methods: {
    change(index) {
      this.current = index;
      let data = {
        key: this.key,
        user_id: this.userInfo.ID,
      };
      if (index == 1 && this.status == 2) {
        this.$api.getParentClass(data, (res) => {
          this.docmyclass = res.datas;
        });
      }
    },
    changeSwitch(is) {
      this.switchindex = is;
      if (!is) {
        let data = {
          key: this.key,
          user_id: this.userInfo.ID,
        };
        this.$api.getParentTask(data, (res) => {
          for (let item of res.datas) {
            item.time = item.issue_time
            item.i_time = timeToDate(
              new Date(item.issue_time).getTime(),
              false,
              3
            );
            item.issue_time = timeToDate(
              new Date(item.issue_time).getTime(),
              false,
              2
            );
          }
          this.signTaskList = res.datas;
          console.log(this.signTaskList);
        });
      } else {
        this.getParentClass();
      }
    },
    filtrate() {
      console.log(this.status);
      if (this.switchindex) {
        this.isscreen = true;
      }
      if (this.status == 2) {
        this.calssteb(0, true);
      }
    },
    getmyclass() {
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
    docedit() {
      if (this.docbottom) {
        this.docbottom = false;
      } else {
        this.docbottom = true;
      }
    },
    getclasslist() {
      this.$api.classpubic(
        {
          key: this.$db.get("key"),
          user_id: this.$db.get("user").ID,
        },
        (res) => {
          if (res.code == 200) {
            this.classify = res.datas;
          } else {
            this.$common.errorToShow(res.datas.error);
          }
        }
      );
    },
    addclass() {
      uni.navigateTo({
        url: "/pages/class/add",
      });
    },
    golist(id) {
      uni.navigateTo({
        url: "/pages/class/list?id=" + id,
      });
    },
    gotask(e,type) {
      console.log(type,e);
	  let task_id=0
	  if(e.task_id){
		  console.log(e.task_id,723);
		task_id = e.task_id
	  }else{
		   console.log(e.ID,724);
		  task_id = e.ID
	  }
	  e.time = timeToDate(new Date(e.time).getTime(),true)
	  console.log(e.time);
      uni.navigateTo({
        url: "/pages/task/index?department_id="+e.department_id+"&time="+e.time+"&task_id="+task_id+"&type="+type,
      });
    },
    addpub() {
      uni.navigateTo({
        url: "/pages/task/publish",
      });
    },
    //cxb开始
    checked(i) {
      this.indexOfChecked = i;
      this.taskId = this.taskList[this.indexOfChecked].ID;
    },
    getParentClass() {
      let data = {
        key: this.$db.get("key"),
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
      console.log(323);
      let data = {
        key: this.key,
        user_id: this.userInfo.ID,
        task_id: this.taskId,
      };
      this.$api.getParentIndexDetail(data, (res) => {
        if (res.code == 200 && res.datas != null) {
          console.log(123);
          for (let item of res.datas) {
			  item.time = item.app_time
            item.app_time = timeToDate(
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
    giveFabulous(id) {
      //点赞
      let data = {
        key: this.key,
        user_id_active: this.userInfo.ID,
        clock_id: id,
      };
      this.$api.fabulous(data, (res) => {
        if (res.code == 200) {
          uni.showToast({
            title: "点赞成功",
          });
        }
      });
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
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../static/css/home.scss";
</style>
