export class User {
    email!: string;
    token!: string;
    isAuthenticated!: boolean;
    isAdmin!: boolean;
    role!: string;
    otpSent!: boolean;
}