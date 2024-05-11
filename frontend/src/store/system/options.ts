import { staticHost } from '@/api/utils/image';

export const baseUrlOptions = [
  {
    label: '本地',
    value: 'http://localhost:8080/',
    id: 'test',
  },
  {
    label: 'AX测试服务器',
    value: 'http://150.158.14.110:8080/',
    id: 'AX',
  },
  {
    label: '若依官网',
    value: 'https://vue.ruoyi.vip/prod-api/',
    id: 'ruo-yi',
  },
];
export const staticOptions = [
  {
    value: `https://in-git.gitee.io/ax-resource/images`,
    label: 'GITEE',
  },
  {
    value: `http://localhost:8080`,
    label: '本地',
  },
  {
    value: `https://in-git.github.io/ax-resource/images`,
    label: 'GITHUB',
  },
  {
    value: staticHost,
    label: 'AX测试服务器',
  },
];
