interface SystemServer {
  cpu: Cpu;
  mem: Mem;
  jvm: Jvm;
  sys: Sys;
  sysFiles: SysFile[];
}

interface SysFile {
  dirName: string;
  sysTypeName: string;
  typeName: string;
  total: string;
  free: string;
  used: string;
  usage: number;
}

interface Sys {
  computerName: string;
  computerIp: string;
  userDir: string;
  osName: string;
  osArch: string;
}

interface Jvm {
  total: number;
  max: number;
  free: number;
  version: string;
  home: string;
  runTime: string;
  inputArgs: string;
  startTime: string;
  used: number;
  usage: number;
  name: string;
}

interface Mem {
  total: number;
  used: number;
  free: number;
  usage: number;
}

interface Cpu {
  cpuNum: number;
  total: number;
  sys: number;
  used: number;
  wait: number;
  free: number;
}
