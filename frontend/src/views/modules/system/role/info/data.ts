import resourcePng from './assets/resource.png';
import rolePng from './assets/role.png';
import usersPng from './assets/users.png';

export const showRoleForm = ref(false);
export const modules = ref([
  {
    value: 'info',
    payload: {
      title: 'Info',
      image: rolePng,
    },
  },
  {
    value: 'resource',
    payload: {
      title: 'Resource',
      image: resourcePng,
    },
  },
  {
    value: 'users',
    payload: {
      title: 'User',
      image: usersPng,
    },
  },
]);
