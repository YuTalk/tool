> ⚠️ 仅自用

# 🧰 Tool

> 中国常用域名与中国 IPv4 地址库，让国内流量走国内、走直连，更快、更省电。

![更新](https://img.shields.io/badge/自动更新-每%204%20小时-blue?style=flat-square)
![IPv4](https://img.shields.io/badge/GeoIP-IPv4-orange?style=flat-square)
![License](https://img.shields.io/badge/开源-MIT-lightgrey?style=flat-square)

---

## 📦 文件说明

### 🌐 规则集（Egern 和 QX 各一份，内容一致）

| 规则 | Egern 版 | QX 版 | 条数 | QX 策略 |
| --- | --- | --- | --- | --- |
| 中国常用域名 | `rules/egern/China.yaml` | `rules/quantumultx/China.list` | 690 | direct |
| 谷歌 / YouTube | `rules/egern/Google.yaml` | `rules/quantumultx/Google.list` | 24 | 谷歌服务 |
| 谷歌广告 / 统计 | `rules/egern/GoogleAds.yaml` | `rules/quantumultx/GoogleAds.list` | 24 | reject |
| 苹果 / App Store | `rules/egern/Apple.yaml` | `rules/quantumultx/Apple.list` | 20 | direct |
| 微软 / Outlook | `rules/egern/Microsoft.yaml` | `rules/quantumultx/Microsoft.list` | 17 | 微软服务 |
| 香肠派对 | `rules/egern/SausageMan.yaml` | `rules/quantumultx/SausageMan.list` | 16 | direct |
| AI_Part | `rules/egern/AI_Part.yaml` | `rules/quantumultx/AI_Part.list` | 45 | 人工智能 |
| GeoIP_CN | `rules/egern/GeoIP_CN.yaml` | `rules/quantumultx/GeoIP_CN.list` | 1 | direct |

China.yaml 分两段，第一段是应用 / 网站域名 **553 条**，第二段是 CDN / 后台 / 接口域名 **137 条**，覆盖微信、QQ、淘宝、京东、拼多多、美团、饿了么、抖音、哔哩哔哩、爱奇艺、优酷、知乎、微博、百度、阿里、12306、银行、运营商、政府、快递……还有红果短剧、豆包、DeepSeek、Kimi、腾讯元宝、即梦 AI、剪映、夸克等热门应用。

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

## 🚀 怎么用

### 1️⃣ China.yaml：国内域名走国内 DNS

在代理工具里把这个文件加为规则集 / DNS 转发，策略选国内 / DIRECT：

```text
https://raw.githubusercontent.com/YuTalk/tool/main/rules/egern/China.yaml
```

QX 用这个：

```text
https://raw.githubusercontent.com/YuTalk/tool/main/rules/quantumultx/China.list
```

### 2️⃣ GeoIpCN.mmdb：换 GeoIP 库

在支持自定义 GeoIP 库的代理工具里，把 GeoIP 数据库换成这个链接：

```text
https://raw.githubusercontent.com/YuTalk/tool/main/GeoIpCN.mmdb
```

### 3️⃣ 分流里留一条 GEOIP CN → DIRECT

```
GEOIP CN → DIRECT（倒数第二条）
默认 → 兜底策略（最后一条）
```

> ⚠️ GEOIP CN 一定放倒数第二，别放第一，不然每个域名都要先解析 IP，费电又变慢。

---

## 🔗 直链（复制即用）

Egern 版：

```text
https://raw.githubusercontent.com/YuTalk/tool/main/rules/egern/China.yaml
```

```text
https://raw.githubusercontent.com/YuTalk/tool/main/rules/egern/Google.yaml
```

```text
https://raw.githubusercontent.com/YuTalk/tool/main/rules/egern/GoogleAds.yaml
```

```text
https://raw.githubusercontent.com/YuTalk/tool/main/rules/egern/Apple.yaml
```

```text
https://raw.githubusercontent.com/YuTalk/tool/main/rules/egern/Microsoft.yaml
```

```text
https://raw.githubusercontent.com/YuTalk/tool/main/rules/egern/SausageMan.yaml
```

```
https://raw.githubusercontent.com/YuTalk/tool/main/rules/egern/AI_Part.yaml
```

```
https://raw.githubusercontent.com/YuTalk/tool/main/rules/egern/GeoIP_CN.yaml
```

QX 版：

```text
https://raw.githubusercontent.com/YuTalk/tool/main/rules/quantumultx/China.list
```

```text
https://raw.githubusercontent.com/YuTalk/tool/main/rules/quantumultx/Google.list
```

```text
https://raw.githubusercontent.com/YuTalk/tool/main/rules/quantumultx/GoogleAds.list
```

```text
https://raw.githubusercontent.com/YuTalk/tool/main/rules/quantumultx/Apple.list
```

```text
https://raw.githubusercontent.com/YuTalk/tool/main/rules/quantumultx/Microsoft.list
```

```text
https://raw.githubusercontent.com/YuTalk/tool/main/rules/quantumultx/SausageMan.list
```

```
https://raw.githubusercontent.com/YuTalk/tool/main/rules/quantumultx/AI_Part.list
```

```
https://raw.githubusercontent.com/YuTalk/tool/main/rules/quantumultx/GeoIP_CN.list
```

GeoIP 库：

```text
https://raw.githubusercontent.com/YuTalk/tool/main/GeoIpCN.mmdb
```

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

---

## 📄 开源协议

MIT License —— 随便用，改了也行。
