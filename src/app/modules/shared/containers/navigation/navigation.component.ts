import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { INavigation } from '../../../../interfaces/navigation.interface';
@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
    @Input() navigation: INavigation[];

    constructor(private route: Router) {}

    ngOnInit(): void {}

    onClickRoute(route: string) {
        this.route.navigate([route]);
    }
}
