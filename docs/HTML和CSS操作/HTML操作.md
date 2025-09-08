# HTML操作

## getHtmlById(id)

通过id获取html

### 语法
```javascript
getHtmlById(id)
```

### 参数
| 参数名 | 类型   | 必填 | 说明   |
| ------ | ------ | ---- | ------ |
| id     | string | 是   | 节点id |

### 返回值
返回节点的html

### 示例
```javascript
// 获取指定元素的HTML内容
var htmlContent = getHtmlById("contentDiv");
console.log(htmlContent);
```

---

## setHtmlById(id, html)

通过id设置html

### 语法
```javascript
setHtmlById(id, html)
```

### 参数
| 参数名 | 类型   | 必填 | 说明   |
| ------ | ------ | ---- | ------ |
| id     | string | 是   | 节点id |
| html   | string | 是   | 值     |

### 示例
```javascript
// 设置指定元素的HTML内容
setHtmlById("contentDiv", "<p>这是新的内容</p>");
```

---

## replaceHtmlById(id, html)

通过id替换html

### 语法
```javascript
replaceHtmlById(id, html)
```

### 参数
| 参数名 | 类型   | 必填 | 说明   |
| ------ | ------ | ---- | ------ |
| id     | string | 是   | 节点id |
| html   | string | 是   | 值     |

### 示例
```javascript
// 替换指定元素的HTML内容
replaceHtmlById("contentDiv", "<div>这是替换的内容</div>");
```

---

## getOuterHtml(selector)

获取外部html

### 语法
```javascript
getOuterHtml(selector)
```

### 参数
| 参数名   | 类型   | 必填 | 说明   |
| -------- | ------ | ---- | ------ |
| selector | string | 是   | 选择器 |

### 返回值
返回html

### 示例
```javascript
// 获取元素的外部HTML
var outerHtml = getOuterHtml("#contentDiv");
console.log(outerHtml);
```

---

## getOuterHtmlByGlobalId(global_id)

通过全局id获取外部html

### 语法
```javascript
getOuterHtmlByGlobalId(global_id)
```

### 参数
| 参数名    | 类型   | 必填 | 说明   |
| --------- | ------ | ---- | ------ |
| global_id | string | 是   | 全局id |

### 返回值
返回外部html

### 示例
```javascript
// 通过全局ID获取外部HTML
var outerHtml = getOuterHtmlByGlobalId("global_content_123");
console.log(outerHtml);
```

---

## getHtmlByGlobalId(global_id)

通过全局id获取内部html

### 语法
```javascript
getHtmlByGlobalId(global_id)
```

### 参数
| 参数名    | 类型   | 必填 | 说明   |
| --------- | ------ | ---- | ------ |
| global_id | string | 是   | 全局id |

### 返回值
返回内部html

### 示例
```javascript
// 通过全局ID获取内部HTML
var innerHtml = getHtmlByGlobalId("global_content_123");
console.log(innerHtml);
```

---

## setHtmlByGlobalId(global_id, html)

通过全局ID修改内部html

### 语法
```javascript
setHtmlByGlobalId(global_id, html)
```

### 参数
| 参数名    | 类型   | 必填 | 说明   |
| --------- | ------ | ---- | ------ |
| global_id | string | 是   | 全局id |
| html      | string | 是   | 值     |

### 示例
```javascript
// 通过全局ID设置内部HTML
setHtmlByGlobalId("global_content_123", "<p>新的内容</p>");
```

---

## replaceHtmlByGlobalId(global_id, html)

通过全局id替换html

### 语法
```javascript
replaceHtmlByGlobalId(global_id, html)
```

### 参数
| 参数名    | 类型   | 必填 | 说明   |
| --------- | ------ | ---- | ------ |
| global_id | string | 是   | 全局id |
| html      | string | 是   | 值     |

### 示例
```javascript
// 通过全局ID替换HTML，连同节点自身也替换掉
replaceHtmlByGlobalId("global_content_123", "<div>替换的内容</div>");
```