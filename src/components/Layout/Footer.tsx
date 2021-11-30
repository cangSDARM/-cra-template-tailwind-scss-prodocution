import React from 'react';
import { app } from '../../common/constants';
import { LayoutContainer } from '../LayoutContainer';

const Footer: React.FC = () => (
  <LayoutContainer role="contentinfo" Tag="footer">
    <p>Copyright &#xA9; {`${new Date().getFullYear()} ${app.name}`}</p>
  </LayoutContainer>
);

export default Footer;
