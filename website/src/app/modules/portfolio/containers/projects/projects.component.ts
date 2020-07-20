import { Component, OnInit } from '@angular/core';
import { ISectionTitleConfig } from 'src/app/interfaces/section-title.interface';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
    sectionTitleConfig: ISectionTitleConfig = { title: 'Portfolio', class: 'text-dark' };

    constructor() {}

    ngOnInit(): void {}
}
