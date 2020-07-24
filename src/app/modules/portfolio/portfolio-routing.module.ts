import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './containers/portfolio/portfolio.component';
import { ShowcaseComponent } from './containers/showcase/showcase.component';
import { SkillsetComponent, AboutComponent, ProjectsComponent, ReferencesComponent } from './containers';
const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        component: PortfolioComponent,
        children: [{ path: '', component: ShowcaseComponent }],
    },
    { path: 'about', component: AboutComponent },
    { path: 'skillset', component: SkillsetComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'reviews', component: ReferencesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],

    exports: [RouterModule],
})
export class PortfolioRoutingModule {}
