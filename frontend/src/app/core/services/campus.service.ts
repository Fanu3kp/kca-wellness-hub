import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, tap } from 'rxjs';
import { Campus } from '../models/domain.model';
import { ApiService } from './api.service';

interface ApiCampus {
  id: number | string;
  name: string;
  code: string;
  location?: string | null;
  physical_support?: boolean;
  virtual_support?: boolean;
  is_active?: boolean;
}

interface ApiCampusCollection {
  data: ApiCampus[];
}

const fallbackCampuses: Campus[] = [
  {
    id: '1',
    slug: 'ruaraka-main',
    name: 'Ruaraka Main Campus',
    shortName: 'Ruaraka Main',
    location: 'Ruaraka, Nairobi',
    description: 'Main campus wellbeing and peer support hub.',
    phone: '+254 711 814 000',
    email: 'wellness@kca.ac.ke',
    timezone: 'Africa/Nairobi',
    physicalSupport: true,
    virtualSupport: true,
    accent: 'teal',
    guidanceHod: { name: 'Belinda Wanjiru', email: 'belinda@welness.kca.ac.ke', phone: '+254 711 814 101' }
  },
  {
    id: '2',
    slug: 'town',
    name: 'Town Campus',
    shortName: 'Town',
    location: 'Nairobi CBD',
    description: 'Town campus student support point.',
    phone: '+254 711 814 000',
    email: 'wellness@kca.ac.ke',
    timezone: 'Africa/Nairobi',
    physicalSupport: true,
    virtualSupport: true,
    accent: 'purple',
    guidanceHod: { name: 'Tasha Njoroge', email: 'tasha@welness.kca.ac.ke', phone: '+254 711 814 102' }
  },
  {
    id: '3',
    slug: 'kitengela',
    name: 'Kitengela Campus',
    shortName: 'Kitengela',
    location: 'Kitengela',
    description: 'Kitengela campus student support point.',
    phone: '+254 711 814 000',
    email: 'wellness@kca.ac.ke',
    timezone: 'Africa/Nairobi',
    physicalSupport: true,
    virtualSupport: true,
    accent: 'orange',
    guidanceHod: { name: 'Emily Ochieng', email: 'emily@welness.kca.ac.ke', phone: '+254 711 814 103' }
  }
];

@Injectable({ providedIn: 'root' })
export class CampusService {
  private campuses = [...fallbackCampuses];
  private campusesLoaded = false;
  private readonly campusesSource = new BehaviorSubject<Campus[]>([...fallbackCampuses]);
  private readonly selectedCampusSource = new BehaviorSubject<Campus>(this.getSelectedCampus());
  readonly campuses$ = this.campusesSource.asObservable();
  readonly selectedCampus$ = this.selectedCampusSource.asObservable();

  constructor(private readonly api: ApiService) {
    this.loadCampuses().subscribe();
  }

  loadCampuses() {
    let loadedFromApi = false;
    return this.api.get<ApiCampusCollection>('/campuses').pipe(
      catchError(() => {
        this.campusesLoaded = false;
        return of({ data: [] });
      }),
      map((response) => {
        loadedFromApi = response.data.length > 0;
        const apiCampuses = response.data.map((item) => this.fromApi(item));
        if (!apiCampuses.length) return this.campuses;
        return [
          ...apiCampuses,
          ...this.campuses.filter((campus) => !apiCampuses.some((apiCampus) => apiCampus.slug === campus.slug))
        ];
      }),
      tap((items) => {
        this.campusesLoaded = loadedFromApi;
        this.campuses = items;
        this.campusesSource.next(items);
        const selected = this.getCampusBySlug(this.selectedCampus.slug) ?? items[0];
        if (selected) {
          this.selectCampus(selected);
        }
      })
    );
  }

  getCampuses(): Campus[] {
    return this.campuses;
  }

  getCampus(id: string): Campus | undefined {
    return this.campuses.find((campus) => campus.id === id);
  }

  getCampusBySlug(slug: string): Campus | undefined {
    return this.campuses.find((campus) => campus.slug === slug);
  }

  getPersistableCampusId(campus: Campus): string | null {
    return this.campuses.find((item) => item.slug === campus.slug)?.id ?? campus.id ?? null;
  }

  selectCampus(campus: Campus): void {
    const selected = this.campuses.find((item) => item.slug === campus.slug) ?? campus;
    sessionStorage.setItem('kca_campus_id', selected.id);
    this.selectedCampusSource.next(selected);
  }

  selectCampusBySlug(slug: string): Campus | null {
    const campus = this.getCampusBySlug(slug);
    if (!campus) return null;
    this.selectCampus(campus);
    return campus;
  }

  get selectedCampus(): Campus {
    return this.selectedCampusSource.value;
  }

  getCampusSupportLabel(campus: Campus): string {
    if (campus.physicalSupport && campus.virtualSupport) {
      return 'Physical + virtual support';
    }
    return campus.virtualSupport ? 'Virtual support' : 'Physical support';
  }

  private fromApi(item: ApiCampus): Campus {
    const code = item.code.toLowerCase();
    const slug = code === 'town' ? 'town' : code === 'kitengela' ? 'kitengela' : 'ruaraka-main';
    const accent = slug === 'town' ? 'purple' : slug === 'kitengela' ? 'orange' : 'teal';
    return {
      id: String(item.id),
      slug,
      name: item.name,
      shortName: item.name.replace(/ Campus$/i, ''),
      location: item.location ?? 'KCA University',
      description: `${item.name} student wellbeing and support hub.`,
      phone: '+254 711 814 000',
      email: 'wellness@kca.ac.ke',
      timezone: 'Africa/Nairobi',
      physicalSupport: item.physical_support ?? true,
      virtualSupport: item.virtual_support ?? true,
      accent
    };
  }

  private getSelectedCampus(): Campus {
    const selectedId = sessionStorage.getItem('kca_campus_id');
    return this.campuses.find((campus) => campus.id === selectedId) ?? this.campuses[0];
  }
}
