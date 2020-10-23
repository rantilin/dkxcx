import {
	apiBaseUrl
} from './config.js';
import * as common from './common.js' //引入common
import * as db from './db.js' //引入common
// 需要登陆的，都写到这里，否则就是不需要登陆的接口
const methodsToken = [
	//  '/api/user/getwxuser',
];

const post = (method, data, callback,complete) => {
	uni.showLoading({
		title: '加载中'
	});

	// 判断token是否存在
	if (methodsToken.indexOf(method) >= 0) {
	//	获取用户token
		let userToken = db.get("key");
		if (!userToken) {
			common.jumpToLogin();
			return false;
		} else {
			//data.token = userToken;
		}
	}

	//data.method = method;

	uni.request({
		url: apiBaseUrl + method,
		data: data,
		header: {
			'Accept': 'application/json',
		//	'Content-Type': 'application/json',
			 'Content-Type': 'application/x-www-form-urlencoded', //自定义请求头信息
		},
		method: 'POST',
		success: (response) => {
			uni.hideLoading();
			const result = response.data
			if (!result.status) {
				// 登录信息过期或者未登录
				// if (result.data === 14007 || result.data === 14006) {
				// 	db.del("key");
				// 	uni.showToast({
				// 		title: result.msg,
				// 		icon: 'none',
				// 		duration: 1000,
				// 		complete: function() {
				// 			setTimeout(function() {
				// 				uni.hideToast();
							
				// 				uni.navigateTo({
				// 					url: '/pages/souquan/index'
				// 				})
								
				// 			}, 1000)
				// 		}
				// 	});
				// }
			}
			callback(result);
		},
		complete: (response) => {
			setTimeout(function() {
				uni.hideLoading();
			}, 1000)
			complete?complete(): "";
		},
		fail: (error) => {
			uni.showLoading({
				title: '网络开小差了'
			});
			setTimeout(function() {
				uni.hideLoading();
			}, 1000)
			if (error && error.response) {
				showError(error.response);
			} else {
				
			}
			
		},
	});

}

//插件post
const pluginsPost = (method, data, callback) => {
	uni.showLoading({
		title: '加载中'
	});

	// 判断token是否存在
	if (methodsToken.indexOf(method) >= 0) {
		// 获取用户token
		let userToken = db.get("userToken");
		if (!userToken) {
			common.jumpToLogin();
			return false;
		} else {
			data.token = userToken;
		}
	}
	uni.request({
		url: apiBaseUrl + 'plugins/' + method + '.html',
		data: data,
		header: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded', //自定义请求头信息
		},
		method: 'POST',
		success: (response) => {
			uni.hideLoading();
			const result = response.data
			if (!result.status) {
				// 登录信息过期或者未登录
				if (result.data === 14007 || result.data === 14006) {
					db.del("userToken");
					uni.showToast({
						title: result.msg,
						icon: 'none',
						duration: 1000,
						complete: function() {
							setTimeout(function() {
								uni.hideToast();
								// #ifdef H5 || APP-PLUS || APP-PLUS-NVUE
								uni.navigateTo({
									url: '/pages/login/login/index1'
								})
								// #endif
								// #ifdef MP-WEIXIN || MP-ALIPAY || MP-TOUTIAO
								uni.navigateTo({
									url: '/pages/login/choose/index',
									animationType: 'pop-in',
									animationDuration: 200
								});
								// #endif
							}, 1000);
						}
					});
				}
			}
			callback(result);
		},
		fail: (error) => {
			uni.hideLoading();
			if (error && error.response) {
				showError(error.response);
			}
		},
		complete: () => {
			setTimeout(function() {
				uni.hideLoading();
			}, 250);
		}
	});

}

const get = (url, callback) => {
	uni.showLoading({
		title: '加载中'
	});
	uni.request({
		url: apiBaseUrl + url,
		// header: {
		// 	'Accept': 'application/json',
		// 	'Content-Type': 'application/x-www-form-urlencoded', //自定义请求头信息
		// },
		method: 'GET',
		success: (response) => {
			uni.hideLoading();
			callback(response.data);
		},
		fail: (error) => {
			uni.hideLoading();
			if (error && error.response) {
				showError(error.response);
			}
		},
		complete: () => {
			setTimeout(function() {
				uni.hideLoading();
			}, 250);
		}
	});
}
const getdata = (url,data, callback) => {
	uni.showLoading({
		title: '加载中'
	});
	uni.request({
		url: apiBaseUrl + url,
		header: {
			'Accept': 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded', //自定义请求头信息
		},
		data: data,
		method: 'GET',
		success: (response) => {
			uni.hideLoading();
			callback(response.data);
		},
		fail: (error) => {
			uni.hideLoading();
			if (error && error.response) {
				showError(error.response);
			}
		},
		complete: () => {
			setTimeout(function() {
				uni.hideLoading();
			}, 250);
		}
	});
}
const showError = error => {
	let errorMsg = ''
	switch (error.status) {
		case 400:
			errorMsg = '请求参数错误'
			break
		case 401:
			errorMsg = '未授权，请登录'
			break
		case 403:
			errorMsg = '跨域拒绝访问'
			break
		case 404:
			errorMsg = `请求地址出错: ${error.config.url}`
			break
		case 408:
			errorMsg = '请求超时'
			break
		case 500:
			errorMsg = '服务器内部错误'
			break
		case 501:
			errorMsg = '服务未实现'
			break
		case 502:
			errorMsg = '网关错误'
			break
		case 503:
			errorMsg = '服务不可用'
			break
		case 504:
			errorMsg = '网关超时'
			break
		case 505:
			errorMsg = 'HTTP版本不受支持'
			break
		default:
			errorMsg = error.msg
			break
	}

	uni.showToast({
		title: errorMsg,
		icon: 'none',
		duration: 1000,
		complete: function() {
			setTimeout(function() {
				uni.hideToast();
			}, 1000);
		}
	});
}

// 文件上传
export const uploadFiles = (callback) => {
	uni.chooseImage({
		success: (chooseImageRes) => {
			uni.showLoading({
				title: '上传中...'
			});
			const tempFilePaths = chooseImageRes.tempFilePaths;
			const uploadTask = uni.uploadFile({
				url: apiBaseUrl + '/api/file/upload', //仅为示例，非真实的接口地址
				filePath: tempFilePaths[0],
				fileType: 'image',
				name: 'file',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'multipart/form-data',
				},
				formData: {
					'method': 'images.upload',
					'file': tempFilePaths[0]
				},
				success: (uploadFileRes) => {
					callback(JSON.parse(uploadFileRes.data));
				},
				fail: (error) => {
					if (error && error.message) {
						showError(error.message);
					}
				},
				complete: () => {
					setTimeout(function() {
						uni.hideLoading();
					}, 250);
				}
			});
			// 					uploadTask.onProgressUpdate((res) => {
			//             console.log('上传进度' + res.progress);
			//             console.log('已经上传的数据长度' + res.totalBytesSent);
			//             console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
			//
			//             // 测试条件，取消上传任务。
			//             if (res.progress > 50) {
			//                 uploadTask.abort();
			//             }
			// 					});
		}
	});
}

// 上传图片
export const uploadImage = (num, callback) => {
	uni.chooseImage({
		count: num,
		success: (res) => {
			uni.showLoading({
				title: '上传中...'
			});
			let tempFilePaths = res.tempFilePaths
			for (var i = 0; i < tempFilePaths.length; i++) {
				uni.uploadFile({
					url: apiBaseUrl + 'api.html',
					filePath: tempFilePaths[i],
					fileType: 'image',
					name: 'file',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'multipart/form-data',
					},
					formData: {
						'method': 'images.upload',
						'upfile': tempFilePaths[i]
					},
					success: (uploadFileRes) => {
						callback(JSON.parse(uploadFileRes.data));
					},
					fail: (error) => {
						if (error && error.response) {
							showError(error.response);
						}
					},
					complete: () => {
						setTimeout(function() {
							uni.hideLoading();
						}, 250);
					},
				});
			}
		}
	});
}

// 科室分类
export const dotclass = (callback) => get('/api/abteilung/tree?hosid=16', callback);

// 医生分类
export const dotlist = (callback) => get('/api/abteilung/yslist?hosid=16', callback);

// banner获取
export const getbanner = (data, callback) => post('/api/banner/list', data, callback);

// 获取视频
export const getvideo = (callback) => get('/api/article/class?hosid=16&&parentid=358ba2ed-50cc-4759-8af5-745e09622d59', callback);

// 用户信息
export const userInfo = (data, callback) => post('/api/user/getwxuser', data, callback);

// 上传头像
export const changuserimg = (data, callback) => post('/api/user/alterimg', data, callback);

//个人资料修改
export const useredit=(data, callback)=>post('/api/user/alterimg', data, callback);

//医生详情
export const docditel=(data, callback)=>post('/api/abteilung/ysvm', data, callback);

//医生列表详情
export const docswlist=(data, callback)=>getdata('/api/abteilung/swyslist', data, callback);

//医生查询
export const docsearch=(data, callback)=>getdata('/api/abteilung/ysearch', data, callback);

//订单提交接口
export const order=(data, callback)=>post('/api/yuyue/xadd', data, callback);

//支付接口
export const goplay=(data, callback)=>post('/api/payment/jsapi', data, callback);

//我的订单接口
export const myorder=(data, callback)=>post('/api/user/yuyue', data, callback);

//我的订单分类
export const myorderclass=(data, callback)=>post('/home/member/getorderstatus', data, callback);

//取消订单
export const cancelorder =(data, callback)=>post('/api/user/ordercall', data, callback);

//删除订单
export const delorder =(data, callback)=>post('/api/user/orderdel', data, callback);

//老师列表
export const doctorbydroom =(data, callback)=>post('/home/doctor/getdoctorbydroom', data, callback);

//排课老师接口
export const teachercourse =(data, callback)=>post('/home/courses/getcoursesteacher', data, callback);

//排课学生接口
export const studentcourse =(data, callback)=>post('/home/courses/getcoursesstudent', data, callback);

//我的病例
export const usercase =(data, callback)=>post('/home/member/getmedicalrecord', data, callback);

//我的病例
export const delusercase =(data, callback)=>post('/home/member/deletemedicalrecord', data, callback);

//修改订单状态
export const orderstatic =(data, callback)=>post('/home/member/setorderstatus', data, callback);