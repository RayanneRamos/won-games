import { render, screen } from '@testing-library/react'

import Menu from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })

  it('should render the logo', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/won games/i)).toBeInTheDocument()
  })
})
