import { Component } from '@angular/core';
import { Category, MediaWork } from '../../models';
import { CategoryService, MediaWorkService } from '../../services';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  // NOTE: Each MediaWork now may contain imageSignedUrl / manuscriptSignedUrl (ephemeral) for direct display
  projectCategories: Category[] = [];
  selectedProjectCategory: string = 'All';
  loadingCategories = false;
  categoryError: string | null = null;

  projects: MediaWork[] = [];
  loadingProjects = false;
  projectsError: string | null = null;

  constructor(
    private categoryService: CategoryService,
    private mediaWorkService: MediaWorkService
  ) {
    this.loadCategories();
    this.loadProjects();
  }

  private loadProjects() {
    this.loadingProjects = true;
    this.mediaWorkService.listWithSignedUrls('projects').subscribe({
      next: (items: MediaWork[]) => {
        this.projects = items;
        this.loadingProjects = false;
      },
      error: (e: any) => {
        console.error('[ProjectsComponent] media works load error', e);
        this.projectsError = 'Failed to load projects';
        this.loadingProjects = false;
      },
    });
  }

  private loadCategories() {
    this.loadingCategories = true;
    this.categoryService.list().subscribe({
      next: (cats) => {
        this.projectCategories = cats;
        this.loadingCategories = false;
      },
      error: (e) => {
        console.error('[ProjectsComponent] categories load error', e);
        this.categoryError = 'Failed to load categories';
        this.loadingCategories = false;
      },
    });
  }

  get filteredProjects(): MediaWork[] {
    if (this.selectedProjectCategory === 'All') return this.projects;
    return this.projects.filter(
      (p) => p.categoryName === this.selectedProjectCategory
    );
  }

  selectProjectCategory(cat: string) {
    this.selectedProjectCategory = cat;
  }

  trackProject = (_: number, p: MediaWork) => p.id;
}
