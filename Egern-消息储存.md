# Egern 消息储存

这里是平时用 Egern 攒下来的笔记和提醒，跟 Muse 里的「Egern 消息储存」空间是同一份内容，两边同步。以后有新的笔记就往这里加，按分类放。

## 分类

| 分类 | 是干什么的 | 现在有几条 |
| --- | --- | --- |
| 默认 | 没选分类的新消息，先放这里 | 0 |
| DNS | DNS 转发、DNS 上游、DoH 相关的笔记 | 0 |
| 匹配类型 | 域名匹配的 5 种写法 | 1 |
| 分流 | 分流规则、策略组相关的笔记 | 0 |
| 节点订阅 | 节点、订阅、测速相关的笔记 | 0 |
| 配置 | Egern 设置、配置文件相关的笔记 | 0 |
| 其他 | 不属于上面几类的 | 0 |

---

## 匹配类型

### 域名匹配类型

域名匹配类型一共 5 个，写规则的时候先想清楚要命中多大的范围，再选写法。范围从小到大：精确 < 后缀 < 通配符 < 关键词 < 正则（正则的范围看你怎么写）。

| 写法 | 命中范围 | 常用程度 | 容易出错吗 |
| --- | --- | --- | --- |
| domain_set | 只命中写的那一个域名 | 常用 | 不容易 |
| domain_suffix_set | 写一个后缀，底下所有子域名都命中 | 最常用 | 不容易 |
| domain_wildcard_set | 用 `*` 代表任意部分，可命中中间带 `*` 的 | 偶尔用 | 中等 |
| domain_keyword_set | 域名里包含这个词就命中 | 少用 | 容易误伤 |
| domain_regex_set | 用正则表达式匹配 | 很少用 | 写错容易全集失效 |

#### 1. domain_set：精确匹配

只命中写的那一个域名，多一个少一个都不行。

- 写 `www.taptap.com`，只命中 `www.taptap.com`，`taptap.com` 本身不命中，`m.taptap.com` 也不命中。
- 什么时候用：只想让某一个具体的域名走这条规则，其他子域名不想动的时候。

例子：

```
domain_set:
  - www.taptap.com
```

#### 2. domain_suffix_set：后缀匹配（最常用）

域名以这个后缀结尾就命中，写一个后缀，底下所有子域名都包进去了。

- 写 `tapimg.com`，能命中 `t1.tapimg.com`、`img-tc.tapimg.com`、`app-res.tapimg.com`，还有 `tapimg.com` 本身。
- 什么时候用：一个服务有很多子域名，想一把全包进去的时候。这是仓库里 13 套规则用的最多的写法。

例子：

```
domain_suffix_set:
  - tapimg.com
  - taptap.com
```

#### 3. domain_wildcard_set：通配符匹配

用 `*` 代表任意部分，和后缀差不多，但可以写中间带 `*` 的，控制得更细。

- 写 `*.taptap.com`，只命中一级子域名，比如 `www.taptap.com`、`m.taptap.com`，但不命中 `taptap.com` 本身，也不命中 `a.b.taptap.com` 这种两级子域名。
- 什么时候用：只想命中一级子域名，不想把更深的子域名也包进来的时候。

例子：

```
domain_wildcard_set:
  - *.taptap.com
```

#### 4. domain_keyword_set：关键词匹配（范围最大，小心误伤）

域名里包含这个词就命中，不管它在开头、中间还是结尾。

- 写 `taptap`，会命中所有带 `taptap` 的域名，比如 `taptap.com`、`www.taptap.com`、`taptap.cn`，还有名字里带 `taptap` 的其他域名。
- 什么时候用：一个服务的名字散落在很多不同的域名里，后缀写不全的时候。平时少用，因为范围太大，容易把不相关的域名也误伤进来。

例子：

```
domain_keyword_set:
  - taptap
```

#### 5. domain_regex_set：正则匹配（高级写法，一般用不上）

用正则表达式匹配，写起来最自由，也最容易写错。

- 写 `^.*\.taptap\.com$`，意思是：以任意字符开头、中间是 `.taptap.com` 结尾的域名都命中。
- 什么时候用：上面 4 种都表达不了的复杂情况才用。写错一个字符可能整条规则失效，平时不要用。

例子：

```
domain_regex_set:
  - ^.*\.taptap\.com$
```

#### 选哪个？一句话记住

- 想包一整个服务的所有子域名：用 `domain_suffix_set`（最常用）。
- 只想命中某一个域名：用 `domain_set`。
- 只想命中一级子域名：用 `domain_wildcard_set`。
- 名字散在很多域名里、后缀写不全：才考虑 `domain_keyword_set`，注意别误伤。
- 上面都表达不了：才用 `domain_regex_set`。

---

> 本页内容跟 Muse 里的「Egern 消息储存」空间同步，改了一边另一边也要改。新笔记按上面的分类往下加。
