<template>
  <div>
    <a-card title="图像选择">
      <template #extra>
        <a-button type="primary" @click="confirm" :disabled="selectedSet.length === 0">
          确定
        </a-button>
      </template>
      <ul :class="[type]" v-if="galleryData.length > 0">
        <li
          v-for="item in galleryData"
          @click="selectItem(item)"
          :class="[{ active: selectedSet.includes(item) }]"
        >
          <img :src="getStaticImage(`${item}`)" />
        </li>
      </ul>
      <a-empty v-else />
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { getStaticImage } from '@/api/utils/image';
import { imageTypes } from '@/global/data/resource.list';
import type { IconType } from '@/types/system';
import localforage from 'localforage';

const props = withDefaults(
  defineProps<{
    limit?: number;
    modelValue: string;
    type: IconType;
  }>(),
  {
    limit: 1,
    value: '',
    type: 'avatar',
  },
);

const emit = defineEmits(['update:modelValue']);

const selectedSet = ref<string[]>([]);

const galleryData = ref<string[]>([]);

const selectItem = (item: string) => {
  if (props.limit <= selectedSet.value.length) {
    selectedSet.value.shift();
  }
  selectedSet.value.push(item);
};

const confirm = () => {
  if (props.limit === 1) {
    emit('update:modelValue', `${selectedSet.value[0]}`);
    return;
  }
  emit('update:modelValue', selectedSet.value);
};

watch(
  props,
  async () => {
    const data = await localforage.getItem('images');
    console.log(props.type);

    imageTypes.map(async e => {
      if (props.type === e) {
        galleryData.value = JSON.parse(JSON.stringify(data))[e];
        console.log(galleryData.value);
      }
      return e;
    });
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.image-icon,
.avatar {
  grid-template-columns: repeat(auto-fit, minmax(64px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(64px, 1fr));
  li {
    width: 100%;
    height: 100%;
    min-height: 64px;
  }
}
.wallpaper {
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  li {
    height: 100px;
  }
}
:deep(.ant-card-body) {
  max-height: 400px;
  min-width: 400px;
  overflow-y: auto;
}

ul {
  display: grid;
  gap: 8px;
  li {
    height: 80px;
    border: 1px solid transparent;
    padding: 4px;
    border-radius: var(--radius);
    background: #f8f8f89d;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
  }
  li.active {
    border: 1px solid var(--primary);
    background: var(--color-primary-bg);
  }
}
</style>
