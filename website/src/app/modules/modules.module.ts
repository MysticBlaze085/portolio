import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { SHARED_COMPONENTS } from './shared';

@NgModule({
    declarations: [NavigationComponent],
    imports: [CommonModule, ...SHARED_COMPONENTS],
    exports: [NavigationComponent, ...SHARED_COMPONENTS],
})
export class ModulesModule {}
