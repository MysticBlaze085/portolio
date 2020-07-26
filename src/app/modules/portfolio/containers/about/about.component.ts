import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISectionTitleConfig } from 'src/app/interfaces/section-title.interface';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    sectionTitleConfig: ISectionTitleConfig = { title: 'About', class: 'text-white' };
    @Output() selectChanges: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    onSectionChange(sectionId: string) {
        this.selectChanges.emit(sectionId);
    }
}
