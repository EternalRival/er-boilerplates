import { Route } from './enums/route.enum';

import type { RouteObject } from './types/route-object.type';

export const routes: RouteObject[] = [
  { route: Route.HOME, name: 'Home' },
  { route: Route.PAGE_01, name: 'Page 01' },
  { route: Route.PAGE_02, name: 'Page 02' },
];
