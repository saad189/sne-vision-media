import { IsStrongPasswordOptions } from 'class-validator';

export const PASSWORD_OPTIONS: IsStrongPasswordOptions = {
  minLength: 9,
  minNumbers: 1,
  minUppercase: 1,
  minLowercase: 1,
  minSymbols: 1,
};

export const PASSWORD_VALIDATIONOPTIONS = {
  message: `Please make sure the following conditions are met:
Minimum length should be at least 9, At least one number,At least one uppercase letter, At least one lowercase letter, At least one Symbol.`,
};

export const JWT = 'jwt';
export const JWT_EXPIRATION = '1h';


export enum EventFrequency {
  ONCE = 0,
  HOURLY = 1,
  DAILY = 2,
  WEEKLY = 3,
  MONTHLY = 4,
  YEARLY = 5,
}

export enum ScheduleType {
  DEED = 0,
  NOTIFICATION = 1,
}

export enum USER_ROLES {
  PARENT = 'Parent',
  CHILD = 'Child',
  ADMIN = 'Admin',
  TRIAL_USER = 'Trial User',
  SUPER_ADMIN = 'Super Admin',
  QA = 'QA',
  MODERATOR = 'Moderator',
  DATA_ANALYST = 'Data Analyst',
  CUSTOMER_SUPPORT = 'Customer Support',
  MARKETING = 'Marketing',
  PSYCHOLOGIST = 'Psychologist',
}

export enum Weekdays {
  SUNDAY = 0,
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
}

export const AUTH_TOKEN = 'sne-admin-auth-token';
export const ID_TOKEN = 'sne-admin-id-token';
export const REFRESH_TOKEN = 'sne-admin-refresh-token';
export const USER_PROFILE = 'sne-admin-user-profile';
