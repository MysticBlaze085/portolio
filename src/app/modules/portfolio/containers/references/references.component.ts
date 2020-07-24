import { Component, OnInit } from '@angular/core';
import { references } from './reference.config';

@Component({
    selector: 'app-references',
    templateUrl: './references.component.html',
    styles: [],
})
export class ReferencesComponent implements OnInit {
    referencesData = references;
    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

    constructor() {}

    ngOnInit(): void {}
}
