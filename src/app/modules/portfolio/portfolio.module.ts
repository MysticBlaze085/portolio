import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PORTFOLIO_COMPONENTS } from './components';
import { PORTFOLIO_CONTAINERS } from './containers';
import { SHARED_MODULES } from '../shared';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [...PORTFOLIO_CONTAINERS, ...PORTFOLIO_COMPONENTS],
    imports: [CommonModule, PortfolioRoutingModule, ...SHARED_MODULES, NgbModule],
    exports: [...PORTFOLIO_CONTAINERS, ...PORTFOLIO_COMPONENTS],
})
export class PortfolioModule {}
