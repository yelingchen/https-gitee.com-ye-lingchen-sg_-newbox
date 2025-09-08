export const javascriptFunctions = {
    builtinFunctions: [
        {
            label: "getValueById",
            insertText: "getValueById(id)",
            detail: "通过ID获取控件value值",
            documentation: "根据传入的元素ID获取对应元素的value值。",
            params: [{ id: "节点id" }]
        },
        {
            label: "setValueById",
            insertText: "setValueById(id, value, text)",
            detail: "通过ID设置控件value值",
            documentation: "通过指定ID、值和可选文本设置元素的value属性。",
            params: [
                { id: "节点id" },
                { value: "值" },
                { text: "可选文本" }
            ]
        },
        {
            label: "valueIsNull",
            insertText: "valueIsNull(val, hint, title)",
            detail: "判空",
            documentation: "判断传入值是否为空。",
            params: [
                { val: "传入值" },
                { hint: "提示" },
                { title: "标题" }
            ]
        },
        {
            label: "setEnable",
            insertText: "setEnable(selector, status)",
            detail: "启用禁用控件",
            documentation: "根据选择器和状态启用或禁用控件。",
            params: [
                { selector: "选择器" },
                { status: "状态（true启用/false禁用）" }
            ]
        },
        {
            label: "getEnable",
            insertText: "getEnable(selector)",
            detail: "查询控件状态",
            documentation: "根据选择器查询控件的启用状态。",
            params: [{ selector: "选择器" }],
            returns: "true/false"
        },
        {
            label: "setRadioVal",
            insertText: "setRadioVal(name, val)",
            detail: "通过name给radio赋值",
            documentation: "根据radio控件的name和值设置radio控件的值。",
            params: [
                { name: "radio控件的name" },
                { val: "值" }
            ]
        },
        {
            label: "getRadioVal",
            insertText: "getRadioVal(name)",
            detail: "通过name获取radio值",
            documentation: "根据radio控件的name获取其值。",
            params: [{ name: "radio控件的name" }]
        },
        {
            label: "getCheckBoxValList",
            insertText: "getCheckBoxValList(name)",
            detail: "获取checkbox值返回list",
            documentation: "根据checkbox控件的name获取其值列表。",
            params: [{ name: "checkbox控件的name" }]
        },
        {
            label: "getCheckBoxValStr",
            insertText: "getCheckBoxValStr(name, separator)",
            detail: "获取checkbox值返回字符串",
            documentation: "根据checkbox控件的name和分隔符获取其值字符串。",
            params: [
                { name: "checkbox控件的name" },
                { separator: "分隔符" }
            ]
        },
        {
            label: "setCheckBoxVal",
            insertText: "setCheckBoxVal(name, list)",
            detail: "checkbox赋值(list)模式",
            documentation: "根据checkbox控件的name和值列表设置checkbox控件的值。",
            params: [
                { name: "checkbox控件的name" },
                { list: "值列表" }
            ]
        },
        {
            label: "setCheckBoxValStr",
            insertText: "setCheckBoxValStr(name, str, separator)",
            detail: "checkbox赋值字符串模式",
            documentation: "根据checkbox控件的name、值字符串和分隔符设置checkbox控件的值。",
            params: [
                { name: "checkbox控件的name" },
                { str: "值字符串" },
                { separator: "分隔符" }
            ]
        },
        {
            label: "setCheckChecked",
            insertText: "setCheckChecked(selector, status)",
            detail: "单个checkbox操作",
            documentation: "根据选择器和状态设置单个checkbox的勾选状态。",
            params: [
                { selector: "选择器" },
                { status: "状态（true勾选/false取消勾选）" }
            ]
        },
        {
            label: "getCheckChecked",
            insertText: "getCheckChecked(selector, mode)",
            detail: "判断单个checkbox是否勾选",
            documentation: "根据选择器和模式判断单个checkbox是否被勾选。",
            params: [
                { selector: "选择器" },
                { mode: "模式" }
            ]
        },
        {
            label: "selectOptions",
            insertText: "selectOptions(selector, list, value, key_param, val_param)",
            detail: "select渲染option",
            documentation: "根据选择器、列表、选中值和其他参数渲染select控件的选项。",
            params: [
                { selector: "选择器" },
                { list: "列表" },
                { value: "选中值" },
                { key_param: "键参数" },
                { val_param: "值参数" }
            ]
        },
        {
            label: "getSelectData",
            insertText: "getSelectData(selector)",
            detail: "获取select数据",
            documentation: "根据选择器获取select控件的数据。",
            params: [{ selector: "选择器" }]
        },
        {
            label: "getSelectText",
            insertText: "getSelectText(selector)",
            detail: "获取select文字",
            documentation: "根据选择器获取select控件的显示文字。",
            params: [{ selector: "选择器" }]
        },
        {
            label: "getDateVal",
            insertText: "getDateVal(selector, fmt)",
            detail: "日期时间-取值",
            documentation: "根据选择器和格式获取日期时间值。",
            params: [
                { selector: "选择器" },
                { fmt: "格式" }
            ]
        },
        {
            label: "setDateVal",
            insertText: "setDateVal(selector, fmt)",
            detail: "日期时间-赋值",
            documentation: "根据选择器和格式设置日期时间值。",
            params: [
                { selector: "选择器" },
                { fmt: "格式" }
            ]
        },
        {
            label: "formatDate",
            insertText: "formatDate(date, fmt)",
            detail: "日期格式转换",
            documentation: "根据日期对象和格式转换日期格式。",
            params: [
                { date: "日期对象" },
                { fmt: "格式" }
            ]
        },
        {
            label: "setSelectTemp",
            insertText: "setSelectTemp(id, value, text, isClose)",
            detail: "设置弹窗控件的值",
            documentation: "根据弹窗控件id、值、文字和是否关闭弹窗设置弹窗控件的值。",
            params: [
                { id: "弹窗控件id" },
                { value: "值" },
                { text: "文字" },
                { isClose: "是否关闭弹窗" }
            ]
        },
        {
            label: "renderSelectTemp",
            insertText: "renderSelectTemp(id, params)",
            detail: "手动渲染弹窗控件",
            documentation: "根据弹窗控件id和参数手动渲染弹窗控件。",
            params: [
                { id: "弹窗控件id" },
                { params: "参数" }
            ]
        },
        {
            label: "clearSelectTemp",
            insertText: "clearSelectTemp(id)",
            detail: "清除弹窗内容",
            documentation: "根据弹窗控件id清除弹窗内容。",
            params: [{ id: "弹窗控件id" }]
        },
        {
            label: "closeSelectTemp",
            insertText: "closeSelectTemp(id)",
            detail: "手动关闭弹窗选择",
            documentation: "根据弹窗控件id手动关闭弹窗选择。",
            params: [{ id: "弹窗控件id" }]
        },
        {
            label: "getSelectTempKey",
            insertText: "getSelectTempKey(id)",
            detail: "获取弹窗选择的key(文字)",
            documentation: "根据弹窗控件id获取弹窗选择的key（文字）。",
            params: [{ id: "弹窗控件id" }]
        },
        {
            label: "showWin",
            insertText: "showWin()",
            detail: "子窗口调用隐藏窗口恢复显示",
            documentation: "子窗口调用此方法以恢复隐藏窗口的显示。"
        },
        {
            label: "hideWin",
            insertText: "hideWin()",
            detail: "子窗口调用隐藏窗口",
            documentation: "子窗口调用此方法以隐藏窗口。"
        },
        {
            label: "loadTableData",
            insertText: "loadTableData(table_id, param, sort_order)",
            detail: "手动加载表格数据",
            documentation: "手动加载指定表格的数据。",
            params: [
                { table_id: "表格id" },
                { param: "参数" },
                { sort_order: "排序规则" }
            ]
        },
        {
            label: "tableSearch",
            insertText: "tableSearch(table_id, search_form_list)",
            detail: "执行搜索",
            documentation: "根据表格id和表单选择器列表对表格执行搜索操作。",
            params: [
                { table_id: "表格id" },
                { search_form_list: "表单选择器列表" }
            ]
        },
        {
            label: "resetSearch",
            insertText: "resetSearch(table_id, search_form_list)",
            detail: "清除搜索",
            documentation: "根据表格id和表单选择器列表清除表格的搜索条件。",
            params: [
                { table_id: "表格id" },
                { search_form_list: "表单选择器列表" }
            ]
        },
        {
            label: "appendTableBody",
            insertText: "appendTableBody(table_id, list)",
            detail: "手动添加表格行（原来表格的内容仍保留）",
            documentation: "向指定表格添加新的行数据，原来的表格内容不会被清除。",
            params: [
                { table_id: "表格id" },
                { list: "表格的行数据列表" }
            ]
        },
        {
            label: "replaceTableBody",
            insertText: "replaceTableBody(table_id, list)",
            detail: "替换表格行（原来表格的内容被替换）",
            documentation: "用新的行数据替换指定表格的所有内容。",
            params: [
                { table_id: "表格id" },
                { list: "表格的行数据列表" },
                { params: "参数 - 是否分页:pager:true/false" }
            ]
        },
        {
            label: "table_controls_val",
            insertText: "table_controls_val(table_id)",
            detail: "获取表格里面控件的值",
            documentation: "获取指定表格内控件的值。",
            params: [{ table_id: "表格id" }]
        },
        {
            label: "table_remove_tr",
            insertText: "table_remove_tr(table_id, index, bnt_ts, remove_all)",
            detail: "移除表格行",
            documentation: "根据指定条件移除表格行。",
            params: [
                { table_id: "表格id" },
                { index: "行号" },
                { bnt_ts: "按钮对象的this" },
                { remove_all: "是否移除所有" }
            ]
        },
        {
            label: "formatTable",
            insertText: "formatTable(table_id, data_list)",
            detail: "表格格式化（表格渲染会自动调用这个要自己写方法）",
            documentation: "用于格式化表格数据。",
            params: [
                { table_id: "表格id" },
                { data_list: "数据列表" }
            ]
        },
        {
            label: "formatTfoot",
            insertText: "formatTfoot(table_id, footer_obj)",
            detail: "表尾格式化",
            documentation: "用于格式化表格表尾数据。",
            params: [
                { table_id: "表格id" },
                { footer_obj: "表尾对象" }
            ]
        },
        {
            label: "add_original_params",
            insertText: "add_original_params(table_id, params)",
            detail: "当前页面表格查询强制卡条件",
            documentation: "为当前页面指定表格的查询强制添加条件。",
            params: [
                { table_id: "表格id" },
                { params: "参数" }
            ]
        },
        {
            label: "remove_original_params",
            insertText: "remove_original_params(table_id)",
            detail: "当前页面表格查询解除强制卡条件",
            documentation: "解除当前页面指定表格查询的强制卡条件。",
            params: [{ table_id: "表格id" }]
        },
        {
            label: "get_table_data",
            insertText: "get_table_data(table_id)",
            detail: "获取表格的指令数据",
            documentation: "获取指定表格的指令数据。",
            params: [{ table_id: "表格id" }]
        },
        {
            label: "table_one_data",
            insertText: "table_one_data(table_id, index)",
            detail: "获取表格的指令数据单个",
            documentation: "获取指定表格中指定行的指令数据。",
            params: [
                { table_id: "表格id" },
                { index: "行号" }
            ]
        },
        {
            label: "set_table_callback",
            insertText: "set_table_callback(table_id, callback)",
            detail: "设置表格数据加载后回调函数",
            documentation: "为指定表格设置数据加载后的回调函数。",
            params: [
                { table_id: "表格id" },
                { callback: "回调函数" }
            ]
        },
        {
            label: "get_table_callback",
            insertText: "get_table_callback(table_id)",
            detail: "获取表格回调函数",
            documentation: "获取指定表格的回调函数。",
            params: [{ table_id: "表格id" }]
        },
        {
            label: "remove_table_callback",
            insertText: "remove_table_callback(table_id)",
            detail: "清除表格回调函数",
            documentation: "清除指定表格的回调函数。",
            params: [{ table_id: "表格id" }]
        },
        {
            label: "tableIsEdit",
            insertText: "tableIsEdit(table_id)",
            detail: "判断表格是否被编辑过",
            documentation: "判断指定表格是否被编辑过。",
            params: [{ table_id: "表格id" }]
        },
        {
            label: "table_controls_edit",
            insertText: "table_controls_edit(table_id, index, edit_data)",
            detail: "修改表格内的表单控件",
            documentation: "修改指定表格内指定行的表单控件值。",
            params: [
                { table_id: "表格id" },
                { index: "行号" },
                { edit_data: "修改的数据" }
            ]
        },
        {
            label: "getTableSelectedIndex",
            insertText: "getTableSelectedIndex(table_id)",
            detail: "获取表格选中的行号",
            documentation: "获取指定表格中选中行的行号。",
            params: [{ table_id: "表格id" }]
        },
        {
            label: "renderPageBox",
            insertText: "renderPageBox(id, params)",
            detail: "重新渲染内嵌页面",
            documentation: "根据指定参数重新渲染内嵌页面。",
            params: [
                { id: "页面框id" },
                { params: "参数" }
            ]
        },
        {
            label: "changePageBox",
            insertText: "changePageBox(id, pageid, url)",
            detail: "修改内嵌页面",
            documentation: "修改指定内嵌页面的内容。",
            params: [
                { id: "内嵌页面id" },
                { pageid: "新页面id" },
                { url: "新页面url" }
            ]
        },
        {
            label: "findIframeObj",
            insertText: "findIframeObj(id, selector)",
            detail: "获取子控件对象",
            documentation: "在内嵌页面中根据选择器查找子控件对象。",
            params: [
                { id: "内嵌页面id" },
                { selector: "选择器" }
            ]
        },
        {
            label: "getIframePage",
            insertText: "getIframePage(id)",
            detail: "获取内嵌页面",
            documentation: "获取指定内嵌页面的对象。",
            params: [{ id: "内嵌页面id" }]
        },
        {
            label: "pageBoxAutoHeight",
            insertText: "pageBoxAutoHeight()",
            detail: "自动调整iframe高度（子页面调用）",
            documentation: "在子页面中调用此方法可自动调整iframe的高度。"
        },
        {
            label: "renderTabBox",
            insertText: "renderTabBox(id, list, params)",
            detail: "渲染页签",
            documentation: "根据给定参数渲染页签。",
            params: [
                { id: "页签id" },
                { list: "页签配置信息数组" },
                { params: "页签样式等参数" }
            ]
        },
        {
            label: "addOneTab",
            insertText: "addOneTab(id, params)",
            detail: "添加页签",
            documentation: "向指定页签容器添加一个新页签。",
            params: [
                { id: "页签id" },
                { params: "新页签配置信息" }
            ]
        },
        {
            label: "displayOneTab",
            insertText: "displayOneTab(id, code, index, mode)",
            detail: "页签显示操作",
            documentation: "用于显示、隐藏或移除页签。",
            params: [
                { id: "页签容器id" },
                { code: "页签编码" },
                { index: "页签索引" },
                { mode: "操作模式" }
            ]
        },
        {
            label: "findTabBoxObj",
            insertText: "findTabBoxObj(id, selector, code, index)",
            detail: "获取页签里面的对象",
            documentation: "在内嵌页签中根据选择器查找对象。",
            params: [
                { id: "页签容器id" },
                { selector: "选择器" },
                { code: "页签编码" },
                { index: "页签索引" }
            ]
        },
        {
            label: "getTabBoxPage",
            insertText: "getTabBoxPage(id, code, index)",
            detail: "获取内嵌页面",
            documentation: "获取指定页签内的内嵌页面对象。",
            params: [
                { id: "页签容器id" },
                { code: "页签编码" },
                { index: "页签索引" }
            ]
        },
        {
            label: "setSrcById",
            insertText: "setSrcById(id, src)",
            detail: "通过id改变图片",
            documentation: "根据图片控件id和新的图片地址更换图片。",
            params: [
                { id: "图片控件id" },
                { src: "新的图片地址" }
            ]
        },
        {
            label: "setSrcByName",
            insertText: "setSrcByName(name, src)",
            detail: "通过name改变图片",
            documentation: "依据图片控件的name和指定的图片地址更换图片。",
            params: [
                { name: "图片控件的name" },
                { src: "指定的图片地址" }
            ]
        },
        {
            label: "openImg",
            insertText: "openImg(src, params)",
            detail: "图片浏览",
            documentation: "用于打开图片浏览弹窗，并可根据传入的参数配置弹窗的相关属性。",
            params: [
                { src: "图片地址" },
                { params: "附加参数" }
            ]
        },
        {
            label: "selectFile",
            insertText: "selectFile(uploadParam, cb)",
            detail: "选择文件",
            documentation: "用于弹出文件选择框选择文件，并在选择后执行回调函数返回文件相关信息。",
            params: [
                { uploadParam: "上传参数" },
                { cb: "回调函数" }
            ]
        },
        {
            label: "ajaxUpload",
            insertText: "ajaxUpload(file_Object, param, callback)",
            detail: "手动上传文件",
            documentation: "通过AJAX方式手动上传文件。",
            params: [
                { file_Object: "文件对象" },
                { param: "上传参数" },
                { callback: "回调函数" }
            ]
        },
        {
            label: "uploadFile",
            insertText: "uploadFile(params, uploadCb, infoCb)",
            detail: "自动上传文件",
            documentation: "自动执行文件上传操作，并可根据回调函数处理上传结果以及获取文件信息。",
            params: [
                { params: "上传参数" },
                { uploadCb: "上传后回调函数" },
                { infoCb: "文件信息回调函数" }
            ]
        },
        {
            label: "getUploadList",
            insertText: "getUploadList(uploadId)",
            detail: "获取上传列表（配合批量上传控件使用）",
            documentation: "获取指定批量上传控件的上传文件列表。",
            params: [{ uploadId: "批量上传控件的ID" }]
        },
        {
            label: "showPictureFile",
            insertText: "showPictureFile(file, cb)",
            detail: "前端预览图片",
            documentation: "将上传文件对象转换为Base64格式用于前端预览图片。",
            params: [
                { file: "上传文件对象" },
                { cb: "回调函数" }
            ]
        },
        {
            label: "formatFileSize",
            insertText: "formatFileSize(fileSize)",
            detail: "文件大小格式化",
            documentation: "将传入的文件大小格式化为带单位的字符串。",
            params: [{ fileSize: "文件大小" }]
        },
        {
            label: "uploadExcel",
            insertText: "uploadExcel(callback)",
            detail: "弹窗上传并解析Excel（格式：xlsx）",
            documentation: "弹出文件选择框用于上传Excel文件，并在上传后执行回调函数解析Excel数据。",
            params: [{ callback: "解析excel回调函数" }]
        },
        {
            label: "selectFileNoUpload",
            insertText: "selectFile(params, callback)",
            detail: "选择文件，不上传",
            documentation: "弹出文件选择框选择文件，并通过回调函数返回文件相关信息，但不执行上传操作。",
            params: [
                { params: "上传参数" },
                { callback: "回调函数" }
            ]
        },
        {
            label: "renderTreeMenu",
            insertText: "renderTreeMenu(id, datas, params)",
            detail: "渲染树状菜单",
            documentation: "根据传入的参数对树状菜单进行渲染。",
            params: [
                { id: "控件id" },
                { datas: "树状菜单的数据" },
                { params: "配置参数" }
            ]
        },
        {
            label: "get_tree_data",
            insertText: "get_tree_data(id)",
            detail: "获取树状菜单渲染的数据",
            documentation: "获取指定控件id对应的已渲染树状菜单的数据。",
            params: [{ id: "控件id" }]
        },
        {
            label: "runAjax",
            insertText: "runAjax(params, callBack)",
            detail: "执行ajax请求",
            documentation: "执行一个AJAX请求。",
            params: [
                { params: "请求参数" },
                { callBack: "回调配置" }
            ]
        },
        {
            label: "runCommand",
            insertText: "runCommand(page_id, command_code, exe_param, cmd_param, ajax_params, callBack)",
            detail: "调用执行指令（单个）",
            documentation: "调用执行单个指令。",
            params: [
                { page_id: "页面id" },
                { command_code: "指令编码" },
                { exe_param: "入参" },
                { cmd_param: "指令参数" },
                { ajax_params: "ajax参数" },
                { callBack: "回调方法" }
            ]
        },
        {
            label: "runCommandOne",
            insertText: "runCommandOne(page_id, command_code, exe_param, cmd_param, ajax_params, callBack)",
            detail: "调用执行指令（单个）",
            documentation: "调用执行单个指令。",
            params: [
                { page_id: "页面id" },
                { command_code: "指令编码" },
                { exe_param: "入参" },
                { cmd_param: "指令参数" },
                { ajax_params: "ajax参数" },
                { callBack: "回调方法" }
            ]
        },
        {
            label: "runSet",
            insertText: "runSet(command_list, ajax_params, callBack)",
            detail: "调用执行指令（集合）",
            documentation: "调用执行指令集合。",
            params: [
                { command_list: "指令集合" },
                { ajax_params: "ajax参数" },
                { callBack: "回调方法" }
            ]
        },
        // 通过id获取html
        {
            label: "getHtmlById",
            insertText: "getHtmlById(id)",
            detail: "通过id获取html",
            documentation: "根据节点id获取节点的html。",
            params: [
                { id: "节点id" },
            ],
            returns: "节点的html"
        },

        // 通过id设置html
        {
            label: "setHtmlById",
            insertText: "setHtmlById(id, html)",
            detail: "通过id设置html",
            documentation: "根据节点id设置节点的html值。",
            params: [
                { id: "节点id" },
                { html: "值" },
            ],
        },

        // 通过id替换html
        {
            label: "replaceHtmlById",
            insertText: "replaceHtmlById(id, html)",
            detail: "通过id替换html",
            documentation: "根据节点id替换节点的html值。",
            params: [
                { id: "节点id" },
                { html: "值" },
            ],
        },

        // 获取外部html
        {
            label: "getOuterHtml",
            insertText: "getOuterHtml(selector)",
            detail: "获取外部html",
            documentation: "根据选择器获取html。",
            params: [
                { selector: "选择器" },
            ],
            returns: "html"
        },

        // 通过全局id获取外部html
        {
            label: "getOuterHtmlByGlobalId",
            insertText: "getOuterHtmlByGlobalId(global_id)",
            detail: "通过全局id获取外部html",
            documentation: "根据全局id获取外部html。",
            params: [
                { global_id: "全局id" },
            ],
            returns: "外部html"
        },

        // 通过全局id获取内部html
        {
            label: "getHtmlByGlobalId",
            insertText: "getHtmlByGlobalId(global_id)",
            detail: "通过全局id获取内部html",
            documentation: "根据全局id获取内部html。",
            params: [
                { global_id: "全局id" },
            ],
            returns: "内部html"
        },

        // 通过全局ID修改内部html
        {
            label: "setHtmlByGlobalId",
            insertText: "setHtmlByGlobalId(global_id, html)",
            detail: "通过全局ID修改内部html",
            documentation: "根据全局id设置内部html值。",
            params: [
                { global_id: "全局id" },
                { html: "值" },
            ],
        },

        // 通过全局id替换html
        {
            label: "replaceHtmlByGlobalId",
            insertText: "replaceHtmlByGlobalId(global_id, html)",
            detail: "通过全局id替换html",
            documentation: "根据全局id替换html，连同节点自身也替换掉。",
            params: [
                { global_id: "全局id" },
                { html: "值" },
            ],
        },
        // 通过id修改css
        {
            label: "setCssById",
            insertText: "setCssById(id, css_key, css_val)",
            detail: "通过id修改css",
            documentation: "根据节点id修改css。",
            params: [
                { id: "节点id" },
                { css_key: "css的键" },
                { css_val: "css的值" },
            ],
        },

        // 通过全局id修改css
        {
            label: "setCssByGlobalId",
            insertText: "setCssByGlobalId(global_id, css_key, css_val)",
            detail: "通过全局id修改css",
            documentation: "根据全局id修改css。",
            params: [
                { global_id: "全局id" },
                { css_key: "css的键" },
                { css_val: "css的值" },
            ],
        },

        // 通过id添加class
        {
            label: "addClassById",
            insertText: "addClassById(id, clazz)",
            detail: "通过id添加class",
            documentation: "根据节点id添加class样式。",
            params: [
                { id: "节点id" },
                { clazz: "class样式" },
            ],
        },

        // 通过id移除class
        {
            label: "removeClassById",
            insertText: "removeClassById(id, clazz)",
            detail: "通过id移除class",
            documentation: "根据节点id移除class样式。",
            params: [
                { id: "节点id" },
                { clazz: "class样式" },
            ],
        },

        // 通过全局id添加class
        {
            label: "addClassByGlobalId",
            insertText: "addClassByGlobalId(global_id, clazz)",
            detail: "通过全局id添加class",
            documentation: "根据全局id添加class样式。",
            params: [
                { global_id: "全局id" },
                { clazz: "class样式" },
            ],
        },

        // 通过全局id移除class
        {
            label: "removeClassByGlobalId",
            insertText: "removeClassByGlobalId(global_id, clazz)",
            detail: "通过全局id移除class",
            documentation: "根据全局id移除class样式。",
            params: [
                { global_id: "全局id" },
                { clazz: "class样式" },
            ],
        },
        // json转自定义属性
        {
            label: "json_to_prop",
            insertText: "json_to_prop(json)",
            detail: "json转自定义属性",
            documentation: "将json对象转换为自定义属性。",
            params: [
                { json: "对象" },
            ],
        },

        // 获取自定义属性并转json
        {
            label: "prop_to_json",
            insertText: "prop_to_json(selector)",
            detail: "获取自定义属性并转json",
            documentation: "根据选择器获取属性value并转换为json。",
            params: [
                { selector: "选择器" },
            ],
        },

        // 通过id获取自定义属性并转json
        {
            label: "getPropJsonById",
            insertText: "getPropJsonById(id)",
            detail: "通过id获取自定义属性并转json",
            documentation: "根据节点id获取属性value并转换为json。",
            params: [
                { id: "节点id" },
            ],
        },

        // 通过全局id获取自定义属性并转json
        {
            label: "getPropJsonByGlobalId",
            insertText: "getPropJsonByGlobalId(global_id)",
            detail: "通过全局id获取自定义属性并转json",
            documentation: "根据全局id获取属性value并转换为json。",
            params: [
                { global_id: "全局id" },
            ],
        },

        // 通过json格式，设置自定义属性
        {
            label: "setPropByJson",
            insertText: "setPropByJson(selector, json)",
            detail: "通过json格式设置自定义属性",
            documentation: "根据选择器和json对象设置自定义属性。",
            params: [
                { selector: "选择器" },
                { json: "json对象" },
            ],
        },

        // 提取本系统特有的自定义属性
        {
            label: "sys_prop",
            insertText: "sys_prop(json, prop)",
            detail: "提取本系统特有的自定义属性",
            documentation: "从自定义属性json对象中提取系统属性。",
            params: [
                { json: "自定义属性json对象" },
                { prop: "sg-开头的系统属性" },
            ],
            returns: "系统属性值"
        },

        // 提取本系统自定义属性的label文本
        {
            label: "prop_label",
            insertText: "prop_label(json)",
            detail: "提取本系统自定义属性的label文本",
            documentation: "从自定义属性json对象中提取label文本。",
            params: [
                { json: "自定义属性json对象" },
            ],
            returns: "label文本"
        },

        // 通过id添加自定义属性
        {
            label: "addPropById",
            insertText: "addPropById(id, attr_key, attr_val)",
            detail: "通过id添加自定义属性",
            documentation: "根据节点id添加自定义属性。",
            params: [
                { id: "id" },
                { attr_key: "css的键" },
                { attr_val: "css的值" },
            ],
        },

        // 通过id移除自定义属性
        {
            label: "removePropById",
            insertText: "removePropById(id, attr_key)",
            detail: "通过id移除自定义属性",
            documentation: "根据节点id移除自定义属性。",
            params: [
                { id: "id" },
                { attr_key: "css的键" },
            ],
        },
        // 弹窗alert
        {
            label: "openAlert",
            insertText: "openAlert(content, title, callBack)",
            detail: "弹窗alert",
            documentation: "显示一个带有标题、内容和回调的警告框。",
            params: [
                { title: "标题" },
                { content: "内容" },
                { callBack: "点击确定后的回调方法" }
            ]
        },
        {
            "label": "message",
            "insertText": "message({message, type, position, duration, closeable})",
            "detail": "反馈提示弹框",
            "documentation": "用于在页面上显示不同类型的提示信息。",
            "params": [
                {
                    "message": "提示信息的内容"
                },
                {
                    "type": "提示类型，可选值为info、error、success、warning"
                },
                {
                    "position": "提示位置，可选值为left、center、right"
                },
                {
                    "duration": "提示持续时间，单位为毫秒；如果设置为-1，则提示信息不会自动消失"
                },
                {
                    "closeable": "是否显示关闭图标，可选值为true或false"
                }
            ]
        },

        // 页面弹窗插件
        {
            label: "openWin",
            insertText: "openWin(content, title, type, params)",
            detail: "页面弹窗插件",
            documentation: "打开一个页面弹窗，支持HTML和iframe。",
            params: [
                { title: "标题" },
                { content: "内容" },
                { type: "类型（0或1：html; 2：iframe）" },
                { params: "附加参数（宽度、高度等）" }
            ]
        },

        // 页面弹窗插件（顶层页面）
        {
            label: "openWinTop",
            insertText: "openWinTop(content, title, type, params)",
            detail: "页面弹窗插件（顶层页面）",
            documentation: "在顶层页面打开一个页面弹窗。",
            params: [
                { title: "标题" },
                { content: "内容" },
                { type: "类型（0或1：html; 2：iframe）" },
                { params: "附加参数（宽度、高度等）" }
            ]
        },

        // 确认框
        {
            label: "openConfirm",
            insertText: "openConfirm(content, title, yes_callBack, no_callBack)",
            detail: "确认框",
            documentation: "显示一个带有标题、内容和两个回调（确定和取消）的确认框。",
            params: [
                { content: "确认框内容" },
                { title: "标题" },
                { yes_callBack: "点击确定回调" },
                { no_callBack: "点击取消回调" }
            ]
        },

        // 关闭弹窗（外层调用，内层调用要加parent）
        {
            label: "closeWin",
            insertText: "closeWin(id, withOutCb)",
            detail: "关闭弹窗",
            documentation: "根据弹窗id关闭弹窗。",
            params: [
                { id: "弹出的id" },
                { withOutCb: "为true不执行关窗回调" }
            ]
        },

        // 子页面关闭当前弹窗（内层直接调用，无需加parent）
        {
            label: "closeWinThis",
            insertText: "closeWinThis(withOutCb)",
            detail: "子页面关闭当前弹窗",
            documentation: "子页面调用，关闭当前弹窗。",
            params: [
                { withOutCb: "为true不执行关窗回调" }
            ]
        },

        // 关闭所有弹窗（外层调用，内层调用要加parent）
        {
            label: "closeWinAll",
            insertText: "closeWinAll()",
            detail: "关闭所有弹窗",
            documentation: "关闭所有打开的弹窗。"
        },

        // 图片弹窗浏览
        {
            label: "openImg",
            insertText: "openImg(src, params)",
            detail: "图片弹窗浏览",
            documentation: "打开一个图片浏览弹窗。",
            params: [
                { src: "图片地址" },
                { params: "附加参数" }
            ]
        },

        // 内层页面获取弹窗id
        {
            label: "winIdThis",
            insertText: "winIdThis()",
            detail: "内层页面获取弹窗id",
            documentation: "获取当前内层页面的弹窗id。"
        },

        // 子窗口隐藏窗口恢复显示
        {
            label: "showWin",
            insertText: "showWin()",
            detail: "子窗口隐藏窗口恢复显示",
            documentation: "子窗口调用，隐藏窗口恢复显示。"
        },

        // 子窗口隐藏窗口
        {
            label: "hideWin",
            insertText: "hideWin()",
            detail: "子窗口隐藏窗口",
            documentation: "子窗口调用，隐藏窗口。"
        },
        // 打开新页签
        {
            label: "openPage",
            insertText: "openPage(url, param)",
            detail: "打开新页签",
            documentation: "打开一个新的页面页签。",
            params: [
                { url: "pageid或完整的网址" },
                { param: "参数" }
            ]
        },

        // 当前页面跳转
        {
            label: "jumpPage",
            insertText: "jumpPage(pageid, url)",
            detail: "当前页面跳转",
            documentation: "在当前页面进行跳转。",
            params: [
                { pageid: "页面id（填入back为后退）" },
                { url: "地址" }
            ]
        },

        // 获取所有打开的页签
        {
            label: "getPages",
            insertText: "getPages(title, pageid)",
            detail: "获取所有打开的页签",
            documentation: "获取所有打开的页面页签。",
            params: [
                { title: "过滤页面名称" },
                { pageid: "过滤页面id" }
            ],
            returns: "[{\"title\":\"标题\",\"pageid\":123,\"page\":obj}]"
        },
        // 发送消息
        {
            label: "sendmsg",
            insertText: "sendmsg(obj, title, pageid)",
            detail: "发送消息",
            documentation: "向其他页面发送消息。",
            params: [
                { obj: "要传送的对象" },
                { title: "页面名称" },
                { pageid: "页面id" }
            ]
        },

        // 接收消息
        {
            label: "receivemsg",
            insertText: "receivemsg(obj)",
            detail: "接收消息",
            documentation: "接收来自其他页面的消息。",
            params: [
                { obj: "接收的消息" }
            ]
        },
        // 表格按键事件
        {
            label: "addTableKeyEvent",
            insertText: "addTableKeyEvent(table_id, callback)",
            detail: "表格按键事件",
            documentation: "为表格添加按键事件。",
            params: [
                { table_id: "表格控件id" },
                { callback: "按回车键后的回调方法" }
            ],
        },

        // 按键事件
        {
            label: "keyEvents",
            insertText: "keyEvents(func)",
            detail: "按键事件",
            documentation: "处理按键事件。",
            params: [
                { func: "按键功能function(){}" }
            ],
        },
        {
            label: "jumpError",
            insertText: "jumpError(content, title)",
            detail: "跳转错误页面",
            documentation: "跳转到错误页面并显示指定的内容和标题。",
            params: [
                { content: "内容" },
                { title: "标题" }
            ],
        }
    ]
};



