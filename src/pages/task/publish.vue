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
          <u-icon name="../../static/image/picture.png" label="图片" size="56" label-pos="bottom" @tap='checkedImg'
            label-size="26"></u-icon>
          <u-icon name="../../static/image/audio.png" label="语音" size="56" label-pos="bottom" label-size="26"></u-icon>
          <u-icon name="../../static/image/video.png" label="视频" size="56" label-pos="bottom" label-size="26"></u-icon>
        </view>
      </view>
    </view>

    <view class="boxlist">
      <view class="label">
        发送科室
      </view>
      <view class="rightcont" @tap='openPicker(0)'>
        <text>{{department}}</text>
        <u-icon name="arrow-right" size="24" color="#A0A0A0"></u-icon>
      </view>
    </view>
    <view class="config">
      <view class="listinput" @tap='openPicker(1)'>
        <view class="label">
          基础打卡(积分)
        </view>
        <view class="rightcont">
          <text>{{basics}}</text>
          <u-icon name="arrow-right" size="24" color="##A0A0A0"></u-icon>
        </view>
      </view>
      <view class="listinput" @tap='openPicker(2)'>
        <view class="label">
          额外奖励(积分)
        </view>
        <view class="rightcont">
          <text>{{additional}}</text>
          <u-icon name="arrow-right" size="24" color="##A0A0A0"></u-icon>
        </view>
      </view>
      <view class="listinput" @tap='openPicker(3)'>
        <view class="label">
          设置连续打卡(天数)
        </view>
        <view class="rightcont">
          <text>{{days}}</text>
          <u-icon name="arrow-right" size="24" color="##A0A0A0"></u-icon>
        </view>
      </view>
      <view class="listinput" @tap='openPicker(4)'>
        <view class="label">
          开始时间
        </view>
        <view class="rightcont">
          <text>{{startTime}}</text>
          <u-icon name="arrow-right" size="24" color="##A0A0A0"></u-icon>
        </view>
      </view>
      <view class="listinput" @tap='openPicker(5)'>
        <view class="label">
          结束时间
        </view>
        <view class="rightcont">
          <text>{{endTime}}</text>
          <u-icon name="arrow-right" size="24" color="##A0A0A0"></u-icon>
        </view>
      </view>
    </view>
    <view class="bottomflex">
      <view class="btn save" @click="postserver(2)">
        保存草稿
      </view>
      <view class="btn post" @click="postserver(1)">
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
    };
  },
	onLoad(){
      this.getclass();
	},
  methods: {
    getclass() {
      let _this = this;
      this.$api.classpubic(
        {
          key: _this.$db.get("key"),
          user_id: _this.$db.get("user").ID,
        },
        (res) => {
          if (res.code == 200) {
            _this.docmyclass = res.datas;
            _this.indata()
          } else {
            _this.$common.errorToShow(res.datas.error);
          }
        }
      );
    },
		indata(){
      let _this = this;
      _this.$api.taskpub({
				 key: _this.$db.get("key"),
         user_id: _this.$db.get("user").ID,
			},res=>{
        if(res.code == 200){
          _this.$common.successToShow("已获取上次草稿")
          _this.title = res.datas.task_title
          _this.content = res.datas.describe
          _this.startTime = _this.$common.timeToDate(res.datas.start_time,true)
          _this.endTime = _this.$common.timeToDate(res.datas.end_time,true)
          _this.department = _this.docmyclass.filter(item=> { return item.ID == res.datas.department_id})[0].app_name
          _this.deparindex = _this.docmyclass.findIndex(item=> { return item.ID == res.datas.department_id})
          _this.basics = res.datas.task_points
          _this.additional = res.datas.task_reward
          _this.days = res.datas.task_days
          _this.imgList = _this.imgget(res.datas.fileid_route)
        }
			})
		},
    postserver(val){
			 let _this = this;
       if(_this.department == '请选择科室'){
				   _this.$common.errorToShow('请选择科室');
					 return false
			 }
			 if(_this.startTimevalue > _this.endTimevalue){
				  _this.$common.errorToShow('开始时间不能大于结束时间！请重新选择');
					 return false
			 }
			 if(_this.startTimevalue == 0){
				 _this.$common.errorToShow('请选择开始时间');
					 return false
			 }
			 if(_this.endTimevalue == 0){
				 _this.$common.errorToShow('请选择结束时间');
					 return false
			 }
			 _this.$api.taskpub({
				  key: _this.$db.get("key"),
					user_id: _this.$db.get("user").ID,
					department_id:_this.docmyclass[_this.deparindex].ID,
					task_title:_this.title,
					describe:_this.content,
					task_points:_this.basics,
					task_days: _this.days,
					task_reward: _this.additional,
					start_time: _this.startTimevalue,
					end_time: _this.endTimevalue,
					fileid_route:_this.imglistpub(_this.imgList),
					storage_status: val
			 },res=>{
          if (res.code == 200) {
            if(res.datas.msg){
              _this.$common.successToShow(res.datas.msg)
            }else{
              _this.$common.successToShow("任务发布成功")
            }
            
          } else {
            _this.$common.errorToShow(res.datas.error);
          }
			 })
			 
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
				this.deparindex = e[0]
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
		classlistdata(array){
			let listdata =[]
			for (let index = 0; index < array.length; index++) {
				listdata.push(array[index].app_name)
			}
			return listdata
		},
		imglistpub(array){
			let listdata =[]
			for (let index = 0; index < array.length; index++) {
				listdata.push(array[index].file)
			}
			return listdata
		},
    imgget(array){
			let listdata =[]
			for (let index = 0; index < array.length; index++) {
        let dataimg = array[index].fileid_route.split('/')
        let datas = {
           file: array[index].fileid_route,
           name: dataimg[dataimg.length-1]
        }
        listdata.push(datas)
			}
			return listdata
		}
  },
};
</script>
<style lang="scss" scoped>
@import "../../static/css/publish.scss";
</style>
