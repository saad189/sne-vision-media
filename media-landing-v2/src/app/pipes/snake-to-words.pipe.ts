import { Pipe, PipeTransform } from '@angular/core';

/**
 * Transforms a snake_case string into Title Case words.
 * Examples:
 *   in_progress => In Progress
 *   not_started => Not Started
 *   complete => Complete
 * Consecutive underscores or leading/trailing underscores are ignored gracefully.
 */
@Pipe({
  name: 'snakeToWords',
  standalone: true,
})
export class SnakeToWordsPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (value == null) return '';
    // Fast path: if no underscore and already has capital letters, still capitalize first letter only
    if (!value.includes('_')) {
      return this.capitalizeWord(value);
    }
    return value
      .split('_')
      .filter((segment) => segment.length > 0)
      .map((seg) => this.capitalizeWord(seg.toLowerCase()))
      .join(' ');
  }

  private capitalizeWord(word: string): string {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}
