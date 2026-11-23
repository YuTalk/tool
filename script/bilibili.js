// 哔哩哔哩去广告脚本（自己写，不引用别人的脚本）
// 开关从模块参数来，默认全开；关掉哪个，哪个就不生效
// 只处理开屏、搜索热词、「我的」页、底部栏、广告接口这几个，不碰推荐流和视频本身
let arg = {};
try { arg = JSON.parse($argument || '{}'); } catch (e) {}
const removeSplash = arg.removeSplash !== false && arg.removeSplash !== 'false';
const removeHotWords = arg.removeHotWords !== false && arg.removeHotWords !== 'false';
const cleanMinePage = arg.cleanMinePage !== false && arg.cleanMinePage !== 'false';
const url = $request.url;
let body = $response.body;
// 多余入口的关键词：名字里包含就删（「会员购订单」「我的直播」「看视频免流量」这种变体也能删掉）
const drop = ['游戏中心', '会员购', '直播', '漫画', '课堂', '课程', '免流量', '我的客服', '邀好友'];
// 递归走一遍整个返回数据，不管入口藏在哪一层都能找到；标题和名字都认
const walk = function (o) {
  if (Array.isArray(o)) {
    for (let i = o.length - 1; i >= 0; i--) {
      const it = o[i];
      const t = (it && typeof it.title === 'string') ? it.title : ((it && typeof it.name === 'string') ? it.name : '');
      if (t && drop.some(function (k) { return t.indexOf(k) !== -1; })) {
        o.splice(i, 1);
      } else {
        walk(it);
      }
    }
  } else if (o && typeof o === 'object') {
    for (const k in o) walk(o[k]);
  }
};
if (url.indexOf('/x/v2/splash/') !== -1 && removeSplash) {
  // 开屏广告：返回空列表，App 就不显示开屏广告
  body = JSON.stringify({code: 0, message: 'OK', ttl: 1, data: {max_time: 0, min_interval: 31536000, pull_interval: 31536000, keep_ids: [], show: [], list: [{}], splash_request_id: ''}});
} else if (url.indexOf('DefaultWords') !== -1 && removeHotWords) {
  // 搜索热词：返回空
  body = '{}';
} else if (url.indexOf('/x/v2/account/mine') !== -1 && cleanMinePage) {
  // 「我的」页：只留上面那排蓝色的（离线缓存、历史记录、我的收藏、稍后再看）
  // 创作中心、我的服务、更多服务这三组整组删掉
  try {
    const obj = JSON.parse(body);
    if (obj.data && Array.isArray(obj.data.sections)) {
      obj.data.sections = obj.data.sections.filter(function (s) {
        return ['创作中心', '我的服务', '更多服务'].indexOf(s.title) === -1;
      });
    }
    walk(obj);
    body = JSON.stringify(obj);
  } catch (e) {}
} else if (url.indexOf('patch/tab') !== -1 && cleanMinePage) {
  // 底部栏：把会员购那一项删掉
  try {
    const obj = JSON.parse(body);
    walk(obj);
    body = JSON.stringify(obj);
  } catch (e) {}
} else if (url.indexOf('vip/ads/materials') !== -1 || url.indexOf('resource/top/activity') !== -1 || url.indexOf('pgc/activity/deliver/material/receive') !== -1 || url.indexOf('v2/search/square') !== -1 || url.indexOf('x/v2/dm/ad') !== -1) {
  // 广告接口：直接返回空，让广告加载不出来
  body = '{"code":-404,"message":"-404","ttl":1,"data":null}';
}
$done({body: body});
