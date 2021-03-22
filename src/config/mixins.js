/**
 *
 *  返回操作处理
 *
 */
export const goBack = {
	onBackPress(options) {
		if (options.from === 'navigateBack') {
			return false
		}
		let loginPages = ['/pages/cart/index/index', '/pages/member/index/index']
		let backPage = this.$store.state.redirectPage
		if (loginPages.indexOf(backPage) > -1) {
			this.$store.commit({
				type: 'redirect',
				page: ''
			})
			uni.switchTab({
				url: '/pages/index/index'
			})
			return true
		}
	}
}

/* Function Info
 * Author:      zhf
 * CreateTime:  2019/7/12 下午12:10:00
 * LastEditor:  zhf
 * ModifyTime:  2019/7/12 下午12:10:00
 * Description: 登录成功统一跳转处理
 */

export const BackPage = {
	methods: {
		handleBack() {
			let redirect = this.$store.state.redirectPage
			this.$store.commit({
				type: 'redirect',
				page: ''
			})
			let switchTabs = ['/pages/index/index', '/pages/member/index/index']
			if (switchTabs.indexOf(redirect) > -1) {
				uni.switchTab({
					url: redirect
				})
			} else if (redirect) {
				uni.redirectTo({
					url: redirect
				})
			} else {
				uni.switchTab({
					url: '/pages/index/index'
				})
			}
		}
	}
}

/* Function Info
 * Author:      zhf
 * CreateTime:  2019/7/12 下午12:10:28
 * LastEditor:  zhf
 * ModifyTime:  2019/7/12 下午12:10:28
 * Description: 操作判断登录处理
 */

export const checkLogin = {
	methods: {
		checkIsLogin() {
			uni.showToast({
				title: '请先登录！',
				icon: 'none',
				duration: 800,
				success: function(res) {
					// #ifdef H5 || APP-PLUS
					setTimeout(() => {
						uni.hideToast()
						uni.navigateTo({
							url: '/pages/login/login/index1'
						})
					}, 800)
					// #endif
					// #ifdef MP-WEIXIN || MP-ALIPAY || MP-TOUTIAO
					setTimeout(() => {
						uni.hideToast()
						uni.navigateTo({
							url: '/pages/login/choose/index',
							animationType: 'pop-in',
							animationDuration: 200
						})
					}, 500)
					// #endif
				}
			})
		}
	}
}


/**
 * 工具函数
 */

export const tools = {
	methods: {
		copyData(data) {
			var _this = this;
			uni.setClipboardData({
				data: data,
				success: function() {
					_this.$common.errorToShow('复制成功')
				}
			});
		}
	}
}
