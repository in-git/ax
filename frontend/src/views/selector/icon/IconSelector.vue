<template>
  <a-card
    title="选择图标"
    class="icon-selector"
    :body-style="{ paddingTop: '8px' }"
    :loading="loading"
  >
    <template #extra>
      <a-flex :gap="4">
        <a-radio-group v-model:value="currentType" @change="getImages">
          <a-radio-button v-for="item in typeList" :key="item.value" :value="item.value">
            {{ item.label }}
          </a-radio-button>
        </a-radio-group>
      </a-flex>
    </template>
    <ul class="icon-selector">
      <li
        v-for="(item, key) in icons"
        :key="key"
        @click="selectItem(item)"
        :class="{ active: item === active }"
      >
        <img :src="getStaticHost(`${currentType}/${item}`)" :alt="item" width="32" />
      </li>
    </ul>
    <div class="text-right">
      <a-button class="mt-8" type="primary" @click="confirm">确定</a-button>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { getSystemImages } from '@/api/utils/file';
import { getStaticHost } from '@/store/system/utils';
import type { IconType } from '@/types/system';
// 'image-icon', 'logos'

interface TypeList {
  label: string;
  value: IconType;
}

const typeList = ref<TypeList[]>([
  {
    label: '自定义',
    value: 'image-icon',
  },
]);
const currentType = ref<IconType>('image-icon');

const icons = ref<string[]>([]);

const emit = defineEmits(['update:modelValue']);

const loading = ref(false);
const active = ref<string>();

defineProps<{
  modelValue: string | null;
}>();

const getImages = async () => {
  loading.value = true;
  const { data } = await getSystemImages(currentType.value);
  if (data.data) {
    icons.value = data.data;
    loading.value = false;
  }
};

const confirm = () => {
  emit('update:modelValue', getStaticHost(`${currentType.value}/${active.value}`));
};
onMounted(async () => {
  getImages();
});

const selectType = () => {
  getImages();
};

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
