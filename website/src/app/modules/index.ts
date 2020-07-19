import { MobileNavComponent } from './navigation/mobile-nav/mobile-nav.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { AboutComponent } from './about/about.component';
export const MODULES_COMPONENTS = [MobileNavComponent];
export const MODULES_CONTAINERS = [NavigationComponent, ShowcaseComponent, AboutComponent];

export * from './navigation/mobile-nav/mobile-nav.component';
export * from './navigation/navigation.component';
export * from './showcase/showcase.component';
export * from './about/about.component';
