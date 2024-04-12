#### 组件使用说明

```vue
1.在父元素上设置属性：data-selection-area
2.在子元素上设置属形:data-selection='元素的ID'
3.选中后的元素会在：selectedKey该集合中
<div data-selection-area>
	<ul>
        <li data-selection="id"></li>
    </ul>
</div>
```


