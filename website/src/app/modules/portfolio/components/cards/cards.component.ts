import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
    @Input() cardData: { image: string; url: string; tooltip: string }[] = [
        { image: 'assets/img/music-box-1419792_1280.jpg', url: 'https://langhausenenterprises.com/', tooltip: 'Langhausen Enterprises' },
    ];

    constructor() {}

    ngOnInit(): void {}
}
