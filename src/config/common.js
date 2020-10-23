import * as db from './db.js' //引入common
import store from './../store'
//把obj对象里的值覆盖到newobj里面
function deepCopy(newobj, obj) {
	if (typeof obj != 'object') {
		return obj
	}
	for (var attr in obj) {
		var a = {}
		if (newobj[attr]) {
			a = newobj[attr]
		}
		newobj[attr] = deepCopy(a, obj[attr])
	}
	return newobj
}

//跳转到登陆页面
function jumpToLogin(method) {
	var now_time = Date.parse(new Date())
	var value = 0;
	if (db.get('key')) {
		value = JSON.parse(db.get('key')).expirse
	}
	if (now_time - value > 3000) {

		uni.showToast({
			title: '请授权登录！',
			icon: 'none',
			duration: 1000,
			success: function (res) {
				let pages = getCurrentPages()
				let page = pages[pages.length - 1]
				pagePath = '/' + page.route
				if (pagePath) {
					store.commit({
						type: 'redirect',
						page: pagePath
					})
				}
				// 获取页面参数信息
				let pagePath = ''
				setTimeout(() => {
					uni.hideToast();
					uni.navigateTo({
						url: '/pages/souquan/index',
						animationType: 'pop-in',
						animationDuration: 200
					})
				}, 500)
			}
		})

	}
}
//wxpayjs微信内部
function wxpay(dappId, dtimeStamp, dnonceStr, dpackage, dsignType, dpaySign) {
	if (typeof WeixinJSBridge == "undefined") {
		if (document.addEventListener) {
			document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
		} else if (document.attachEvent) {
			document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
			document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
		}
	} else {
		WeixinJSBridge.invoke(
			'getBrandWCPayRequest', {
				"appId": dappId.toString(), //公众号名称，由商户传入     
				"timeStamp": dtimeStamp.toString(), //时间戳，自1970年以来的秒数     
				"nonceStr": dnonceStr.toString(), //随机串     
				"package": dpackage.toString(),
				"signType": dsignType.toString(), //微信签名方式：     
				"paySign": dpaySign.toString() //微信签名 
			},
			function (res) {
				if (res.err_msg == "get_brand_wcpay_request:ok") {
					alert("微信支付成功！");
					window.location.href = 'http://wx.xianerke120.com/pages/course/succeed';
					// uni.showToast({
					// 	title: '微信支付成功！',
					// 	icon: 'none',
					// 	duration: 1000
					// });
					// uni.navigateTo({
					// 	url: 'pages/user/myorder',
					// });
					// 使用以上方式判断前端返回,微信团队郑重提示：
					//res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
				} else if (res.err_msg == "get_brand_wcpay_request：cancel") {
					alert("微信支付失败！");
				} else {
					var m = document.createElement('div');
					m.innerHTML = "取消支付";
					m.style.cssText = "max-width:60%;min-width: 100px;padding:12px 14px;color: rgb(255, 255, 255);text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 15px;";
					document.body.appendChild(m);
					setTimeout(function () {
						var d = 0.5;
						m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
						m.style.opacity = '0';
						setTimeout(function () {
							document.body.removeChild(m)
						}, d * 1000);
						//	window.location.reload();
					}, 1000);
				}
			});
	}
}
//当出错的时候，显示错误信息，并且跳转 弃用
/* function errorToBack(msg = '出错了，请重试',delta=1){
  uni.showToast({
    title: msg,
    icon: 'none',
    duration: 2000,
  });
  if(delta > 0){
    setTimeout(function () {
      uni.navigateBack({
        delta: delta
      })
    }, 1000);
  }
} */
//操作成功后，的提示信息
function successToShow(msg = '保存成功', callback = function () {}) {


	setTimeout(function () {
		uni.showToast({
			title: msg,
			icon: 'success',
			duration: 1000,
			success() {
				setTimeout(function () {
					callback()
				}, 500)
			}
		})
	}, 100)
	/*  uni.showToast({
	    title: msg,
	    icon: 'success',
	    duration: 1000
	  }) */
}

//操作失败的提示信息
function errorToShow(msg = '操作失败', callback = function () {}) {
	setTimeout(function () {
		uni.showToast({
			title: msg,
			icon: 'none',
			duration: 1500,
			success() {
				setTimeout(function () {
					callback()
				}, 1500)
			}
		})
	}, 100)

}

//加载显示
function loadToShow(msg = '加载中') {
	uni.showToast({
		title: msg,
		icon: 'loading'
	})
}

//加载隐藏
function loadToHide() {
	uni.hideToast()
}

// 提示框
function modelShow(
	title = '提示',
	content = '确认执行此操作吗?',
	callback = () => {},
	showCancel = true,
	cancelText = '取消',
	confirmText = '确定'
) {
	uni.showModal({
		title: title,
		content: content,
		showCancel: showCancel,
		cancelText: cancelText,
		confirmText: confirmText,
		cancelText: cancelText,
		success: function (res) {
			if (res.confirm) {
				// 用户点击确定操作
				setTimeout(() => {
					callback()
				}, 500)
			} else if (res.cancel) {
				// 用户取消操作
			}
		}
	})
}

//时间戳转时间格式
function timeToDate(date, flag = false) {
	var date = new Date(date * 1000) //如果date为13位不需要乘1000
	var Y = date.getFullYear() + '-'
	var M =
		(date.getMonth() + 1 < 10 ?
			'0' + (date.getMonth() + 1) :
			date.getMonth() + 1) + '-'
	var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
	var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
	var m =
		(date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
	var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
	if (flag) {
		return Y + M + D
	} else {
		return Y + M + D + h + m + s
	}
}

function time2date(micro_second) {
	var time = {}
	// 总秒数
	var second = Math.floor(micro_second)
	// 天数
	time.day = PrefixInteger(Math.floor(second / 3600 / 24), 2)
	// 小时
	time.hour = PrefixInteger(Math.floor((second / 3600) % 24), 2)
	// 分钟
	time.minute = PrefixInteger(Math.floor((second / 60) % 60), 2)
	// 秒
	time.second = PrefixInteger(Math.floor(second % 60), 2)

	var newtime = ''
	if (time.day > 0) {
		newtime =
			time.day +
			'天' +
			time.hour +
			'小时' +
			time.minute +
			'分' +
			time.second +
			'秒'
	} else {
		if (time.hour != 0) {
			newtime = time.hour + '小时' + time.minute + '分' + time.second + '秒'
		} else {
			newtime = time.minute + '分' + time.second + '秒'
		}
	}
	return newtime
}

function timeToDateObj(micro_second) {
	var time = {}
	// 总秒数
	var second = Math.floor(micro_second)
	// 天数
	time.day = Math.floor(second / 3600 / 24)
	// 小时
	time.hour = Math.floor((second / 3600) % 24)
	// 分钟
	time.minute = Math.floor((second / 60) % 60)
	// 秒
	time.second = Math.floor(second % 60)

	return time

}

//货币格式化
function formatMoney(number, places, symbol, thousand, decimal) {
	// console.log(number)
	// console.log(places)
	number = number || 0
	places = !isNaN((places = Math.abs(places))) ? places : 2
	symbol = symbol !== undefined ? symbol : '￥'
	thousand = thousand || ','
	decimal = decimal || '.'
	var negative = number < 0 ? '-' : '',
		i = parseInt((number = Math.abs(+number || 0).toFixed(places)), 10) + '',
		j = (j = i.length) > 3 ? j % 3 : 0
	return (
		symbol +
		negative +
		(j ? i.substr(0, j) + thousand : '') +
		i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousand) +
		(places ?
			decimal +
			Math.abs(number - i)
			.toFixed(places)
			.slice(2) :
			'')
	)
}
//金额格式化还原
function rmoney(s) {
	return parseFloat(s.replace(/[^\d\.-]/g, ""));
}

function throttle(fn, context, delay) {
	clearTimeout(fn.timeoutId)
	fn.timeoutId = setTimeout(function () {
		fn.call(context)
	}, delay)
}

// 时间格式化输出，如11:03 25:19 每1s都会调用一次
function dateformat(micro_second) {
	var time = {}
	// 总秒数
	var second = Math.floor(micro_second / 1000) // 天数
	time.day = PrefixInteger(Math.floor(second / 3600 / 24), 2) // 小时
	time.hour = PrefixInteger(Math.floor((second / 3600) % 24), 2) // 分钟
	time.minute = PrefixInteger(Math.floor((second / 60) % 60), 2) // 秒
	time.second = PrefixInteger(Math.floor(second % 60), 2)
	return time
}

//不足位数前面补0
function PrefixInteger(num, length) {
	return (Array(length).join('0') + num).slice(-length)
}

//验证是否是手机号
function isPhoneNumber(str) {
	var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
	if (!myreg.test(str)) {
		return false
	} else {
		return true
	}
}

/**
 *
 * 对象参数转为url参数
 *
 */
function builderUrlParams(url, data) {
	if (typeof url == 'undefined' || url == null || url == '') {
		return ''
	}
	if (typeof data == 'undefined' || data == null || typeof data != 'object') {
		return ''
	}
	url += url.indexOf('?') != -1 ? '' : '?'
	for (var k in data) {
		url += (url.indexOf('=') != -1 ? '&' : '') + k + '=' + encodeURI(data[k])
	}
	return url
}

/**
 * 使用循环的方式判断一个元素是否存在于一个数组中
 * @param {Object} arr 数组
 * @param {Object} value 元素值
 */
function isInArray(arr, value) {
	for (var i = 0; i < arr.length; i++) {
		if (value === arr[i]) {
			return true
		}
	}
	return false
}
/**
 * 统一跳转
 */
function navigateTo(url) {
	uni.navigateTo({
		url: url,
		animationType: 'pop-in',
		animationDuration: 300
	})
}

/**
 *  关闭当前页面并跳转
 */
function redirectTo(url) {
	uni.redirectTo({
		url: url,
		animationType: 'pop-in',
		animationDuration: 300
	})
}

/**
 * 获取url参数
 *
 * @param {*} name
 * @param {*} [url=window.location.serach]
 * @returns
 */
function getQueryString(name, url) {
	var url = url || window.location.href
	var reg = new RegExp('(^|&|/?)' + name + '=([^&|/?]*)(&|/?|$)', 'i')
	var r = url.substr(1).match(reg)
	if (r != null) {
		return r[2]
	}
	return null
}

/**
 *
 *  判断是否在微信浏览器 true是
 */
function isWeiXinBrowser() {
	// #ifdef H5
	// window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
	let ua = window.navigator.userAgent.toLowerCase()
	// 通过正则表达式匹配ua中是否含有MicroMessenger字符串
	if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		return true
	} else {
		return false
	}
	// #endif

	return false
}

/**
 * 金额相加
 * @param {Object} value1
 * @param {Object} value2
 */
function moneySum(value1, value2) {
	return (parseFloat(value1) + parseFloat(value2)).toFixed(2);
}
/**
 * 金额相减
 * @param {Object} value1
 * @param {Object} value2
 */
function moneySub(value1, value2) {
	let res = (parseFloat(value1) - parseFloat(value2)).toFixed(2);
	return res > 0 ? res : 0;
}


/**
 * 分享URL解压缩
 * @param {Object} url
 */
function shareParameterEncode(url) {
	let urlArray = url.split('-');
	let newUrl = 'type=' + urlArray[0] + '&invite=' + urlArray[1] + '&id=' + urlArray[2] + '&team_id=' + urlArray[3] +
		'&id_type=' + urlArray[4] + '&page_code=' + urlArray[5] + '&group_id=' + urlArray[6];
	return newUrl;
}


/**
 * 分享URL压缩
 * @param {Object} url
 */
function shareParameterDecode(url) {
	var urlArray = url.split('&');
	var allParameter = {
		'type': '',
		'invite': '',
		'id': '',
		'team_id': '',
		'id_type': '',
		'page_code': '',
		'group_id': '',
	};
	for (var i = 0; i < urlArray.length; i++) {
		var parameter = urlArray[i].split('=');
		allParameter[parameter[0]] = parameter[1];
	}
	var newUrl = allParameter.type + '-' + allParameter.invite + '-' + allParameter.id + '-' + allParameter.team_id + '-' +
		allParameter.id_type + '-' + allParameter.page_code + '-' + allParameter.group_id;
	return newUrl;
}

export {
	deepCopy,
	jumpToLogin,
	timeToDate,
	formatMoney,
	wxpay,
	/* errorToBack, */
	successToShow,
	throttle,
	errorToShow,
	time2date,
	isPhoneNumber,
	isInArray,
	loadToShow,
	loadToHide,
	navigateTo,
	redirectTo,
	modelShow,
	builderUrlParams,
	isWeiXinBrowser,
	dateformat,
	getQueryString,
	timeToDateObj,
	moneySum,
	moneySub,
	shareParameterEncode,
	shareParameterDecode,
	rmoney
}