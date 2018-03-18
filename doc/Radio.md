## Radio
属性 | 说明 | 类型 | 默认值
--- | --- | --- | ---
type | 勾选的样式 | enum('none', 'circle') | 'none'
defaultChecked | 初始是否选中 | Boolean | -
disabled | 禁用状态 | Boolean | false
onChange | change 事件回调 | （e: Object） => void | -

## Radio.Item
> List.Item 对 Radio进行封装
属性 | 说明 | 类型 | 默认值
--- | --- | --- | ---
extra | 固定<Radio /> | - | -

属性 | 说明 | 类型 | 默认值
--- | --- | --- | ---
arrow | 箭头方向,empty对应domNode, 但不显示 | enum('horizontal', 'up', 'down', 'empty') | -
align | 子元素垂直对齐 | enum('top', 'middle', 'bottom') | 'middle'
thumb | 缩略图(当string,则作为img src) | String/ReactNode | -
multipleLine | 多行 | Boolean | false
wrap | 是否换行，默认超出隐藏 | Boolean | false
iconSize | 右侧图标大小 | Number | 16
iconColor | 右侧图标颜色 | String | '#ccc'
onClick | 点击回调（onPress）| (): void | -
onPressIn | 点击item时触发 |  (): void | -
onPressOut | 移出或松开item触发 | (): void | -