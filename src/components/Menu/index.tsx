import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './styles'
import Logo from '../Logo'
import { useState } from 'react'

const Menu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <S.Wrapper>
      <S.IconWrapper onClick={() => setIsOpenMenu(true)}>
        <MenuIcon aria-label="open menu" />
      </S.IconWrapper>
      <S.LogoWrapper>
        <Logo $hideOnMobile={true} aria-label="won games" />
      </S.LogoWrapper>
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="open shopping cart" />
        </S.IconWrapper>
      </S.MenuGroup>
      <S.MenuFull aria-hidden={!isOpenMenu} isOpenMenu={isOpenMenu}>
        <CloseIcon
          aria-label="close menu"
          onClick={() => setIsOpenMenu(false)}
        />
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
