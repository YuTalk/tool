// 哔哩哔哩 · 纯净 - bilibili.js
// 自己写的脚本，处理开屏、热词、推荐流、「我的」页、底部栏、广告接口
// 做法（按 fmz200 的思路）：去广告永远开着，不给开关；开关只留给热词、我的页这两个可选功能
// 2026-11-24 重写：删掉了 [去广告]总开关（removeAds），开屏、推荐流、广告接口改成永远拦截

const $ = {};
try {
  const argument = typeof $argument !== 'undefined' ? JSON.parse($argument) : {};
  // 只留两个可选开关；去广告没有开关，永远开
  const removeHotWords = argument.removeHotWords !== false && argument.removeHotWords !== 'false';
  const cleanMinePage = argument.cleanMinePage !== false && argument.cleanMinePage !== 'false';
  const url = $request.url;
  const body = $response.body ? JSON.parse($response.body) : {};
  let changed = false;

  // 1. 开屏：永远返回空列表（去广告，没有开关）
  if (/\/x\/v2\/splash\/list/.test(url)) {
    $done({ body: JSON.stringify({ code: 0, message: '0', ttl: 1, data: { list: [] } }) });
    return;
  }

  // 2. 搜索热词：跟 removeHotWords 开关
  if (removeHotWords && /\/x\/v2\/search\/square|DefaultWords/.test(url)) {
    $done({ body: JSON.stringify({}) });
    return;
  }

  // 3. 首页推荐流：永远只留视频卡片（去广告，没有开关）
  if (/\/x\/v2\/feed\/index(\/story)?/.test(url)) {
    if (body.data && Array.isArray(body.data.items)) {
      const before = body.data.items.length;
      body.data.items = body.data.items.filter(item => {
        const card = item.card_goto || item.card_type;
        if (!card) return false;
        if (item.ad_info || item.banner_item) return false;
        if (card === 'av') return true;
        return ['small_cover_v2', 'large_cover_single_v9', 'large_cover_v1'].includes(item.card_type);
      });
      changed = body.data.items.length !== before;
    }
    $done({ body: JSON.stringify(body) });
    return;
  }

  // 4. 「我的」页：跟 cleanMinePage 开关
  if (cleanMinePage && /\/x\/v2\/account\/mine/.test(url)) {
    if (body.data) {
      // 删掉创作中心 / 我的服务 / 更多服务整组
      if (Array.isArray(body.data.sections)) {
        body.data.sections = body.data.sections.filter(s => {
          const title = s.title || '';
          return !/创作中心|我的服务|更多服务/.test(title);
        });
        changed = true;
      }
      // sections_v2 只留上面蓝色一排
      if (Array.isArray(body.data.sections_v2)) {
        const keep = ['离线缓存', '历史记录', '我的收藏', '稍后再看'];
        body.data.sections_v2 = body.data.sections_v2.filter(s => {
          const title = s.title || '';
          return keep.some(k => title.includes(k));
        });
        changed = true;
      }
      // 递归删残余关键词入口
      const walk = (obj) => {
        if (!obj || typeof obj !== 'object') return;
        if (Array.isArray(obj)) {
          for (let i = obj.length - 1; i >= 0; i--) {
            const it = obj[i];
            if (it && typeof it === 'object' && /创作中心|我的服务|更多服务/.test(it.title || '')) obj.splice(i, 1);
            else walk(it);
          }
        } else {
          for (const k of Object.keys(obj)) walk(obj[k]);
        }
      };
      walk(body.data);
    }
    $done({ body: JSON.stringify(body) });
    return;
  }

  // 5. 底部栏：永远只留首页、关注、我的（白名单，没有开关）
  if (/\/x\/resource\/show\/tab\/v2|patch\/tab/.test(url)) {
    if (body.data && Array.isArray(body.data.tab)) {
      body.data.tab = body.data.tab.filter(t => /首页|关注|动态|我的/.test(t.name || ''));
      changed = true;
    }
    if (body.data && Array.isArray(body.data.items)) {
      body.data.items = body.data.items.filter(t => /首页|关注|动态|我的/.test(t.name || ''));
      changed = true;
    }
    $done({ body: JSON.stringify(body) });
    return;
  }

  // 6. 广告接口：永远返回 404（去广告，没有开关）
  if (/vip\/ads\/materials|resource\/top\/activity|pgc\/activity\/deliver\/material\/receive|v2\/search\/square|x\/v2\/dm\/ad/.test(url)) {
    $done({ body: JSON.stringify({ code: -404, message: '404 Not Found', ttl: 1, data: null }) });
    return;
  }

  $done({});
} catch (e) {
  $done({});
}
