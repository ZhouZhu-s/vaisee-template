type FormItemType = 'input' | 'select' | 'slot';

export interface SearchFormItem {
  type: FormItemType;
  label: string;
  key: string;
  value: unknown;
  placeholder?: string;
  options?: { label: string; value: unknown }[];
}

export interface SearchFormProps {
  items: SearchFormItem[];
  expandNumber?: number;
  extraSpan?: number;
  span?: number;
  showCollapse?: boolean;
  labelWidth?: string;
  labelTextAlign?: 'left' | 'center' | 'right';
  extraTextAlign?: 'left' | 'center' | 'right';
}

export interface EmitType {
  (e: 'onSearch', value: any): void;
  (e: 'update:items', value: SearchFormItem[]): void;
  (e: 'onReset'): void;
}
