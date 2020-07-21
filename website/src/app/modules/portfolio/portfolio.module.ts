import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PORTFOLIO_COMPONENTS } from './components';
import { PORTFOLIO_CONTAINERS } from './containers';
import { SHARED_MODULES } from '../shared';

@NgModule({
    declarations: [...PORTFOLIO_CONTAINERS, ...PORTFOLIO_COMPONENTS],
    imports: [CommonModule, PortfolioRoutingModule, ...SHARED_MODULES],
    exports: [...PORTFOLIO_CONTAINERS, ...PORTFOLIO_COMPONENTS],
})
export class PortfolioModule {}
