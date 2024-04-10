<template>
  <div>
    <a-card title="权限分配">
      <a-space class="w-100" direction="vertical" :size="20">
        <div class="flex justify-between">
          <div>角色分配</div>
          <a-select
            v-model:value="userForm.roleIds"
            style="width: 200px"
            :field-names="{
              label: 'roleName',
              value: 'roleId',
            }"
            allowClear
            mode="multiple"
            :options="userRoles"
          ></a-select>
        </div>

        <div class="flex justify-between">
          <div>岗位分配</div>
          <a-select
            v-model:value="userForm.postIds"
            style="width: 200px"
            allowClear
            mode="multiple"
            :field-names="{
              label: 'postName',
              value: 'postId',
            }"
            :options="userPosts"
          ></a-select>
        </div>

        <div class="flex justify-between">
          <div>部门分配</div>
          <a-directory-tree
            style="width: 200px"
            :tree-data="treeData"
            selectable
            v-model:selected-keys="selectedKeys"
            blockNode
            :default-expand-all="true"
            :fieldNames="{ children: 'children', title: 'label', key: 'id' }"
            @select="onSelect"
          ></a-directory-tree>
        </div>
      </a-space>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { deptTreeData, loadDeptTree } from '@/views/components/department/data';
import { userForm, userPosts, userRoles } from '../data';

const treeData = ref();

const selectedKeys = ref<number[]>([]);

const onSelect = () => {
  userForm.value.deptId = selectedKeys.value[0] || 0;
};
onMounted(async () => {
  await loadDeptTree();
  treeData.value = deptTreeData.value;
  selectedKeys.value.push(userForm.value.deptId);
});
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
