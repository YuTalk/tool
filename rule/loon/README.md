# <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/92/4e/35/924e359d-e682-7b80-372b-920fdb8c6d6c/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg" width="32" height="32" alt="Loon"> Loon 规则

## 前言

![](https://shields.io/badge/-移除重复规则-ff69b4) ![](https://shields.io/badge/-三格式同步-green) ![](https://shields.io/badge/-每6小时自动更新-blue) ![](https://shields.io/badge/-仅自用-critical)

Loon 用的规则，12 套，每套一个文件夹（点进文件夹能看到这套规则的说明页），和 Egern、Quantumult X 那两份内容一致，只是格式不同（策略只用 DIRECT / PROXY），由本仓库每 6 小时自动检查更新。

分流规则是互联网公共服务的域名和 IP 地址汇总，所有数据均收集自互联网公开信息，不代表我们支持或使用这些服务。

请通过【中华人民共和国 People's Republic of China】合法的互联网出入口信道访问规则中的地址，并确保在使用过程中符合相关法律法规。

## 规则统计

最后更新时间：2026-11-26 13:16:00

各规则集统计：

| 规则集 | 数量(条) |
| ---- | ---- |
| China | 482 |
| <img src="https://cdn.simpleicons.org/google/4285F4" width="20" height="20" alt="Google"> Google | 18 |
| <img src="https://cdn.simpleicons.org/apple" width="20" height="20" alt="Apple"> Apple | 17 |
| <img src="https://www.microsoft.com/favicon.ico" width="20" height="20" alt="Microsoft"> Microsoft | 17 |
| SausageMan | 15 |
| AI_Part | 71 |
| GeoIP_CN | 1 |
| <img src="https://cdn.simpleicons.org/spotify/1DB954" width="20" height="20" alt="Spotify"> Spotify | 29 |
| <img src="https://cdn.simpleicons.org/tiktok/FE2C55" width="20" height="20" alt="TikTok"> TikTok | 33 |
| <img src="https://cdn.simpleicons.org/github" width="20" height="20" alt="GitHub"> GitHub | 31 |
| <img src="https://cdn.simpleicons.org/speedtest/141526" width="20" height="20" alt="Speedtest"> Speedtest | 9 |
| <img src="https://cdn.simpleicons.org/telegram/26A5E4" width="20" height="20" alt="Telegram"> Telegram | 44 |
| TOTAL | 767 |

其中规则条目 766 条（去重后 754 条，和主 README 的域名总数一致；多出来的 12 条是 IP-ASN 和进程名规则），GeoIP_CN 是 1 条 GEOIP 规则，不算域名。

## Loon

#### 使用说明
- 在 Loon 里点规则 → 右上角 + → 粘贴下面对应规则的链接，就能加上。

#### 配置建议
- Loon 策略只用 DIRECT / PROXY 两个标准名。
- GEOIP CN 是 GEOIP,CN,DIRECT，放倒数第二。
- Loon 靠 DoH 流量模式选 Rule，实现和 Egern 的 DNS 转发一样的效果。

#### 规则链接
**China.list（482 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/loon/China/China.list

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/loon/China/China.list

**Google.list（31 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/loon/Google/Google.list

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/loon/Google/Google.list

**Apple.list（17 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/loon/Apple/Apple.list

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/loon/Apple/Apple.list

**Microsoft.list（17 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/loon/Microsoft/Microsoft.list

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/loon/Microsoft/Microsoft.list

**SausageMan.list（15 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/loon/SausageMan/SausageMan.list

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/loon/SausageMan/SausageMan.list

**AI_Part.list（71 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/loon/AI_Part/AI_Part.list

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/loon/AI_Part/AI_Part.list

**GeoIP_CN.list（1 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/loon/GeoIP_CN/GeoIP_CN.list

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/loon/GeoIP_CN/GeoIP_CN.list

**Spotify.list（29 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/loon/Spotify/Spotify.list

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/loon/Spotify/Spotify.list

**TikTok.list（33 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/loon/TikTok/TikTok.list

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/loon/TikTok/TikTok.list

**GitHub.list（31 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/loon/GitHub/GitHub.list

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/loon/GitHub/GitHub.list

**Speedtest.list（9 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/loon/Speedtest/Speedtest.list

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/loon/Speedtest/Speedtest.list

**Telegram.list（44 条）**

原始链接：

https://raw.githubusercontent.com/YuTalk/tool/main/rule/loon/Telegram/Telegram.list

CDN 链接：

https://cdn.jsdelivr.net/gh/YuTalk/tool@main/rule/loon/Telegram/Telegram.list


## 数据来源

China 的数据来自 ACL4SSR 的 ChinaDomain.list 与 geolocation-cn；Spotify、TikTok、GitHub、Speedtest、Telegram 的数据来自 blackmatrix7 的 ios_rule_script（Surge 版）；TikTok、GeoIP_CN 另外对照了 fmz200 的 wool_scripts；AI_Part 对照了 fmz200 的 AI.list 和 blackmatrix7 的 Claude、Gemini 列表；Google、Apple、Microsoft、SausageMan 是手选的，没有固定上游。

感谢以上规则作者的辛勤付出。

## 最后

本仓库仅自用，请不要对外宣传。
