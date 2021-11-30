import React from 'react';
import ErrorBoundary from '../ErrorBoundary';

const Footer = React.lazy(() => import(/* webpackChunkName:"Footer" */ './Footer'));
const Header = React.lazy(() => import(/* webpackChunkName:"Header" */ './Header'));

export const Layout: React.FC<WrappedProps> = ({ children }) => (
  <>
    <ErrorBoundary.Suspense>
      <Header />
    </ErrorBoundary.Suspense>
    <ErrorBoundary.Suspense>{children}</ErrorBoundary.Suspense>
    <ErrorBoundary.Suspense>
      <Footer />
    </ErrorBoundary.Suspense>
  </>
);
