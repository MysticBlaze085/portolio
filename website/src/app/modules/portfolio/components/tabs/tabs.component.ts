import { Component, OnInit, Input } from '@angular/core';
import { IProject } from '../../../../interfaces/projects.interface';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
    @Input() tabData: IProject[];

    angularProjects: IProject[];
    webProjects: IProject[];

    constructor() {}

    ngOnInit(): void {
        this.setData(this.tabData);

        console.log('ang', this.angularProjects);
    }

    setData(data: IProject[]) {
        this.angularProjects = data.filter((project) => project.type.includes('angular'));
        this.webProjects = data.filter((project) => project.type.includes('web'));
    }
}
