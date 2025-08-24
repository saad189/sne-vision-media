
export interface UserModel {
    firstName: string;
    lastName: string;
    email: string;
    id: number;
    localtion?: {
        latitude: number;
        longitude: number;
    };
    role: UserRole;
    age: number;
}

export interface CreateUserModel {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date;
    gender: string;
    latitude?: number;
    longitude?: number;
}

export interface UserRole {
    name: string;
    id: number;
    permissions: UserPermission[];
}

export interface UserPermission {
    name: string;
    id: number;
}