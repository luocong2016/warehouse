## Accordion
属性 | 说明 | 类型 | 默认值
--- | --- | --- | ---
iconSize | 右侧图标大小 | Number | 16
iconColor | 右侧图标颜色 | String | '#ccc'
activeKey | 当前激活tab面板的key | Array/String | -
defaultActiveKey | 最初选中的面板key | String | -
onChange | 切换面板的回调 | (key: String): void | -

## Accordion.Panel
属性 | 说明 | 类型 | 默认值
--- | --- | --- | ---
key | 对应activeKey | String | -
header | 面板头内容 | ReactNode/String | -