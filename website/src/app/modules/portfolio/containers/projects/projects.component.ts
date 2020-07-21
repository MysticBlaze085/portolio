import { Component, OnInit } from '@angular/core';
import { ISectionTitleConfig } from 'src/app/interfaces/section-title.interface';
import { ProjectData } from './projects.config';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
    sectionTitleConfig: ISectionTitleConfig = { title: 'Portfolio', class: 'text-dark' };
    projectData: { srcUrl: string; previewUrl: string }[] = ProjectData;

    constructor() {}

    ngOnInit(): void {}
}
