import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    currentSection = 'section1';
    navigation: { link: string; icon: string }[] = [
        { link: '/portfolio', icon: 'fas fa-home' },
        { link: '/portfolio/about', icon: 'fas fa-user-circle' },
        { link: '/portfolio/skillset', icon: 'fas fa-chart-line' },
        { link: '/portfolio/projects', icon: 'fas fa-images' },
        { link: '/portfolio/reviews', icon: 'far fa-eye' },
    ];

    onSectionChange(sectionId: string) {
        this.currentSection = sectionId;
    }

    scrollTo(section) {
        document.querySelector('#' + section).scrollIntoView();
    }
}
