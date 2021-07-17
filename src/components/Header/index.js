import React from 'react';
// routing
import { Link } from 'react-router-dom';
// images
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
// styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <LogoImg src={RMDBLogo} alt='rmdb-logo' />
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt='tmbdb-logo' />
    </Content>
  </Wrapper>
);

export default Header;
