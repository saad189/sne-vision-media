import { Module } from '../models';

export const AUTH: Module = {
  path: 'auth',
  name: 'Auth',
  icon: 'auth',
};

export const DEEDS: Module = {
  path: 'deeds',
  name: 'Deeds',
  icon: 'deed',
};


export const DASHBOARD: Module = {
  path: 'dashboard',
  name: 'Dashboard',
  icon: 'dashboard',
  subModules: []
};


export const USERS_MANAGEMENT: Module = {
  path: 'users-management',
  name: 'Users Mangement',
  icon: 'users-management',
};

export const ANALYTICS: Module = {
  path: 'analytics',
  name: 'Analytics',
  icon: 'analytics',
};

export const LANDING: Module = {
  path: '',
  name: 'Home',
  icon: 'home',
};

export const MODULES = [
  LANDING,
  DASHBOARD,
  USERS_MANAGEMENT,
  ANALYTICS,
];
