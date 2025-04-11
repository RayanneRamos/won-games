import { render, screen } from '@testing-library/react'

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

    expect(price).not.toHaveStyle({ TextDecoder: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard promotionalPrice="R$ 15,00" {...props} />)

    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      TextDecoder: 'line-through'
    })
    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      TextDecoder: 'line-through'
    })
  })
})
