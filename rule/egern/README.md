# 🐿️ Egern 规则

## 前言

![](https://shields.io/badge/-移除重复规则-ff69b4) ![](https://shields.io/badge/-三格式同步-green) ![](https://shields.io/badge/-每6小时自动更新-blue) ![](https://shields.io/badge/-仅自用-critical)

Egern 用的规则，13 套，和 Quantumult X、Loon 那两份内容一致，只是格式不同，由本仓库每 6 小时自动检查更新。

分流规则是互联网公共服务的域名和 IP 地址汇总，所有数据均收集自互联网公开信息，不代表我们支持或使用这些服务。

请通过【中华人民共和国 People's Republic of China】合法的互联网出入口信道访问规则中的地址，并确保在使用过程中符合相关法律法规。

## 规则统计

最后更新时间：2026-11-24 16:24:25

各规则集统计：

| 规则集 | 数量(条) |
| ---- | ---- |
| China | 664 |
| Google | 31 |
| GoogleAds | 24 |
| Apple | 22 |
| Microsoft | 21 |
| SausageMan | 15 |
| AI_Part | 45 |
| GeoIP_CN | 1 |
| Spotify | 30 |
| TikTok | 37 |
| GitHub | 31 |
| Speedtest | 9 |
| Telegram | 35 |
| TOTAL | 965 |

其中域名 964 条，GeoIP_CN 是 1 条 GEOIP 规则，不算域名。

## Egern

#### 使用说明
- 在 Egern 里点规则集 → 右上角 + → 粘贴下面对应规则的链接，就能加上。
- 也可以去仓库根目录 README 的一键添加表，点绿色按钮直接加。

#### 配置建议
- China.yaml 走国内 DNS + DIRECT；其他套按仓库根目录 README 的策略来。
- GEOIP CN 规则放倒数第二（倒数第一是兜底），不要放第一，放第一每个域名都要先查 IP，费电又变慢。
- DNS 转发里 China.yaml 配国内 DNS（223.5.5.5、119.29.29.29），没配 DNS 转发的域名会走国外 DNS。

#### 规则链接
**China.yaml（664 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/egern/China.yaml

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/egern/China.yaml

**Google.yaml（31 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/egern/Google.yaml

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/egern/Google.yaml

**GoogleAds.yaml（24 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/egern/GoogleAds.yaml

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/egern/GoogleAds.yaml

**Apple.yaml（22 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/egern/Apple.yaml

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/egern/Apple.yaml

**Microsoft.yaml（21 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/egern/Microsoft.yaml

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/egern/Microsoft.yaml

**SausageMan.yaml（15 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/egern/SausageMan.yaml

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/egern/SausageMan.yaml

**AI_Part.yaml（45 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/egern/AI_Part.yaml

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/egern/AI_Part.yaml

**GeoIP_CN.yaml（1 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/egern/GeoIP_CN.yaml

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/egern/GeoIP_CN.yaml

**Spotify.yaml（30 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/egern/Spotify.yaml

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/egern/Spotify.yaml

**TikTok.yaml（37 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/egern/TikTok.yaml

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/egern/TikTok.yaml

**GitHub.yaml（31 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/egern/GitHub.yaml

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/egern/GitHub.yaml

**Speedtest.yaml（9 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/egern/Speedtest.yaml

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/egern/Speedtest.yaml

**Telegram.yaml（35 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/egern/Telegram.yaml

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/egern/Telegram.yaml


## 数据来源

China 的数据来自 ACL4SSR 的 ChinaDomain.list 与 geolocation-cn；Spotify、TikTok、GitHub、Speedtest、Telegram 的数据来自 blackmatrix7 的 ios_rule_script（Surge 版）；TikTok、AI_Part、GeoIP_CN 另外对照了 fmz200 的 wool_scripts；Google、GoogleAds、Apple、Microsoft、SausageMan 是手选的，没有固定上游。

感谢以上规则作者的辛勤付出。

## 最后

本仓库仅自用，请不要对外宣传。
