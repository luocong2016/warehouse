## Pagination
属性 | 说明 | 类型 | 默认值
--- | --- | --- | ---
local| i18n | Object | (zh_CN)
model | 形态 | enum('button', 'number', 'pointer')  | 'button'
current | 当前页码 | Number | 1
total | 数据总数 | Number | 0
simple | 是否隐藏数字 | Boolean | false
disabled | 禁用状态 | Boolean | false
onChange | change事件回调函数 | (e: Object): void | -

## local
属性 | 说明 
--- | --- 
prevText | 上一页
nextText | 下一页