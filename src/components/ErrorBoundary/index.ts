import { ErrorBoundary } from './ErrorBoundary';
import { ErrorBoundarySuspense } from './ErrorBoundarySuspense';

const ErrorHandle = { Suspense: ErrorBoundarySuspense, Normal: ErrorBoundary };
export default ErrorHandle;
