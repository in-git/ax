import { type App } from 'vue';
import { createI18n } from 'vue-i18n';
import en from './en/en';
import zh from './zh/zh';
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    zh,
  },
  globalInjection: true,
});

export const installI18 = (app: App) => {
  console.log('install');

  i18n.install(app);
  app.config.globalProperties.$t = i18n.global.t;
};
