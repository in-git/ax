interface FieldTable {
  data: SystemTable[];
  selectedKeys: string[];
}
export const fieldTable = ref<FieldTable>({
  data: [],
  selectedKeys: [],
});
