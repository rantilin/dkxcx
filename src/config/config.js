export const apiBaseUrl = '172.168.50.20:3333'
//export const h5Url = apiBaseUrl + "/wap/" //H5端网站地址,

// #ifdef H5
export const baseUrl=process.env.NODE_ENV === 'development'?window.location.origin+'/':apiBaseUrl
// #endif

// #ifdef MP-TOUTIAO
export const ttPlatform = 'toutiao'; //toutiao=今日头条小程序, douyin=抖音小程序, pipixia=皮皮虾小程序, huoshan=火山小视频小程序
// #endif