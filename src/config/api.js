import {
	apiBaseUrl,
} from './config.js';
import * as common from './common.js' //引入common
import * as db from './db.js' //引入common
// 需要登陆的，都写到这里，否则就是不需要登陆的接口
const methodsToken = [
	  //'/api/user/getwxuser',
	  //'/api/ys/user',
];

const post = (method, data, callback, complete) => {
	uni.showLoading({
		title: '加载中'
	});

	// 判断token是否存在
	if (methodsToken.indexOf(method) >= 0) {
	//	获取用户token
		let userToken = db.get("key");
		if (!userToken) {
			common.ToLogin();
			return false;
		} else {
			data.key = userToken;
		}
	}

	//data.method = method;

	uni.request({
		url: apiBaseUrl + method,
		data: data,
		header: {
			'Accept': 'application/json',
			//'Content-Type': 'application/json; charset=utf-8',
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
				url: apiBaseUrl + '/mobile/index.php?act=task&op=image_header', //仅为示例，非真实的接口地址
				filePath: tempFilePaths[0],
				fileType: 'image',
				name: 'file',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'multipart/form-data',
				},
				formData: {
          'key' : db.get('key'),
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

//小程序解析code
export const login1 = (data, callback) => post('/mobile/index.php?act=wx_auto_xcx&op=login', data, callback);
//小程序登录
export const login2 = (data, callback) => post('/mobile/index.php?act=wx_auto_xcx&op=getWxLogin', data, callback);
//获取用户key
export const user = (data, callback)=>post('/mobile/index.php?act=member_info&op=index', data, callback);
//创建科室
export const calsscreat = (data, callback)=>post('/mobile/index.php?act=department&op=add', data, callback);
//我的科室
export const mycalss = (data, callback)=>post('/mobile/index.php?act=department&op=my_depart', data, callback);
//科室详情
export const calssdeil = (data, callback)=>post('/mobile/index.php?act=department&op=my_depart_one', data, callback);
//发布科室
export const classpubic = (data, callback)=>post('/mobile/index.php?act=task&op=depart_doctor', data, callback);
//删除图片
export const imgdel = (data, callback)=>post('/mobile/index.php?act=task&op=del_file_uploads', data, callback);
//发布打卡任务
export const taskpub = (data, callback)=>post('/mobile/index.php?act=task&op=doctor_task', data, callback);
//编辑任务
export const draft = (data, callback)=>post('/mobile/index.php?act=task&op=edit_task', data, callback);
//医生任务打卡
export const docdakalist = (data, callback)=>post('/mobile/index.php?act=task&op=list_task_doctor', data, callback);
//我的医生任务打卡
export const mydocdakalist = (data, callback)=>post('/mobile/index.php?act=task&op=my_list_task_doctor', data, callback);
//修改个人信息
export const saveUserInfo = (data, callback)=>post('/mobile/index.php?act=member_info&op=member ', data, callback);
//我加入的科室列表
export const getMyJoinDepart = (data, callback)=>post('/mobile/index.php?act=department&op=join_depart', data, callback);
//退出我加入的科室
export const quitDepartment = (data, callback)=>post('/mobile/index.php?act=department&op=doctor_transfer', data, callback);
//我创建的科室列表
export const getMyCreateDepart = (data, callback)=>post('/mobile/index.php?act=department&op=my_depart', data, callback);
//我的打卡记录
export const getMyClockInfo = (data, callback)=>post('/mobile/index.php?act=parent&op=clock_info_list', data, callback);
//打卡记录详情
export const getRecordDetail = (data, callback)=>post('/mobile/index.php?act=task&op=clock_data', data, callback);
//科室管理员退出
export const exit_depart = (data, callback)=>post('/mobile/index.php?act=department&op=exit_depart', data, callback);
//科室管理员解散科室
export const doctor_transfer_del = (data, callback)=>post('/mobile/index.php?act=department&op=doctor_transfer_del', data, callback);
//修改科室信息
export const saveDepartDetail = (data, callback)=>post('/mobile/index.php?act=department&op=edit_depart', data, callback);
//科室下的医生
export const getDoctor = (data, callback)=>post('/mobile/index.php?act=department&op=doctor_depart', data, callback);
//转让科室
export const transferDepart = (data, callback)=>post('/mobile/index.php?act=department&op=transfer_depart', data, callback);
//首页家长加入的科室
export const ParentClass = (data, callback)=>post('/mobile/index.php?act=parent&op=my_depart_join', data, callback);
//某个科室的所有任务
export const getDepartTask = (data, callback)=>post('/mobile/index.php?act=parent&op=depart_task', data, callback);
//首页家长数据，选择任务接口
export const getParentIndexDetail = (data, callback)=>post('/mobile/index.php?act=parent&op=parent_index', data, callback);
//首页家长任务
export const getParentTask = (data, callback)=>post('/mobile/index.php?act=parent&op=parent_task', data, callback);
//家长科室管理
export const getParentClass = (data, callback)=>post('/mobile/index.php?act=department&op=my_depart_parent', data, callback);
//点赞打卡
export const fabulous = (data, callback)=>post('/mobile/index.php?act=task&op=clock_give', data, callback);
//查找科室
export const lookup = (data, callback)=>post('/mobile/index.php?act=parent&op=add_depart', data, callback);
//用户分享加入科室
export const adduser = (data, callback)=>post('/mobile/index.php?act=parent&op=add_depart_share', data, callback);
//医生分享加入科室
export const adddoc = (data, callback)=>post('/mobile/index.php?act=department&op=add_depart', data, callback);
//打卡记录详情
export const parentSignDetail = (data, callback)=>post('/mobile/index.php?act=task&op=doctor_clock_info', data, callback);
//查看任务信息
export const getTaskInfoTitle = (data, callback)=>post('/mobile/index.php?act=task&op=doctor_clock_details', data, callback);
//家长发布打卡任务
export const parentPelease = (data, callback)=>post('/mobile/index.php?act=task&op=parent_clock', data, callback);
//家长发布修改草稿
export const updateParentPelease = (data, callback)=>post('/mobile/index.php?act=task&op=edit_clock', data, callback);
//排行榜数据
export const ranking = (data, callback)=>post('/mobile/index.php?act=parent&op=ranking', data, callback);
//编辑查看任务
export const exitdeil = (data, callback)=>post('/mobile/index.php?act=task&op=task_info', data, callback);
//删除任务
export const delclock = (data, callback)=>post('/mobile/index.php?act=task&op=del_task', data, callback);
//结束任务
export const stopclock = (data, callback)=>post('/mobile/index.php?act=task&op=edit_task_status', data, callback);
//获取手机号码
export const getphone = (data, callback)=>post('/mobile/index.php?act=wx_auto_xcx&op=phone_num', data, callback);