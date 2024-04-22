<template>
  <div class="icon-selector">
    <a-tabs>
      <a-tab-pane key="image" tab="自定义图标" class="icon-container">
        <ul>
          <li
            v-for="(item, key) in icons"
            :key="key"
            @click="selectItem(item, 'sys-image')"
            :class="{ active: item === active }"
          >
            <img :src="host + item" :alt="item" width="32" />
          </li>
        </ul>
      </a-tab-pane>
      <a-tab-pane key="icon" tab="SVG图标" class="icon-container">
        <ul>
          <li
            v-for="item in Object.values(IconList).slice(0, 780)"
            :class="{ active: item.name === active }"
            @click="selectItem(item.name, 'sys-icon')"
          >
            <template v-if="item.name !== 'create'">
              <component :is="item" class="text-20"></component>
            </template>
          </li>
        </ul>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { getSystemImages } from '@/api/utils/file';
import { getHost } from '@/store/system/utils';
import type { IconType } from '@/types/system';
import * as IconList from '@ant-design/icons-vue';

const host = getHost('profile/sys-icon/');
const icons = ref<string[]>([]);

const emit = defineEmits(['update:modelValue']);
const active = ref<string>('');
defineProps<{
  modelValue: string;
}>();
onMounted(async () => {
  const { data } = await getSystemImages('sys-icon');
  icons.value = data.data!;
});

const selectItem = (iconPath: string, type: IconType) => {
  emit('update:modelValue', `${type},${iconPath}`);
  active.value = iconPath;
};
</script>

<style lang="scss" scoped>
.icon-selector {
  width: 400px;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(48px, 1fr));
    li {
      width: 48px;
      height: 48px;
      display: flex;
      place-items: center;
      place-content: center;
      border-radius: var(--radius);
      &:hover {
        background-color: var(--color-primary-bg);
      }
    }
    li.active {
      border: 1px solid var(--primary);
      border-radius: var(--radius);
    }
  }
  :deep(.ant-tabs-tabpane) {
    height: 300px;
    overflow-y: auto;
  }
}
</style>
