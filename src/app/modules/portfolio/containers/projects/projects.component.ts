import { Component, OnInit } from '@angular/core';
import { ISectionTitleConfig } from 'src/app/interfaces/section-title.interface';
import { ProjectData } from './projects.config';
import { IProject } from '../../../../interfaces/projects.interface';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
    sectionTitleConfig: ISectionTitleConfig = { title: 'Portfolio', class: 'text-dark' };
    projectData: IProject[] = ProjectData;

    constructor() {}

    ngOnInit(): void {}
}
