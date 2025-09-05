import { Component } from '@angular/core';
import { UseCaseItem } from '../../models/use-case.interface';

@Component({
  selector: 'app-use-cases',
  standalone: false,
  templateUrl: './use-cases.component.html',
  styleUrls: ['./use-cases.component.scss'],
})
export class UseCasesComponent {
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
  allUseCases: UseCaseItem[] = [
    {
      id: 'uc-bullet-trains',
      title: 'Bullet Trains in Pakistan',
      summary:
        'Exploring a national high-speed rail corridor: feasibility, phased rollout, economic uplift & environmental impact.',
      category: 'Transportation',
      status: 'Research in Progress',
    },
    {
      id: 'uc-subway-system',
      title: 'Subway System in Pakistan',
      summary:
        'Systems architecture, projected ridership, capex / opex modelling & sustainable funding mechanisms.',
      category: 'Transportation',
      status: 'Research in Progress',
    },
    {
      id: 'uc-train-infra',
      title: 'Tourism Train Infrastructure',
      summary:
        'Designing scenic rail experiences that catalyze domestic tourism & regional economic growth.',
      category: 'Transportation',
      status: 'Research in Progress',
    },
    {
      id: 'uc-digitization-economy',
      title: 'Digitization Economy',
      summary:
        'Framework for accelerating secure digitization of public & private sector services.',
      category: 'Development',
      status: 'Research in Progress',
    },
    {
      id: 'uc-new-era-education',
      title: 'New Era of Education',
      summary:
        'Adaptive learning ecosystems combining AI tutors, competency maps & rural accessibility.',
      category: 'Education',
      status: 'Research in Progress',
    },
    {
      id: 'uc-passport-rank',
      title: 'Scaling Rank of Passport',
      summary:
        'Policy levers & bilateral initiatives to elevate global mobility score.',
      category: 'Policy',
      status: 'Research in Progress',
    },
    {
      id: 'uc-ai-traffic',
      title: 'AI Algorithms & Systems to Enforce Traffic Rules',
      summary:
        'Computer vision enabled smart intersections reducing violations & improving safety.',
      category: 'Technology',
      status: 'Research in Progress',
    },
    {
      id: 'uc-accident-response',
      title: 'Autonomous Road Accident Detection & Emergency Assistance',
      summary:
        'Edge + cloud fusion for rapid incident detection & optimized dispatch.',
      category: 'Technology',
      status: 'Research in Progress',
    },
    {
      id: 'uc-public-transport',
      title: 'Public Transportation Optimization & Digitization',
      summary:
        'Data-driven routing & unified ticketing improving efficiency & user experience.',
      category: 'Transportation',
      status: 'Research in Progress',
    },
  ];

  get filteredUseCases(): UseCaseItem[] {
    return this.allUseCases.filter(
      (uc) => uc.category === this.selectedCategory
    );
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }

  trackUseCase = (_: number, uc: UseCaseItem) => uc.id;
}
