import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutContainer } from '../LayoutContainer';

const Header: React.FC = () => (
  <LayoutContainer role="banner" Tag="header">
    <Link to="/">Logo</Link>
  </LayoutContainer>
);

export default Header;
