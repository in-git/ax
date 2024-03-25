<template>
  <div>
    <a-card title="Role" :body-style="{ padding: 0 }">
      <a-form-item :wrapper-col="{ span: 24 }" class="mb-0">
        <div class="right-list">
          <ul v-if="userRoles.length > 0">
            <li
              v-for="(item, key) in userRoles"
              :key="key"
              :class="{ active: userForm.roleIds.includes(item.roleId) }"
              @click="selectRole(item)"
            >
              <img :src="rolePng" width="32" />
              <div class="text-12">
                {{ item.roleName }}
              </div>
            </li>
          </ul>
          <a-empty v-else></a-empty>
        </div>
      </a-form-item>
    </a-card>

    <a-card title="Post" :body-style="{ padding: 0 }" class="mt-8">
      <a-form-item :wrapper-col="{ span: 24 }" class="mb-0">
        <div class="right-list post">
          <ul v-if="userPosts.length > 0">
            <li
              v-for="(item, key) in userPosts"
              :key="key"
              :class="{ active: userForm.postIds.includes(item.postId) }"
              @click="selectPost(item)"
            >
              <img :src="deptPng" width="32" />
              <div class="text-12">
                {{ item.postName }}
              </div>
            </li>
          </ul>

          <a-empty v-else></a-empty>
        </div>
      </a-form-item>
    </a-card>

    <a-card
      title="Department"
      :body-style="{ padding: 0, maxHeight: '160px', overflowY: 'auto' }"
      class="mt-8"
    >
      <a-form-item :wrapper-col="{ span: 24 }" class="mb-0">
        <a-tree
          :treeData="treeData"
          :field-names="{
            key: 'id',
            title: 'label',
          }"
          v-model:expanded-keys="fullPath"
          v-model:selected-keys="dept"
          :default-expand-all="true"
          @onCheck="check"
        ></a-tree>
      </a-form-item>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import type { SystemPost } from '@/api/modules/system/post/types';
import type { Role } from '@/api/modules/system/role/types';
import deptPng from '@/assets/system/dept.png';
import rolePng from '@/assets/system/role.png';
import type { Key } from 'ant-design-vue/es/vc-tree/interface';
import { deptTreeData, getFullPath } from '../../dept/data';
import { userForm, userPosts, userRoles } from '../data';
const dept = ref<number[]>([]);

const fullPath = ref<number[]>([]);
const check = (checked: Key[]) => {
  userForm.value.deptId = Number(checked[0]);
};
const treeData: any = deptTreeData;
const selectRole = (item: Role) => {
  if (userForm.value.roleIds.includes(item.roleId)) {
    userForm.value.roleIds = userForm.value.roleIds.filter(e => e !== item.roleId);
  } else {
    userForm.value.roleIds.push(item.roleId);
  }
};
const selectPost = (item: SystemPost) => {
  if (userForm.value.postIds.includes(item.postId)) {
    userForm.value.postIds = userForm.value.postIds.filter(e => e !== item.postId);
  } else {
    userForm.value.postIds.push(item.postId);
  }
};

watch(
  userForm,
  () => {
    dept.value = [userForm.value.deptId];
    fullPath.value = getFullPath(userForm.value.deptId, treeData.value, []) || [];
    console.log(fullPath.value);
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.right-list {
  background: #f5f5f5;
  ul {
    display: flex;
    padding: 8px;
    gap: 8px;
    overflow-x: auto;
    max-height: 160px;
  }
  li {
    text-align: center;
    cursor: pointer;
    width: fit-content;
    padding: 8px 12px;
    height: fit-content;
    flex-shrink: 0;
    &:hover {
      background: #eee;
    }
  }
  li.active {
    background: white;
  }
}
.post {
  ul {
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
