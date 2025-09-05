import { Component } from '@angular/core';
import { ProjectItem } from '../../models/project.interface';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  categories: string[] = [
    'Transportation',
    'Finance',
    'Development',
    'Education',
    'Policy',
    'Laws',
    'Social Experiments',
    'Technology',
  ];

  selectedCategory: string = this.categories[0];
  projectCategories: string[] = [
    'Transportation',
    'Finance',
    'Development',
    'Education',
    'Policy',
    'Laws',
    'Social Experiments',
    'Technology',
  ];
  selectedProjectCategory: string = 'Transportation';

  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }

  projects: ProjectItem[] = [
    {
      id: 'proj-ai-traffic-automation',
      title: 'Introducing AI to Automate & Optimize Traffic in Pakistan',
      blurb:
        'Building a scalable CV + sensor fusion stack to reduce congestion & violations in dense urban corridors.',
      category: 'Transportation',
      badges: ['YouTube', 'GitHub'],
      status: 'Research',
    },
    {
      id: 'proj-traffic-delay-reduction',
      title: 'Reducing Traffic Delays with Computer Vision & Data Analytics',
      blurb:
        'Adaptive signal timing using real-time vehicle classification & flow prediction models.',
      category: 'Transportation',
      badges: ['YouTube', 'GitHub'],
      status: 'Prototype',
    },
    {
      id: 'proj-big-data-commute',
      title: 'Big Data Analysis on Commute Inside Big Cities',
      blurb:
        'Aggregated mobility data pipelines discovering latent bottlenecks & optimizing route distribution.',
      category: 'Transportation',
      badges: ['YouTube', 'GitHub'],
      status: 'Research',
    },
    {
      id: 'proj-ai-enforcement',
      title: 'AI Algorithms & Systems to Enforce Traffic Rules in Pakistan',
      blurb:
        'Model ensemble for violation detection, evidence packaging & automated penalty drafting.',
      category: 'Transportation',
      badges: ['YouTube', 'GitHub'],
      status: 'POC',
    },
    {
      id: 'proj-accident-response',
      title: 'Autonomous Road Accident Detection & Emergency Assistance',
      blurb:
        'Edge devices & low-latency alert mesh orchestrating dispatch & triage analytics.',
      category: 'Transportation',
      badges: ['YouTube', 'GitHub'],
      status: 'Prototype',
    },
    {
      id: 'proj-public-transport-optimization',
      title: 'Public Transportation Optimization and Digitization',
      blurb:
        'Unified ticketing, occupancy forecasting & route rationalization for modern commuter UX.',
      category: 'Transportation',
      badges: ['YouTube', 'GitHub'],
      status: 'Research',
    },
  ];

  get filteredProjects(): ProjectItem[] {
    return this.projects.filter(
      (p) => p.category === this.selectedProjectCategory
    );
  }

  selectProjectCategory(cat: string) {
    this.selectedProjectCategory = cat;
  }

  trackProject = (_: number, p: ProjectItem) => p.id;
}
