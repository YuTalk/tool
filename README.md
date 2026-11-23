> ⚠️ 仅自用

# 🧰 Tool

> 中国常用域名与中国 IPv4 地址库，让国内流量走国内、走直连，更快、更省电。

![更新](https://img.shields.io/badge/自动更新-每%203%20小时-blue?style=flat-square)
![IPv4](https://img.shields.io/badge/GeoIP-IPv4-orange?style=flat-square)
![License](https://img.shields.io/badge/开源-MIT-lightgrey?style=flat-square)

---

## 📦 文件说明

| 文件 | 内容 | 大小 | 用途 |
| --- | --- | --- | --- |
| **China.yaml** | 中国常用域名 **690 条** | 约 11 KB | DNS 分流 / 规则集，国内域名走国内 DNS |
| **GeoIpCN.mmdb** | 中国 IPv4 地址库 **6,575 条 CIDR** | 约 132 KB | GEOIP CN 判断，国内 IP 走直连 |

### 🌐 China.yaml（690 条）

分两段，第一段是应用 / 网站域名 **553 条**，第二段是 CDN / 后台 / 接口域名 **137 条**。

覆盖：微信、QQ、淘宝、京东、拼多多、美团、饿了么、抖音、哔哩哔哩、爱奇艺、优酷、知乎、微博、百度、阿里、12306、银行、运营商、政府、快递……还有红果短剧、豆包、DeepSeek、Kimi、腾讯元宝、即梦 AI、剪映、夸克等热门应用。

### 🗺️ GeoIpCN.mmdb（6,575 条 CIDR）

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

```text
https://raw.githubusercontent.com/YuTalk/tool/main/rules/egern/China.yaml
```

```text
https://raw.githubusercontent.com/YuTalk/tool/main/rules/quantumultx/China.list
```

```text
https://raw.githubusercontent.com/YuTalk/tool/main/GeoIpCN.mmdb
```

---

## 🔄 自动更新

| 任务 | 频率 |
| --- | --- |
| China.yaml（域名） | 每 3 小时检查，失效的删、新的热门应用先问再加 |
| GeoIpCN.mmdb（IP 库） | 每 3 小时多来源重建，有变化才更新 |

文件名和链接固定不变，只更新内容。

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
