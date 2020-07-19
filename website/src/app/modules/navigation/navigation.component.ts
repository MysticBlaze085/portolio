import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
    navigation: { link: string; icon: string }[] = [
        { link: 'Melissa-S-Langhausen-Front-end-web-designer', icon: 'fas fa-home' },
        { link: 'about', icon: 'fas fa-user-circle' },
        { link: 'skillSet', icon: 'fas fa-chart-line' },
        { link: 'portfolio', icon: 'fas fa-images' },
        { link: 'reviews', icon: 'far fa-eye' },
    ];

    constructor() {}

    ngOnInit(): void {}
}
