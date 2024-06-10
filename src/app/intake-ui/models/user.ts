export class User {
  email!: string;
  name!: string;
  token!: string;
  isAuthenticated!: boolean;
  isAdmin!: boolean;
  role!: string;
  otpSent!: boolean;
  expireTime!: Date;
  domain!: string[];
}
