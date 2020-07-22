import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollSpyDirective } from './directives/scroll-spy.directive';
import { SharedModule } from './modules/shared/shared.module';
import { NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [AppComponent, ScrollSpyDirective],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule],
    providers: [NgbTooltipConfig],
    bootstrap: [AppComponent],
})
export class AppModule {}
