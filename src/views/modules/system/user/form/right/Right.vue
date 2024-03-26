<template>
  <div>
    <a-card title="Role" :body-style="{ padding: 0 }">
      <a-form-item :wrapper-col="{ span: 24 }" class="mb-0" required name="roleIds">
        <div class="right-list">
          <ul v-if="userRoles.length > 0">
            <li
              v-for="(item, key) in userRoles"
              :key="key"
              :class="{ active: userForm.roleIds.includes(item.roleId) }"
              @click="selectRole(item)"
            >
              <img :src="rolePng" width="32" />
              <div class="text-12 title">
                {{ item.roleName }}
              </div>
            </li>
          </ul>
          <a-empty v-else></a-empty>
        </div>
      </a-form-item>
    </a-card>

    <a-card title="Post" :body-style="{ padding: 0 }" class="mt-8">
      <a-form-item :wrapper-col="{ span: 24 }" class="mb-0" required name="postIds">
        <div class="right-list post">
          <ul v-if="userPosts.length > 0">
            <li
              v-for="(item, key) in userPosts"
              :key="key"
              :class="{ active: userForm.postIds.includes(item.postId) }"
              @click="selectPost(item)"
            >
              <img :src="deptPng" width="32" />
              <div class="text-12 title">
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
      :body-style="{ padding: 0, height: '250px', overflowY: 'auto' }"
      class="mt-8"
    >
      <a-form-item :wrapper-col="{ span: 24 }" class="mb-0">
        <Department @select="select" :id="userForm.deptId" />
      </a-form-item>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import type { SystemPost } from '@/api/modules/system/post/types';
import type { Role } from '@/api/modules/system/role/types';
import deptPng from '@/assets/system/dept.png';
import rolePng from '@/assets/system/role.png';
import Department from '@/views/components/department/Department.vue';
import type { Key } from 'ant-design-vue/es/vc-tree/interface';
import { userForm, userPosts, userRoles } from '../data';
const dept = ref<number[]>([]);

const fullPath = ref<number[]>([]);
const check = (checked: Key[]) => {
  userForm.value.deptId = Number(checked[0]);
};
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

const select = () => {};
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
    flex-wrap: wrap;
  }
  li {
    text-align: center;
    cursor: pointer;
    width: fit-content;
    padding: 8px 12px;
    height: fit-content;
    max-width: 64px;
    &:hover {
      background: #eee;
    }
    .title {
      white-space: nowrap;
    }
  }
  li.active {
    background: white;
  }
}
.post {
  ul {
    overflow-x: auto;
    flex-wrap: wrap;
    li {
      flex: 1;
    }
  }
}
</style>
