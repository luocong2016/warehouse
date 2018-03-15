## Button
属性 | 说明 | 类型 | 默认值
--- | --- | --- | ---
type | enum('primary', 'warning', 'ghost') | String | -
size | enum('large', 'small') | String | 'large'
activeStyle | 点击反馈但自定义样式 | {}/false | {}
loading | 按钮载入状态 | Boolean | false
icon | 前置RNnode(必须loading: false) | ReactNode | -
onClick | onPress回调 | (e: Object): void | -
onPressIn | <TouchableHighlight /> onPressIn | (e: Object): void | -
onPressOut | <TouchableHighlight />  onPressOut | (e: Object): void | -
onShowUnderlay| <TouchableHighlight />  onShowUnderlay(底层颜色显示调用) | (e: Object): void | -
onHideUnderlay| <TouchableHighlight />  onHideUnderlay(底层颜色隐藏调用) | (e: Object): void | -