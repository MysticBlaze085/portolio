import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PORTFOLIO_COMPONENTS } from './components';
import { PORTFOLIO_CONTAINERS } from './containers';
import { PortfolioComponent } from './containers/portfolio/portfolio.component';
import { ReferencesComponent } from './containers/references/references.component';
import { SHARED_MODULES } from '../shared';
import { SectionTitleComponent } from './components/section-title/section-title.component';

@NgModule({
    declarations: [...PORTFOLIO_CONTAINERS, ...PORTFOLIO_COMPONENTS, PortfolioComponent, ReferencesComponent, SectionTitleComponent],
    imports: [CommonModule, PortfolioRoutingModule, ...SHARED_MODULES],
    exports: [...PORTFOLIO_CONTAINERS, ...PORTFOLIO_COMPONENTS],
})
export class PortfolioModule {}
