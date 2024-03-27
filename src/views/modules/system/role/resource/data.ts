import { getDeptTree } from '../card/curd';
import { currentRole } from '../card/data';

export const resourceModal = ref(false);
export const allocatingResource = async () => {
  if (currentRole.value) {
    await getDeptTree(currentRole.value.roleId);
    resourceModal.value = true;
  }
};
