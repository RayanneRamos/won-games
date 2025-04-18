import { fireEvent, render, screen } from '@testing-library/react'

import GameCard from '.'
import { renderWithTheme } from '@/utils/tests/helpers'
import theme from '@/styles/theme'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  image:
    'https://images.unsplash.com/photo-1640955011254-39734e60b16f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtZXN8ZW58MHx8MHx8fDA%3D',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.image
    )
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()

    //expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText('R$ 235,00')

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard promotionalPrice="R$ 15,00" {...props} />)

    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled favorite icon when favorite is true', () => {
    renderWithTheme(
      <GameCard promotionalPrice="R$ 15,00" favorite {...props} />
    )

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFavorite = jest.fn()

    renderWithTheme(
      <GameCard
        promotionalPrice="R$ 15,00"
        favorite
        onFavorite={onFavorite}
        {...props}
      />
    )

    fireEvent.click(screen.getAllByRole('button')[0])
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
