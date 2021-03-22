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
.postform {
  width: 686rpx;
  min-height: 507rpx;
  background: #fefffe;
  border-radius: 12rpx;
  margin:40rpx auto;
  .title{
    padding:10rpx 20rpx;
    border-bottom: solid 1px #EBEBEB;
  }
}
.taskpostcont {
  width: 686rpx;
  min-height: 392rpx;
  margin: auto;
  border-radius: 12rpx;
  padding: 24rpx;
  textarea{
    font-size: 26rpx;
  }
  .listupload{
     width: 100%;
     margin: 30rpx auto 24rpx auto;
     ::v-deep .u-list-item{
        margin: 5rpx 3rpx;
     }
     ::v-deep .u-preview-image{
       border-radius: 0;
     }
  }
  .listbut{
    width: 270rpx;
    margin-left: 14rpx;
    display: flex;
    justify-content: space-between;
  }
}
.bottomflex{
  width: 686rpx;
  margin: 60rpx auto;
  padding-bottom: 100rpx;
  display: flex;
  justify-content: space-between;
  .btn{
    width: 322rpx;
    line-height: 88rpx;
    border-radius: 44rpx;
    font-size: 30rpx;
    text-align: center;
  }
  .save{
    border: 1px solid #BBBBBB;
    color: #666666;
  }
  .post{
    background: #0BC788;
    color: #fff;
  }
}
.boxlist{
   width: 686rpx;
   line-height: 92rpx;
   margin: 30rpx auto;
   background: #fefffe;
   display: flex;
   padding: 0 24rpx;
   border-radius: 12rpx;
   justify-content: space-between;
   .label{
      color: #666666;
      font-size: 32rpx;
   }
   .rightcont{
       color: #333333;
       font-size: 28rpx;
       display: flex;
   }
}
</style>