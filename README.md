> ⚠️ 仅自用

# 🧰 Tool

> 中国常用域名与中国 IPv4 地址库，让国内流量走国内、走直连，更快、更省电。

![更新](https://img.shields.io/badge/自动更新-每%204%20小时-blue?style=flat-square)
![IPv4](https://img.shields.io/badge/GeoIP-IPv4-orange?style=flat-square)
![License](https://img.shields.io/badge/开源-MIT-lightgrey?style=flat-square)

## 👀 一眼看懂

| 项目 | 数量 |
| --- | --- |
| 规则集 | 8 个（Egern 和 QX 各一份，内容一致） |
| 模块 | 2 个（哔哩哔哩 · 纯净、Spotify 会员，Egern 和 QX 各一份） |
| 图标 | 38 个（13 套图标库预览图 + 25 个单个应用图标，都是从别人家搬过来的原图） |
| 域名总数 | 850 条（去重后） |
| GeoIP 库 | 6,575 条 CIDR，约 132KB，覆盖 357,426,983 个中国 IPv4 地址 |
| 自动检查 | 每 4 小时，凌晨 0:00、4:00、8:00…… |

## 📖 目录

- [📦 文件说明](#-文件说明)
- [🧩 模块](#-模块)
- [⚡ 一键添加进软件](#-一键添加进软件)
- [🚀 怎么用](#-怎么用)
- [🔄 自动更新](#-自动更新)
- [❓ 常见问题](#-常见问题)

---

## 📦 文件说明

### 🌐 规则集

- 中国常用域名（690 条）：国内应用 / 网站 + CDN / 后台；Egern：DNS 转发 → 国内 / 分流 → DIRECT；QX：direct
- 谷歌 / YouTube（31 条）：谷歌搜索、Gmail、YouTube 等；Egern / QX：谷歌服务
- 谷歌广告 / 统计（24 条）：谷歌广告、统计、分析；Egern / QX：reject
- 苹果 / App Store（23 条）：苹果系统、商店、iCloud；Egern / QX：direct
- 微软 / Outlook（21 条）：Outlook、微软账号；Egern / QX：微软服务
- 香肠派对（16 条）：香肠派对及 TapTap 相关；Egern / QX：direct
- AI_Part（45 条）：Muse、GPT、Claude；Egern / QX：人工智能
- GeoIP_CN（1 条）：中国 IP 段（仅 QX 版）；QX：direct

China.yaml 分两段，第一段是应用 / 网站域名 **553 条**，第二段是 CDN / 后台 / 接口域名 **137 条**，覆盖微信、QQ、淘宝、京东、拼多多、美团、饿了么、抖音、哔哩哔哩、爱奇艺、优酷、知乎、微博、百度、阿里、12306、银行、运营商、政府、快递……还有红果短剧、豆包、DeepSeek、Kimi、腾讯元宝、即梦 AI、剪映、夸克等热门应用。

<details>
<summary>中国常用域名都包括谁？点开看</summary>

微信、QQ、淘宝、天猫、京东、拼多多、美团、饿了么、抖音、快手、哔哩哔哩、爱奇艺、优酷、腾讯视频、芒果 TV、知乎、微博、百度、阿里云、12306、携程、滴滴、高德地图、银行、运营商、政府网站、快递，等等。

</details>

<details>
<summary>AI_Part 都包括谁？点开看</summary>

- GPT / OpenAI：ChatGPT、Sora 等，19 条
- Claude / Anthropic：Claude 官网、App 等，19 条
- Muse / Meta AI：meta.ai、muse.ai、llama.com 等，7 条

</details>

### 🧩 模块

同一个模块 Egern 和 QX 各一份，内容一致、格式不同。脚本单独放 `script/` 文件夹，模块自己去拉，不用手动添加。

- 📺 哔哩哔哩 · 纯净 — Egern：[Bilibili-ADBlock.yaml](https://raw.githubusercontent.com/YuTalk/tool/main/module/egern/Bilibili-ADBlock.yaml)　QX：[Bilibili-ADBlock.snippet](https://raw.githubusercontent.com/YuTalk/tool/main/module/quantumultx/Bilibili-ADBlock.snippet)
  - 去开屏、热词、推荐流广告、视频页广告；「我的」页只留蓝色一排；底部栏只留首页、关注、我的；Egern 版 4 个开关
- 🎵 Spotify 会员 — Egern：[Spotify-Premium.yaml](https://raw.githubusercontent.com/YuTalk/tool/main/module/egern/Spotify-Premium.yaml)　QX：[Spotify-Premium.snippet](https://raw.githubusercontent.com/YuTalk/tool/main/module/quantumultx/Spotify-Premium.snippet)
  - 去广告、解锁会员标识（QX 版只能去广告）

### 📜 脚本

- [bilibili.js](https://raw.githubusercontent.com/YuTalk/tool/main/script/bilibili.js) — 哔哩哔哩 · 纯净模块用的脚本，处理开屏、热词、推荐流广告、「我的」页、底部栏、广告接口，按模块里的开关决定开不开

### 🖼️ 图标

图标都放在顶层 `icon/` 文件夹里，都是从别人家搬过来的原图（主要来自 [ddgksf2013/Icon](https://github.com/ddgksf2013/Icon) 和 [Koolson/Qure](https://github.com/Koolson/Qure)），以后模块图标从这里面选。

**模块正在用的图标：**

| 图标 | 模块 |
| --- | --- |
| <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/bilibili.png" width="48"> | 哔哩哔哩 · 纯净（Qure 彩色版） |
| <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/spotify.png" width="48"> | Spotify 会员（Qure 彩色版） |

**13 套图标库（预览图就是原图，点链接一键加进 QX）：**

#### Qure 系列

- **Qure 图标库（黑白）** [👉 加进 QX](https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fgithub.com%2FKoolson%2FQure%2Fraw%2Fmaster%2FOther%2FQureLight-All.json%22%0A%5D)
  <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/preview-01-qure-light.PNG" width="120">
- **Qure 图标库（彩色 1）** [👉 加进 QX](https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fgithub.com%2FKoolson%2FQure%2Fraw%2Fmaster%2FOther%2FQureColor-All.json%22%0A%5D)
  <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/preview-02-qure-color-all.PNG" width="120">
- **Qure 图标库（彩色 2）** [👉 加进 QX](https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2FKoolson%2FQure%2Fmaster%2FOther%2FQureColor.json%22%0A%5D)
  <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/preview-03-qure-color.PNG" width="120">
- **Qure 图标（mini）** [👉 加进 QX](https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2FKoolson%2FQure%2Fmaster%2FOther%2FQuremini.json%22%0A%5D)
  <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/preview-04-qure-mini.PNG" width="120">

#### Orz-3 系列

- **Orz-3 图标库（mini style）** [👉 加进 QX](https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fgithub.com%2FOrz-3%2Fmini%2Fraw%2Fmaster%2Fmini.json%22%0A%5D)
  <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/preview-05-orz3-mini.PNG" width="120">
- **Orz-3 图标库（big style）** [👉 加进 QX](https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2FOrz-3%2Fmini%2Fmaster%2FColor%2B.json%22%0A%5D)
  <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/preview-06-orz3-big.PNG" width="120">
- **Orz-3 图标库（mini color）** [👉 加进 QX](https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2FOrz-3%2Fmini%2Fmaster%2FminiColor.json%22%0A%5D)
  <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/preview-07-orz3-mini-color.PNG" width="120">

#### 卡通可爱

- **泡泡图标** [👉 加进 QX](https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Ftugepaopao%2FImage-Storage%2Fmaster%2Fother%2FCute.json%22%0A%5D)
  <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/preview-08-cute.PNG" width="120">
- **PokemonGo** [👉 加进 QX](https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2Fshoujiqiyuan%2FPokemonGOforQuanX%2Fmaster%2FPokemonGo.json%22%0A%5D)
  <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/preview-09-pokemongo.PNG" width="120">
- **小猫咪** [👉 加进 QX](https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2FYuanxsxs%2FQtumultX%2Fmaster%2FIcon%2FCatcat.json%22%0A%5D)
  <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/preview-10-catcat.PNG" width="120">

#### 姿势

- **姿势图标 1** [👉 加进 QX](https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fgithub.com%2FLovedGM%2FQuantumult-X-TuBiao%2Fraw%2Fmain%2Fzishi.json%22%0A%5D)
  <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/preview-11-zishi.PNG" width="120">
- **姿势图标 2** [👉 加进 QX](https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2FLovedGM%2FQuantumult-X-TuBiao%2Fmain%2Fzishi-cs.json%22%0A%5D)
  <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/preview-12-zishi-cs.PNG" width="120">

#### 手绘

- **Semporia** [👉 加进 QX](https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2FSemporia%2FHand-Painted-icon%2Fmaster%2FSemporia.json%22%0A%5D)
  <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/preview-13-semporia.PNG" width="120">

**单个应用图标（都在 `icon/` 文件夹里，直接看图认）：**

#### qx/ 单个图标

- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/ai.png" width="48"> ai.png — AI 应用
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/baiduwangpan.png" width="48"> baiduwangpan.png — 百度网盘
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/box.png" width="48"> box.png — Box
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/caiyuntianqi.png" width="48"> caiyuntianqi.png — 彩云天气
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/douban.png" width="48"> douban.png — 豆瓣
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/gaode.png" width="48"> gaode.png — 高德地图
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/googlevoice.png" width="48"> googlevoice.png — Google Voice
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/search.png" width="48"> search.png — 搜索
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/xianyu.png" width="48"> xianyu.png — 闲鱼
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/xiaohongshu.png" width="48"> xiaohongshu.png — 小红书
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/ximalaya.png" width="48"> ximalaya.png — 喜马拉雅
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/zhihu.png" width="48"> zhihu.png — 知乎

#### 零散图标

- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/Netease_Music_Unlock.png" width="48"> Netease_Music_Unlock.png — 网易云音乐解锁
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/cmcc.png" width="48"> cmcc.png — 中国移动
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/debao.png" width="48"> debao.png — 得宝 Tempo 纸巾
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/gt.png" width="48"> gt.png — 绿底白狗头（京东 Joy 狗造型）
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/liwo.png" width="48"> liwo.png — 青色底卡通大眼表情
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/mmjz.png" width="48"> mmjz.png — 粉底橘色卡通猫抱着手机
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/olympic.jpeg" width="48"> olympic.jpeg — 2022 北京冬奥会会徽（不是应用图标）
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/share.jpg" width="48"> share.jpg — 分享邀请二维码图（不是图标）
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/sxmd.png" width="48"> sxmd.png — 绿色藤蔓花纹装饰图（不是应用图标）
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/tq.png" width="48"> tq.png — 红底白鲸鱼 + 金色钱币
- <img src="https://raw.githubusercontent.com/YuTalk/tool/main/icon/yu.png" width="48"> yu.png — 黑底粉色「鱼」字艺术字

> 注意：
> - 不要和已有的 fmz200 哔哩哔哩模块同时开，两个都改同一批接口会打架。
> - QX 版暂不支持精简「我的」页多余入口，那个要 Egern 版才有。
> - 模块要开 MITM，证书要装好、信任开好，不然不生效。

### GeoIpCN.mmdb（6,575 条 CIDR，约 132KB）

只含中国 IPv4，共覆盖 **357,426,983 个地址**，约 132KB。

数据来源（多来源合并去重）：

- 17mon/china_ip_list
- APNIC 中国分配数据（cn|ipv4）
- chnroutes2
- Loyalsoldier/geoip CN 文本（仅 IPv4）
- metowolf/iplist 纯真 CN

> 只含中国段，外国 IP 查不到中国，这是对的 —— GEOIP CN 才能把外国流量送去代理。

---

## 📱 一键跳转到软件

点一下就跳到 App Store，没装就下载，装了就点「打开」：

| 软件 | 跳转 |
| --- | --- |
| 🐿️ Egern（小松鼠，免费 + 内购） | [👉 点我打开 Egern](https://apps.apple.com/us/app/egern/id1616105820) |
| ⚡ Quantumult X（$9.99） | [👉 点我打开 Quantumult X](https://apps.apple.com/us/app/quantumult-x/id1443988620) |

> Egern 和 QX 国区 App Store 搜不到，要用美区 / 港区 Apple ID 才能下载。

---

## ⚡ 一键添加进软件

点下面表格里的链接，就会直接跳进 Egern / QX，问你要不要添加，点确认就加进去了，不用自己复制链接再粘贴。

| 软件 | Egern | Quantumult X |
| --- | --- | --- |
| 中国常用域名 | [👉 加进 Egern](https://egernapp.com/rules/new?type=rule_set&match=https%3A%2F%2Fraw.githubusercontent.com%2FYuTalk%2Ftool%2Fmain%2Frules%2Fegern%2FChina.yaml&policy=DIRECT) | [👉 加进 QX](https://quantumult.app/x/open-app/add-resource?remote-resource=%7B%22filter_remote%22%3A%5B%22https%3A%2F%2Fraw.githubusercontent.com%2FYuTalk%2Ftool%2Fmain%2Frules%2Fquantumultx%2FChina.list%2C%20tag%3DChina%2C%20force-policy%3Ddirect%22%5D%7D) |
| 谷歌 / YouTube | [👉 加进 Egern](https://egernapp.com/rules/new?type=rule_set&match=https%3A%2F%2Fraw.githubusercontent.com%2FYuTalk%2Ftool%2Fmain%2Frules%2Fegern%2FGoogle.yaml&policy=%E8%B0%B7%E6%AD%8C%E6%9C%8D%E5%8A%A1) | [👉 加进 QX](https://quantumult.app/x/open-app/add-resource?remote-resource=%7B%22filter_remote%22%3A%5B%22https%3A%2F%2Fraw.githubusercontent.com%2FYuTalk%2Ftool%2Fmain%2Frules%2Fquantumultx%2FGoogle.list%2C%20tag%3DGoogle%2C%20force-policy%3D%E8%B0%B7%E6%AD%8C%E6%9C%8D%E5%8A%A1%22%5D%7D) |
| 谷歌广告 / 统计 | [👉 加进 Egern](https://egernapp.com/rules/new?type=rule_set&match=https%3A%2F%2Fraw.githubusercontent.com%2FYuTalk%2Ftool%2Fmain%2Frules%2Fegern%2FGoogleAds.yaml&policy=REJECT) | [👉 加进 QX](https://quantumult.app/x/open-app/add-resource?remote-resource=%7B%22filter_remote%22%3A%5B%22https%3A%2F%2Fraw.githubusercontent.com%2FYuTalk%2Ftool%2Fmain%2Frules%2Fquantumultx%2FGoogleAds.list%2C%20tag%3DGoogleAds%2C%20force-policy%3Dreject%22%5D%7D) |
| 苹果 / App Store | [👉 加进 Egern](https://egernapp.com/rules/new?type=rule_set&match=https%3A%2F%2Fraw.githubusercontent.com%2FYuTalk%2Ftool%2Fmain%2Frules%2Fegern%2FApple.yaml&policy=DIRECT) | [👉 加进 QX](https://quantumult.app/x/open-app/add-resource?remote-resource=%7B%22filter_remote%22%3A%5B%22https%3A%2F%2Fraw.githubusercontent.com%2FYuTalk%2Ftool%2Fmain%2Frules%2Fquantumultx%2FApple.list%2C%20tag%3DApple%2C%20force-policy%3Ddirect%22%5D%7D) |
| 微软 / Outlook | [👉 加进 Egern](https://egernapp.com/rules/new?type=rule_set&match=https%3A%2F%2Fraw.githubusercontent.com%2FYuTalk%2Ftool%2Fmain%2Frules%2Fegern%2FMicrosoft.yaml&policy=%E5%BE%AE%E8%BD%AF%E6%9C%8D%E5%8A%A1) | [👉 加进 QX](https://quantumult.app/x/open-app/add-resource?remote-resource=%7B%22filter_remote%22%3A%5B%22https%3A%2F%2Fraw.githubusercontent.com%2FYuTalk%2Ftool%2Fmain%2Frules%2Fquantumultx%2FMicrosoft.list%2C%20tag%3DMicrosoft%2C%20force-policy%3D%E5%BE%AE%E8%BD%AF%E6%9C%8D%E5%8A%A1%22%5D%7D) |
| 香肠派对 | [👉 加进 Egern](https://egernapp.com/rules/new?type=rule_set&match=https%3A%2F%2Fraw.githubusercontent.com%2FYuTalk%2Ftool%2Fmain%2Frules%2Fegern%2FSausageMan.yaml&policy=DIRECT) | [👉 加进 QX](https://quantumult.app/x/open-app/add-resource?remote-resource=%7B%22filter_remote%22%3A%5B%22https%3A%2F%2Fraw.githubusercontent.com%2FYuTalk%2Ftool%2Fmain%2Frules%2Fquantumultx%2FSausageMan.list%2C%20tag%3DSausageMan%2C%20force-policy%3Ddirect%22%5D%7D) |
| AI_Part | [👉 加进 Egern](https://egernapp.com/rules/new?type=rule_set&match=https%3A%2F%2Fraw.githubusercontent.com%2FYuTalk%2Ftool%2Fmain%2Frules%2Fegern%2FAI_Part.yaml&policy=%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD) | [👉 加进 QX](https://quantumult.app/x/open-app/add-resource?remote-resource=%7B%22filter_remote%22%3A%5B%22https%3A%2F%2Fraw.githubusercontent.com%2FYuTalk%2Ftool%2Fmain%2Frules%2Fquantumultx%2FAI_Part.list%2C%20tag%3DAI_Part%2C%20force-policy%3D%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%22%5D%7D) |
| GeoIP_CN | 仅 QX 版 | [👉 加进 QX](https://quantumult.app/x/open-app/add-resource?remote-resource=%7B%22filter_remote%22%3A%5B%22https%3A%2F%2Fraw.githubusercontent.com%2FYuTalk%2Ftool%2Fmain%2Frules%2Fquantumultx%2FGeoIP_CN.list%2C%20tag%3DGeoIP_CN%2C%20force-policy%3Ddirect%22%5D%7D) |

> 注意：
> - Egern 的一键添加是加到**分流**里，China 还要再单独加一次 **DNS 转发 → 国内**，那个不能一键加，得在设置里手动加。
> - 点链接后软件会先弹出来让你确认，策略已经按上面表格填好了，确认就行。
> - 如果点链接没反应，先确认 Egern / QX 已经装好了。

---

## 🚀 怎么用

### 🐿️ Egern

1. **DNS 转发**：设置 → DNS 转发 → 添加规则集，粘贴 China 链接，策略选国内
2. **分流**：设置 → 分流 → 添加规则集，粘贴对应链接，策略按上面表格选
3. **GeoIP 库**：设置 → GeoIP 数据库 → 粘贴 GeoIpCN.mmdb 链接
4. **模块**：工具 → 模块 → + → 粘贴哔哩哔哩去广告的 Egern 版链接
5. **分流留一条**：`GEOIP CN → DIRECT` 放倒数第二，`默认 → 兜底策略` 放最后

> ⚠️ GEOIP CN 一定放倒数第二，别放第一，不然每个域名都要先解析 IP，费电又变慢。

### ⚡ Quantumult X

1. 分流里加远程规则，粘贴上面表格里的 QX 版链接，策略按表格选
2. 模块：重写 → 引用 → 粘贴哔哩哔哩去广告的 QX 版链接
3. 分流留一条：`geoip, cn, direct` 放倒数第二，`final` 放最后
3. QX 不能用自建 .mmdb 库，用它自带的就行

---

## 🔄 自动更新

| 任务 | 频率 |
| --- | --- |
| 仓库检查（全部规则 + GeoIP 库 + README） | 每 4 小时，凌晨 0:00、4:00、8:00…… |

文件名和链接固定不变，只更新内容。新增域名要经过主人同意才加，失效的直接删。

---

## ❓ 常见问题

**Q：外国网站会不会被误判成中国？**
A：不会。库里只装了中国段，外国 IP 返回空，走代理。

**Q：为什么只有 IPv4？**
A：IPv6 关着，用纯 IPv4 更小更快。以后开 IPv6 再换回带 IPv6 的库。

**Q：China.yaml 里的 CDN 域名有什么用？**
A：主域名和 CDN 要一起走国内 DNS，不然图片视频会回外国 IP，慢甚至打不开。

**Q：Egern 和 QX 的文件有什么区别？**
A：内容一样，只是格式不同：Egern 用 `.yaml`，QX 用 `.list`，QX 每条后面都带策略。

---

## 📄 开源协议

MIT License —— 随便用，改了也行。
