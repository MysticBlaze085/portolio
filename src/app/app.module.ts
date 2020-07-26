import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollSpyDirective } from './directives/scroll-spy.directive';
import { SharedModule } from './modules/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialsModule } from './modules/shared';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent, ScrollSpyDirective],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        NgbModule,
        MaterialsModule,
        MatNativeDateModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
