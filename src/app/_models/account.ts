import { Role } from './role';

export class Account {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: Role;
    jwtToken?: string;
}