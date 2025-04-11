import * as S from './styles'
import Button from '../Button'
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from 'styled-icons/material-outlined'

export type GameCardProps = {
  title: string
  developer: string
  image: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFavorite?: () => void
}

const GameCard = ({
  title,
  developer,
  image,
  price,
  promotionalPrice,
  favorite = false,
  onFavorite
}: GameCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={image} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavoriteButton onClick={onFavorite} role="button">
        {favorite ? (
          <Favorite aria-label="Remove from wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to wishlist" />
        )}
      </S.FavoriteButton>
      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
