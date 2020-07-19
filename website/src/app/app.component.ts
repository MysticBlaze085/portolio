import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    currentSection = 'section1';

    onSectionChange(sectionId: string) {
        this.currentSection = sectionId;
    }

    scrollTo(section) {
        document.querySelector('#' + section).scrollIntoView();
    }
}
