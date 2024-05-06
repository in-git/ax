interface FieldTable {
  data: SystemCode[];
  selectedKeys: string[];
}
export const fieldTable = ref<FieldTable>({
  data: [],
  selectedKeys: [],
});
