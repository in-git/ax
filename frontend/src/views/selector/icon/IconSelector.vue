<template>
  <a-card title="选择图标" class="icon-selector" :body-style="{ paddingTop: '8px' }">
    <ul class="icon-selector">
      <li
        v-for="(item, key) in imageIcons"
        :key="key"
        @click="selectItem(item)"
        :class="{ active: item === active }"
        @dblclick="confirm"
      >
        <img :src="getStaticImage(item)" :alt="item" width="32" />
      </li>
    </ul>
    <div class="text-right">
      <a-button class="mt-8" type="primary" @click="confirm">确定</a-button>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { getStaticImage } from '@/api/utils/image';
import localforage from 'localforage';

const active = ref<string>();

const imageIcons = ref<string[]>([]);

const emit = defineEmits(['update:modelValue']);

defineProps<{
  modelValue: string | undefined;
}>();

const confirm = () => {
  emit('update:modelValue', `${active.value}`);
};
onMounted(async () => {
  const data = await localforage.getItem('images');
  if (data) {
    const { avatar } = JSON.parse(JSON.stringify(data));
    imageIcons.value = avatar;
  }
});
const selectItem = (iconPath: string) => {
  active.value = iconPath;
};
</script>

<style lang="scss" scoped>
ul.icon-selector {
  display: grid;
  width: 400px;
  height: 300px;
  gap: 8px;
  overflow-y: auto;
  grid-template-columns: repeat(auto-fit, minmax(48px, 1fr));
  place-items: start;
  grid-auto-rows: min-content;
  li {
    width: 48px;
    height: 48px;
    display: flex;
    place-items: center;
    place-content: center;
    border-radius: var(--radius);
    background-color: #f0f0f096;
    &:hover {
      background-color: var(--color-primary-bg);
    }
  }
  li.active {
    border: 1px solid var(--primary);
    border-radius: var(--radius);
  }
}

:deep(.ant-card-body) {
  min-height: 300px;
  width: 400px;
}
</style>
@/global/data/resource.list
