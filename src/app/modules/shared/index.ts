import { MaterialsModule } from './components/materials/materials.module';
import { NavigationComponent } from './containers/navigation/navigation.component';
import { MobileNavComponent } from './containers/mobile-nav/mobile-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const SHARED_MODULES = [MaterialsModule, FormsModule, ReactiveFormsModule];
export const SHARED_COMPONENTS = [];
export const SHARED_CONTAINERS = [NavigationComponent, MobileNavComponent];

export * from './components/materials/materials.module';
export * from './containers/navigation/navigation.component';
export * from './containers/mobile-nav/mobile-nav.component';
