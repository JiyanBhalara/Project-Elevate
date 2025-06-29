// apps/api/src/projects/projects.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import raw from '../data/projects.json';

export interface Project {
  name: string;
  slug: string;
  url: string;
  award?: string;
  summary: string;
  description: string[];
  pillars: { title: string; capabilities: string[] }[];
  impact?: string;
}

@Injectable()
export class ProjectsService {
  private readonly all: Project[] = raw.projects.map((p) => ({
    ...p,
    // derive slug if not present
    slug: (p as any).slug ??
          p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  }));

  findAll(): Project[] {
    return this.all;
  }

  findOne(slug: string): Project {
    const proj = this.all.find((p) => p.slug === slug);
    if (!proj) throw new NotFoundException('Project not found');
    return proj;
  }
}
