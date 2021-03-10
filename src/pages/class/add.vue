<template>
  <view>
    <view class="keyinput">
      <u-input v-model="key" class="keytext" height="98" placeholder="请输入科室口令加入科室"></u-input>
    </view>
      <u-button class="buttom" :ripple="true" shape="circle" @click="contip">查找科室</u-button>
	  <view class="listclass">
	  	 <view class="item">
	  	 	 <u-avatar src="" size="88"></u-avatar>
			 <view class="nametext">
				 <view class="name">
				 	抽动症科室
				 </view>
				 <view class="twotext">
				 	 <text>管理员:张烜暠</text>
					 <text class="num">人数:20人</text>
				 </view>
			 </view>
		    <u-button class="addbutton" :ripple="true" shape="circle" @click="conmax">加入科室</u-button>
	  	 </view>
	  </view>
    <!-- 提示框 -->
          <u-modal
            v-model="config.iscread"
            title="提示"
            :content="config.tiptext"
            :show-confirm-button="config.confirm"
            :show-cancel-button="config.cancel"
            confirm-text="知道了"
          >
          </u-modal>
  </view>
</template>
<script>
export default {
    data() {
      return {
        key: '',
        config:{
           iscread:false,
           tiptext:'',
           confirm: true,
           cancel:false,
        }
        
      }
    },
    methods:{
        add(){
          
        },
        contip(){
           this.config.cancel = true
           this.config.confirm = true
           this.config.tiptext = '确认此科室是否正确，防止错加乱加 以免造成数据错误！'
           this.config.iscread = true
        },
        conmax(){
           this.config.cancel = true
           this.config.confirm = false
           this.config.tiptext = '当前科室人数已满，请联系管理员 重新邀请加入!'
           this.config.iscread = true
        }
    }
}
</script>
<style lang="scss" scoped>
  .keyinput{
     width: 100%;
     margin:30rpx auto 100rpx auto;
	 .keytext{
		 text-indent: 32rpx;
		 width: 100%;
		 background: #FFFFFF;
		 font-size: 32rpx;	
		 }
  }
  .buttom{
	  width: 686rpx;
	  height: 88rpx;
	  background: #0BC788;
	  color: #FFFFFF;
  }
  .listclass{
	  width: 686rpx;
    margin: auto;
	  margin-top: 56rpx;
	  .item{
		  width: 686rpx;
		  height: 124rpx;
		  background: #FFFFFF;
		  border-radius: 12rpx;
		  display: flex;
		  align-items: center;
		  padding: 0 24rpx;
		  .nametext{
			  width: 400rpx;
        margin-left: 16rpx;
			  .name{
				   color: #333333;
				   font-size: 32rpx;
           margin-bottom: 8rpx;
			  }
			  .twotext{
				  font-size: 24rpx;
				  color: #666666;
				  .num{
					  margin-left: 30rpx;
				  }
			  }
		  }
		  .addbutton{
        margin-left: auto;
			  width: 130rpx;
        height: 52rpx;
        font-size: 24rpx;
        color: #fff;
			  background: #0BC788;
		  }
	  }
	  
  }
</style>