export enum RoleType {
  BASIC,
}

export interface User {
  id: number;
  address: string;
  role: Role;
}

export interface Role {
  type: RoleType;
  name: string;
}
