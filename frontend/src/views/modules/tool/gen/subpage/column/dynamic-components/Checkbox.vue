<template>
  <div>
    <a-checkbox v-model:checked="checked" @change="submit"></a-checkbox>
  </div>
</template>

<script setup lang="ts">
const checked = ref(false);

const emit = defineEmits(['update:modelValue']);
/**
 * @description:
 * 布尔值和字符串1,0互相转换
 * 无其他组件复用
 */
const props = defineProps<{
  modelValue: string | number | null;
}>();

/**
 * @description:
 * 未选择 false:0
 * 已选择 true:1
 */
watch(
  props,
  () => {
    if (!props.modelValue) {
      checked.value = false;
    } else {
      checked.value = props.modelValue.toString() === '1';
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

const submit = () => {
  emit('update:modelValue', checked.value ? '1' : '0');
};
</script>

<style lang="scss" scoped></style>
