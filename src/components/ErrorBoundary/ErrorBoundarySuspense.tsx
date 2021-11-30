import React, { Suspense } from 'react';
import { Loading } from '../Loading/Loading';
import { ErrorBoundary } from './ErrorBoundary';

export const ErrorBoundarySuspense: React.FC<WrappedProps> = ({ children }) => (
  <ErrorBoundary>
    <Suspense fallback={<Loading />}>{children}</Suspense>
  </ErrorBoundary>
);
