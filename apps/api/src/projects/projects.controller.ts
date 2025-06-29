// apps/api/src/projects/projects.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { ProjectsService, Project } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private svc: ProjectsService) {}

  @Get()
  getAll(): Project[] {
    return this.svc.findAll();
  }

  @Get(':slug')
  getOne(@Param('slug') slug: string): Project {
    return this.svc.findOne(slug);
  }
}
