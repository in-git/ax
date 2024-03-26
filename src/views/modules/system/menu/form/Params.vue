<template>
  <div>
    <a-divider></a-divider>
    <template v-if="menuForm.menuType === 'M'">
      <a-form-item label="Is frame" name="isFrame">
        <a-radio-group v-model:value="menuForm.isFrame" :options="isOptions"></a-radio-group>
      </a-form-item>
      <a-form-item :label="menuForm.isFrame === '0' ? 'Router' : 'Link'" name="path">
        <a-input v-model:value="menuForm.path"></a-input>
        <div class="text-999 text-12">
          <InfoCircleFilled />
          Address of the route that accesses the component
        </div>
      </a-form-item>
      <a-form-item label="Router query" name="query">
        <a-input v-model:value="menuForm.query"></a-input>
      </a-form-item>
      <a-form-item label="Allow cache" name="isCache">
        <a-switch
          :un-checked-value="'1'"
          :checked-value="'0'"
          v-model:checked="menuForm.isCache"
        ></a-switch>
        <div class="text-12 text-999">
          Whether the page content is cached and still valid when the route is switch
        </div>
      </a-form-item>
      <!--  -->
      <a-form-item label="Auth" name="perms">
        <a-input v-model:value="menuForm.perms"></a-input>
        <div class="text-999 text-12">
          <InfoCircleFilled />
          Only users with this permission can access the path
        </div>
      </a-form-item>
    </template>
    <template v-if="menuForm.menuType === 'C'">
      <a-form-item :label="menuForm.isFrame === '0' ? 'Router' : 'Link'" name="path">
        <a-input v-model:value="menuForm.path"></a-input>
        <div class="text-999 text-12">
          <InfoCircleFilled />
          Address of the route that accesses the component
        </div>
      </a-form-item>
      <a-form-item label="Is frame" name="isFrame">
        <a-radio-group v-model:value="menuForm.isFrame" :options="isOptions"></a-radio-group>
      </a-form-item>
    </template>
    <template v-if="menuForm.menuType === 'F'">
      <a-form-item label="Auth" name="perms">
        <a-input v-model:value="menuForm.perms"></a-input>
        <div class="text-999 text-12">
          <InfoCircleFilled />
          Only users with this permission can access the path
        </div>
      </a-form-item>
    </template>
  </div>
</template>

<script setup lang="ts">
import { isOptions } from '@/global/options/system';
import { InfoCircleFilled } from '@ant-design/icons-vue';
import { menuForm } from './data';
</script>

<style lang="scss" scoped></style>
