import { Component, OnInit, Input } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
    @Input() navigation: { link: string; icon: string }[];

    constructor(private route: Router) {}

    ngOnInit(): void {}

    onClickRoute(route: string) {
        this.route.navigate([route]);
    }
}
