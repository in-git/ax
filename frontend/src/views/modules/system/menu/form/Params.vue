<template>
  <div>
    <!-- 菜单类型（M目录 C菜单 F按钮） -->

    <!-- 公共选项 -->
    <template v-if="menuForm.menuType === 'C' || menuForm.menuType === 'M'">
      <a-form-item label="是否为链接" name="isFrame">
        <a-radio-group v-model:value="menuForm.isFrame" :options="isOptions"></a-radio-group>
      </a-form-item>
      <a-form-item :label="menuForm.isFrame !== '0' ? '路径' : '链接'" name="path">
        <a-input v-model:value="menuForm.path"></a-input>
        <div class="system__subtitle text-12">
          <InfoCircleFilled />
          用户访问的路径
        </div>
      </a-form-item>
    </template>

    <template v-if="menuForm.menuType === 'C' || menuForm.menuType === 'F'">
      <!--  -->
      <a-form-item label="权限标识" name="perms">
        <a-input v-model:value="menuForm.perms"></a-input>
        <div class="system__subtitle text-12 mt-4">
          <InfoCircleFilled />
          对按钮级别的控制
        </div>
      </a-form-item>
    </template>

    <template v-if="menuForm.menuType === 'C'">
      <a-form-item label="组件路径" name="component">
        <a-input v-model:value="menuForm.component" placeholder="请输入组件路径"></a-input>
      </a-form-item>
      <a-form-item label="路由参数" name="query">
        <a-input v-model:value="menuForm.query" placeholder="请输入路由参数"></a-input>
      </a-form-item>
      <a-form-item label="允许缓存" name="isCache">
        <a-switch
          :un-checked-value="'1'"
          :checked-value="'0'"
          v-model:checked="menuForm.isCache"
        ></a-switch>
        <div class="text-12 system__subtitle">关闭窗口后是否缓存数据</div>
      </a-form-item>
    </template>
  </div>
</template>

<script setup lang="ts">
import { isOptions } from '@/global/options/system';
import { InfoCircleFilled } from '@ant-design/icons-vue';
import { menuForm } from '../data/form';
</script>

<style lang="scss" scoped></style>
