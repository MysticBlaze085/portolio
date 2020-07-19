import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    @Output() selectChanges: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    onSectionChange(sectionId: string) {
        this.selectChanges.emit(sectionId);
    }
}
