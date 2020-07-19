import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHARED_COMPONENTS, SHARED_CONTAINERS, SHARED_MODULES } from './index';

@NgModule({
    declarations: [...SHARED_COMPONENTS, ...SHARED_CONTAINERS],
    imports: [CommonModule, ...SHARED_MODULES],
    exports: [...SHARED_COMPONENTS, ...SHARED_CONTAINERS],
})
export class SharedModule {}
