import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHARED_MODULES } from './shared';
import { MODULES_COMPONENTS, MODULES_CONTAINERS } from '.';
import { ShowcaseComponent } from './showcase/showcase.component';
import { AboutComponent } from './about/about.component';
import { SkillsetComponent } from './skillset/skillset.component';

@NgModule({
    declarations: [...MODULES_COMPONENTS, ...MODULES_CONTAINERS, ShowcaseComponent, AboutComponent, SkillsetComponent],
    imports: [CommonModule, ...SHARED_MODULES],
    exports: [...MODULES_COMPONENTS, ...MODULES_CONTAINERS],
})
export class ModulesModule {}
