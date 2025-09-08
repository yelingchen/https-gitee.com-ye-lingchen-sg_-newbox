# Excel处理

## uploadExcel(callback)

弹窗上传并解析Excel（格式：xlsx）

### 语法
```javascript
uploadExcel(callback)
```

### 参数
| 参数名   | 类型     | 必填 | 说明             |
| -------- | -------- | ---- | ---------------- |
| callback | function | 是   | 解析excel回调函数 |

### 示例
```javascript
// 上传并解析Excel文件
uploadExcel(function(excelData) {
    console.log("Excel数据:", excelData);
    // 处理解析后的Excel数据
    processData(excelData);
});
```

---

## selectFileNoUpload(params, callback)

选择文件，不上传

### 语法
```javascript
selectFile(params, callback)
```

### 参数
| 参数名   | 类型     | 必填 | 说明       |
| -------- | -------- | ---- | ---------- |
| params   | Object   | 是   | 上传参数   |
| callback | function | 是   | 回调函数   |

### 示例
```javascript
// 选择文件但不上传
var selectParams = {
    accept: ".xlsx,.xls"
};
selectFileNoUpload(selectParams, function(fileInfo) {
    console.log("选择的Excel文件:", fileInfo);
    // 可以在这里进行其他处理
});
```