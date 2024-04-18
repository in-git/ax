<template>
  <div class="icon-selector">
    <a-tabs>
      <a-tab-pane key="image" tab="自定义图标" class="icon-container">
        <ul>
          <li
            v-for="(item, key) in icons"
            :key="key"
            @click="selectItem(item, 'image')"
            :class="{ active: item === active }"
          >
            <img :src="url + item" width="32" />
          </li>
        </ul>
      </a-tab-pane>
      <a-tab-pane key="icon" tab="SVG图标" class="icon-container">
        <ul>
          <li
            v-for="item in Object.values(IconList).slice(0, 780)"
            :class="{ active: item.name === active }"
            @click="selectItem(item.name, 'icon')"
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
import { geSystemIcons } from '@/api/modules/system/gallery/gallery';
import useSystemStore from '@/store/system';
import * as IconList from '@ant-design/icons-vue';
const store = useSystemStore();
const icons = ref<string[]>([]);
const url = store.$state.developer.baseURL + 'profile/icons/';

type IconType = 'icon' | 'image';
const emit = defineEmits(['update:modelValue']);
const active = ref<string>('');
defineProps<{
  modelValue: string;
}>();
onMounted(async () => {
  const { data } = await geSystemIcons();
  icons.value = data.data!;
});

const selectItem = (iconPath: string, type: IconType) => {
  emit('update:modelValue', {
    type,
    iconPath,
  });
  active.value = iconPath;
};
</script>

<style lang="scss" scoped>
.icon-selector {
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(48px, 1fr));
    li {
      width: 48px;
      height: 48px;
      display: flex;
      place-items: center;
      place-content: center;
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
