export interface FileAttr {
  name: string; // 文件名
  absolutePath: string; // 文件路径
  size: number; // 文件大小（以字节为单位）
  readable: boolean; // 是否可读
  writable: boolean; // 是否可写
  directory: boolean; // 是否是目录
  hidden: boolean; // 是否是隐藏文件
  lastModified: string; // 最后修改时间
  createTime: string; // 创建时间
  totalSpace: number; // 文件所在分区的总大小（以字节为单位）
  usableSpace: number; // 文件所在分区的可用空间大小（以字节为单位）
}
