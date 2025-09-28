import { Component } from '@angular/core';
import { Category } from '../../models';
import { CategoryService } from '../../services';
import { ProjectItem } from '../../models/project.interface';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projectCategories: Category[] = [];
  selectedProjectCategory: string = 'All';
  loadingCategories = false;
  categoryError: string | null = null;

  projects: ProjectItem[] = [
    {
      id: 'proj-ai-traffic-automation',
      title: 'Introducing AI to Automate & Optimize Traffic in Pakistan',
      description:
        'Building a scalable CV + sensor fusion stack to reduce congestion & violations in dense urban corridors.',
      category: 'Transportation',
      badges: ['YouTube', 'GitHub'],
      status: 'Research',
    },
    {
      id: 'proj-traffic-delay-reduction',
      title: 'Reducing Traffic Delays with Computer Vision & Data Analytics',
      description:
        'Adaptive signal timing using real-time vehicle classification & flow prediction models.',
      category: 'Transportation',
      badges: ['YouTube', 'GitHub'],
      status: 'Prototype',
    },
    {
      id: 'proj-big-data-commute',
      title: 'Big Data Analysis on Commute Inside Big Cities',
      description:
        'Aggregated mobility data pipelines discovering latent bottlenecks & optimizing route distribution.',
      category: 'Transportation',
      badges: ['YouTube', 'GitHub'],
      status: 'Research',
    },
    {
      id: 'proj-ai-enforcement',
      title: 'AI Algorithms & Systems to Enforce Traffic Rules in Pakistan',
      description:
        'Model ensemble for violation detection, evidence packaging & automated penalty drafting.',
      category: 'Transportation',
      badges: ['YouTube', 'GitHub'],
      status: 'POC',
    },
    {
      id: 'proj-accident-response',
      title: 'Autonomous Road Accident Detection & Emergency Assistance',
      description:
        'Edge devices & low-latency alert mesh orchestrating dispatch & triage analytics.',
      category: 'Transportation',
      badges: ['YouTube', 'GitHub'],
      status: 'Prototype',
    },
    {
      id: 'proj-public-transport-optimization',
      title: 'Public Transportation Optimization and Digitization',
      description:
        'Unified ticketing, occupancy forecasting & route rationalization for modern commuter UX.',
      category: 'Transportation',
      badges: ['YouTube', 'GitHub'],
      status: 'Research',
    },
  ];

  constructor(private categoryService: CategoryService) {
    this.loadCategories();
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

  get filteredProjects(): ProjectItem[] {
    if (this.selectedProjectCategory === 'All') return this.projects;
    return this.projects.filter(
      (p) => p.category === this.selectedProjectCategory
    );
  }

  selectProjectCategory(cat: string) {
    this.selectedProjectCategory = cat;
  }

  trackProject = (_: number, p: ProjectItem) => p.id;
}
