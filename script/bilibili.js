// 哔哩哔哩去广告脚本（自己写，不引用别人的脚本）
// 做法跟经过验证的公开模块一样：推荐流是过滤掉广告卡片（不是把接口拦掉，拦掉首页就加载失败）
// 「我的」页按 sections_v2 处理，底部栏按 tab 接口处理
// 开关从模块参数来，默认全开；关掉哪个，哪个就不生效
let arg = {};
try { arg = JSON.parse($argument || '{}'); } catch (e) {}
const removeSplash = arg.removeSplash !== false && arg.removeSplash !== 'false';
const removeHotWords = arg.removeHotWords !== false && arg.removeHotWords !== 'false';
const cleanMinePage = arg.cleanMinePage !== false && arg.cleanMinePage !== 'false';
const removeFeedAds = arg.removeFeedAds !== false && arg.removeFeedAds !== 'false';
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
} else if (url.indexOf('/x/v2/feed/index') !== -1 && removeFeedAds) {
  // 首页推荐流：只留真正的视频卡片，广告卡片、横幅、直播、游戏卡片都去掉
  // 注意是过滤，不是拦接口，拦了首页就加载失败
  try {
    const obj = JSON.parse(body);
    if (obj.data && Array.isArray(obj.data.items)) {
      if (url.indexOf('/story') !== -1) {
        const bad = ['vertical_ad_av', 'vertical_ad_live', 'vertical_ad_picture'];
        obj.data.items = obj.data.items.filter(function (it) {
          return it.ad_info == null && bad.indexOf(it.card_goto) === -1;
        });
        obj.data.items.forEach(function (it) {
          delete it.story_cart_icon; delete it.free_flow_toast; delete it.image_infos;
          delete it.course_info; delete it.game_info;
        });
      } else {
        const okType = ['small_cover_v2', 'large_cover_single_v9', 'large_cover_v1'];
        obj.data.items = obj.data.items.filter(function (it) {
          return it.banner_item == null && it.ad_info == null && it.card_goto === 'av' && okType.indexOf(it.card_type) !== -1;
        });
      }
    }
    body = JSON.stringify(obj);
  } catch (e) {}
} else if (url.indexOf('/x/v2/account/mine') !== -1 && cleanMinePage) {
  // 「我的」页：只留上面那排蓝色的（离线缓存、历史记录、我的收藏、稍后再看）
  try {
    const obj = JSON.parse(body);
    if (obj.data && Array.isArray(obj.data.sections)) {
      obj.data.sections = obj.data.sections.filter(function (s) {
        return ['创作中心', '我的服务', '更多服务'].indexOf(s.title) === -1;
      });
    }
    // 新版 App 用 sections_v2，有的话只留蓝色那一组
    if (obj.data && Array.isArray(obj.data.sections_v2)) {
      obj.data.sections_v2 = [{
        items: [
          {id: 396, title: '离线缓存', uri: 'bilibili://user_center/download', icon: 'http://i0.hdslb.com/bfs/archive/5fc84565ab73e716d20cd2f65e0e1de9495d56f8.png', common_op_item: {}},
          {id: 397, title: '历史记录', uri: 'bilibili://user_center/history', icon: 'http://i0.hdslb.com/bfs/archive/8385323c6acde52e9cd52514ae13c8b9481c1a16.png', common_op_item: {}},
          {id: 3072, title: '我的收藏', uri: 'bilibili://user_center/favourite?version=2', icon: 'http://i0.hdslb.com/bfs/archive/d79b19d983067a1b91614e830a7100c05204a821.png', common_op_item: {}},
          {id: 2830, title: '稍后再看', uri: 'bilibili://user_center/watch_later_v2', icon: 'http://i0.hdslb.com/bfs/archive/63bb768caa02a68cb566a838f6f2415f0d1d02d6.png', need_login: 1, common_op_item: {}}
        ],
        style: 1,
        button: {}
      }];
    }
    walk(obj);
    body = JSON.stringify(obj);
  } catch (e) {}
} else if ((url.indexOf('patch/tab') !== -1 || url.indexOf('show/tab/v2') !== -1) && cleanMinePage) {
  // 底部栏：把会员购那一项删掉，其他原样保留
  try {
    const obj = JSON.parse(body);
    if (obj.data && Array.isArray(obj.data.bottom)) {
      obj.data.bottom = obj.data.bottom.filter(function (it) {
        const t = (typeof it.name === 'string') ? it.name : ((typeof it.title === 'string') ? it.title : '');
        return t.indexOf('会员购') === -1;
      });
    }
    walk(obj);
    body = JSON.stringify(obj);
  } catch (e) {}
} else if (url.indexOf('vip/ads/materials') !== -1 || url.indexOf('resource/top/activity') !== -1 || url.indexOf('pgc/activity/deliver/material/receive') !== -1 || url.indexOf('v2/search/square') !== -1 || url.indexOf('x/v2/dm/ad') !== -1) {
  // 广告接口：直接返回空，让广告加载不出来
  body = '{"code":-404,"message":"-404","ttl":1,"data":null}';
}
$done({body: body});
