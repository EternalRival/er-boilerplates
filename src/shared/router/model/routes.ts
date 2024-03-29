import { RouteName } from './enums/route-name.enum';
import { Route } from './enums/route.enum';

const routes = new Map([
  [RouteName.HOME, Route.HOME],
  [RouteName.PAGE_01, Route.PAGE_01],
  [RouteName.PAGE_02, Route.PAGE_02],
]);

export type Routes = typeof routes;

export function getRoutes(): Routes {
  return new Map(routes);
}

export function getFilteredRoutes(predicate: (name: RouteName, route: Route) => boolean): Routes {
  const map = new Map<RouteName, Route>();

  routes.forEach((value, key) => {
    if (predicate(key, value)) {
      map.set(key, value);
    }
  });

  return map;
}
