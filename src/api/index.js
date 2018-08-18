/*
包含n个接口请求函数的模块
函数的返回值：promise对象
 */

import ajax from './ajax'
const BASE_URL = '/api'

//根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
//获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL+'/index_category')
//根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL+'/shops', {longitude, latitude})
//根据经纬度关键字搜索商铺列表
// export const reqAddress = () => ajax()
// //获取一次性验证码
// export const reqAddress = () => ajax()
// //用户名密码登录
// export const reqAddress = () => ajax()
// //发送短信验证码
// export const reqAddress = () => ajax()
// //手机号验证码登录
// export const reqAddress = () => ajax()
//
// //根据会话获取用户信息
// export const reqAddress = () => ajax()
//
// //用户登出
// export const reqAddress = () => ajax()

