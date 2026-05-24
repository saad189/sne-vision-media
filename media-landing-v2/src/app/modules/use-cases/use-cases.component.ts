import { Component } from '@angular/core';
import { Category, MediaWork } from '../../models';
import { CategoryService, MediaWorkService } from '../../services';
import { RouterLink } from '@angular/router';
import { SnakeToWordsPipe } from '../../pipes/snake-to-words.pipe';

@Component({
    selector: 'app-use-cases',
    templateUrl: './use-cases.component.html',
    styleUrls: ['./use-cases.component.scss'],
    imports: [RouterLink, SnakeToWordsPipe],
})
export class UseCasesComponent {
  // NOTE: MediaWork objects now include ephemeral imageSignedUrl / manuscriptSignedUrl for direct rendering
  categories: Category[] = [];
  selectedCategory: string = 'All';
  loadingCategories = false;
  categoryError: string | null = null;
  allUseCases: MediaWork[] = [];
  loadingUseCases = false;
  useCasesError: string | null = null;

  constructor(
    private categoryService: CategoryService,
    private mediaWorkService: MediaWorkService
  ) {
    this.loadCategories();
    this.loadUseCases();
  }

  private loadUseCases() {
    this.loadingUseCases = true;
    this.mediaWorkService.listWithSignedUrls('use-cases').subscribe({
      next: (items: MediaWork[]) => {
        this.allUseCases = items;
        this.loadingUseCases = false;
      },
      error: (e: any) => {
        console.error('[UseCasesComponent] media works load error', e);
        this.useCasesError = 'Failed to load use cases';
        this.loadingUseCases = false;
      },
    });
  }

  private loadCategories() {
    this.loadingCategories = true;
    this.categoryService.list().subscribe({
      next: (cats) => {
        this.categories = cats;
        this.loadingCategories = false;
      },
      error: (e) => {
        console.error('[UseCasesComponent] categories load error', e);
        this.categoryError = 'Failed to load categories';
        this.loadingCategories = false;
      },
    });
  }

  get filteredUseCases(): MediaWork[] {
    if (this.selectedCategory === 'All') return this.allUseCases;
    return this.allUseCases.filter(
      (uc) => uc.categoryName === this.selectedCategory
    );
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }

  trackUseCase = (_: number, uc: MediaWork) => uc.id;
}
