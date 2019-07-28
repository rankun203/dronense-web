export interface IDataTag {
  name: string;
  value: string;
  type?: string;
  /** Data source name */
  dataSourceType?: string;

  dataSource?: string;
  /** Data tag weight, define its order */
  weight?: number;
}

export interface IDataTags<T extends IDataTag> {
  [key: string]: T;
}
