# Ajax请求

## runAjax(params, callBack)

执行ajax请求

### 语法
```javascript
runAjax(params, callBack)
```

### 参数
| 参数名   | 类型     | 必填 | 说明       |
| -------- | -------- | ---- | ---------- |
| params   | Object   | 是   | 请求参数   |
| callBack | function | 是   | 回调配置   |

### 示例
```javascript
// 执行ajax请求
var ajaxParams = {
    url: "/api/users",
    method: "GET",
    data: {page: 1, size: 10}
};

runAjax(ajaxParams, function(response) {
    console.log("请求结果:", response);
    // 处理响应数据
});
```