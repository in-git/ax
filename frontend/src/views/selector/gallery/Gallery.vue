<template>
  <div>
    <a-card title="图像选择">
      <template #extra>
        <a-button type="primary" @click="confirm">确定</a-button>
      </template>
      <ul :class="[type]" v-if="galleryData.data.length > 0">
        <li
          v-for="item in galleryData.data"
          @click="selectItem(item)"
          :class="[{ active: selectedSet.includes(item.imageUrl) }]"
        >
          <img :src="getHost(`profile/${type}/${item.imageUrl}`)" alt="" />
        </li>
      </ul>
      <a-empty v-else />
    </a-card>
  </div>
</template>

<script setup lang="ts">
import type { IQuery, TableConfig } from '@/api/config/types';
import { fetchGalleryList } from '@/api/modules/system/gallery/gallery';
import type { GalleryType, SystemGallery } from '@/api/modules/system/gallery/types';
import { getHost } from '@/store/system/utils';

const props = withDefaults(
  defineProps<{
    limit: number;
    value: string;
    type: GalleryType;
  }>(),
  {
    limit: 1,
    value: '',
    type: 'avatar',
  },
);

const emit = defineEmits(['update:value']);
const selectedSet = ref<string[]>([]);

const query = ref<IQuery<{ type: GalleryType }>>({
  pageNum: 1,
  pageSize: 20,
  total: 0,
  type: 'wallpaper',
});
const galleryData = ref<TableConfig<SystemGallery>>({
  rowKey: 'galleryId',
  data: [],
  loading: false,
  moduleName: '',
});
const selectItem = (item: SystemGallery) => {
  if (props.limit <= selectedSet.value.length) {
    selectedSet.value.shift();
  }
  selectedSet.value.push(item.imageUrl);
};

const confirm = () => {
  if (props.limit === 1) {
    emit('update:value', selectedSet.value[0]);
    return;
  }
  emit('update:value', selectedSet.value);
};

const getData = async () => {
  const { data } = await fetchGalleryList(query.value);
  galleryData.value.data = data.rows;
  query.value.total = data.total;
};

onMounted(() => {
  query.value.type = props.type;
  getData();
});
</script>

<style lang="scss" scoped>
.sys-icon,
.avatar {
  grid-template-columns: repeat(auto-fit, minmax(64px, 1fr));
}
.wallpaper {
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}
ul {
  display: grid;
  gap: 8px;
  li {
    height: 80px;
    border: 1px solid transparent;
    padding: 4px;
    border-radius: var(--radius);
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
