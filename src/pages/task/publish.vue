<template>
  <view>
    <view class="postform">
       <view class="title">
         <u-input v-model="title" placeholder="请输入任务标题" />
       </view>
      <view class="taskpostcont">
        <u-input v-model="content" type="textarea"  placeholder="请详细描述小孩每日状况，更加全面了解小孩情况"></u-input>
        <view class="listupload">
         <u-upload :action="action" del-bg-color="#FF834A" width="153" height="138" :file-list="fileList" max-count="4"></u-upload>
        </view>
        <view class="listbut">
           <u-icon name="../../static/image/picture.png" label="图片"  size="56" label-pos="bottom" label-size="26"></u-icon>
           <u-icon name="../../static/image/audio.png" label="语音" size="56" label-pos="bottom" label-size="26"></u-icon>
           <u-icon name="../../static/image/video.png" label="视频" size="56" label-pos="bottom" label-size="26"></u-icon>
        </view>
     </view>
    </view>

   <view class="boxlist">
        <view class="label">
           发送科室
        </view>
        <view class="rightcont">
            <text>请选择发送科室</text>
            <u-icon name="arrow-right" size="24" color="##A0A0A0"></u-icon>
        </view>
     </view>
     <view class="config">
        <view class="listinput">
           <view class="label">
               基础打卡(积分)
           </view>
            <view class="rightcont">
            <text>30</text>
            <u-icon name="arrow-right" size="24" color="##A0A0A0"></u-icon>
        </view>
        </view>
        <view class="listinput">
           <view class="label">
               额外奖励(积分)
           </view>
            <view class="rightcont">
            <text>暂不奖励</text>
            <u-icon name="arrow-right" size="24" color="##A0A0A0"></u-icon>
        </view>
        </view>
        <view class="listinput">
           <view class="label">
               设置连续打卡(天数)
           </view>
            <view class="rightcont">
            <text>暂不设置</text>
            <u-icon name="arrow-right" size="24" color="##A0A0A0"></u-icon>
        </view>
        </view>
        <view class="listinput">
           <view class="label">
               开始时间
           </view>
            <view class="rightcont">
            <text>请选择开始时间</text>
            <u-icon name="arrow-right" size="24" color="##A0A0A0"></u-icon>
        </view>
        </view>
        <view class="listinput">
           <view class="label">
               结束时间
           </view>
            <view class="rightcont">
            <text>请选择结束时间</text>
            <u-icon name="arrow-right" size="24" color="##A0A0A0"></u-icon>
        </view>
        </view>
     </view>
    <view class="bottomflex">
         <view class="btn save">
              保存草稿
         </view> 
         <view class="btn post">
              立即提交
         </view> 
     </view>

  </view>
</template>
<script>
export default {
  data() {
    return {
       title:'',
       content:'',
       action:'',
       fileList: []
    }
  },
}
</script>
<style lang="scss" scoped>
  @import '../../static/css/publish.scss'
</style>