import { RouteName } from './enums/route-name.enum';
import { Route } from './enums/route.enum';

import type { RouteObject } from './types/route-object.type';

export const routes: RouteObject[] = [
  { route: Route.HOME, name: RouteName.HOME },
  { route: Route.PAGE_01, name: RouteName.PAGE_01 },
  { route: Route.PAGE_02, name: RouteName.PAGE_02 },
];
