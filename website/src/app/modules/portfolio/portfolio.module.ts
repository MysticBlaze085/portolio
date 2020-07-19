import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PORTFOLIO_COMPONENTS } from './components';
import { PORTFOLIO_CONTAINERS } from './containers';
import { PortfolioComponent } from './containers/portfolio/portfolio.component';
import { SharedModule } from '../shared/shared.module';
import { ReferencesComponent } from './containers/references/references.component';

@NgModule({
    declarations: [...PORTFOLIO_CONTAINERS, ...PORTFOLIO_COMPONENTS, PortfolioComponent, ReferencesComponent],
    imports: [CommonModule, PortfolioRoutingModule, SharedModule],
    exports: [...PORTFOLIO_CONTAINERS, ...PORTFOLIO_COMPONENTS],
})
export class PortfolioModule {}
