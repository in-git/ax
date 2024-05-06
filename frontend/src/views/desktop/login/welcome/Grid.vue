<template>
  <div>
    <h1 class="text-center text-white title">功能预览</h1>
    <div class="grid-container" ref="sortRef">
      <div class="grid-item" v-for="(item, key) in list" :key="item.title">
        <h2>{{ item.title }}</h2>
        <div class="item-desc">
          {{ item.desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSortable } from '@vueuse/integrations/useSortable';

const sortRef = ref();

const list = ref([
  {
    title: '用户管理',
    desc: '管理系统操作者，完成系统用户配置。',
  },
  {
    title: '部门管理',
    desc: '配置系统组织机构（公司、部门、小组），支持数据权限展示。',
  },
  {
    title: '岗位管理',
    desc: '设置系统用户所属职务。',
  },
  {
    title: '菜单管理',
    desc: '配置系统菜单、操作权限和按钮权限标识。',
  },
  {
    title: '角色管理',
    desc: '分配角色菜单权限，按机构划分数据范围权限。',
  },
  {
    title: '字典管理',
    desc: '维护系统常用的固定数据。',
  },
  {
    title: '参数管理',
    desc: '动态配置系统常用参数。',
  },
  {
    title: '通知公告',
    desc: '发布和维护系统通知公告信息。',
  },
  {
    title: '操作日志',
    desc: '记录和查询系统正常和异常操作日志。',
  },
  {
    title: '登录日志',
    desc: '记录和查询系统登录日志，包括异常情况。',
  },
  {
    title: '在线用户',
    desc: '监控当前系统活跃用户状态。',
  },
  {
    title: '定时任务',
    desc: '调度在线任务（添加、修改、删除），记录执行结果日志。',
  },
  {
    title: '代码生成',
    desc: '生成前后端代码（Java、HTML、XML、SQL），支持CRUD下载。',
  },
  {
    title: '系统接口',
    desc: '根据业务代码自动生成相关的API接口文档。',
  },
  {
    title: '服务监控',
    desc: '监视系统CPU、内存、磁盘、堆栈等信息。',
  },
  {
    title: '缓存监控',
    desc: '查询系统缓存信息，统计命令。',
  },
  {
    title: '在线构建器',
    desc: '使用拖放表单元素生成对应的HTML代码。',
  },
  {
    title: '连接池监视',
    desc: '监控当前系统数据库连接池状态，分析SQL以找出系统性能瓶颈。',
  },
]);
nextTick(() => {
  useSortable(sortRef, list, {
    animation: 200,
  });
});
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  gap: 24px;
  margin-top: 32px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  max-height: 600px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}

.grid-item {
  background: linear-gradient(to bottom left, #080053, #000c13);
  border: 2px solid #353535;
  border-radius: 22px;
  padding: 48px 24px;
  color: white;
  text-align: center;
  cursor: move;
  .item-desc {
    opacity: 0.7;
  }
  h2 {
    margin-bottom: 24px;
  }
}
h1.title {
  font-size: 42px;
}
</style>
