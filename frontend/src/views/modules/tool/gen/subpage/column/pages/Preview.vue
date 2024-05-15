<template>
  <a-card class="system__template">
    <a-tabs
      size="small"
      v-model:active-key="active"
      @change="onChange"
      tabPosition="left"
      class="h-100"
    >
      <a-tab-pane
        v-for="item in Object.keys(data)"
        :tab="getFileInfo(item).name"
        :key="item"
      ></a-tab-pane>
    </a-tabs>
    <div class="code-content">
      <pre class="line-numbers"><code
        class="no-whitespace-normalization language-markup"
        v-html="html.trim()"
      ></code>
      </pre>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
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
  if (lang === 'vue') {
    lang = 'html';
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
  nextTick(() => {
    Prism.highlightAll();
  });
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
  user-select: text !important;
  height: calc(100%);
  overflow-y: auto;
  background: #272822;
  flex: 1;
  code {
    white-space: pre-wrap;
  }
}
.system__template {
  :deep(.ant-card-body) {
    height: 100%;
    overflow-y: hidden;
    padding: 0;
    display: flex;
  }
}
</style>
