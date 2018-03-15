## Flex
属性 | 说明 | 类型 | 默认值
--- | --- | --- | ---
direction |  横、纵排列 | enum('row', 'column') | 'row'
wrap | 子元素的换行方式 | enum('nowrap', 'wrap') | 'nowrap'
justify | (flex属性：justify-content)子元素在主轴的对齐方式 | enum('start', 'end', 'center', 'between', 'around', 'evenly') | 'start'
align: | (flex属性: align-items)子元素在交叉轴的对齐方式 | enum('start', 'end', 'center', 'stretch') | 'center'

## Flex.Item
> 若包含: enum('onPress', 'onLongPress', 'onPressIn', ' onPressOut')属性将自动<TouchableWithoutFeedback /> 包裹

属性 | 说明 | 类型 | 默认值
--- | --- | --- | ---
flex | 子元素项目比| Number | 1
