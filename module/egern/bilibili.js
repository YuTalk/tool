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
  try {
    const obj = JSON.parse(body);
    const drop = ['游戏中心', '会员购', '直播', '漫画', '课堂', '免流量', '我的客服', '邀好友'];
    if (obj.data && obj.data.sections) {
      obj.data.sections.forEach(function (s) {
        if (s.items) s.items = s.items.filter(function (i) { return drop.indexOf(i.title) === -1; });
      });
    }
    body = JSON.stringify(obj);
  } catch (e) {}
}
$done({body: body});
