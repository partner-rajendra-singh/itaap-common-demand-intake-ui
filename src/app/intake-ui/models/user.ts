export class User {
  email!: string;
  name!: string;
  token!: string;
  isAuthenticated!: boolean;
  isAdmin!: boolean;
  role!: string;
  expireTime!: Date;
  domain!: string[];
}
