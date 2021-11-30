import React, { Suspense } from 'react';
import { Routes as RoutesRRD, Route } from 'react-router-dom';
import { Loading } from '../components/Loading/Loading';
import routes from './map';

const p = [...routes];

const Routes: React.FC = () => (
  <RoutesRRD>
    {p.map(({ path, element: Element }) => (
      <Route
        path={path}
        key={path}
        element={
          <Suspense fallback={<Loading />}>
            <Element />
          </Suspense>
        }
      />
    ))}
  </RoutesRRD>
);

export default Routes;
