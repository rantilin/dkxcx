<template>
  <view>
    <view class="postform">
      <view class="title">
        <u-input v-model="title" placeholder="请输入任务标题" />
      </view>
      <view class="taskpostcont">
        <u-input v-model="content" type="textarea" placeholder="请详细描述小孩每日状况，更加全面了解小孩情况"></u-input>
        <scroll-view scroll-x="true">
          <view class="listupload" style="display: flex;height: 138rpx;width: 700rpx;">
            <view class="warp" v-for="(item,index) in imgList" :key='index' style="">
              <image @tap='del(index)' class="del" src="../../static/image/add.png" mode=""></image>
              <image class="img" :src="item.file" @tap='preview(index)' mode="aspectFill"></image>
            </view>
            <!-- <u-upload ref="uUpload" :action="action" :auto-upload="false" del-bg-color="#FF834A" width="153" height="138"
							 :file-list="fileList" max-count="4"></u-upload> -->
          </view>
        </scroll-view>
        <view class="listbut">
          <u-icon name="../../../static/image/picture.png" label="图片" size="56" label-pos="bottom" @tap='checkedImg'
            label-size="26"></u-icon>
          <u-icon name="../../../static/image/audio.png" label="语音" size="56" label-pos="bottom" label-size="26"></u-icon>
          <u-icon name="../../../static/image/video.png" label="视频" size="56" label-pos="bottom" label-size="26"></u-icon>
        </view>
      </view>
    </view>


    <view class="bottomflex">
   
      <view class="post editbuttom" @click="postserver()">
        立即提交
      </view>
    </view>
    <u-picker v-model="show" @confirm="close" :mode="mode" :default-selector="[0]" :range="selector"></u-picker>
  </view>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      action: "",
      fileList: [],
      show: false,
      selector: [],
      mode: "",
      department: "请选择科室", //科室,
      deparindex: 0,
      basics: 10, //基础积分
      additional: "暂不奖励", //额外积分
      days: "暂不设置", //打卡天数
      index: 0,
      startTime: "请选择开始时间",
      startTimevalue: 0, //时间戳
      endTime: "请选择结束时间",
      endTimevalue: 0, //时间戳
      imgList: [],
      docmyclass: [],
      eidtid: 0,
    };
  },
  onLoad(parm) {
    if(parm.id){
      this.eidtid = parm.id
      this.indata(parm.id)
    }
  },
  methods: {
    indata(eid) {
      let _this = this;
      _this.$api.exitdeil(
        {
          key: _this.$db.get("key"),
          ID: eid
        },
        (res) => {
          if (res.code == 200) {
            _this.title = res.datas.task_title;
            _this.content = res.datas.describes;
            _this.imgList = _this.imgget(res.datas.fileid_route);
          }
        }
      );
    },
    postserver() {
      let _this = this;
      _this.$api.draft(
          {
            ID: this.eidtid,
            key: _this.$db.get("key"),
            user_id: _this.$db.get("user").ID,
            task_title: _this.title,
            describes: _this.content,
            fileid_route: _this.imglistpub(_this.imgList),
            storage_status:1
          },
          (res) => {
            if (res.code == 200) {
               _this.$common.successToShow('修改成功');
             uni.switchTab({
					url: '/pages/index/index'
				});
            } else {
              _this.$common.errorToShow(res.datas.error);
            }
          }
        );
    },
    checkedImg() {
      let _this = this;
      _this.$api.uploadFiles((res) => {
        _this.imgList.push(res.datas);
      });
    },
    del(i) {
      this.$api.imgdel(
        {
          file_name: this.imgList[i].name,
        },
        (res) => {
          this.imgList.splice(i, 1);
        }
      );
    },
    preview(i) {
      let that = this;
      uni.previewImage({
        urls: that.imgList,
        current: i,
      });
    },
    openPicker(i) {
      this.index = i;
      this.show = true;
      if (i == 0) {
        this.selector = this.classlistdata(this.docmyclass);
        this.mode = "selector";
      }
      if (i == 1) {
        this.selector = ["10", "20", "30", "40", "50"];
        this.mode = "selector";
      }
      if (i == 2) {
        this.selector = ["暂不奖励", "10", "20", "30", "40"];
        this.mode = "selector";
      }
      if (i == 3) {
        this.selector = ["暂不设置", "10", "20", "30", "40"];
        this.mode = "selector";
      }
      if (i == 4) {
        this.selector = [];
        this.mode = "time";
      }
      if (i == 5) {
        this.selector = [];
        this.mode = "time";
      }
    },
    close(e) {
      if (this.index == 0) {
        this.department = this.selector[e[0]];
        this.deparindex = e[0];
      }
      if (this.index == 1) {
        this.basics = this.selector[e[0]];
      }
      if (this.index == 2) {
        this.additional = this.selector[e[0]];
      }
      if (this.index == 3) {
        this.days = this.selector[e[0]];
      }
      if (this.index == 4) {
        this.startTime = e.year + "-" + e.month + "-" + e.day;
        this.startTimevalue = e.timestamp;
      }
      if (this.index == 5) {
        this.endTime = e.year + "-" + e.month + "-" + e.day;
        this.endTimevalue = e.timestamp;
      }
    },
    classlistdata(array) {
      let listdata = [];
      for (let index = 0; index < array.length; index++) {
        listdata.push(array[index].app_name);
      }
      return listdata;
    },
    imglistpub(array) {
      let listdata = [];
      for (let index = 0; index < array.length; index++) {
        listdata.push(array[index].file);
      }
      return listdata;
    },
    imgget(array) {
      let listdata = [];
      for (let index = 0; index < array.length; index++) {
        let dataimg = array[index].fileid_route.split("/");
        let datas = {
          file: array[index].fileid_route,
          name: dataimg[dataimg.length - 1],
        };
        listdata.push(datas);
      }
      return listdata;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../static/css/publish.scss";
.editbuttom{
   width: 686rpx;
   margin: auto;
    line-height: 88rpx;
    border-radius: 44rpx;
    font-size: 30rpx;
    text-align: center;
}
</style>
