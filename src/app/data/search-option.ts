export interface SearchOption {
  key: string;
  displayName: string;
  operator: string;
  searchValue: any;
  toggle?: boolean;
  unremovable?: boolean;
  displayValue?: any;
  multiValue: boolean;
}
