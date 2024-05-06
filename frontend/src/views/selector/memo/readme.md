## AX 文档说明

#### 备忘录说明

```
用于记录用户平时常用的信息，如常用密码，服务器IP等比较短的信息
可以快速填入到表单中
```



##### 第一步：导入组件

```
import MemoVue from '@/views/selector/memo/Memo.vue';
```

##### 第二步：引用

```vue
配合popover
 <a-popover title="选取值">
  <a-tooltip title="从备忘录中读取">
  <a-button type="ghost">
   选取值
    </a-button>
    </a-tooltip>
   <template #content>
//支持双向绑定
  <MemoVue v-model:value="form.value"></MemoVue>
 </template>
</a-popover>
```









