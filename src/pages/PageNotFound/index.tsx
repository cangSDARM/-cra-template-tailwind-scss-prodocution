import React from 'react';
import Page from '../Page';

const PageNotFound: React.FC = () => {
  const pageNotFoundText = '404 - Page Not Found';

  return (
    <Page description={pageNotFoundText} keywords={pageNotFoundText} title={pageNotFoundText}>
      <p>{pageNotFoundText}</p>
    </Page>
  );
};

export default PageNotFound;
