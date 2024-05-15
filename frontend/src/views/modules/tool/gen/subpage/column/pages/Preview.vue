<template>
  <a-card
    class="system__template"
    :body-style="{ height: '100%', overflow: 'hidden', paddingBottom: '0' }"
  >
    <a-tabs v-model:active-key="active" @change="onChange">
      <a-tab-pane
        v-for="item in Object.keys(data)"
        :tab="getFileInfo(item).name"
        :key="item"
      ></a-tab-pane>
    </a-tabs>
    <div class="code-content">
      <pre>
        <code class="line-numbers" v-html="html"></code>
      </pre>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import Prism from 'prismjs';
const active = ref(`vm/java/domain.java.vm`);

const code = ref();
const html = ref();
const props = defineProps<{
  data: GenCode;
}>();

const getFileInfo = (key: any) => {
  const [name, lang] = key.split('/').pop().split('.');
  return { name, lang };
};
const onChange = () => {
  const data: any = props.data;
  let { lang } = getFileInfo(active.value);
  if (lang === 'vm') {
    lang = 'sql';
  }
  html.value = Prism.highlight(data[active.value], Prism.languages[lang], lang);
};

watch(
  props,
  () => {
    Prism.highlightAll();
    onChange();
  },
  {
    deep: true,
    immediate: true,
  },
);

onMounted(() => {
  Prism.highlightAll();
});
</script>

<style lang="scss" scoped>
:deep(.ant-tabs-content-holder, .ant-tabs) {
  height: 100%;
  overflow-y: auto;
}
:deep(.ant-card-body) {
  padding-bottom: 0;
  overflow-y: auto;
  height: 100%;
}
.code-content {
  height: calc(100% - 48px);
  overflow-y: auto;
}
pre,
code {
  white-space: pre-wrap;
}
</style>
