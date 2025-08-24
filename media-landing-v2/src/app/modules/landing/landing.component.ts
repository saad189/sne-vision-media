import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface UseCaseItem {
    id: string;
    title: string;
    summary: string;
    category: string; // one of categories
    image?: string;   // optional image path
    status?: string;  // e.g. Research in Progress
}

interface ProjectItem {
    id: string;
    title: string;
    blurb: string;
    category: string; // reused categories set (subset)
    badges: string[]; // e.g. ['YouTube','GitHub']
    status?: string; // optional stage / progress
}

interface TestimonialItem {
    id: string;
    quote: string;
    author: string;
    role?: string;
    date?: string;
}

interface EventTile {
    id: string;
    title: string;
    date: string;
    type?: string;
}

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    standalone: false
})
export class LandingComponent {
    categories: string[] = [
        'Transportation',
        'Finance',
        'Development',
        'Education',
        'Policy',
        'Laws',
        'Social Experiments',
        'Technology'
    ];

    selectedCategory: string = this.categories[0];
    projectCategories: string[] = [
        'Transportation', 'Finance', 'Development', 'Education', 'Policy', 'Laws', 'Social Experiments', 'Technology'
    ];
    selectedProjectCategory: string = 'Transportation';

    allUseCases: UseCaseItem[] = [
        {
            id: 'uc-bullet-trains',
            title: 'Bullet Trains in Pakistan',
            summary: 'Exploring a national high-speed rail corridor: feasibility, phased rollout, economic uplift & environmental impact.',
            category: 'Transportation',
            status: 'Research in Progress'
        },
        {
            id: 'uc-subway-system',
            title: 'Subway System in Pakistan',
            summary: 'Systems architecture, projected ridership, capex / opex modelling & sustainable funding mechanisms.',
            category: 'Transportation',
            status: 'Research in Progress'
        },
        {
            id: 'uc-train-infra',
            title: 'Tourism Train Infrastructure',
            summary: 'Designing scenic rail experiences that catalyze domestic tourism & regional economic growth.',
            category: 'Transportation',
            status: 'Research in Progress'
        },
        {
            id: 'uc-digitization-economy',
            title: 'Digitization Economy',
            summary: 'Framework for accelerating secure digitization of public & private sector services.',
            category: 'Development',
            status: 'Research in Progress'
        },
        {
            id: 'uc-new-era-education',
            title: 'New Era of Education',
            summary: 'Adaptive learning ecosystems combining AI tutors, competency maps & rural accessibility.',
            category: 'Education',
            status: 'Research in Progress'
        },
        {
            id: 'uc-passport-rank',
            title: 'Scaling Rank of Passport',
            summary: 'Policy levers & bilateral initiatives to elevate global mobility score.',
            category: 'Policy',
            status: 'Research in Progress'
        },
        {
            id: 'uc-ai-traffic',
            title: 'AI Algorithms & Systems to Enforce Traffic Rules',
            summary: 'Computer vision enabled smart intersections reducing violations & improving safety.',
            category: 'Technology',
            status: 'Research in Progress'
        },
        {
            id: 'uc-accident-response',
            title: 'Autonomous Road Accident Detection & Emergency Assistance',
            summary: 'Edge + cloud fusion for rapid incident detection & optimized dispatch.',
            category: 'Technology',
            status: 'Research in Progress'
        },
        {
            id: 'uc-public-transport',
            title: 'Public Transportation Optimization & Digitization',
            summary: 'Data-driven routing & unified ticketing improving efficiency & user experience.',
            category: 'Transportation',
            status: 'Research in Progress'
        }
    ];

    get filteredUseCases(): UseCaseItem[] {
        return this.allUseCases.filter(uc => uc.category === this.selectedCategory);
    }

    selectCategory(cat: string) {
        this.selectedCategory = cat;
    }

    trackUseCase = (_: number, uc: UseCaseItem) => uc.id;

    projects: ProjectItem[] = [
        {
            id: 'proj-ai-traffic-automation',
            title: 'Introducing AI to Automate & Optimize Traffic in Pakistan',
            blurb: 'Building a scalable CV + sensor fusion stack to reduce congestion & violations in dense urban corridors.',
            category: 'Transportation',
            badges: ['YouTube', 'GitHub'],
            status: 'Research'
        },
        {
            id: 'proj-traffic-delay-reduction',
            title: 'Reducing Traffic Delays with Computer Vision & Data Analytics',
            blurb: 'Adaptive signal timing using real-time vehicle classification & flow prediction models.',
            category: 'Transportation',
            badges: ['YouTube', 'GitHub'],
            status: 'Prototype'
        },
        {
            id: 'proj-big-data-commute',
            title: 'Big Data Analysis on Commute Inside Big Cities',
            blurb: 'Aggregated mobility data pipelines discovering latent bottlenecks & optimizing route distribution.',
            category: 'Transportation',
            badges: ['YouTube', 'GitHub'],
            status: 'Research'
        },
        {
            id: 'proj-ai-enforcement',
            title: 'AI Algorithms & Systems to Enforce Traffic Rules in Pakistan',
            blurb: 'Model ensemble for violation detection, evidence packaging & automated penalty drafting.',
            category: 'Transportation',
            badges: ['YouTube', 'GitHub'],
            status: 'POC'
        },
        {
            id: 'proj-accident-response',
            title: 'Autonomous Road Accident Detection & Emergency Assistance',
            blurb: 'Edge devices & low-latency alert mesh orchestrating dispatch & triage analytics.',
            category: 'Transportation',
            badges: ['YouTube', 'GitHub'],
            status: 'Prototype'
        },
        {
            id: 'proj-public-transport-optimization',
            title: 'Public Transportation Optimization and Digitization',
            blurb: 'Unified ticketing, occupancy forecasting & route rationalization for modern commuter UX.',
            category: 'Transportation',
            badges: ['YouTube', 'GitHub'],
            status: 'Research'
        }
    ];

    get filteredProjects(): ProjectItem[] {
        return this.projects.filter(p => p.category === this.selectedProjectCategory);
    }

    selectProjectCategory(cat: string) { this.selectedProjectCategory = cat; }

    trackProject = (_: number, p: ProjectItem) => p.id;

    testimonials: TestimonialItem[] = [
        {
            id: 't1',
            quote: 'Collaborating with SNE has accelerated cross-industry problem solving and widened our innovation lens.',
            author: 'Dr. Ayesha Malik, Lead Systems Architect',
            date: 'Sept, 2025'
        },
        {
            id: 't2',
            quote: 'We are building safety and efficiency tools that can scale nationally—this community enables rapid iteration.',
            author: 'Jamal Hassan, AI Engineer',
            date: 'Nov, 2025'
        },
        {
            id: 't3',
            quote: 'It is a new era of open collaboration—policy, engineering & data coming together to solve real constraints.',
            author: 'Farah Zuberi, Civic Planner',
            date: 'Dec, 2025'
        },
        {
            id: 't4',
            quote: 'Our validation pipeline for infrastructure simulations improved drastically through shared research assets.',
            author: 'Engr. Marwan Syed, Transport Modeling Lead',
            date: 'Jan, 2026'
        },
        {
            id: 't5',
            quote: 'The open experimentation culture has shortened feedback loops in regulatory technology prototyping.',
            author: 'Ammar Iqbal, Policy Technologist',
            date: 'Feb, 2026'
        },
        {
            id: 't6',
            quote: 'Seeing multidisciplinary teams iterate on national-scale challenges is inspiring and pragmatic.',
            author: 'Sarah Khan, Systems Researcher',
            date: 'Mar, 2026'
        }
    ];

    trackTestimonial = (_: number, t: TestimonialItem) => t.id;

    events: EventTile[] = [
        { id: 'e1', title: 'AI & Systems in University Lab', date: 'Sept, 2025', type: 'Seminar' },
        { id: 'e2', title: 'Event Karachi, Pakistan', date: 'Nov, 2025', type: 'Meetup' },
        { id: 'e3', title: 'Tech Expo Lahore', date: 'Jan, 2026', type: 'Expo' }
    ];

    ecosystemForm: FormGroup;
    formSubmitted = false;

    constructor(private fb: FormBuilder) {
        this.ecosystemForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            phone: [''],
            designation: [''],
            message: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    submitEcosystem() {
        this.formSubmitted = true;
        if (this.ecosystemForm.invalid) return;
        const payload = this.ecosystemForm.value;
        // Placeholder for API integration
        console.log('Ecosystem form submission', payload);
        this.ecosystemForm.reset();
        this.formSubmitted = false;
    }
}
