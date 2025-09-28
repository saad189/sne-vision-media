import { Component } from '@angular/core';
import { Category } from '../../models';
import { CategoryService } from '../../services';
import { UseCaseItem } from '../../models/use-case.interface';

@Component({
  selector: 'app-use-cases',
  standalone: false,
  templateUrl: './use-cases.component.html',
  styleUrls: ['./use-cases.component.scss'],
})
export class UseCasesComponent {
  categories: Category[] = [];
  selectedCategory: string = 'All';
  loadingCategories = false;
  categoryError: string | null = null;
  allUseCases: UseCaseItem[] = [
    {
      id: 'uc-bullet-trains',
      title: 'Bullet Trains in Pakistan',
      summary:
        'Experts work on a Proposal to Introduce ‘The Bullet Train’ Infrastructure to Pakistan. They delve deep into the Economics, Engineering, Policy, Trade and Feasibility. Case Studies of different Countries are studied for this comprehensive Report.',
      category: 'Transportation',
      status: 'Research in Progress',
      image: '../../../assets/images/use-cases/uc-bullet-trains.png',
    },
    {
      id: 'uc-subway-system',
      title: 'Subway System in Pakistan',
      summary:
        'Experts work on detailed case study of how a underground subway system can be introduced in Pakistan, Its impact, feasibility, costs, benefits and how it would reshape transportation for a common citizen. Subway System around the world are analysed as well.',
      category: 'Transportation',
      status: 'Research in Progress',
      image: '../../../assets/images/use-cases/uc-subway-system.png',
    },
    {
      id: 'uc-train-infra',
      title: 'Tourism Train Infrastructure',
      summary:
        'The Potential Economic Impact of introducing a Luxury Train System , crossing the Beautiful Landscapes of North Pakistan are studied as part of this research. Tourism Economics and Financial elements are equated and determined as part of this study.',
      category: 'Transportation',
      status: 'Research in Progress',
      image: '../../../assets/images/use-cases/uc-train-infra.png',
    },
    {
      id: 'uc-digitization-economy',
      title: 'Digitization Economy',
      summary:
        'Framework for accelerating secure digitization of public & private sector services.',
      category: 'Development',
      status: 'Research in Progress',
      image: '../../../assets/images/use-cases/uc-digitization-economy.png',
    },
    {
      id: 'uc-new-era-education',
      title: 'New Era of Education',
      summary:
        'Adaptive learning ecosystems combining AI tutors, competency maps & rural accessibility.',
      category: 'Education',
      status: 'Research in Progress',
      image: '../../../assets/images/use-cases/uc-new-era-education.png',
    },
    {
      id: 'uc-passport-rank',
      title: 'Scaling Rank of Passport',
      summary:
        'Policy levers & bilateral initiatives to elevate global mobility score.',
      category: 'Policy',
      status: 'Research in Progress',
      image: '../../../assets/images/use-cases/uc-passport-rank.png',
    },
    {
      id: 'uc-privacy-laws',
      title: 'Introducing Privacy Laws in Pakistan - A Detailed Approach',
      summary:
        'Comprehensive framework for data protection, user rights, and regulatory compliance.',
      category: 'Laws',
      status: 'Research in Progress',
      image: '../../../assets/images/use-cases/uc-privacy-laws.png',
    },
    {
      id: 'uc-vertical-development',
      title: 'Why Pakistan has Evaded Vertical Development - Detailed Analysis',
      summary:
        'In-depth exploration of socio-economic, political, and infrastructural factors hindering vertical growth.',
      category: 'Development',
      status: 'Research in Progress',
      image: '../../../assets/images/use-cases/uc-vertical-development.png',
    },
  ];

  constructor(private categoryService: CategoryService) {
    this.loadCategories();
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

  get filteredUseCases(): UseCaseItem[] {
    if (this.selectedCategory === 'All') return this.allUseCases;
    return this.allUseCases.filter(
      (uc) => uc.category === this.selectedCategory
    );
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }

  trackUseCase = (_: number, uc: UseCaseItem) => uc.id;
}
