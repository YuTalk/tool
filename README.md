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
| 域名总数 | 850 条（去重后） |
| GeoIP 库 | 6,575 条 CIDR，约 132KB，覆盖 357,426,983 个中国 IPv4 地址 |
| 自动检查 | 每 4 小时，凌晨 0:00、4:00、8:00…… |

## 📖 目录

- [📦 文件说明](#-文件说明)
- [🔗 直链](#-直链)
- [🚀 怎么用](#-怎么用)
- [🔄 自动更新](#-自动更新)
- [❓ 常见问题](#-常见问题)

---

## 📦 文件说明

### 🌐 规则集

| 规则 | 条数 | 用途 | Egern 策略 | QX 策略 |
| --- | --- | --- | --- | --- |
| 🇨🇳 中国常用域名 | 690 | 国内应用 / 网站 + CDN / 后台 | DNS 转发 → 国内 / 分流 → DIRECT | direct |
| 🔍 谷歌 / YouTube | 31 | 谷歌搜索、Gmail、YouTube 等 | 谷歌服务 | 谷歌服务 |
| 🚫 谷歌广告 / 统计 | 24 | 谷歌广告、统计、分析 | reject | reject |
| 🍎 苹果 / App Store | 23 | 苹果系统、商店、iCloud | direct | direct |
| 🪟 微软 / Outlook | 21 | Outlook、微软账号 | 微软服务 | 微软服务 |
| 🌭 香肠派对 | 16 | 香肠派对及 TapTap 相关 | direct | direct |
| 🤖 AI_Part | 45 | Muse、GPT、Claude | 人工智能 | 人工智能 |
| 🗺️ GeoIP_CN | 1 | 中国 IP 段（仅 QX 版） | — | direct |

China.yaml 分两段，第一段是应用 / 网站域名 **553 条**，第二段是 CDN / 后台 / 接口域名 **137 条**，覆盖微信、QQ、淘宝、京东、拼多多、美团、饿了么、抖音、哔哩哔哩、爱奇艺、优酷、知乎、微博、百度、阿里、12306、银行、运营商、政府、快递……还有红果短剧、豆包、DeepSeek、Kimi、腾讯元宝、即梦 AI、剪映、夸克等热门应用。

<details>
<summary>🇨🇳 中国常用域名都包括谁？点开看</summary>

微信、QQ、淘宝、天猫、京东、拼多多、美团、饿了么、抖音、快手、哔哩哔哩、爱奇艺、优酷、腾讯视频、芒果 TV、知乎、微博、百度、阿里云、12306、携程、滴滴、高德地图、银行、运营商、政府网站、快递，等等。

</details>

<details>
<summary>🤖 AI_Part 都包括谁？点开看</summary>

- GPT / OpenAI：ChatGPT、Sora 等，19 条
- Claude / Anthropic：Claude 官网、App 等，19 条
- Muse / Meta AI：meta.ai、muse.ai、llama.com 等，7 条

</details>

### 🗺️ GeoIpCN.mmdb（6,575 条 CIDR，约 132KB）

只含中国 IPv4，共覆盖 **357,426,983 个地址**，约 132KB。

数据来源（多来源合并去重）：

- 17mon/china_ip_list
- APNIC 中国分配数据（cn|ipv4）
- chnroutes2
- Loyalsoldier/geoip CN 文本（仅 IPv4）
- metowolf/iplist 纯真 CN

> 只含中国段，外国 IP 查不到中国，这是对的 —— GEOIP CN 才能把外国流量送去代理。

---

## 🔗 直链

点下面表格里的链接就打开规则文件，长按可以复制链接。

| 软件 | 条数 | 策略 | Egern 版 | QX 版 |
| --- | --- | --- | --- | --- |
| 🇨🇳 中国常用域名 | 690 | 国内 / DIRECT | [打开](https://raw.githubusercontent.com/YuTalk/tool/main/rules/egern/China.yaml) | [打开](https://raw.githubusercontent.com/YuTalk/tool/main/rules/quantumultx/China.list) |
| 🔍 谷歌 / YouTube | 31 | 谷歌服务 | [打开](https://raw.githubusercontent.com/YuTalk/tool/main/rules/egern/Google.yaml) | [打开](https://raw.githubusercontent.com/YuTalk/tool/main/rules/quantumultx/Google.list) |
| 🚫 谷歌广告 / 统计 | 24 | reject | [打开](https://raw.githubusercontent.com/YuTalk/tool/main/rules/egern/GoogleAds.yaml) | [打开](https://raw.githubusercontent.com/YuTalk/tool/main/rules/quantumultx/GoogleAds.list) |
| 🍎 苹果 / App Store | 23 | direct | [打开](https://raw.githubusercontent.com/YuTalk/tool/main/rules/egern/Apple.yaml) | [打开](https://raw.githubusercontent.com/YuTalk/tool/main/rules/quantumultx/Apple.list) |
| 🪟 微软 / Outlook | 21 | 微软服务 | [打开](https://raw.githubusercontent.com/YuTalk/tool/main/rules/egern/Microsoft.yaml) | [打开](https://raw.githubusercontent.com/YuTalk/tool/main/rules/quantumultx/Microsoft.list) |
| 🌭 香肠派对 | 16 | direct | [打开](https://raw.githubusercontent.com/YuTalk/tool/main/rules/egern/SausageMan.yaml) | [打开](https://raw.githubusercontent.com/YuTalk/tool/main/rules/quantumultx/SausageMan.list) |
| 🤖 AI_Part | 45 | 人工智能 | [打开](https://raw.githubusercontent.com/YuTalk/tool/main/rules/egern/AI_Part.yaml) | [打开](https://raw.githubusercontent.com/YuTalk/tool/main/rules/quantumultx/AI_Part.list) |
| 🗺️ GeoIP_CN | 1 | direct | 仅 QX 版 | [打开](https://raw.githubusercontent.com/YuTalk/tool/main/rules/quantumultx/GeoIP_CN.list) |

**GeoIP 库**（Egern 换库用，QX 不能用）：[GeoIpCN.mmdb](https://raw.githubusercontent.com/YuTalk/tool/main/GeoIpCN.mmdb)

---

## 🚀 怎么用

### 🐿️ Egern

1. **DNS 转发**：设置 → DNS 转发 → 添加规则集，粘贴 China 链接，策略选国内
2. **分流**：设置 → 分流 → 添加规则集，粘贴对应链接，策略按上面表格选
3. **GeoIP 库**：设置 → GeoIP 数据库 → 粘贴 GeoIpCN.mmdb 链接
4. **分流留一条**：`GEOIP CN → DIRECT` 放倒数第二，`默认 → 兜底策略` 放最后

> ⚠️ GEOIP CN 一定放倒数第二，别放第一，不然每个域名都要先解析 IP，费电又变慢。

### ⚡ Quantumult X

1. 分流里加远程规则，粘贴上面表格里的 QX 版链接，策略按表格选
2. 分流留一条：`geoip, cn, direct` 放倒数第二，`final` 放最后
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
