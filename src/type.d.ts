import { PropsWithChildren } from 'react';

// https://stackoverflow.com/questions/59728371/typescript-d-ts-file-not-recognized/59728984#59728984
declare global {
  /** Allow wrap any children */
  type WrappedProps = PropsWithChildren<Record<string, unknown>>;
}
