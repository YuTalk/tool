// 哔哩哔哩去广告脚本（自己写，不引用别人的脚本）
// 开关从模块参数来，默认全开；关掉哪个，哪个就不生效
// 只处理开屏、搜索热词、「我的」页这三个接口，不碰推荐流，首页不会坏
let arg = {};
try { arg = JSON.parse($argument || '{}'); } catch (e) {}
const removeSplash = arg.removeSplash !== false && arg.removeSplash !== 'false';
const removeHotWords = arg.removeHotWords !== false && arg.removeHotWords !== 'false';
const cleanMinePage = arg.cleanMinePage !== false && arg.cleanMinePage !== 'false';
const url = $request.url;
let body = $response.body;
if (url.indexOf('/x/v2/splash/') !== -1 && removeSplash) {
  // 开屏广告：返回空列表，App 就不显示开屏广告
  body = JSON.stringify({code: 0, message: 'OK', ttl: 1, data: {max_time: 0, min_interval: 31536000, pull_interval: 31536000, keep_ids: [], show: [], list: [{}], splash_request_id: ''}});
} else if (url.indexOf('DefaultWords') !== -1 && removeHotWords) {
  // 搜索热词：返回空
  body = '{}';
} else if (url.indexOf('/x/v2/account/mine') !== -1 && cleanMinePage) {
  // 「我的」页：把多余的入口删掉
  // 用包含匹配（不是全名相等），这样「会员购订单」「我的直播」「看视频免流量」这种变体也能去掉
  // 递归走一遍整个返回数据，不管入口藏在哪一层都能找到
  const drop = ['游戏中心', '会员购', '直播', '漫画', '课堂', '课程', '免流量', '我的客服', '邀好友'];
  try {
    const obj = JSON.parse(body);
    const walk = function (o) {
      if (Array.isArray(o)) {
        for (let i = o.length - 1; i >= 0; i--) {
          const it = o[i];
          if (it && typeof it.title === 'string' && drop.some(function (k) { return it.title.indexOf(k) !== -1; })) {
            o.splice(i, 1);
          } else {
            walk(it);
          }
        }
      } else if (o && typeof o === 'object') {
        for (const k in o) walk(o[k]);
      }
    };
    walk(obj);
    body = JSON.stringify(obj);
  } catch (e) {}
}
$done({body: body});
