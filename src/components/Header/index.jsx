import React from 'react'
import RMDBlogo from '../../images/react-movie-logo.svg'
import TMDBlogo from '../../images/tmdb_logo.svg'

import {Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles'

const Header = () => {
  return (
    <Wrapper>
        <Content>
            <LogoImg src={RMDBlogo} alt="rbdm"/>
            <TMDBLogoImg src={TMDBlogo} alt="tmdb"/>
        </Content>
    </Wrapper>
  )
}

export default Header;