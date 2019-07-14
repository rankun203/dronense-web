export interface ICrew {
  /** UUID */
  uuid: string;
  /** Crew name */
  name: string;
  /** No.137 */
  codeName?: string;
}

export interface IPersonProperties {
  featureType: 'Civilian' | 'CrewMember';
  name: string;
  crew?: ICrew;
  healthStatus: 'Healthy' | 'Dead' | 'Unknown';
  /** moving speed, 5.0(m/s) */
  movingSpeed: number;
  /** moving direction, 50.5(°) */
  movingDirection: number;
}
