# CSS样式操作

## setCssById(id, css_key, css_val)

通过id修改css

### 语法
```javascript
setCssById(id, css_key, css_val)
```

### 参数
| 参数名   | 类型   | 必填 | 说明     |
| -------- | ------ | ---- | -------- |
| id       | string | 是   | 节点id   |
| css_key  | string | 是   | css的键  |
| css_val  | string | 是   | css的值  |

### 示例
```javascript
// 通过ID修改元素的CSS样式
setCssById("contentDiv", "color", "red");
setCssById("contentDiv", "fontSize", "16px");
```

---

## setCssByGlobalId(global_id, css_key, css_val)

通过全局id修改css

### 语法
```javascript
setCssByGlobalId(global_id, css_key, css_val)
```

### 参数
| 参数名    | 类型   | 必填 | 说明     |
| --------- | ------ | ---- | -------- |
| global_id | string | 是   | 全局id   |
| css_key   | string | 是   | css的键  |
| css_val   | string | 是   | css的值  |

### 示例
```javascript
// 通过全局ID修改元素的CSS样式
setCssByGlobalId("global_content_123", "backgroundColor", "yellow");
setCssByGlobalId("global_content_123", "border", "1px solid red");
```

---

## addClassById(id, clazz)

通过id添加class

### 语法
```javascript
addClassById(id, clazz)
```

### 参数
| 参数名 | 类型   | 必填 | 说明       |
| ------ | ------ | ---- | ---------- |
| id     | string | 是   | 节点id     |
| clazz  | string | 是   | class样式  |

### 示例
```javascript
// 通过ID给元素添加class
addClassById("contentDiv", "highlight");
addClassById("contentDiv", "animated");
```

---

## removeClassById(id, clazz)

通过id移除class

### 语法
```javascript
removeClassById(id, clazz)
```

### 参数
| 参数名 | 类型   | 必填 | 说明       |
| ------ | ------ | ---- | ---------- |
| id     | string | 是   | 节点id     |
| clazz  | string | 是   | class样式  |

### 示例
```javascript
// 通过ID移除元素的class
removeClassById("contentDiv", "highlight");
```

---

## addClassByGlobalId(global_id, clazz)

通过全局id添加class

### 语法
```javascript
addClassByGlobalId(global_id, clazz)
```

### 参数
| 参数名    | 类型   | 必填 | 说明       |
| --------- | ------ | ---- | ---------- |
| global_id | string | 是   | 全局id     |
| clazz     | string | 是   | class样式  |

### 示例
```javascript
// 通过全局ID给元素添加class
addClassByGlobalId("global_content_123", "visible");
```

---

## removeClassByGlobalId(global_id, clazz)

通过全局id移除class

### 语法
```javascript
removeClassByGlobalId(global_id, clazz)
```

### 参数
| 参数名    | 类型   | 必填 | 说明       |
| --------- | ------ | ---- | ---------- |
| global_id | string | 是   | 全局id     |
| clazz     | string | 是   | class样式  |

### 示例
```javascript
// 通过全局ID移除元素的class
removeClassByGlobalId("global_content_123", "visible");
```