import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectService } from '../services/project.service';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  projects: Project[] = [];

  constructor(
    private projectService: ProjectService
  ) {

    this.projectService.getProjects()
      .subscribe({
        next: (data) => {
          this.projects = data;
        },
        error: (error) => {
          console.error('Error loading projects:', error);
        }
      });

  }
}
