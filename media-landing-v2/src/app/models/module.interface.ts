export interface Module {
  path: string;
  name: string;
  icon: string;
  subModules?: Module[];
}
