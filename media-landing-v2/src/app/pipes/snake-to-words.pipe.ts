import { Pipe, PipeTransform } from '@angular/core';

/**
 * Transforms a snake_case or kebab-case (hyphen-separated) string into Title Case words.
 * Examples:
 *   in_progress => In Progress
 *   not_started => Not Started
 *   in-progress => In Progress
 *   ready-to_go => Ready To Go
 *   complete => Complete
 * Consecutive separators ("__" / "--" / mixed) and leading/trailing separators are ignored gracefully.
 */
@Pipe({
  name: 'snakeToWords',
  standalone: true,
})
export class SnakeToWordsPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (value == null) return '';
    // Fast path: if there are no recognized separators and already has capital letters, just capitalize first letter
    if (!/[ _-]/.test(value) || !/[_-]/.test(value)) {
      // NOTE: We treat both '_' and '-' as separators; spaces are left as-is.
      return this.capitalizeWord(value);
    }
    return value
      .split(/[_-]+/)
      .filter((segment) => segment.length > 0)
      .map((seg) => this.capitalizeWord(seg.toLowerCase()))
      .join(' ');
  }

  private capitalizeWord(word: string): string {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}
