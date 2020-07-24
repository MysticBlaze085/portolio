import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
    {
        path: 'portfolio',
        loadChildren: () => import('./modules/portfolio/portfolio.module').then((m) => m.PortfolioModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
