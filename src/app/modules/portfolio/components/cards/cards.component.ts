import { Component, OnInit, Input } from '@angular/core';
import { IProject } from '../../../../interfaces/projects.interface';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
    @Input() cardData: IProject[];

    constructor() {}

    ngOnInit(): void {}
}
