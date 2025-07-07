import { Injectable } from '@angular/core';
import { DecodedToken, TableColumn } from '../models';
import { set, parse } from 'date-fns';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() { }

  ageRangeValidator(control: AbstractControl): ValidationErrors | null {
    const minAge = control.get('minAge')?.value;
    const maxAge = control.get('maxAge')?.value;

    if (minAge !== null && maxAge !== null && minAge >= maxAge) {
      return { ageRangeInvalid: true };
    }

    return null;
  }

  generateDateWithTimeFns(timeString: string): Date | null {
    try {
      const parsedTime = parse(timeString, 'HH:mm:ss', new Date());
      const now = new Date();
      return set(now, {
        hours: parsedTime.getHours(),
        minutes: parsedTime.getMinutes(),
        seconds: parsedTime.getSeconds(),
      });
    } catch (error) {
      console.error('Error parsing time:', error);
      return null;
    }
  }
  /**
   *
   * @param data Data object to extract column names from
   * @returns Array of TableColumn objects with name and label properties
   */
  getColumnNames(data: any[]): TableColumn[] {
    if (!data || data.length === 0) return [];

    const firstItem = data[0];

    const keys = Object.keys(firstItem).filter((key) => {
      const value = (firstItem as any)[key];
      return value !== undefined && (typeof value !== 'object' || value !== null);
    });

    const columNames = keys.map((key) => {
      return { name: key, label: key.charAt(0).toUpperCase() + key.slice(1) };
    });

    return columNames;
  }

  /**
   * Converts a string to Title Case
   * @param str Input string to convert
   * @returns String in Title Case format
   */
  toTitleCase(str: string): string {
    if (!str) return '';
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  /**
   * Truncates a string to specified length and adds ellipsis
   * @param str Input string
   * @param length Maximum length
   */
  truncateString(str: string, length: number): string {
    if (!str) return '';
    return str.length > length ? str.substring(0, length) + '...' : str;
  }

  /**
   * Removes special characters from string
   * @param str Input string
   */
  removeSpecialCharacters(str: string): string {
    if (!str) return '';
    return str.replace(/[^a-zA-Z0-9 ]/g, '');
  }

  /**
   * Checks if string is valid email format
   * @param email Email string to validate
   */
  isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  /**
   * Exports data to Excel-compatible CSV file
   * @param data Array of objects to export
   * @param filename Desired filename without extension
   * Note that this will replace the actual backend export, as it only exports the fetched data
   */
  exportToExcel(data: any[], filename: string = 'export'): void {
    if (!data || data.length === 0) return;
    const keys = Object.keys(data[0]).filter((key) => {
      const value = (data[0] as any)[key];
      return typeof value !== 'object' || value == null;
    });

    const headers = keys;
    const csvRows = [
      headers.join(','),
      ...data.map((row) =>
        headers.map((header) => JSON.stringify(row[header] || '')).join(',')
      ),
    ];

    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  decodeJwtToken(token: string): DecodedToken {
    return jwtDecode<DecodedToken>(token);
  }

  isTimeNearExpiry(exp: number, offsetSeconds = 60): boolean {
    try {
      const currentTime = Date.now() / 1000; // current time in seconds
      return exp < currentTime + offsetSeconds;
    } catch (error) {
      // If decoding fails, consider the token as expired
      return true;
    }
  }
}
