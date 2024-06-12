import {RouteName} from './RouteName';

export type AppStackParams = {
  [RouteName.HomeScreen]: undefined;
  [RouteName.ProductDetail]: {
    id: number;
  };
};
