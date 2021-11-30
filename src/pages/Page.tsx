import React, { PropsWithChildren, ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { app } from '../common/constants';
import { LayoutContainer, LayoutContainerProps } from '../components/LayoutContainer';

interface PageProps extends LayoutContainerProps {
  description: string;
  elements?: ReactNode;
  keywords?: string;
  title: string;
}

const Page: React.FC<PropsWithChildren<PageProps>> = ({
  children,
  description,
  elements,
  isFluid,
  keywords,
  title,
}) => (
  <HelmetProvider>
    <Helmet defaultTitle={app.name} titleTemplate={`%s | ${app.name}`}>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <title>{title}</title>
      {elements}
    </Helmet>
    <LayoutContainer isFluid={isFluid} role="main" Tag="main">
      {children}
    </LayoutContainer>
  </HelmetProvider>
);

export default Page;
