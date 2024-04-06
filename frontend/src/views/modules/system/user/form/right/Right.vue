<template>
  <div>
    <a-card title="权限分配">
      <a-tabs>
        <a-tab-pane key="role" tab="Role">
          <a-card :body-style="{ padding: 0 }" :bordered="false">
            <a-form-item :wrapper-col="{ span: 24 }" required name="roleIds">
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
                    <div class="checked" v-if="userForm.roleIds.includes(item.roleId)">
                      <CheckCircleFilled style="color: #19a119" />
                    </div>
                  </li>
                </ul>
                <a-empty v-else></a-empty>
              </div>
            </a-form-item>
          </a-card>
        </a-tab-pane>
        <a-tab-pane key="post" tab="Post">
          <a-card :body-style="{ padding: 0 }" :bordered="false">
            <a-form-item :wrapper-col="{ span: 24 }" required name="postIds">
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
                    <div class="checked" v-if="userForm.postIds.includes(item.postId)">
                      <CheckOutlined style="color: #19a119" />
                    </div>
                  </li>
                </ul>

                <a-empty v-else></a-empty>
              </div>
            </a-form-item>
          </a-card>
        </a-tab-pane>

        <a-tab-pane key="Department" tab="Department">
          <a-card
            :body-style="{ padding: 0, maxHeight: '550px', overflowY: 'auto' }"
            :bordered="false"
          >
            <a-form-item :wrapper-col="{ span: 24 }" class="mb-0">
              <Department :id="userForm.deptId" />
            </a-form-item>
          </a-card>
        </a-tab-pane>
      </a-tabs>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import type { SystemPost } from '@/api/modules/system/post/types';
import type { Role } from '@/api/modules/system/role/types';
import deptPng from '@/assets/system/dept.png';
import rolePng from '@/assets/system/role.png';
import Department from '@/views/components/department/Department.vue';
import type { CheckCircleFilled } from '@ant-design/icons-vue';
import { userForm, userPosts, userRoles } from '../data';

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
</script>

<style lang="scss" scoped>
.right-list {
  ul {
    display: flex;
    padding: 8px;
    gap: 8px;
    overflow-x: auto;
    flex-wrap: wrap;
  }
  li {
    text-align: center;
    cursor: pointer;
    width: fit-content;
    padding: 8px 12px;
    height: fit-content;
    max-width: 84px;
    flex: 1;
    border-radius: var(--radius);
    position: relative;
    border: 1px solid transparent;
    &:hover {
      background: #eee;
      border: 1px solid #ddd;
    }
    .title {
      white-space: nowrap;
    }
  }
  li.active {
    border: 1px solid #ddd;
  }
  .checked {
    position: absolute;
    top: 0;
    right: 0;
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
