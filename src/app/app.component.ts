import { Component, OnInit } from '@angular/core';
import { INavigation } from './interfaces/navigation.interface';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    currentSection = 'section1';
    navigation: INavigation[] = [
        { link: '/portfolio', icon: 'fas fa-home', name: 'Portfolio' },
        { link: '/portfolio/about', icon: 'fas fa-user-circle', name: 'About' },
        { link: '/portfolio/skillset', icon: 'fas fa-chart-line', name: 'Skillset' },
        { link: '/portfolio/projects', icon: 'fas fa-images', name: 'Projects'},
        { link: '/portfolio/reviews', icon: 'far fa-eye', name: 'References' },
    ];

    onSectionChange(sectionId: string) {
        this.currentSection = sectionId;
    }

    scrollTo(section) {
        document.querySelector('#' + section).scrollIntoView();
    }
}
