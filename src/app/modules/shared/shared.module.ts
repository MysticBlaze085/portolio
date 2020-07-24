import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHARED_COMPONENTS, SHARED_CONTAINERS, SHARED_MODULES } from './index';
import { SocialComponent } from './containers/social/social.component';

@NgModule({
    declarations: [...SHARED_COMPONENTS, ...SHARED_CONTAINERS, SocialComponent],
    imports: [CommonModule, ...SHARED_MODULES],
    exports: [...SHARED_COMPONENTS, ...SHARED_CONTAINERS],
})
export class SharedModule {}
