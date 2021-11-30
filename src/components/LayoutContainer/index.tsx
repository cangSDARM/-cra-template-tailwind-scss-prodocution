import React, { PropsWithChildren } from 'react';
import classes from './index.module.scss';

export interface LayoutContainerProps {
  className?: string | undefined;
  isFluid?: boolean;
  role?: string;
  Tag?: keyof JSX.IntrinsicElements;
}

export const LayoutContainer: React.FC<PropsWithChildren<LayoutContainerProps>> = ({
  children,
  className = '',
  isFluid = true,
  role,
  Tag = 'div',
}) => (
  <Tag className={`${classes.root} ${className}`} role={role}>
    <div className={isFluid ? classes.fluid : undefined}>{children}</div>
  </Tag>
);
