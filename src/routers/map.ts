import React from 'react';
import { injectReducer } from '../store';

type Routes = {
  path: string;
  element: ReturnType<typeof React.lazy>;
}[];

const routes: Routes = [
  {
    path: '/',
    element: React.lazy(() =>
      import('../pages/Home/store').then((modules) => {
        injectReducer({
          counter: modules.counterSlice.reducer,
        });
        return import(/* webpackChunkName:"Home" */ '../pages/Home');
      })
    ),
  },
  {
    path: '*',
    element: React.lazy(
      () => import(/* webpackChunkName:"PageNotFound" */ '../pages/PageNotFound')
    ),
  },
];

export default routes;
