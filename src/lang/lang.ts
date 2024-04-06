import { type App } from 'vue';
import { createI18n } from 'vue-i18n';

const messages = {
  zh: {
    warning: '是否要执行，这可能影响系统运行',
    test: '测试',
  },
};

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
  globalInjection: true,
});

export const installI18 = (app: App) => {
  i18n.install(app);
  app.config.globalProperties.$t = i18n.global.t;
};
